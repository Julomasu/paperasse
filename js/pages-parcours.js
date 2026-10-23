/* Mon parcours : la to-do admin personnalisée (questionnaire → liste ordonnée) et les situations de vie. */
(function () {
  const e = P.e;

  /* ——— To-do : questionnaire */
  const reponses = () => (P.etat.todo && P.etat.todo.rep) || {};
  const tagsDe = rep => {
    const t = new Set(["tous"]);
    P.TODO_QUESTIONS.forEach(q => (rep[q.id] || []).forEach(oid => { const o = q.options.find(x => x.id === oid); if (o) o.tags.forEach(x => t.add(x)); }));
    return t;
  };
  P.calculerTodo = function (rep) {
    const tags = tagsDe(rep);
    return P.GUIDES.filter(g => g.todo && g.todo.si.some(x => tags.has(x)) && !(g.todo.sauf || []).some(x => tags.has(x)))
      .map(g => ({ g, prio: g.todo.prio || 2, pourquoi: g.todo.pourquoi }))
      .sort((a, b) => a.prio - b.prio || P.THEMES.findIndex(t => t.id === a.g.theme) - P.THEMES.findIndex(t => t.id === b.g.theme));
  };
  const fait = gid => !!(P.etat.todo && P.etat.todo.fait && P.etat.todo.fait[gid]);
  const basculerFait = gid => {
    const t = P.etat.todo = P.etat.todo || { rep: {}, fait: {} };
    t.fait = t.fait || {};
    if (t.fait[gid]) delete t.fait[gid]; else t.fait[gid] = 1;
    P.sauver();
  };

  P.pages.todo = function (el) {
    const rep = JSON.parse(JSON.stringify(reponses()));
    let etape = P.etat.todo && P.etat.todo.fini ? P.TODO_QUESTIONS.length : 0;
    const nb = P.TODO_QUESTIONS.length;

    const resultat = () => {
      const liste = P.calculerTodo(rep);
      const faits = liste.filter(x => fait(x.g.id)).length;
      const groupe = (prio, titre, sous) => {
        const l = liste.filter(x => x.prio === prio);
        return l.length ? `<section class="todo-groupe"><h2>${titre}</h2><p class="petit">${sous}</p><ul class="todo-liste">${l.map(({ g, pourquoi }) => {
          const t = P.themeParId[g.theme], a = P.avancement(g);
          return `<li class="todo-item${fait(g.id) ? " fait" : ""}" style="--c:${t.c}">
            <input class="coche" type="checkbox" data-fait="${g.id}" ${fait(g.id) ? "checked" : ""} aria-label="Déjà fait : ${e(g.titre)}">
            <div><a href="#guide-${g.id}"><strong>${e(g.titre)}</strong></a><p class="petit">${e(pourquoi || g.accroche)}</p>
              <div class="meta"><span>${e(t.nom)}</span><span>${e(g.temps)}</span>${a.fait ? `<span>${a.fait}/${a.total} étapes</span>` : ""}</div></div>
          </li>`;
        }).join("")}</ul></section>` : "";
      };
      return `
        ${P.tete("Ta to-do admin", `${liste.length} démarches adaptées à ta situation. Coche celles que tu as déjà faites.`, "var(--accent)")}
        <section class="todo-bilan"><div><span class="chiffre" id="todo-n">${faits}/${liste.length}</span><span class="petit"> déjà faites</span></div><div class="avancee"><i id="todo-barre" style="width:${liste.length ? Math.round(100 * faits / liste.length) : 0}%"></i></div>
          <p class="actions"><button type="button" class="btn btn-ligne" data-refaire>Refaire le questionnaire</button><a class="btn btn-ligne" href="#suivi">Mes démarches</a></p></section>
        ${groupe(1, "À faire en premier", "Ce qui te bloquera ou te coûtera de l'argent si tu attends.")}
        ${groupe(2, "À faire bientôt", "Utile dans les prochains mois, pour être tranquille.")}
        ${groupe(3, "Pour plus tard", "Des démarches liées à tes projets : garde-les sous la main.")}
        ${liste.length ? "" : `<p class="vide">Aucune démarche ne ressort : refais le questionnaire ou parcours les guides.</p>`}`;
    };

    const question = () => {
      const q = P.TODO_QUESTIONS[etape], choisis = rep[q.id] || [];
      return `
        <section class="test-q">
          <div class="progres" role="img" aria-label="Question ${etape + 1} sur ${nb}">${P.TODO_QUESTIONS.map((_, i) => `<i class="${i < etape ? "faite" : i === etape ? "ici" : ""}"></i>`).join("")}</div>
          <p class="surtitre">Question ${etape + 1} sur ${nb}${q.multi ? " · plusieurs réponses possibles" : ""}</p>
          <h1>${e(q.titre)}</h1>
          ${q.aide ? `<p class="chapo">${e(q.aide)}</p>` : ""}
          <div class="options" role="${q.multi ? "group" : "radiogroup"}" aria-label="${e(q.titre)}">${q.options.map(o => `<button type="button" class="option" data-o="${o.id}" aria-pressed="${choisis.includes(o.id)}"><strong>${e(o.label)}</strong>${o.sous ? `<span>${e(o.sous)}</span>` : ""}</button>`).join("")}</div>
          <div class="actions">
            ${etape ? `<button type="button" class="btn btn-ligne" data-prec>Retour</button>` : ""}
            <button type="button" class="btn" data-suiv>${etape === nb - 1 ? "Voir ma to-do" : "Suivant"}</button>
          </div>
        </section>`;
    };

    const dessiner = () => { el.innerHTML = etape >= nb ? resultat() : question(); if (etape < nb) window.scrollTo({ top: 0 }); };

    el.onclick = ev => {
      const o = ev.target.closest("[data-o]");
      if (o) {
        const q = P.TODO_QUESTIONS[etape], liste = rep[q.id] = rep[q.id] || [], id = o.dataset.o;
        if (q.multi) { const k = liste.indexOf(id); if (k < 0) liste.push(id); else liste.splice(k, 1); }
        else { rep[q.id] = [id]; }
        P.$$("[data-o]", el).forEach(b => b.setAttribute("aria-pressed", String((rep[q.id] || []).includes(b.dataset.o))));
        return;
      }
      if (ev.target.closest("[data-suiv]")) {
        etape++;
        if (etape >= nb) { const t = P.etat.todo = P.etat.todo || { rep: {}, fait: {} }; t.rep = rep; t.fini = true; P.sauver(); }
        dessiner(); return;
      }
      if (ev.target.closest("[data-prec]")) { etape = Math.max(0, etape - 1); dessiner(); return; }
      if (ev.target.closest("[data-refaire]")) { etape = 0; if (P.etat.todo) P.etat.todo.fini = false; dessiner(); }
    };
    el.onchange = ev => {
      const c = ev.target.closest("[data-fait]"); if (!c) return;
      basculerFait(c.dataset.fait);
      c.closest(".todo-item").classList.toggle("fait", fait(c.dataset.fait));
      const liste = P.calculerTodo(rep), n = liste.filter(x => fait(x.g.id)).length;
      P.$("#todo-n", el).textContent = n + "/" + liste.length;
      P.$("#todo-barre", el).style.width = (liste.length ? Math.round(100 * n / liste.length) : 0) + "%";
    };
    dessiner();
  };

  /* ——— Partir à l'étranger : choisir sa destination */
  P.pages.destination = function (el, id) {
    const D = P.DESTINATIONS || [];
    const d = D.find(x => x.id === id);
    const choix = D.map(x => `<a class="dest-bouton" href="#destination-${x.id}" aria-current="${x.id === id}"><strong>${e(x.court || x.nom)}</strong><span>${e(x.sous || "")}</span></a>`).join("");
    if (id && !d) { location.hash = "#destination"; return; }
    if (!d) {
      el.innerHTML = `
        ${P.tete("Partir à l'étranger", "Europe, Brexit, vacances-travail, études, stage, frontalier, retour en France : choisis ta destination, on te donne les démarches dans l'ordre.", "var(--t-etranger)")}
        <section><div class="dest-choix">${choix}</div></section>
        <section class="dest-avant">
          <h2 class="section-titre">Dans tous les cas</h2>
          <p>Avant de partir, passe par la <a href="#guide-partir-etranger-checklist">check-list complète</a> : projet, papiers, santé, banque, impôts, inscription au registre des Français établis hors de France.</p>
          <p class="actions"><a class="btn btn-signal" href="#guide-partir-etranger-checklist">Ouvrir la check-list</a><a class="btn btn-ligne" href="#theme-etranger">Tous les guides « À l'étranger »</a></p>
        </section>`;
      return;
    }
    const guides = d.guides.map(i => P.guideParId[i]).filter(Boolean);
    const bloc = (titre, l) => l && l.length ? `<div class="dest-bloc"><h3>${titre}</h3><ul>${l.map(x => `<li>${P.md(x).replace(/^<p>|<\/p>$/g, "")}</li>`).join("")}</ul></div>` : "";
    el.innerHTML = `
      <p class="fil"><a href="#destination">← Toutes les destinations</a></p>
      ${P.tete(e(d.nom), e(d.accroche), "var(--t-etranger)")}
      <section class="dest-fiche">
        <div class="dest-choix">${choix}</div>
        <div class="dest-bloc"><h3>L'essentiel</h3><ul>${d.essentiel.map(x => `<li>${P.md(x).replace(/^<p>|<\/p>$/g, "")}</li>`).join("")}</ul></div>
        <div class="dest-grille">${bloc("Travailler", d.travail)}${bloc("Étudier ou faire un stage", d.etudes)}${bloc("Santé et Sécu", d.sante)}${bloc("Impôts", d.impots)}</div>
      </section>
      <section>
        <h2 class="section-titre">Les guides à suivre</h2>
        <ol class="chemin">${guides.map(g => { const t = P.themeParId[g.theme], a = P.avancement(g); return `<li style="--c:${t.c}"><a href="#guide-${g.id}"><span class="surtitre">${e(t.nom)} · ${e(g.temps)}</span><strong>${e(g.titre)}</strong><span class="petit">${e(g.accroche)}</span>${a.fait ? `<div class="avancee"><i style="width:${a.pct}%"></i></div>` : ""}</a></li>`; }).join("")}</ol>
      </section>
      <section><h2 class="section-titre">Sites officiels</h2><ul class="liste-simple">${d.liens.map(l => `<li><a class="lien-fleche" href="${e(l.url)}" target="_blank" rel="noopener">${e(l.label)}</a></li>`).join("")}</ul></section>`;
  };

  /* ——— Situations de vie */
  P.pages.vie = function (el, id) {
    if (!id) {
      el.innerHTML = `
        ${P.tete("Que t'arrive-t-il ?", "Choisis ta situation : on te donne les démarches dans l'ordre, avec les papiers à préparer.")}
        <div class="vies vies-grandes">${P.EVENEMENTS.map(v => `<a class="vie-carte" href="#vie-${v.id}"><strong>${e(v.nom)}</strong><span>${e(v.accroche)}</span><em>${v.guides.length} guides</em><i aria-hidden="true">→</i></a>`).join("")}</div>`;
      return;
    }
    const v = P.EVENEMENTS.find(x => x.id === id);
    if (!v) { location.hash = "#vie"; return; }
    const guides = v.guides.map(i => P.guideParId[i]).filter(Boolean);
    const docs = (v.documents || []).map(i => (P.DOCUMENTS || []).find(d => d.id === i)).filter(Boolean);
    const lettres = (v.lettres || []).map(i => (P.LETTRES || []).find(l => l.id === i)).filter(Boolean);
    const nums = (v.numeros || []).map(n => (P.NUMEROS || []).find(x => x.n === n)).filter(Boolean);
    el.innerHTML = `
      <p class="fil"><a href="#vie">← Toutes les situations</a></p>
      ${P.tete(e(v.nom), e(v.intro || v.accroche))}
      <section>
        <h2 class="section-titre">Les démarches, dans l'ordre</h2>
        <ol class="chemin">${guides.map(g => { const t = P.themeParId[g.theme], a = P.avancement(g); return `<li style="--c:${t.c}"><a href="#guide-${g.id}"><span class="surtitre">${e(t.nom)} · ${e(g.temps)}</span><strong>${e(g.titre)}</strong><span class="petit">${e(g.accroche)}</span>${a.fait ? `<div class="avancee"><i style="width:${a.pct}%"></i></div>` : ""}</a></li>`; }).join("")}</ol>
      </section>
      ${docs.length ? `<section><h2 class="section-titre">Les papiers à préparer</h2><ul class="liste-simple">${docs.map(d => `<li><strong>${e(d.nom)}</strong> <span class="petit">${e(d.quoi)}</span></li>`).join("")}</ul><p><a class="lien-fleche" href="#documents">Où trouver chaque papier</a></p></section>` : ""}
      ${lettres.length ? `<section><h2 class="section-titre">Lettres types utiles</h2><div class="actions">${lettres.map(l => `<a class="btn btn-ligne" href="#lettre-${l.id}">${e(l.titre)}</a>`).join("")}</div></section>` : ""}
      ${nums.length ? `<section class="urgences"><div><h2>Numéros utiles</h2></div><ul>${nums.map(n => `<li><b>${e(n.n)}</b><span>${e(n.nom)}</span></li>`).join("")}</ul></section>` : ""}`;
  };
})();
