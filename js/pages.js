/* Pages : accueil, thèmes, fiche guide, suivi, glossaire, à propos. */
(function () {
  const e = P.e;
  const guidesDuTheme = id => P.GUIDES.filter(g => g.theme === id);

  const SITUATIONS = [
    { id: "dix-huit", nom: "J'ai 18 ans (ou presque)", guides: ["comptes-a-creer", "recensement-jdc-vote", "secu-18-ans", "carte-identite-passeport", "premiere-declaration", "arnaques"] },
    { id: "job", nom: "J'ai un job étudiant ou d'été", guides: ["job-etudiant-impots", "premiere-declaration", "rattachement", "prime-activite", "prelevement-source"] },
    { id: "alternance", nom: "Je suis en stage ou en alternance", guides: ["apprenti-impots", "prime-activite", "prelevement-source", "apl-etudiant", "rattachement"] },
    { id: "demenage", nom: "Je déménage pour mes études", guides: ["trouver-logement", "bail-etat-lieux", "apl-etudiant", "secu-18-ans", "changement-adresse", "mutuelle-c2s"] },
    { id: "activite", nom: "Je veux lancer une activité", guides: ["choisir-statut", "creer-micro", "acre-2026", "cotisations-micro", "tva-micro", "impots-micro", "pieges-entrepreneur"] },
    { id: "ni-ni", nom: "Je n'ai ni études ni emploi", guides: ["cej", "comptes-a-creer", "mutuelle-c2s", "trouver-logement"] },
    { id: "courrier", nom: "Je reçois un SMS ou un mail louche", guides: ["arnaques", "comptes-a-creer"] }
  ];

  const CHIFFRES = [
    ["83 600 €", "plafond annuel de chiffre d'affaires en micro-entreprise (services). 203 100 € pour la vente.", "cotisations-micro"],
    ["25 %", "d'exonération de cotisations avec l'Acre, pour les créations depuis le 1er juillet 2026 (c'était 50 %).", "acre-2026"],
    ["5 405 €", "de salaires de job étudiant non imposables (revenus 2025, jusqu'à 25 ans).", "job-etudiant-impots"],
    ["21 622 €", "de salaire d'apprenti non imposable (revenus 2025).", "apprenti-impots"],
    ["86 €", "le passeport d'un majeur. La carte d'identité est gratuite, sauf perte ou vol (25 €).", "carte-identite-passeport"],
    ["11 600 €", "de revenu net imposable pour une part : 0 % d'impôt en dessous (barème 2026).", "premiere-declaration"]
  ];

  /* ——— Briques */
  function meta(g) {
    return `<div class="meta"><span>⏱ ${e(g.temps)}</span><span>💶 ${e(g.cout)}</span></div>`;
  }
  function carteGuide(g, avecAvancee) {
    const t = P.themeParId[g.theme], a = P.avancement(g);
    return `<a class="guide-carte" href="#guide-${g.id}" style="--c:${t.c}">
      <span class="surtitre">${t.emoji} ${e(t.nom)}</span>
      <h3>${e(g.titre)}</h3>
      <p>${e(g.accroche)}</p>
      ${meta(g)}
      ${avecAvancee !== false && a.fait ? `<div class="avancee" role="img" aria-label="${a.fait} étapes sur ${a.total}"><i style="width:${a.pct}%"></i></div>` : ""}
    </a>`;
  }

  /* ——— Accueil */
  P.pages.accueil = function (el) {
    const sit = P.etat.situation && SITUATIONS.find(s => s.id === P.etat.situation);
    const rendreSituation = s => s ? `<div class="parcours-sit"><p class="surtitre">Dans cet ordre</p><ol>${s.guides.map(id => P.guideParId[id]).filter(Boolean).map(g => `<li><span><a href="#guide-${g.id}">${e(g.titre)}</a><br><span class="petit">${e(g.accroche)}</span></span></li>`).join("")}</ol></div>` : "";
    el.innerHTML = `
      <section class="hero">
        <p class="surtitre">L'administration, côté jeunes</p>
        <h1>Impôts, entreprise, logement, papiers : <span class="surligne">enfin clair.</span></h1>
        <p class="chapo">Des guides pas à pas, avec les chiffres officiels de 2026, pour tout ce qu'on ne t'a jamais appris. Gratuit, sans compte.</p>
        <div class="recherche">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
          <label class="sr" for="q">Rechercher</label>
          <input id="q" type="search" placeholder="Ex. : Acre, APL, passeport…" autocomplete="off">
        </div>
        <div class="resultats" id="resultats" aria-live="polite"></div>
      </section>

      <section class="situations">
        <h2>Où en es-tu ?</h2>
        <div class="chips" role="group" aria-label="Ta situation">${SITUATIONS.map(s => `<button type="button" class="chip" data-sit="${s.id}" aria-pressed="${P.etat.situation === s.id}">${e(s.nom)}</button>`).join("")}</div>
        <div id="sit-guides">${rendreSituation(sit)}</div>
      </section>

      <section class="themes" aria-label="Les quatre grands thèmes">
        ${P.THEMES.map(t => `<a class="theme-carte" href="#theme-${t.id}" style="--c:${t.c}"><span class="th-ico" aria-hidden="true">${t.emoji}</span><h2>${e(t.nom)}</h2><p>${e(t.desc)}</p><span class="th-n">${guidesDuTheme(t.id).length} guides</span></a>`).join("")}
      </section>

      <section class="situations">
        <h2>Les chiffres 2026 à connaître</h2>
        <div class="themes">${CHIFFRES.map(([n, txt, id]) => `<a class="theme-carte" style="--c:var(--signal)" href="#guide-${id}"><span class="chiffre">${e(n)}</span><p>${e(txt)}</p></a>`).join("")}</div>
        <p class="petit">Ces montants sont revalorisés chaque année. Chaque guide indique sa source officielle et sa date de vérification.</p>
      </section>

      <section class="situations">
        <h2>Des calculs rapides</h2>
        <div class="actions"><a class="btn btn-signal" href="#outil-micro">Combien je paie en micro-entreprise ?</a><a class="btn btn-ligne" href="#outil-job">Mon job est-il imposable ?</a></div>
      </section>`;

    const q = P.$("#q", el), res = P.$("#resultats", el);
    q.addEventListener("input", () => {
      const { guides, termes } = P.chercher(q.value);
      if (q.value.trim().length < 2) { res.innerHTML = ""; return; }
      res.innerHTML = guides.length || termes.length
        ? `<div class="liste-guides">${guides.map(g => carteGuide(g, false)).join("")}</div>${termes.map(t => `<p class="petit"><a href="#glossaire-${t.id}"><strong>${e(t.terme)}</strong></a> : ${e(t.def)}</p>`).join("")}`
        : `<p class="vide">Rien trouvé pour « ${e(q.value)} ». Essaie un mot plus simple (« impôts », « logement », « SIRET »…).</p>`;
    });
    el.onclick = ev => {
      const b = ev.target.closest("[data-sit]"); if (!b) return;
      P.etat.situation = P.etat.situation === b.dataset.sit ? null : b.dataset.sit; P.sauver();
      P.$$("[data-sit]", el).forEach(x => x.setAttribute("aria-pressed", String(x.dataset.sit === P.etat.situation)));
      P.$("#sit-guides", el).innerHTML = rendreSituation(SITUATIONS.find(s => s.id === P.etat.situation));
    };
  };

  /* ——— Page d'un thème */
  P.pages.theme = function (el, id) {
    const t = P.themeParId[id];
    if (!t) { location.hash = "#accueil"; return; }
    el.innerHTML = `
      <section class="tete-theme" style="--c:${t.c}">
        <p class="surtitre">${t.emoji} Thème</p>
        <h1>${e(t.nom)}</h1>
        <p class="chapo">${e(t.desc)}</p>
      </section>
      <section class="liste-guides">${guidesDuTheme(id).map(g => carteGuide(g)).join("")}</section>
      ${id === "entreprise" ? `<section class="actions"><a class="btn btn-signal" href="#outil-micro">Simuler mes cotisations 2026</a></section>` : ""}
      ${id === "impots" ? `<section class="actions"><a class="btn btn-signal" href="#outil-job">Mon job est-il imposable ?</a></section>` : ""}`;
  };

  /* ——— Fiche guide */
  P.pages.guide = function (el, id) {
    const g = P.guideParId[id];
    if (!g) { location.hash = "#accueil"; return; }
    const t = P.themeParId[g.theme];
    const voir = (g.voir || []).map(i => P.guideParId[i]).filter(Boolean);
    const rendreAvancee = () => {
      const a = P.avancement(g);
      return `<p><span class="chiffre">${a.fait}/${a.total}</span> <span class="petit">étapes faites</span></p><div class="avancee"><i style="width:${a.pct}%"></i></div>`;
    };
    el.innerHTML = `
      <div class="guide" style="--c:${t.c}">
        <article class="guide-corps">
          <header class="guide-tete">
            <p class="fil"><a href="#theme-${t.id}">${t.emoji} ${e(t.nom)}</a></p>
            <h1>${e(g.titre)}</h1>
            <p class="chapo">${e(g.accroche)}</p>
            ${meta(g)}
          </header>
          <section class="enbref"><h2>En bref</h2><ul>${g.enBref.map(x => `<li>${P.mdInline(x)}</li>`).join("")}</ul></section>
          ${g.outil ? `<p class="actions"><a class="btn btn-signal" href="#outil-${g.outil.id}">${e(g.outil.label)}</a></p>` : ""}
          <section>
            <h2 style="margin-bottom:12px">Les étapes</h2>
            <ol class="etapes">${g.etapes.map((s, i) => `
              <li class="etape${P.estFait(g.id, i) ? " fait" : ""}" id="e-${i}">
                <input class="coche" type="checkbox" data-i="${i}" ${P.estFait(g.id, i) ? "checked" : ""} aria-label="Étape faite : ${e(s.t)}">
                <div class="etape-corps"><h3>${e(s.t)}</h3>${P.md(s.d)}${s.lien ? `<p><a class="lien-fleche" href="${e(s.lien.url)}" target="_blank" rel="noopener">${e(s.lien.label)}</a></p>` : ""}</div>
              </li>`).join("")}</ol>
          </section>
          ${g.pieges && g.pieges.length ? `<section class="pieges"><h2>Les pièges à éviter</h2><ul>${g.pieges.map(x => `<li>${P.mdInline(x)}</li>`).join("")}</ul></section>` : ""}
          ${voir.length ? `<section><h2 style="margin-bottom:12px">Pour aller plus loin</h2><div class="liste-guides">${voir.map(v => carteGuide(v, false)).join("")}</div></section>` : ""}
        </article>
        <aside class="lateral" aria-label="Infos pratiques">
          <div class="bloc progression" id="prog">${rendreAvancee()}</div>
          <div class="bloc"><h3>Liens officiels</h3><ul>${g.liens.map(l => `<li><a class="lien-ext" href="${e(l.url)}" target="_blank" rel="noopener">${e(l.label)}</a></li>`).join("")}</ul></div>
          <div class="bloc verif"><strong>Vérifié en ${e(g.verifie || P.VERIFIE)}</strong><span>Sources :</span><ul>${g.sources.map(s => `<li>${e(s)}</li>`).join("")}</ul>
            ${P.CONFIG.depot ? `<span>Une règle a changé, une erreur ? <a href="${e(P.CONFIG.depot)}/issues" target="_blank" rel="noopener">Dis-le-nous</a>.</span>` : ""}</div>
          <button type="button" class="btn btn-ligne" data-imprimer>Imprimer cette fiche</button>
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
      <section class="tete-theme" style="--c:var(--signal)">
        <p class="surtitre">Sur ton appareil uniquement</p>
        <h1>Mes démarches</h1>
        <p class="chapo">Les étapes que tu as cochées dans les guides apparaissent ici. Rien n'est envoyé nulle part.</p>
      </section>
      ${commences.length ? `
        ${enCours.length ? `<section><h2 style="margin-bottom:12px">En cours</h2><div class="liste-guides">${enCours.map(g => carteGuide(g)).join("")}</div></section>` : ""}
        ${termines.length ? `<section><h2 style="margin-bottom:12px">Terminées</h2><div class="liste-guides">${termines.map(g => carteGuide(g)).join("")}</div></section>` : ""}
        <p class="actions"><button type="button" class="btn btn-ligne" data-effacer>Tout effacer</button></p>`
      : `<p class="vide">Tu n'as encore coché aucune étape. Choisis ta situation sur l'accueil, ouvre un guide et coche au fur et à mesure.</p><p class="actions"><a class="btn btn-signal" href="#accueil">Commencer</a></p>`}`;
    el.onclick = ev => {
      if (!ev.target.closest("[data-effacer]")) return;
      if (confirm("Effacer toutes les étapes cochées sur cet appareil ?")) { P.etat.faits = {}; P.sauver(); P.pages.suivi(el); }
    };
  };

  /* ——— Glossaire */
  P.pages.glossaire = function (el, id) {
    const liste = P.GLOSSAIRE.slice().sort((a, b) => a.terme.localeCompare(b.terme, "fr"));
    el.innerHTML = `
      <section class="tete-theme" style="--c:var(--signal)">
        <p class="surtitre">Le jargon, traduit</p>
        <h1>Glossaire</h1>
        <p class="chapo">${liste.length} mots qu'on te sort sans jamais les expliquer.</p>
      </section>
      <dl class="glossaire">${liste.map(t => `<div class="terme" id="glossaire-${t.id}"><dt>${e(t.terme)}</dt><dd>${P.mdInline(t.def)}</dd></div>`).join("")}</dl>`;
    if (id) { const c = document.getElementById("glossaire-" + id); if (c) c.scrollIntoView({ block: "center" }); }
  };

  /* ——— À propos */
  P.pages["a-propos"] = function (el) {
    el.innerHTML = `
      <section class="tete-theme" style="--c:var(--signal)">
        <p class="surtitre">Transparence</p>
        <h1>Sources et limites</h1>
        <p class="chapo">Paperasse explique, il ne remplace ni l'administration ni un professionnel.</p>
      </section>
      <section class="guide-corps">
        <div class="bloc"><h2>D'où viennent les informations ?</h2>
          ${P.md("Chaque fiche est rédigée à partir des pages officielles de [Service-Public.fr](https://www.service-public.gouv.fr), [Service-Public Entreprendre](https://entreprendre.service-public.gouv.fr), [impots.gouv.fr](https://www.impots.gouv.fr), de l'[Urssaf](https://www.urssaf.fr), de la [Caf](https://www.caf.fr) et de l'[ANTS](https://ants.gouv.fr). Les sources exactes et la date de vérification figurent sur chaque fiche.")}</div>
        <div class="bloc"><h2>Ce que tu dois savoir</h2>
          ${P.md("- Les montants et les règles changent souvent, au moins une fois par an (barème, plafonds, taux, Acre…). Si la date de vérification d'une fiche te paraît ancienne, recoupe avec le site officiel.\n- Une situation particulière (étranger, handicap, parents séparés, activité réglementée…) peut changer la règle : les fiches décrivent le cas général.\n- Les simulateurs donnent un ordre de grandeur, pas un montant officiel.\n- Aucun conseil juridique, fiscal ou comptable personnalisé : pour un projet d'entreprise, rapproche-toi d'un réseau d'accompagnement gratuit (CCI, CMA, boutique de gestion, Initiative France, PEPITE pour les étudiants).")}</div>
        <div class="bloc"><h2>Tes données</h2>
          ${P.md("Il n'y a ni compte ni traceur. Les étapes que tu coches restent dans ton navigateur (stockage local) et tu peux tout effacer dans « Mes démarches ». Tu ne devrais **jamais** saisir tes identifiants impots.gouv, ameli ou Caf ailleurs que sur leur site officiel.")}</div>
      </section>`;
  };
})();
