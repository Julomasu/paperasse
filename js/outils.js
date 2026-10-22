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
        <p class="chapo">Quatre calculateurs bâtis sur les règles 2026 publiées par l'administration.</p>
      </section>
      <section class="tuiles">
        <a class="tuile" style="--c:var(--t-entreprise)" href="#outil-micro"><div><h2>Micro-entreprise : combien je paie ?</h2><p>Cotisations, Acre, versement libératoire, plafonds et seuil de TVA.</p></div><div class="bas"><span>Calculer</span><span class="fleche" aria-hidden="true">→</span></div></a>
        <a class="tuile" style="--c:var(--t-impots)" href="#outil-job"><div><h2>Mon job est-il imposable ?</h2><p>Job étudiant, apprentissage, stage : la part exonérée et la part à déclarer.</p></div><div class="bas"><span>Calculer</span><span class="fleche" aria-hidden="true">→</span></div></a>
        <a class="tuile" style="--c:var(--t-travail)" href="#outil-stage"><div><h2>Ma gratification de stage</h2><p>Le minimum légal pour ton stage, selon sa durée et tes heures.</p></div><div class="bas"><span>Calculer</span><span class="fleche" aria-hidden="true">→</span></div></a>
        <a class="tuile" style="--c:var(--t-logement)" href="#outil-preavis"><div><h2>Mon préavis de logement</h2><p>La date de fin de ton préavis selon le type de location.</p></div><div class="bas"><span>Calculer</span><span class="fleche" aria-hidden="true">→</span></div></a>
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


  /* Gratification de stage : 15 % du plafond horaire de la Sécurité sociale (30 € en 2026) = 4,50 € l'heure, due au-delà de 308 heures (2 mois). */
  P.STAGE = { plafondHoraire: 30, taux: 0.15, seuilHeures: 308 };
  P.calcStage = function ({ heuresSemaine, semaines }) {
    const s = P.STAGE, total = heuresSemaine * semaines, horaire = s.plafondHoraire * s.taux;
    const due = total > s.seuilHeures;
    const montant = due ? total * horaire : 0;
    const mois = semaines / 4.345;
    return { total, horaire, due, montant, parMois: mois > 0 ? montant / mois : 0 };
  };

  function outilStage(el) {
    const v = { heuresSemaine: 35, semaines: 12 };
    el.innerHTML = `
      <section class="tete-theme" style="--c:var(--t-travail)">
        <p class="fil"><a href="#outils">← Calculs rapides</a></p>
        <h1>Ma gratification de stage</h1>
        <p class="chapo">Minimum légal 2026 : 15 % du plafond horaire de la Sécurité sociale, soit 4,50 € par heure de présence, dès que le stage dépasse 2 mois (308 heures).</p>
      </section>
      <div class="outil">
        <form class="formulaire" onsubmit="return false">
          <div class="champ"><label for="hs">Heures de présence par semaine</label><input id="hs" type="number" min="1" max="48" step="1" inputmode="numeric" value="${v.heuresSemaine}"></div>
          <div class="champ"><label for="sem">Durée du stage, en semaines</label><input id="sem" type="number" min="1" max="52" step="1" inputmode="numeric" value="${v.semaines}"></div>
          <p class="petit">Un stage de 6 mois maximum par année d'enseignement. Une convention collective ou ton entreprise peut prévoir plus que ce minimum.</p>
        </form>
        <div class="resultat" id="res" aria-live="polite"></div>
      </div>`;
    const maj = () => {
      const r = P.calcStage({ heuresSemaine: Math.max(0, Number(P.$("#hs", el).value) || 0), semaines: Math.max(0, Number(P.$("#sem", el).value) || 0) });
      P.$("#res", el).innerHTML = r.due ? `
        <div class="grand"><span class="petit">Gratification minimale</span><span class="chiffre">${P.euros(r.montant)}</span><span class="petit">soit environ ${P.euros(r.parMois)} par mois, pour ${r.total} heures à ${r.horaire.toLocaleString("fr-FR", { minimumFractionDigits: 2 })} € l'heure</span></div>
        <div class="alerte info"><strong>Comment c'est versé</strong><span>La gratification est versée chaque mois, en fonction des heures réellement faites. Elle n'est pas soumise à cotisations dans la limite du minimum légal, et elle est exonérée d'impôt pour un stage obligatoire de ta formation (voir le guide « Job étudiant, stage »).</span></div>` : `
        <div class="grand"><span class="petit">Gratification</span><span class="chiffre">Non obligatoire</span><span class="petit">${r.total} heures de présence : en dessous de 308 heures (2 mois), l'entreprise n'a pas l'obligation de te gratifier</span></div>
        <div class="alerte warn"><strong>Pas obligatoire, mais possible</strong><span>Elle peut quand même te proposer une gratification : demande-le avant de signer la convention.</span></div>`;
    };
    el.oninput = maj; maj();
  }

  /* Préavis du locataire : 3 mois (logement vide), 1 mois (meublé, zone tendue ou motif légitime). Le délai court à partir de la réception du congé. */
  P.calcPreavis = function ({ reception, meuble, tendue, motif }) {
    const mois = (meuble || tendue || motif) ? 1 : 3;
    const d = new Date(reception + "T12:00:00");
    const fin = new Date(d); fin.setMonth(fin.getMonth() + mois);
    if (fin.getDate() !== d.getDate()) fin.setDate(0);   // fin de mois plus courte
    return { mois, fin };
  };

  function outilPreavis(el) {
    const auj = new Date(), iso = d => d.toISOString().slice(0, 10);
    el.innerHTML = `
      <section class="tete-theme" style="--c:var(--t-logement)">
        <p class="fil"><a href="#outils">← Calculs rapides</a></p>
        <h1>Mon préavis de logement</h1>
        <p class="chapo">Le préavis court à partir de la réception du congé par le propriétaire : 3 mois pour un logement vide, 1 mois dans les autres cas.</p>
      </section>
      <div class="outil">
        <form class="formulaire" onsubmit="return false">
          <div class="champ"><label for="rec">Date à laquelle le propriétaire reçoit ton congé</label><input id="rec" type="date" value="${iso(auj)}"></div>
          <div class="champ"><span class="petit" style="font-weight:700">Type de logement</span><div class="seg-ligne" role="group" aria-label="Type"><button type="button" class="seg" data-m="0" aria-pressed="true">Vide (non meublé)</button><button type="button" class="seg" data-m="1" aria-pressed="false">Meublé</button></div></div>
          <div class="champ"><span class="petit" style="font-weight:700">Zone tendue ?</span><div class="seg-ligne" role="group" aria-label="Zone tendue"><button type="button" class="seg" data-t="0" aria-pressed="true">Non</button><button type="button" class="seg" data-t="1" aria-pressed="false">Oui</button></div></div>
          <div class="champ"><span class="petit" style="font-weight:700">Motif légitime de préavis réduit ?</span><div class="seg-ligne" role="group" aria-label="Motif"><button type="button" class="seg" data-o="0" aria-pressed="true">Non</button><button type="button" class="seg" data-o="1" aria-pressed="false">Oui</button></div></div>
          <p class="petit">Zone tendue : la liste officielle des communes figure sur service-public.gouv.fr. Motifs légitimes : mutation, perte d'emploi, nouvel emploi après une perte d'emploi, état de santé, bénéficiaire du RSA ou de l'AAH, logement social obtenu, violences conjugales (à justifier).</p>
        </form>
        <div class="resultat" id="res" aria-live="polite"></div>
      </div>`;
    const v = { meuble: false, tendue: false, motif: false };
    const maj = () => {
      const rec = P.$("#rec", el).value;
      if (!rec) { P.$("#res", el).innerHTML = `<p class="vide">Choisis une date.</p>`; return; }
      const r = P.calcPreavis({ reception: rec, ...v });
      P.$("#res", el).innerHTML = `
        <div class="grand"><span class="petit">Ton préavis se termine le</span><span class="chiffre">${r.fin.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span><span class="petit">préavis de ${r.mois} mois à partir de la réception du congé</span></div>
        <div class="alerte info"><strong>Jusqu'à cette date, le loyer reste dû</strong><span>Tu peux libérer le logement plus tôt, mais tu paies le loyer jusqu'à la fin du préavis, sauf si un nouveau locataire arrive avant (le propriétaire est alors d'accord).</span></div>
        <p class="actions"><a class="btn" href="#lettre-preavis-logement">Écrire la lettre de congé</a><a class="btn btn-ligne" href="#guide-bail-etat-lieux">Le guide</a></p>`;
    };
    el.oninput = maj;
    el.onclick = ev => {
      const b = ev.target.closest(".seg"); if (!b) return;
      if ("m" in b.dataset) v.meuble = b.dataset.m === "1";
      if ("t" in b.dataset) v.tendue = b.dataset.t === "1";
      if ("o" in b.dataset) v.motif = b.dataset.o === "1";
      P.$$(".seg", b.parentElement).forEach(x => x.setAttribute("aria-pressed", String(x === b)));
      maj();
    };
    maj();
  }

  P.pages.outil = function (el, id) {
    if (id === "micro") return outilMicro(el);
    if (id === "job") return outilJob(el);
    if (id === "stage") return outilStage(el);
    if (id === "preavis") return outilPreavis(el);
    location.hash = "#outils";
  };
})();
