/* Calculs rapides. Les règles chiffrées sont regroupées ici pour être mises à jour une fois par an. */
(function () {
  const e = P.e;

  /* Micro-entreprise 2026 (sources : Urssaf auto-entrepreneur, Service-Public Entreprendre, vérifié en octobre 2026).
     cotis = taux global de cotisations ; vl = taux avec versement libératoire de l'impôt ; abat = abattement forfaitaire du régime micro-fiscal. */
  P.TAUX = {
    vente:    { nom: "Vente de marchandises, restauration, hébergement", cotis: 12.3, vl: 13.3, abat: 71, plafond: 203100, tva: 85000, tvaTol: 93500 },
    services: { nom: "Prestations de services commerciales ou artisanales", cotis: 21.2, vl: 22.9, abat: 50, plafond: 83600, tva: 37500, tvaTol: 41250 },
    bnc:      { nom: "Activité libérale non réglementée (régime général)", cotis: 25.6, vl: 27.8, abat: 34, plafond: 83600, tva: 37500, tvaTol: 41250 },
    cipav:    { nom: "Profession libérale réglementée (Cipav)", cotis: 23.2, vl: 25.4, abat: 34, plafond: 83600, tva: 37500, tvaTol: 41250 }
  };
  P.ABAT_MIN = 305;          // abattement minimum du régime micro-fiscal
  P.ACRE_REDUCTION = 0.25;   // Acre : exonération de 25 % pour les créations depuis le 1er juillet 2026 (50 % avant)

  P.calcMicro = function ({ type, ca, acre, vl }) {
    const t = P.TAUX[type];
    // Acre : l'Urssaf arrondit le taux réduit au dixième supérieur (ex. 12,3 % → 9,3 %)
    const tauxCotis = acre ? Math.ceil(t.cotis * (1 - P.ACRE_REDUCTION) * 10 - 1e-9) / 10 : t.cotis;
    const cotis = ca * tauxCotis / 100;
    const impotVL = vl ? ca * (t.vl - t.cotis) / 100 : 0;
    const abattement = Math.min(ca, Math.max(ca * t.abat / 100, P.ABAT_MIN));
    return {
      t, tauxCotis, cotis, impotVL, net: ca - cotis - impotVL,
      baseImposable: vl ? 0 : ca - abattement,
      partPlafond: ca / t.plafond, partTva: ca / t.tva,
      depassePlafond: ca > t.plafond, tvaZone: ca > t.tva && ca <= t.tvaTol, tvaDepasse: ca > t.tvaTol
    };
  };

  /* Jobs et impôt sur le revenu : revenus perçus en 2025, déclarés au printemps 2026 (Service-Public, impots.gouv.fr). */
  P.SEUILS_JOB = { etudiant: 5405, apprenti: 21622, stage: 21622, ageMax: 25, annee: 2025 };
  P.calcJob = function ({ type, montant, age25 }) {
    const s = P.SEUILS_JOB;
    let plafond = 0;
    if (type === "etudiant" && age25) plafond = s.etudiant;
    if (type === "apprenti") plafond = s.apprenti;
    if (type === "stage") plafond = s.stage;
    const exonere = Math.min(montant, plafond);
    return { plafond, exonere, imposable: montant - exonere };
  };

  const ligne = (a, b) => `<div><span>${a}</span><b>${b}</b></div>`;

  /* ——— Liste des outils */
  P.pages.outils = function (el) {
    el.innerHTML = `
      <section class="tete-theme" style="--c:var(--signal)">
        <div class="barre-theme"></div>
        <h1>Calculs rapides</h1>
        <p class="chapo">Deux calculateurs bâtis sur les règles 2026 publiées par l'administration.</p>
      </section>
      <section class="tuiles">
        <a class="tuile" style="--c:var(--t-entreprise)" href="#outil-micro"><div><h2>Micro-entreprise : combien je paie ?</h2><p>Cotisations, Acre, versement libératoire, plafonds et seuil de TVA.</p></div><div class="bas"><span>Calculer</span><span class="fleche" aria-hidden="true">→</span></div></a>
        <a class="tuile" style="--c:var(--t-impots)" href="#outil-job"><div><h2>Mon job est-il imposable ?</h2><p>Job étudiant, apprentissage, stage : la part exonérée et la part à déclarer.</p></div><div class="bas"><span>Calculer</span><span class="fleche" aria-hidden="true">→</span></div></a>
      </section>`;
  };

  /* ——— Outil : micro-entreprise */
  function outilMicro(el) {
    const v = { type: "services", ca: 12000, periode: "an", acre: false, vl: false };
    const champ = (id, lib, html) => `<div class="champ"><label for="${id}">${lib}</label>${html}</div>`;
    el.innerHTML = `
      <section class="tete-theme" style="--c:var(--t-entreprise)">
        <p class="fil"><a href="#outils">← Calculs rapides</a></p>
        <h1>Micro-entreprise : combien je paie ?</h1>
        <p class="chapo">Taux 2026 de l'Urssaf. Le résultat est avant impôt sur le revenu (sauf versement libératoire).</p>
      </section>
      <div class="outil">
        <form class="formulaire" id="f" onsubmit="return false">
          ${champ("type", "Ton activité", `<select id="type">${Object.entries(P.TAUX).map(([k, t]) => `<option value="${k}"${k === v.type ? " selected" : ""}>${e(t.nom)}</option>`).join("")}</select>`)}
          ${champ("ca", "Chiffre d'affaires encaissé", `<input id="ca" type="number" min="0" step="100" inputmode="numeric" value="${v.ca}">`)}
          <div class="champ"><span class="petit" style="font-weight:700">Ce montant est…</span><div class="seg-ligne" role="group" aria-label="Période"><button type="button" class="seg" data-p="an" aria-pressed="true">par an</button><button type="button" class="seg" data-p="mois" aria-pressed="false">par mois</button></div></div>
          <div class="champ"><span class="petit" style="font-weight:700">Acre (aide à la création)</span><div class="seg-ligne" role="group" aria-label="Acre"><button type="button" class="seg" data-acre="0" aria-pressed="true">Non</button><button type="button" class="seg" data-acre="1" aria-pressed="false">Oui</button></div></div>
          <div class="champ"><span class="petit" style="font-weight:700">Versement libératoire de l'impôt</span><div class="seg-ligne" role="group" aria-label="Versement libératoire"><button type="button" class="seg" data-vl="0" aria-pressed="true">Non</button><button type="button" class="seg" data-vl="1" aria-pressed="false">Oui</button></div></div>
          <p class="petit">Acre : exonération de ${P.ACRE_REDUCTION * 100} % pour une activité créée depuis le 1er juillet 2026 (50 % avant). Versement libératoire : possible seulement sous un plafond de revenus du foyer fiscal.</p>
        </form>
        <div class="resultat" id="res" aria-live="polite"></div>
      </div>`;
    const maj = () => {
      const ca = Math.max(0, Number(P.$("#ca", el).value) || 0) * (v.periode === "mois" ? 12 : 1);
      const r = P.calcMicro({ type: v.type, ca, acre: v.acre, vl: v.vl }), t = r.t;
      const classeJauge = r.partPlafond >= 1 ? "max" : r.partPlafond >= .8 ? "haut" : "";
      const alertes = [];
      if (r.depassePlafond) alertes.push(`<div class="alerte bad"><strong>Au-dessus du plafond de ${P.euros(t.plafond)}</strong><span>Si tu dépasses ce plafond deux années de suite, tu sors du régime micro. Vérifie le calcul de tes seuils sur autoentrepreneur.urssaf.fr (ils sont proratisés l'année de création).</span></div>`);
      else if (r.partPlafond >= .8) alertes.push(`<div class="alerte warn"><strong>Tu approches du plafond (${P.euros(t.plafond)})</strong><span>Anticipe : au-delà, il faudra passer à un autre régime.</span></div>`);
      if (r.tvaDepasse) alertes.push(`<div class="alerte bad"><strong>Seuil majoré de TVA dépassé (${P.euros(t.tvaTol)})</strong><span>Tu deviens redevable de la TVA dès le dépassement : facture avec TVA et déclare-la. Voir le guide TVA.</span></div>`);
      else if (r.tvaZone) alertes.push(`<div class="alerte warn"><strong>Entre ${P.euros(t.tva)} et ${P.euros(t.tvaTol)}</strong><span>Zone de tolérance de la franchise en base de TVA : renseigne-toi avant de continuer, la règle dépend de ta situation.</span></div>`);
      else alertes.push(`<div class="alerte ok"><strong>Franchise en base de TVA</strong><span>Sous ${P.euros(t.tva)}, tu ne factures pas de TVA (mention « TVA non applicable, art. 293 B du CGI »).</span></div>`);
      P.$("#res", el).innerHTML = `
        <div class="grand"><span class="petit">Il te reste, après cotisations${v.vl ? " et impôt" : ""}</span><span class="chiffre">${P.euros(r.net)}</span><span class="petit">soit environ ${P.euros(r.net / 12)} par mois sur ${P.euros(ca)} encaissés</span></div>
        <div class="lignes">
          ${ligne("Taux de cotisations appliqué", P.pct(r.tauxCotis) + (v.acre ? " (avec Acre)" : ""))}
          ${ligne("Cotisations sociales", "− " + P.euros(r.cotis))}
          ${v.vl ? ligne("Impôt (versement libératoire, " + P.pct(t.vl - t.cotis) + ")", "− " + P.euros(r.impotVL)) : ligne("Base imposable après abattement de " + t.abat + " %", P.euros(r.baseImposable))}
        </div>
        ${v.vl ? "" : `<p class="petit">La base imposable s'ajoute aux autres revenus de ton foyer fiscal : si tu es rattaché·e à tes parents, c'est leur déclaration qui l'intègre. L'impôt réel dépend du barème et de ta situation.</p>`}
        <div class="jauge ${classeJauge}" role="img" aria-label="${Math.round(r.partPlafond * 100)} % du plafond"><i style="width:${Math.min(100, r.partPlafond * 100)}%"></i></div>
        <p class="petit">${Math.round(r.partPlafond * 100)} % du plafond annuel de chiffre d'affaires (${P.euros(t.plafond)}).</p>
        ${alertes.join("")}`;
    };
    el.oninput = ev => {
      if (ev.target.id === "type") v.type = ev.target.value;
      maj();
    };
    el.onclick = ev => {
      const b = ev.target.closest(".seg"); if (!b) return;
      const groupe = b.parentElement;
      if ("p" in b.dataset) v.periode = b.dataset.p;
      if ("acre" in b.dataset) v.acre = b.dataset.acre === "1";
      if ("vl" in b.dataset) v.vl = b.dataset.vl === "1";
      P.$$(".seg", groupe).forEach(x => x.setAttribute("aria-pressed", String(x === b)));
      maj();
    };
    maj();
  }

  /* ——— Outil : job et impôt */
  function outilJob(el) {
    const v = { type: "etudiant", age25: true, montant: 3000 };
    el.innerHTML = `
      <section class="tete-theme" style="--c:var(--t-impots)">
        <p class="fil"><a href="#outils">← Calculs rapides</a></p>
        <h1>Mon job est-il imposable ?</h1>
        <p class="chapo">Revenus perçus en ${P.SEUILS_JOB.annee} (déclaration du printemps 2026). Les seuils sont revalorisés chaque année.</p>
      </section>
      <div class="outil">
        <form class="formulaire" onsubmit="return false">
          <div class="champ"><label for="type">Ton revenu vient de…</label>
            <select id="type"><option value="etudiant">Un job étudiant ou d'été (salaire)</option><option value="apprenti">Un contrat d'apprentissage</option><option value="stage">Une gratification de stage</option><option value="autre">Un autre salaire</option></select></div>
          <div class="champ"><label for="montant">Montant sur l'année (net imposable)</label><input id="montant" type="number" min="0" step="100" inputmode="numeric" value="${v.montant}"></div>
          <div class="champ" id="age-champ"><span class="petit" style="font-weight:700">As-tu 25 ans ou moins ?</span><div class="seg-ligne" role="group" aria-label="Âge"><button type="button" class="seg" data-age="1" aria-pressed="true">Oui</button><button type="button" class="seg" data-age="0" aria-pressed="false">Non</button></div></div>
          <p class="petit">Le « net imposable » figure sur ta fiche de paie de décembre (cumul annuel) et sur la déclaration préremplie.</p>
        </form>
        <div class="resultat" id="res" aria-live="polite"></div>
      </div>`;
    const maj = () => {
      P.$("#age-champ", el).hidden = v.type !== "etudiant";
      const r = P.calcJob({ type: v.type, montant: Math.max(0, Number(P.$("#montant", el).value) || 0), age25: v.age25 });
      const n = Math.max(0, Number(P.$("#montant", el).value) || 0);
      const phrase = {
        etudiant: v.age25 ? `Les salaires des étudiants de 25 ans au plus sont exonérés dans la limite de 3 fois le Smic mensuel, soit ${P.euros(P.SEUILS_JOB.etudiant)} pour les revenus ${P.SEUILS_JOB.annee}. Seule la part au-dessus est imposable.` : `L'exonération « job étudiant » est réservée aux 25 ans et moins : ce salaire est imposable comme un salaire ordinaire.`,
        apprenti: `Le salaire d'apprenti est exonéré dans la limite du Smic annuel : ${P.euros(P.SEUILS_JOB.apprenti)} pour les revenus ${P.SEUILS_JOB.annee}.`,
        stage: `Les gratifications d'un stage inclus dans ta formation sont exonérées, dans la limite de ${P.euros(P.SEUILS_JOB.stage)} pour ${P.SEUILS_JOB.annee}. Cet avantage se cumule avec celui des jobs étudiants.`,
        autre: `Un salaire ordinaire est imposable : il suit le barème progressif (0 % jusqu'à 11 600 € de revenu net imposable pour une part en 2026), après abattement de 10 % pour frais.`
      }[v.type];
      P.$("#res", el).innerHTML = `
        <div class="grand"><span class="petit">${r.imposable > 0 ? "Part à déclarer comme imposable" : "Rien d'imposable"}</span><span class="chiffre">${P.euros(r.imposable)}</span></div>
        <div class="lignes">${ligne("Montant perçu", P.euros(n))}${ligne("Plafond d'exonération", r.plafond ? P.euros(r.plafond) : "aucun")}${ligne("Part exonérée", P.euros(r.exonere))}${ligne("Part imposable", P.euros(r.imposable))}</div>
        <div class="alerte info"><strong>La règle</strong><span>${phrase}</span></div>
        <div class="alerte ${r.imposable > 0 ? "warn" : "ok"}"><strong>${r.imposable > 0 ? "Attention au rattachement" : "À retenir"}</strong><span>${r.imposable > 0 ? "Si tu es rattaché·e au foyer fiscal de tes parents, la part imposable s'ajoute à leur revenu et est taxée à leur taux. Compare avec une déclaration séparée dans le guide « Rattachement »." : "Même quand tout est exonéré, déclare tes revenus : l'avis d'imposition te servira de justificatif (logement, aides)."}</span></div>
        <p class="actions"><a class="btn btn-ligne" href="#guide-job-etudiant-impots">Le guide complet</a><a class="btn btn-ligne" href="#guide-rattachement">Rattachement ou non ?</a></p>`;
    };
    el.oninput = ev => { if (ev.target.id === "type") v.type = ev.target.value; maj(); };
    el.onclick = ev => {
      const b = ev.target.closest(".seg"); if (!b) return;
      v.age25 = b.dataset.age === "1";
      P.$$(".seg", b.parentElement).forEach(x => x.setAttribute("aria-pressed", String(x === b)));
      maj();
    };
    maj();
  }

  P.pages.outil = function (el, id) {
    if (id === "micro") return outilMicro(el);
    if (id === "job") return outilJob(el);
    location.hash = "#outils";
  };
})();
