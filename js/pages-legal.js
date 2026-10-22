/* Pages légales : mentions légales et confidentialité. Le texte décrit ce que le site fait réellement ;
   toute évolution technique (nouveau service externe, nouvelle donnée stockée) doit être reportée ici. */
(function () {
  const e = P.e;
  const MAJ = "octobre 2026";
  const ed = () => P.CONFIG.editeur || {};
  const ligneEd = (libelle, valeur) => valeur ? `<li><strong>${libelle}</strong> : ${e(valeur)}</li>` : "";
  const editeurComplet = () => !!(ed().nom && ed().contact);
  const tete = (titre, chapo) => `<section class="tete-theme" style="--c:var(--signal, var(--accent))"><div class="barre-theme"></div><h1>${titre}</h1><p class="chapo">${chapo}</p></section>`;

  P.pages.mentions = function (el) {
    const d = ed();
    el.innerHTML = `
      ${tete("Mentions légales", "Qui édite ce site, qui l'héberge, d'où viennent les informations.")}
      <div class="legal">
        <section>
          <h2>Éditeur du site</h2>
          ${editeurComplet() ? `<ul>
            ${ligneEd("Éditeur", d.nom)}${ligneEd("Statut", d.statut)}${ligneEd("Directeur·rice de la publication", d.directeurPublication || d.nom)}${ligneEd("Adresse", d.adresse)}${ligneEd("Contact", d.contact)}
          </ul>` : `<p class="encart alerte-config"><strong>Informations de l'éditeur à compléter.</strong> Renseigne le nom et l'adresse e-mail de contact dans <code>js/app.js</code> (rubrique <code>editeur</code>) avant de publier le site largement.</p>`}
          <p>Paperasse est un service d'information gratuit, sans but lucratif et indépendant. Ce n'est <strong>pas un site officiel</strong> : il n'est lié à aucune administration. Les démarches se font uniquement sur les sites officiels (impots.gouv.fr, ameli.fr, caf.fr, service-public.gouv.fr, ants.gouv.fr…). Ne saisis jamais tes identifiants d'un service public ici.</p>
        </section>
        <section>
          <h2>Hébergement</h2>
          <p>Le site est hébergé par GitHub, Inc. (GitHub Pages), 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis. <a href="https://github.com" target="_blank" rel="noopener">github.com</a>.</p>
        </section>
        <section>
          <h2>Contenus et responsabilité</h2>
          <p>Les fiches expliquent le cas général, à partir de pages officielles citées sur chaque fiche avec leur date de vérification. Les montants, plafonds et règles changent souvent (au moins une fois par an) : une information peut être incomplète ou dépassée. Elle ne remplace ni le site officiel, ni l'avis d'un·e professionnel·le (conseiller fiscal, expert-comptable, avocat, travailleur social).</p>
          <p>Les calculateurs donnent un ordre de grandeur, jamais un montant officiel. Une erreur, une règle qui a changé, un contenu à retirer ? ${d.contact ? `Écris à <strong>${e(d.contact)}</strong> ou ` : ""}ouvre une demande sur <a href="${e(P.CONFIG.depot)}/issues" target="_blank" rel="noopener">le dépôt du projet</a>.</p>
        </section>
        <section>
          <h2>Sources et licences</h2>
          <ul>
            <li>Informations rédigées à partir des pages de Service-Public.fr et Service-Public Entreprendre (DILA), impots.gouv.fr, de l'Urssaf, de la Caf, de France Travail, de l'ANTS et d'autres organismes publics, cités sur chaque fiche.</li>
            <li>Polices Barlow et Barlow Condensed : licence SIL Open Font License 1.1.</li>
          </ul>
        </section>
        <section>
          <h2>Droits sur le site</h2>
          <p>Les textes rédigés, la structure et le code de Paperasse sont publiés sur <a href="${e(P.CONFIG.depot)}" target="_blank" rel="noopener">GitHub</a>. Les noms d'organismes cités appartiennent à leurs propriétaires et sont employés pour les identifier, sans suggérer de partenariat.</p>
        </section>
        <p class="petit">Dernière mise à jour : ${MAJ}. Voir aussi la page <a href="#confidentialite">Confidentialité</a>.</p>
      </div>`;
  };

  P.pages.confidentialite = function (el) {
    const configuree = P.audience.configuree();
    const refuse = !!(P.etat.reglages && P.etat.reglages.refusAudience);
    const d = ed();
    el.innerHTML = `
      ${tete("Confidentialité", "Ce que le site garde, ce qu'il n'envoie pas, et les services extérieurs concernés.")}
      <div class="legal">
        <section class="encart">
          <h2>L'essentiel</h2>
          <ul>
            <li>Pas de compte, pas de formulaire d'inscription, <strong>pas de cookie</strong>.</li>
            <li>Les étapes que tu coches et tes réglages restent <strong>dans ton navigateur</strong>. Le site ne les envoie à personne.</li>
            <li>${configuree ? "Une mesure d'audience sans cookie compte les pages vues, sans te suivre d'un site à l'autre (détails plus bas), et tu peux la refuser." : "Aucune mesure d'audience n'est active."}</li>
          </ul>
        </section>
        <section>
          <h2>Ce qui reste dans ton navigateur</h2>
          <p>Pour fonctionner, le site enregistre sur ton appareil (stockage local du navigateur, qui n'est pas un cookie) : les étapes que tu as cochées dans les guides, la situation choisie sur l'accueil et tes réglages d'affichage (thème, taille du texte). Ces données servent uniquement à te les ré-afficher. Tu peux tout effacer dans « Mes démarches », bouton « Tout effacer », ou en vidant les données du site dans ton navigateur.</p>
        </section>
        <section>
          <h2>Les services extérieurs qui peuvent voir ton adresse IP</h2>
          <ul>
            <li><strong>Hébergement (GitHub Pages)</strong> : chaque visite génère des journaux techniques standard chez GitHub, Inc. Voir <a href="https://docs.github.com/fr/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">la politique de confidentialité de GitHub</a>.</li>
            <li><strong>Polices</strong> : hébergées sur ce site, aucune requête vers Google Fonts.</li>
            <li><strong>Liens sortants</strong> (Service-Public, impots.gouv.fr, Caf, Urssaf…) : une fois le lien ouvert, tu es sur un autre site, avec sa propre politique.</li>
          </ul>
          <p>Le site ne charge ni carte, ni vidéo, ni réseau social, ni publicité.</p>
        </section>
        <section>
          <h2>Mesure d'audience</h2>
          ${configuree ? `
          <p>Le site utilise GoatCounter, un outil de mesure d'audience qui <strong>n'utilise pas de cookie</strong> et ne crée pas de profil. Il enregistre la page vue, la provenance du lien et des informations générales sur le navigateur et l'écran, pour savoir quels guides sont utiles. Seul l'identifiant de la page est transmis, jamais les étapes que tu coches. Les statistiques sont agrégées.</p>
          <p>Rien n'est compté si ton navigateur envoie le signal « Ne pas me suivre ». Tu peux aussi refuser ici :</p>
          <p class="actions"><button type="button" class="btn btn-ligne" data-refus aria-pressed="${refuse}">${refuse ? "Je refuse la mesure : réactiver" : "Ne pas me compter"}</button></p>
          <p class="petit">Mesure d'audience limitée à l'usage statistique du site, conçue pour relever des exemptions de consentement prévues par la CNIL. Voir <a href="https://goatcounter.com/privacy" target="_blank" rel="noopener">la politique de GoatCounter</a>.</p>` : `<p>Aucune mesure d'audience n'est active : le site ne compte pas ses visites.</p>`}
        </section>
        <section>
          <h2>Mineur·es</h2>
          <p>Le site s'adresse aussi aux jeunes. Il ne demande aucune donnée personnelle et ne publie rien à ton sujet.</p>
        </section>
        <section>
          <h2>Tes droits</h2>
          <p>Le site ne conserve pas de données personnelles te concernant en dehors des journaux techniques de l'hébergeur. Pour toute question ou demande (accès, effacement, opposition)${d.contact ? `, écris à <strong>${e(d.contact)}</strong>` : ", utilise les coordonnées des mentions légales"}. Tu peux aussi saisir la CNIL : <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener">cnil.fr/fr/plaintes</a>.</p>
        </section>
        <p class="petit">Dernière mise à jour : ${MAJ}. Voir aussi les <a href="#mentions">mentions légales</a>.</p>
      </div>`;
    el.onclick = ev => {
      if (!ev.target.closest("[data-refus]")) return;
      P.audience.basculerRefus(); P.pages.confidentialite(el);
    };
  };
})();
