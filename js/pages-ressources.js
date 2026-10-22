/* Outils pratiques et repères : lettres types, papiers, organismes, calendrier, numéros utiles, aides, vrai ou faux. */
(function () {
  const e = P.e;
  const liens = (l) => (l || []).map(x => x.url ? `<a class="lien-ext" href="${e(x.url)}" target="_blank" rel="noopener">${e(x.label)}</a>` : e(x.label)).join(" · ");

  /* ——— Aides (carte utilisée aussi sur l'accueil) */
  P.carteAide = function (a) {
    return `<article class="aide-carte">
      <span class="surtitre">${e(a.type)}</span>
      <h3>${e(a.nom)}</h3>
      <p class="aide-montant">${P.mdInline(a.montant)}</p>
      <p class="petit">${e(a.pour)}</p>
      <div class="aide-actions">${a.guide ? `<a class="lien-fleche" href="#guide-${a.guide}">Le guide</a>` : ""}<a class="lien-ext" href="${e(a.lien.url)}" target="_blank" rel="noopener">${e(a.lien.label)}</a></div>
    </article>`;
  };

  P.pages.aides = function (el) {
    const types = [...new Set(P.AIDES.map(a => a.type))];
    const f = { type: null, pour: null };
    const dessiner = () => {
      const l = P.AIDES.filter(a => (!f.type || a.type === f.type) && (!f.pour || (a.tags || []).includes(f.pour)));
      P.$("#liste-a", el).innerHTML = l.length ? `<div class="liste-guides">${l.map(P.carteAide).join("")}</div>` : `<p class="vide">Aucune aide ne correspond à ce filtre.</p>`;
      P.$("#nb-a", el).textContent = l.length + " aide" + (l.length > 1 ? "s" : "");
      P.$$("[data-at]", el).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.at === f.type)));
      P.$$("[data-ap]", el).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.ap === f.pour)));
    };
    el.innerHTML = `
      ${P.tete("Les aides pour les jeunes", "Ce à quoi tu as peut-être droit, et comment le demander. Les montants et conditions changent : le lien officiel fait foi.")}
      <section class="filtres-g">
        <div class="chips" role="group" aria-label="Type d'aide">${types.map(t => `<button type="button" class="chip" data-at="${e(t)}" aria-pressed="false">${e(t)}</button>`).join("")}</div>
        <div class="chips" role="group" aria-label="Pour qui">${Object.entries(P.POUR).map(([k, v]) => `<button type="button" class="chip chip-fin" data-ap="${k}" aria-pressed="false">${e(v)}</button>`).join("")}</div>
        <p class="petit" id="nb-a" aria-live="polite"></p>
      </section>
      <div id="liste-a"></div>
      <p class="petit">Tu veux savoir ce que les aides changent à ton budget d'étudiant ? Essaie <a href="https://julomasu.github.io/aiguillage/#budget" target="_blank" rel="noopener">le simulateur d'Aiguillage</a>.</p>`;
    el.onclick = ev => {
      const t = ev.target.closest("[data-at]"), p = ev.target.closest("[data-ap]");
      if (t) f.type = f.type === t.dataset.at ? null : t.dataset.at;
      else if (p) f.pour = f.pour === p.dataset.ap ? null : p.dataset.ap;
      else return;
      dessiner();
    };
    dessiner();
  };

  /* ——— Où trouver ce papier */
  P.pages.documents = function (el) {
    const cats = [...new Set(P.DOCUMENTS.map(d => d.cat))];
    const f = { cat: null, q: "" };
    const dessiner = () => {
      const n = P.norm(f.q).split(/[^a-z0-9]+/).filter(Boolean);
      const l = P.DOCUMENTS.filter(d => (!f.cat || d.cat === f.cat) && n.every(m => P.norm(d.nom + " " + d.quoi + " " + (d.mots || []).join(" ")).includes(m)));
      P.$("#liste-d", el).innerHTML = l.length ? l.map(d => `
        <article class="doc" id="doc-${d.id}">
          <div><span class="surtitre">${e(d.cat)}</span><h3>${e(d.nom)}</h3><p>${e(d.quoi)}</p>
            ${d.pour ? `<p class="petit"><strong>On te le demande pour :</strong> ${e(d.pour)}</p>` : ""}</div>
          <dl class="doc-infos"><div><dt>Où ?</dt><dd>${liens(d.ou)}</dd></div><div><dt>Délai</dt><dd>${e(d.delai)}</dd></div><div><dt>Coût</dt><dd>${e(d.cout)}</dd></div></dl>
          ${d.guide ? `<a class="lien-fleche" href="#guide-${d.guide}">Le guide</a>` : ""}
        </article>`).join("") : `<p class="vide">Aucun papier ne correspond. Essaie un autre mot.</p>`;
      P.$("#nb-d", el).textContent = l.length + " papier" + (l.length > 1 ? "s" : "");
      P.$$("[data-dc]", el).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.dc === f.cat)));
    };
    el.innerHTML = `
      ${P.tete("Où trouver ce papier ?", "Acte de naissance, avis d'impôt, attestation de droits, justificatif de domicile… où le télécharger, combien de temps, combien ça coûte.")}
      <section class="filtres-g">
        <div class="recherche recherche-claire"><label class="sr" for="qd">Chercher un papier</label><input id="qd" type="search" placeholder="Chercher un papier : acte de naissance, avis d'impôt…" autocomplete="off"></div>
        <div class="chips" role="group" aria-label="Catégorie">${cats.map(c => `<button type="button" class="chip" data-dc="${e(c)}" aria-pressed="false">${e(c)}</button>`).join("")}</div>
        <p class="petit" id="nb-d" aria-live="polite"></p>
      </section>
      <div id="liste-d" class="docs"></div>`;
    el.onclick = ev => { const c = ev.target.closest("[data-dc]"); if (!c) return; f.cat = f.cat === c.dataset.dc ? null : c.dataset.dc; dessiner(); };
    el.oninput = ev => { if (ev.target.id === "qd") { f.q = ev.target.value; dessiner(); } };
    dessiner();
  };

  /* ——— Qui contacter */
  P.pages.contacts = function (el) {
    const carte = c => `<article class="contact" id="contact-${c.id}">
      <h3>${e(c.nom)}</h3><p>${e(c.pour)}</p>
      ${c.quand ? `<p class="petit"><strong>Pour :</strong> ${e(c.quand)}</p>` : ""}
      <p class="contact-canaux">${liens(c.canaux)}</p></article>`;
    el.innerHTML = `
      ${P.tete("Qui contacter ?", "Le bon interlocuteur pour chaque problème, avec ses liens officiels. Choisis ton problème, ou parcours l'annuaire.")}
      <section>
        <h2 class="section-titre">J'ai un problème avec…</h2>
        <div class="chips" role="group" aria-label="Problèmes">${P.PROBLEMES.map((p, i) => `<button type="button" class="chip" data-pb="${i}" aria-pressed="false">${e(p.q)}</button>`).join("")}</div>
        <div id="reponse-pb" class="reponse-pb" aria-live="polite"></div>
      </section>
      <section>
        <h2 class="section-titre">L'annuaire</h2>
        <div class="contacts">${P.CONTACTS.map(carte).join("")}</div>
      </section>
      <section class="encart-france-services"><h2>Besoin d'aide pour une démarche en ligne ?</h2><p>Les espaces <strong>France Services</strong> t'accueillent gratuitement près de chez toi : un·e conseiller·ère t'aide pour les impôts, la Caf, la retraite, les papiers d'identité ou une démarche en ligne.</p><p><a class="lien-ext" href="https://france-services.gouv.fr" target="_blank" rel="noopener">Trouver un espace France Services</a> · <a class="lien-ext" href="https://www.info-jeunes.fr" target="_blank" rel="noopener">Info Jeunes (CIDJ)</a></p></section>`;
    el.onclick = ev => {
      const b = ev.target.closest("[data-pb]"); if (!b) return;
      const p = P.PROBLEMES[Number(b.dataset.pb)], cs = (Array.isArray(p.contact) ? p.contact : [p.contact]).map(id => P.CONTACTS.find(c => c.id === id)).filter(Boolean);
      P.$$("[data-pb]", el).forEach(x => x.setAttribute("aria-pressed", String(x === b)));
      P.$("#reponse-pb", el).innerHTML = `<div class="contacts">${cs.map(carte).join("")}</div>${p.guide ? `<p><a class="lien-fleche" href="#guide-${p.guide}">Le guide : ${e((P.guideParId[p.guide] || {}).titre || "")}</a></p>` : ""}${p.conseil ? `<p class="petit">${P.mdInline(p.conseil)}</p>` : ""}`;
    };
  };

  /* ——— Calendrier admin */
  P.pages.calendrier = function (el) {
    const MOIS = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const courant = new Date().getMonth() + 1;
    el.innerHTML = `
      ${P.tete("Le calendrier admin", "Les rendez-vous de l'année, mois par mois. Les dates exactes changent chaque année : elles sont annoncées sur les sites officiels.")}
      <div class="mois-grille">${P.CALENDRIER.map(m => `
        <section class="mois${m.mois === courant ? " courant" : ""}" id="mois-${m.mois}">
          <h2>${MOIS[m.mois - 1]}${m.mois === courant ? ` <span class="badge">Ce mois-ci</span>` : ""}</h2>
          <ul>${m.items.map(i => `<li>${i.guide ? `<a href="#guide-${i.guide}"><strong>${e(i.t)}</strong></a>` : `<strong>${e(i.t)}</strong>`}${i.note ? `<span class="petit">${e(i.note)}</span>` : ""}</li>`).join("")}</ul>
        </section>`).join("")}</div>
      <p class="petit">Dates générales : vérifie le calendrier de l'année en cours sur impots.gouv.fr, caf.fr, urssaf.fr et messervices.etudiant.gouv.fr.</p>`;
    const c = P.$("#mois-" + courant, el); if (c && matchMedia("(max-width: 760px)").matches) c.scrollIntoView({ block: "start" });
  };

  /* ——— Numéros utiles */
  P.pages.numeros = function (el) {
    const cats = [...new Set(P.NUMEROS.map(n => n.cat))];
    el.innerHTML = `
      ${P.tete("Numéros utiles", "Gratuits sauf mention contraire. En cas de danger immédiat : 112 ou 17.", "var(--t-sante)")}
      ${cats.map(c => `<section><h2 class="section-titre">${e(c)}</h2><ul class="numeros">${P.NUMEROS.filter(n => n.cat === c).map(n => `<li><b>${e(n.n)}</b><div><strong>${e(n.nom)}</strong><span class="petit">${e(n.quand)}</span></div></li>`).join("")}</ul></section>`).join("")}
      <p class="petit">Numéros vérifiés en ${e(P.VERIFIE)}. Un numéro a changé ? Dis-le-nous sur le dépôt du projet.</p>`;
  };

  /* ——— Lettres types */
  const COMMUN = [
    { id: "nom", label: "Ton nom et prénom", ex: "Camille Martin" },
    { id: "adresse", label: "Ton adresse", ex: "12 rue des Lilas, 69003 Lyon" },
    { id: "ville", label: "Ville (pour « Fait à »)", ex: "Lyon" }
  ];
  const aujourdhui = () => new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
  const valeur = (v, id, ex) => (v[id] && v[id].trim()) || `[${ex || id}]`;

  function composer(l, v) {
    const val = new Proxy(v, { get: (o, k) => k in o && String(o[k]).trim() ? o[k] : `[${(l.champs.find(c => c.id === k) || COMMUN.find(c => c.id === k) || { label: k }).label.toLowerCase()}]` });
    const dest = l.destinataire(val).join("\n");
    return [
      `${valeur(v, "nom", "ton nom")}\n${valeur(v, "adresse", "ton adresse")}`,
      "",
      dest,
      "",
      `Fait à ${valeur(v, "ville", "ville")}, le ${aujourdhui()}`,
      "",
      `Objet : ${l.objet(val)}`,
      "",
      l.corps(val),
      "",
      "Cordialement,",
      "",
      valeur(v, "nom", "ton nom")
    ].join("\n");
  }

  P.pages.lettres = function (el) {
    el.innerHTML = `
      ${P.tete("Lettres types", "Des modèles de courrier à remplir et à copier : préavis, résiliation, contestation, demande de remboursement… Rien n'est enregistré : tout reste dans ton navigateur.")}
      <div class="liste-guides">${P.LETTRES.map(l => `<a class="guide-carte" href="#lettre-${l.id}" style="--c:var(--accent)"><span class="surtitre">Lettre type</span><h3>${e(l.titre)}</h3><p>${e(l.quand)}</p></a>`).join("")}</div>
      <p class="petit">Ces modèles sont des points de départ : adapte-les à ta situation. Envoie les courriers importants en lettre recommandée avec accusé de réception (ou par le moyen prévu par l'organisme), et garde une copie.</p>`;
  };

  P.pages.lettre = function (el, id) {
    const l = P.LETTRES.find(x => x.id === id);
    if (!l) { location.hash = "#lettres"; return; }
    const champs = COMMUN.concat(l.champs);
    const v = {};
    el.innerHTML = `
      <p class="fil"><a href="#lettres">← Toutes les lettres</a></p>
      ${P.tete(e(l.titre), e(l.quand))}
      <div class="outil">
        <form class="formulaire" onsubmit="return false">
          ${champs.map(c => `<div class="champ"><label for="c-${c.id}">${e(c.label)}</label>${c.type === "textarea" ? `<textarea id="c-${c.id}" rows="3" placeholder="${e(c.ex || "")}"></textarea>` : `<input id="c-${c.id}" type="${c.type || "text"}" placeholder="${e(c.ex || "")}" autocomplete="off">`}</div>`).join("")}
          <p class="petit">Rien n'est envoyé ni enregistré. Les crochets [ ] indiquent ce qu'il reste à compléter.</p>
        </form>
        <div class="resultat">
          <label for="lettre-texte">Ta lettre (tu peux la modifier ici avant de la copier)</label>
          <textarea id="lettre-texte" class="lettre-texte" rows="22"></textarea>
          <div class="actions"><button type="button" class="btn" data-copier>Copier la lettre</button>${l.guide ? `<a class="btn btn-ligne" href="#guide-${l.guide}">Le guide</a>` : ""}</div>
          ${l.conseils && l.conseils.length ? `<div class="bloc"><h3>Avant d'envoyer</h3><ul>${l.conseils.map(c => `<li>${P.mdInline(c)}</li>`).join("")}</ul></div>` : ""}
        </div>
      </div>`;
    const zone = P.$("#lettre-texte", el);
    let modifie = false;
    const maj = () => { if (!modifie) zone.value = composer(l, v); };
    zone.addEventListener("input", () => { modifie = true; });
    el.oninput = ev => {
      const m = /^c-(.+)$/.exec(ev.target.id || ""); if (!m) return;
      v[m[1]] = ev.target.value; modifie = false; maj();
    };
    el.onclick = ev => { if (ev.target.closest("[data-copier]")) P.copier(zone.value, zone); };
    maj();
  };

  /* ——— Vrai ou faux */
  P.pages.vraifaux = function (el) {
    const sc = P.etat.vf = P.etat.vf || { rep: {} };
    const bilan = () => { const n = Object.keys(sc.rep).length, ok = Object.entries(sc.rep).filter(([i, r]) => P.VRAIFAUX[i] && P.VRAIFAUX[i].vrai === r).length; return `${ok} bonne${ok > 1 ? "s" : ""} réponse${ok > 1 ? "s" : ""} sur ${n} · ${P.VRAIFAUX.length} affirmations`; };
    const carte = (q, i) => {
      const r = sc.rep[i], repondu = r !== undefined;
      return `<article class="vf${repondu ? " repondu" : ""}" data-i="${i}">
        <p class="vf-q">« ${e(q.q)} »</p>
        <div class="vf-btns"><button type="button" class="btn btn-ligne" data-r="true" ${repondu ? "disabled" : ""}>Vrai</button><button type="button" class="btn btn-ligne" data-r="false" ${repondu ? "disabled" : ""}>Faux</button></div>
        ${repondu ? `<div class="vf-rep ${q.vrai === r ? "juste" : "faux"}"><strong>${q.vrai === r ? "Bien vu." : "Pas tout à fait."} C'est ${q.vrai ? "vrai" : "faux"}.</strong><p>${P.mdInline(q.expl)}</p>${q.guide ? `<a class="lien-fleche" href="#guide-${q.guide}">Le guide</a>` : ""}</div>` : ""}
      </article>`;
    };
    el.innerHTML = `
      ${P.tete("Vrai ou faux", "Les idées reçues sur l'administration. Réponds, puis lis l'explication sourcée.")}
      <p class="vf-bilan" id="vf-bilan" aria-live="polite">${bilan()}</p>
      <div class="vf-liste">${P.VRAIFAUX.map(carte).join("")}</div>
      <p class="actions"><button type="button" class="btn btn-ligne" data-reset>Recommencer</button></p>`;
    el.onclick = ev => {
      const b = ev.target.closest("[data-r]"), a = b && b.closest(".vf");
      if (b && a) { sc.rep[a.dataset.i] = b.dataset.r === "true"; P.sauver(); a.outerHTML = carte(P.VRAIFAUX[a.dataset.i], a.dataset.i); P.$("#vf-bilan", el).textContent = bilan(); return; }
      if (ev.target.closest("[data-reset]")) { sc.rep = {}; P.sauver(); P.pages.vraifaux(el); }
    };
  };
})();
