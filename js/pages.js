/* Pages : accueil, liste des guides, thèmes, fiche guide, suivi, glossaire, à propos. */
(function () {
  const e = P.e;
  const guidesDuTheme = id => P.GUIDES.filter(g => g.theme === id);
  const compte = (liste) => (liste || []).length;

  P.POUR = { lyceen: "Lycéen·ne", etudiant: "Étudiant·e", alternant: "Alternant·e", salarie: "Salarié·e", independant: "Indépendant·e", chomeur: "En recherche d'emploi", etranger: "Étudiant·e étranger·ère", mineur: "Mineur·e" };

  const CHIFFRES = [
    ["4,50 €", "par heure : la gratification minimale d'un stage de plus de 2 mois en 2026.", "stage"],
    ["83 600 €", "plafond annuel de chiffre d'affaires en micro-entreprise (services). 203 100 € pour la vente.", "cotisations-micro"],
    ["25 %", "d'exonération de cotisations avec l'Acre, pour les créations depuis le 1er juillet 2026 (c'était 50 %).", "acre-2026"],
    ["5 405 €", "de salaires de job étudiant non imposables (revenus 2025, jusqu'à 25 ans).", "job-etudiant-impots"],
    ["12 séances", "gratuites avec un psychologue pour les étudiant·es (Santé Psy Étudiant).", "psy-sante-mentale"],
    ["13 mois", "pour contester un paiement par carte que tu n'as pas autorisé.", "fraude-carte"],
    ["86 €", "le passeport d'un majeur. La carte d'identité est gratuite, sauf perte ou vol (25 €).", "carte-identite-passeport"],
    ["130 jours", "travaillés (ou 910 h) sur les 24 derniers mois pour ouvrir des droits au chômage.", "chomage-are"]
  ];

  /* ——— Briques */
  const meta = g => `<div class="meta"><span>${e(g.temps)}</span><span>${e(g.cout)}</span></div>`;
  P.carteGuide = function (g, avecAvancee) {
    const t = P.themeParId[g.theme], a = P.avancement(g);
    return `<a class="guide-carte" href="#guide-${g.id}" style="--c:${t.c}">
      <span class="surtitre">${e(t.nom)}</span>
      <h3>${e(g.titre)}</h3>
      <p>${e(g.accroche)}</p>
      ${meta(g)}
      ${avecAvancee !== false && a.fait ? `<div class="avancee" role="img" aria-label="${a.fait} étapes sur ${a.total}"><i style="width:${a.pct}%"></i></div>` : ""}
    </a>`;
  };
  P.tete = (titre, chapo, couleur, surtitre) => `<section class="tete-theme" style="--c:${couleur || "var(--accent)"}"><div class="barre-theme"></div>${surtitre ? `<p class="surtitre">${e(surtitre)}</p>` : ""}<h1>${titre}</h1>${chapo ? `<p class="chapo">${chapo}</p>` : ""}</section>`;

  /* Résultats de recherche (accueil et page Guides) */
  P.htmlRecherche = function (q) {
    const r = P.chercher(q);
    const nb = r.guides.length + r.documents.length + r.lettres.length + r.contacts.length + r.aides.length + r.vies.length + r.termes.length;
    if (!nb) return `<p class="vide">Rien trouvé pour « ${e(q)} ». Essaie un mot plus simple (« impôts », « logement », « permis »…).</p>`;
    const ligne = (href, titre, sous, type) => `<a class="res-ligne" href="${href}"><span class="res-type">${type}</span><span><strong>${e(titre)}</strong><br><span class="petit">${e(sous || "")}</span></span></a>`;
    return `<div class="res-liste">
      ${r.vies.map(v => ligne("#vie-" + v.id, v.nom, v.accroche, "Situation")).join("")}
      ${r.guides.map(g => ligne("#guide-" + g.id, g.titre, g.accroche, "Guide")).join("")}
      ${r.documents.map(d => ligne("#documents", d.nom, d.quoi, "Papier")).join("")}
      ${r.lettres.map(l => ligne("#lettre-" + l.id, l.titre, l.quand, "Lettre")).join("")}
      ${r.contacts.map(c => ligne("#contacts", c.nom, c.pour, "Organisme")).join("")}
      ${r.aides.map(a => ligne("#aides", a.nom, a.pour, "Aide")).join("")}
      ${r.termes.map(t => ligne("#glossaire-" + t.id, t.terme, t.def, "Mot")).join("")}
    </div>`;
  };

  /* ——— Accueil */
  P.pages.accueil = function (el) {
    const nbGuides = compte(P.GUIDES), nbDocs = compte(P.DOCUMENTS), nbLettres = compte(P.LETTRES);
    const todo = P.etat.todo;
    el.innerHTML = `
      <section class="plein hero"><div class="cadre">
        <p class="surtitre">Impôts · Travail · Logement · Santé · Argent · Papiers · Droits</p>
        <h1>L'admin, <em>enfin</em> claire.</h1>
        <p class="chapo">Tout ce qu'on ne t'a jamais appris sur la paperasse : des guides pas à pas, des lettres toutes prêtes et les chiffres officiels de 2026. Gratuit, sans compte.</p>
        <div class="recherche">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
          <label class="sr" for="q">Rechercher</label>
          <input id="q" type="search" placeholder="Acre, APL, passeport, préavis, stage…" autocomplete="off">
        </div>
        <div class="resultats" id="resultats" aria-live="polite"></div>
        <div class="actions"><a class="btn" href="#todo">${todo ? "Revoir ma to-do" : "Faire ma to-do admin · 2 min"}</a><a class="btn btn-ligne" href="#vie">Que t'arrive-t-il ?</a></div>
        <div class="hero-chiffres">
          <div><strong>${nbGuides}</strong><span>guides pas à pas</span></div>
          <div><strong>${nbDocs}</strong><span>papiers expliqués</span></div>
          <div><strong>${nbLettres}</strong><span>lettres types</span></div>
        </div>
      </div></section>

      <section>
        <div class="titre-section"><h2>Que t'arrive-t-il ?</h2><a class="lien-fleche" href="#vie">Toutes les situations</a></div>
        <div class="vies">${P.EVENEMENTS.slice(0, 12).map(v => `<a class="vie-carte" href="#vie-${v.id}"><strong>${e(v.nom)}</strong><span>${e(v.accroche)}</span><i aria-hidden="true">→</i></a>`).join("")}</div>
      </section>

      <section>
        <div class="titre-section"><h2>Les guides</h2><a class="lien-fleche" href="#guides">Les ${nbGuides} guides</a></div>
        <div class="tuiles" aria-label="Les huit thèmes">
        ${P.THEMES.map(t => `<a class="tuile" href="#theme-${t.id}" style="--c:${t.c}">
          <span class="fond-chiffre" aria-hidden="true">${guidesDuTheme(t.id).length}</span>
          <div><h2>${e(t.nom)}</h2><p>${e(t.desc)}</p></div>
          <div class="bas"><span>${guidesDuTheme(t.id).length} guides</span><span class="fleche" aria-hidden="true">→</span></div>
        </a>`).join("")}
        </div>
      </section>

      <section>
        <div class="titre-section"><h2>Les outils</h2><a class="lien-fleche" href="#outils">Tous les outils</a></div>
        <div class="outils-ligne">
          <a class="outil-carte" href="#lettres"><strong>Lettres types</strong><span>Préavis, résiliation, contestation… à copier.</span><b>${nbLettres}</b></a>
          <a class="outil-carte" href="#documents"><strong>Où trouver ce papier</strong><span>Acte de naissance, avis d'impôt, attestation de droits…</span><b>${nbDocs}</b></a>
          <a class="outil-carte" href="#contacts"><strong>Qui contacter</strong><span>Le bon organisme pour chaque problème.</span><b>${compte(P.CONTACTS)}</b></a>
          <a class="outil-carte" href="#calendrier"><strong>Calendrier admin</strong><span>Ce qu'il faut faire, mois par mois.</span><b>12</b></a>
          <a class="outil-carte" href="#outils"><strong>Calculs rapides</strong><span>Micro-entreprise, job imposable, stage, préavis.</span><b>4</b></a>
        </div>
      </section>

      <section>
        <div class="titre-section"><h2>Les aides pour les jeunes</h2><a class="lien-fleche" href="#aides">Les ${compte(P.AIDES)} aides</a></div>
        <div class="liste-guides">${P.AIDES.slice(0, 6).map(a => P.carteAide(a)).join("")}</div>
      </section>

      <section>
        <div class="titre-section"><h2>Les chiffres 2026</h2><span class="petit">Revalorisés chaque année. Source et date sur chaque guide.</span></div>
        <div class="defile">${CHIFFRES.map(([n, txt, id]) => `<a class="chiffre-carte" href="#guide-${id}"><span class="chiffre">${e(n)}</span><p>${e(txt)}</p></a>`).join("")}</div>
      </section>

      <section class="urgences">
        <div><p class="surtitre">En cas de besoin</p><h2>Numéros utiles</h2></div>
        <ul>${P.NUMEROS.filter(n => n.haut).map(n => `<li><b>${e(n.n)}</b><span>${e(n.nom)}</span></li>`).join("")}</ul>
        <a class="lien-fleche" href="#numeros">Tous les numéros</a>
      </section>

      <section class="plein appel"><div class="cadre">
        <p class="surtitre">Ta to-do admin</p>
        <h2>Réponds à 6 questions, on te dit quoi faire.</h2>
        <div class="actions"><a class="btn" href="#todo">${todo ? "Revoir ma to-do" : "Commencer"}</a><a class="btn btn-ligne" href="#guides">Parcourir les guides</a></div>
      </div></section>`;

    const q = P.$("#q", el), res = P.$("#resultats", el);
    q.addEventListener("input", () => {
      if (q.value.trim().length < 2) { res.innerHTML = ""; return; }
      res.innerHTML = P.htmlRecherche(q.value);
    });
  };

  /* ——— Tous les guides : filtres par thème et par profil */
  P.pages.guides = function (el) {
    const f = { theme: null, pour: null, q: "" };
    const dessiner = () => {
      const ids = P.chercher(f.q).guides.map(g => g.id);
      const liste = P.GUIDES.filter(g => (!f.theme || g.theme === f.theme) && (!f.pour || (g.pour || []).includes(f.pour)) && (!f.q.trim() || ids.includes(g.id)));
      P.$("#liste-g", el).innerHTML = liste.length
        ? (f.theme ? "" : P.THEMES.map(t => { const l = liste.filter(g => g.theme === t.id); return l.length ? `<div class="groupe-theme"><h2 style="--c:${t.c}"><i></i>${e(t.nom)}</h2><div class="liste-guides">${l.map(g => P.carteGuide(g)).join("")}</div></div>` : ""; }).join(""))
          + (f.theme ? `<div class="liste-guides">${liste.map(g => P.carteGuide(g)).join("")}</div>` : "")
        : `<p class="vide">Aucun guide ne correspond. Enlève un filtre ou change tes mots.</p>`;
      P.$("#nb-g", el).textContent = liste.length + " guide" + (liste.length > 1 ? "s" : "");
      P.$$("[data-ft]", el).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.ft === f.theme)));
      P.$$("[data-fp]", el).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.fp === f.pour)));
    };
    el.innerHTML = `
      ${P.tete("Tous les guides", `${compte(P.GUIDES)} guides pas à pas, rangés par thème. Filtre selon ta situation.`)}
      <section class="filtres-g">
        <div class="recherche recherche-claire"><label class="sr" for="qg">Chercher un guide</label><input id="qg" type="search" placeholder="Chercher un guide : impôts, préavis, stage…" autocomplete="off"></div>
        <div class="chips" role="group" aria-label="Thème">${P.THEMES.map(t => `<button type="button" class="chip" data-ft="${t.id}" aria-pressed="false">${e(t.nom)}</button>`).join("")}</div>
        <div class="chips" role="group" aria-label="Pour qui">${Object.entries(P.POUR).map(([k, v]) => `<button type="button" class="chip chip-fin" data-fp="${k}" aria-pressed="false">${e(v)}</button>`).join("")}</div>
        <p class="petit" id="nb-g" aria-live="polite"></p>
      </section>
      <div id="liste-g" class="liste-groupes"></div>`;
    el.onclick = ev => {
      const t = ev.target.closest("[data-ft]"), p = ev.target.closest("[data-fp]");
      if (t) f.theme = f.theme === t.dataset.ft ? null : t.dataset.ft;
      else if (p) f.pour = f.pour === p.dataset.fp ? null : p.dataset.fp;
      else return;
      dessiner();
    };
    el.oninput = ev => { if (ev.target.id === "qg") { f.q = ev.target.value; dessiner(); } };
    dessiner();
  };

  /* ——— Page d'un thème */
  P.pages.theme = function (el, id) {
    const t = P.themeParId[id];
    if (!t) { location.hash = "#guides"; return; }
    el.innerHTML = `
      ${P.tete(e(t.nom), e(t.desc), t.c)}
      <section class="liste-guides">${guidesDuTheme(id).map(g => P.carteGuide(g)).join("")}</section>
      ${id === "entreprise" ? `<section class="actions"><a class="btn btn-signal" href="#outil-micro">Simuler mes cotisations 2026</a></section>` : ""}
      ${id === "impots" ? `<section class="actions"><a class="btn btn-signal" href="#outil-job">Mon job est-il imposable ?</a></section>` : ""}
      ${id === "travail" ? `<section class="actions"><a class="btn btn-signal" href="#outil-stage">Ma gratification de stage</a></section>` : ""}
      ${id === "logement" ? `<section class="actions"><a class="btn btn-signal" href="#outil-preavis">Calculer mon préavis</a></section>` : ""}`;
  };

  /* ——— Fiche guide */
  P.pages.guide = function (el, id) {
    const g = P.guideParId[id];
    if (!g) { location.hash = "#guides"; return; }
    const t = P.themeParId[g.theme];
    const voir = (g.voir || []).map(i => P.guideParId[i]).filter(Boolean);
    const vies = (P.EVENEMENTS || []).filter(v => v.guides.includes(g.id));
    const lettres = (P.LETTRES || []).filter(l => l.guide === g.id);
    const rendreAvancee = () => {
      const a = P.avancement(g);
      return `<p><span class="chiffre">${a.fait}/${a.total}</span> <span class="petit">étapes faites</span></p><div class="avancee"><i style="width:${a.pct}%"></i></div>`;
    };
    el.innerHTML = `
      <div class="guide" style="--c:${t.c}">
        <article class="guide-corps">
          <header class="guide-tete">
            <p class="fil"><a href="#theme-${t.id}">← ${e(t.nom)}</a></p>
            <div class="barre-theme"></div>
            <h1>${e(g.titre).replace(/ :/g, "&nbsp;:")}</h1>
            <p class="chapo">${e(g.accroche)}</p>
            ${meta(g)}
            ${(g.pour || []).length ? `<div class="chips chips-pour">${g.pour.map(k => `<span class="chip chip-fin chip-statique">${e(P.POUR[k] || k)}</span>`).join("")}</div>` : ""}
          </header>
          <section class="enbref"><h2>En bref</h2><ul>${g.enBref.map(x => `<li>${P.mdInline(x)}</li>`).join("")}</ul></section>
          ${g.outil ? `<p class="actions"><a class="btn btn-signal" href="#outil-${g.outil.id}">${e(g.outil.label)}</a></p>` : ""}
          ${lettres.length ? `<p class="actions">${lettres.map(l => `<a class="btn btn-ligne" href="#lettre-${l.id}">Lettre type : ${e(l.titre)}</a>`).join("")}</p>` : ""}
          <section>
            <h2 class="section-titre">Les étapes</h2>
            <ol class="etapes">${g.etapes.map((s, i) => `
              <li class="etape${P.estFait(g.id, i) ? " fait" : ""}" id="e-${i}">
                <input class="coche" type="checkbox" data-i="${i}" ${P.estFait(g.id, i) ? "checked" : ""} aria-label="Étape faite : ${e(s.t)}">
                <div class="etape-corps"><h3>${e(s.t)}</h3>${P.md(s.d)}${s.lien ? `<p><a class="lien-fleche" href="${e(s.lien.url)}"${/^https?:/.test(s.lien.url) ? ' target="_blank" rel="noopener"' : ""}>${e(s.lien.label)}</a></p>` : ""}</div>
              </li>`).join("")}</ol>
          </section>
          ${g.pieges && g.pieges.length ? `<section class="pieges"><h2>À éviter</h2><ul>${g.pieges.map(x => `<li>${P.mdInline(x)}</li>`).join("")}</ul></section>` : ""}
          ${voir.length ? `<section><h2 class="section-titre">Pour aller plus loin</h2><div class="liste-guides">${voir.map(v => P.carteGuide(v, false)).join("")}</div></section>` : ""}
        </article>
        <aside class="lateral" aria-label="Infos pratiques">
          <div class="bloc progression" id="prog">${rendreAvancee()}</div>
          ${g.quand ? `<div class="bloc"><h3>Quand ?</h3><p>${P.mdInline(g.quand)}</p></div>` : ""}
          <div class="bloc"><h3>Liens officiels</h3><ul>${g.liens.map(l => `<li><a class="lien-ext" href="${e(l.url)}" target="_blank" rel="noopener">${e(l.label)}</a></li>`).join("")}</ul></div>
          ${vies.length ? `<div class="bloc"><h3>Fait partie de</h3><ul>${vies.map(v => `<li><a href="#vie-${v.id}">${e(v.nom)}</a></li>`).join("")}</ul></div>` : ""}
          <div class="bloc verif"><strong>Vérifié en ${e(g.verifie || P.VERIFIE)}</strong><span>Sources :</span><ul>${g.sources.map(s => `<li>${e(s)}</li>`).join("")}</ul>
            ${P.CONFIG.depot ? `<span>Une règle a changé, une erreur ? <a href="${e(P.CONFIG.depot)}/issues" target="_blank" rel="noopener">Dis-le-nous</a>.</span>` : ""}</div>
          ${/claude\.ai|claudeusercontent/.test(location.hostname) ? "" : `<button type="button" class="btn btn-ligne" data-imprimer>Imprimer cette fiche</button>`}
        </aside>
      </div>`;
    el.onclick = ev => { if (ev.target.closest("[data-imprimer]")) window.print(); };
    el.onchange = ev => {
      const c = ev.target.closest(".coche"); if (!c) return;
      const i = Number(c.dataset.i);
      P.basculer(g.id, i);
      c.closest(".etape").classList.toggle("fait", P.estFait(g.id, i));
      P.$("#prog", el).innerHTML = rendreAvancee();
      if (P.avancement(g).fait === g.etapes.length) P.toast("Bravo, une démarche de moins ✔");
    };
  };

  /* ——— Suivi */
  P.pages.suivi = function (el) {
    const commences = P.GUIDES.filter(g => P.avancement(g).fait > 0);
    const termines = commences.filter(g => P.avancement(g).fait === g.etapes.length);
    const enCours = commences.filter(g => !termines.includes(g));
    el.innerHTML = `
      ${P.tete("Mes démarches", "Les étapes que tu as cochées dans les guides apparaissent ici. Rien n'est envoyé nulle part : tout reste sur cet appareil.", "var(--accent)", "Sur ton appareil uniquement")}
      ${commences.length ? `
        ${enCours.length ? `<section><h2 class="section-titre">En cours</h2><div class="liste-guides">${enCours.map(g => P.carteGuide(g)).join("")}</div></section>` : ""}
        ${termines.length ? `<section><h2 class="section-titre">Terminées</h2><div class="liste-guides">${termines.map(g => P.carteGuide(g)).join("")}</div></section>` : ""}
        <p class="actions"><button type="button" class="btn btn-ligne" data-effacer>Tout effacer</button></p>`
      : `<p class="vide">Tu n'as encore coché aucune étape. Fais ta to-do admin, ouvre un guide et coche au fur et à mesure.</p><p class="actions"><a class="btn btn-signal" href="#todo">Faire ma to-do</a><a class="btn btn-ligne" href="#guides">Voir les guides</a></p>`}`;
    el.onclick = ev => {
      const b = ev.target.closest("[data-effacer]"); if (!b) return;
      // confirmation dans la page (les boîtes de dialogue du navigateur ne sont pas toujours disponibles)
      if (!b.dataset.sur) { b.dataset.sur = "1"; b.textContent = "Confirmer : tout effacer"; return; }
      P.etat.faits = {}; P.etat.todo = null; P.sauver(); P.pages.suivi(el);
    };
  };

  /* ——— Glossaire */
  P.pages.glossaire = function (el, id) {
    const liste = P.GLOSSAIRE.slice().sort((a, b) => a.terme.localeCompare(b.terme, "fr"));
    el.innerHTML = `
      ${P.tete("Glossaire", `${liste.length} mots qu'on te sort sans jamais les expliquer.`)}
      <dl class="glossaire">${liste.map(t => `<div class="terme" id="glossaire-${t.id}"><dt>${e(t.terme)}</dt><dd>${P.mdInline(t.def)}</dd></div>`).join("")}</dl>`;
    if (id) { const c = document.getElementById("glossaire-" + id); if (c) c.scrollIntoView({ block: "center" }); }
  };

  /* ——— À propos */
  P.pages["a-propos"] = function (el) {
    el.innerHTML = `
      ${P.tete("Sources et limites", "Paperasse explique, il ne remplace ni l'administration ni un professionnel.")}
      <section class="guide-corps">
        <div class="bloc"><h2>D'où viennent les informations ?</h2>
          ${P.md("Chaque fiche est rédigée à partir des pages officielles de [Service-Public.fr](https://www.service-public.gouv.fr), [Service-Public Entreprendre](https://entreprendre.service-public.gouv.fr), [impots.gouv.fr](https://www.impots.gouv.fr), de l'[Urssaf](https://www.urssaf.fr), de la [Caf](https://www.caf.fr), d'[ameli](https://www.ameli.fr), de [France Travail](https://www.francetravail.fr), de l'[ANTS](https://ants.gouv.fr), de l'[Unédic](https://www.unedic.org) et du [Code du travail numérique](https://code.travail.gouv.fr). Les sources exactes et la date de vérification figurent sur chaque fiche.")}</div>
        <div class="bloc"><h2>Ce que tu dois savoir</h2>
          ${P.md("- Les montants et les règles changent souvent, au moins une fois par an (barème, plafonds, taux, Smic, Acre…). Si la date de vérification d'une fiche te paraît ancienne, recoupe avec le site officiel.\n- Une situation particulière (étranger, handicap, parents séparés, activité réglementée, convention collective…) peut changer la règle : les fiches décrivent le cas général.\n- Les calculateurs donnent un ordre de grandeur, pas un montant officiel. Les lettres types sont des modèles à adapter : elles ne remplacent pas l'avis d'un·e juriste.\n- Aucun conseil juridique, fiscal ou comptable personnalisé. Pour un projet d'entreprise, rapproche-toi d'un réseau d'accompagnement gratuit (CCI, CMA, boutique de gestion, Initiative France, PEPITE pour les étudiants). Pour un problème de droit, les points d'accès au droit et les ADIL sont gratuits.")}</div>
        <div class="bloc"><h2>Tes données</h2>
          ${P.md("Il n'y a ni compte ni traceur. Les étapes que tu coches et les réponses de ta to-do restent dans ton navigateur (stockage local) et tu peux tout effacer dans « Mes démarches ». Tu ne devrais **jamais** saisir tes identifiants impots.gouv, ameli ou Caf ailleurs que sur leur site officiel.")}</div>
      </section>`;
  };
})();
