/* Thème « Droits & litiges ». Sources : Service-Public, économie.gouv.fr, justice.fr, Défenseur des droits, CNIL. */
(P.GUIDES = P.GUIDES || []).push(
  {
    id: "majorite-18-ans", theme: "droits", titre: "Ce qui change à 18 ans",
    accroche: "Signer un contrat, voter, louer, être responsable : les droits et obligations d'un·e majeur·e.",
    temps: "15 min", cout: "Gratuit", pour: ["lyceen", "mineur"], quand: "Quelques mois avant tes 18 ans.",
    mots: ["majorité", "18 ans", "majeur", "contrat", "voter", "responsabilité", "autorisation parentale", "droits"],
    todo: { si: ["a16", "a15"], prio: 2, pourquoi: "À 18 ans, tu signes et tu réponds seul·e de tes actes : mieux vaut s'y préparer." },
    enBref: [
      "À **18 ans**, tu peux **signer seul·e** un contrat (bail, abonnement, crédit, compte, travail) sans autorisation de tes parents.",
      "Tu es **inscrit·e d'office sur les listes électorales** si tu t'es fait recenser à 16 ans.",
      "Tu es **pleinement responsable** de tes actes devant la justice civile et pénale."
    ],
    etapes: [
      { t: "Préparer tes papiers", d: "Carte d'identité valide, numéro de sécurité sociale, RIB à ton nom. Voir [Carte d'identité et passeport](#guide-carte-identite-passeport) et [Ouvrir un compte](#guide-ouvrir-compte)." },
      { t: "Vérifier ton inscription électorale", d: "Si tu as été recensé·e à 16 ans, tu es inscrit·e d'office. Sinon, inscris-toi. Voir [Recensement, JDC et vote](#guide-recensement-jdc-vote)." },
      { t: "Comprendre ce que tu signes", d: "Un contrat engage : lis-le, garde-le, et ne signe pas sous la pression. Bail, abonnement et crédit sont des engagements à long terme." },
      { t: "Reprendre en main tes démarches", d: "Impôts, santé, Caf, logement : certaines démarches passent à ton nom. Commence par la [to-do admin](#todo)." },
      { t: "Savoir où demander de l'aide", d: "Si tu as un problème, contacte les organismes de la rubrique [Qui contacter](#contacts) : la plupart des conseils sont gratuits." }
    ],
    pieges: [
      "Signer un abonnement ou un crédit sans en mesurer le coût total.",
      "Croire que tes parents peuvent encore être garants de tout : à 18 ans, tu es seul·e responsable de tes engagements.",
      "Oublier de mettre à jour tes papiers (adresse, carte Vitale, compte bancaire)."
    ],
    liens: [
      { label: "Service-Public : que peut faire un jeune avant 18 ans ?", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F21829" },
      { label: "Ma situation électorale (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1961" }
    ],
    sources: ["Service-Public, majorité civile (18 ans)", "Service-Public F1961 (inscription d'office sur les listes électorales)"],
    voir: ["recensement-jdc-vote", "ouvrir-compte", "comptes-a-creer", "premiere-declaration"], verifie: "octobre 2026"
  },
  {
    id: "amendes", theme: "droits", titre: "Une amende : payer, contester, éviter la majoration",
    accroche: "Les délais pour payer moins cher, contester et ne pas voir l'amende grimper.",
    temps: "15 min", cout: "Gratuit", pour: ["lyceen", "etudiant", "salarie"], quand: "Dès la réception de l'avis de contravention.",
    mots: ["amende", "contravention", "majoration", "contester", "antai", "radar", "pv", "points"],
    todo: { si: ["p-permis"], prio: 3, pourquoi: "Un avis non traité à temps se majore." },
    enBref: [
      "Lis le **délai indiqué sur l'avis** : le payer vite peut te faire profiter d'un tarif minoré.",
      "Tu peux **contester** si tu n'étais pas le conducteur ou si l'infraction est erronée, dans le délai indiqué sur l'avis (souvent 45 jours pour une amende forfaitaire, 30 jours pour une amende majorée).",
      "Si tu ne fais rien, l'amende est **majorée** et peut être recouvrée par le Trésor public."
    ],
    etapes: [
      { t: "Lire l'avis", d: "Vérifie la date, le lieu, l'infraction, le montant, les montants minoré et majoré et le délai de réponse. Garde l'original." },
      { t: "Choisir : payer ou contester", d: "- **Payer** : en ligne, par smartphone ou par courrier, dans les délais. Payer vaut reconnaissance de l'infraction (et retrait de points si prévu).\n- **Contester** : si l'infraction est inexacte, que tu n'es pas le conducteur ou en cas de vol de véhicule. La contestation se fait sur le site de l'**ANTAI** avec les justificatifs." },
      { t: "Désigner le conducteur", d: "Si tu n'étais pas au volant (véhicule prêté), tu peux désigner le conducteur : il recevra l'avis à son nom." },
      { t: "Garder une preuve", d: "Conserve le justificatif de paiement ou l'accusé de réception de ta contestation." },
      { t: "En cas de difficulté", d: "Si tu ne peux pas payer, contacte le centre des finances publiques : un échéancier peut parfois être accordé." }
    ],
    pieges: [
      "Ne pas répondre dans le délai : l'amende est majorée.",
      "Payer une amende que tu veux contester : le paiement vaut en général reconnaissance de l'infraction.",
      "Ignorer un courrier d'huissier ou du Trésor public."
    ],
    liens: [
      { label: "ANTAI : payer ou contester une amende", url: "https://www.antai.gouv.fr" },
      { label: "Service-Public : contester une amende", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F18509" }
    ],
    sources: ["Service-Public, contravention : paiement et contestation", "ANTAI"],
    voir: ["permis", "plainte-depot", "aide-juridique"], verifie: "octobre 2026"
  },
  {
    id: "achat-ligne", theme: "droits", titre: "Achat en ligne : rétractation, retour, remboursement",
    accroche: "14 jours pour changer d'avis, le bouton « renoncer au contrat ici » et ce qu'il faut faire en cas de litige.",
    temps: "10 min", cout: "Gratuit", pour: ["lyceen", "etudiant", "salarie"], quand: "Dès que tu veux renvoyer un achat fait en ligne.",
    mots: ["achat en ligne", "rétractation", "14 jours", "retour", "remboursement", "livraison", "commande", "vinted", "site marchand"],
    todo: { si: ["a16", "a18"], prio: 3, pourquoi: "Connaître ses droits évite de payer pour rien." },
    enBref: [
      "Tu as **au moins 14 jours** pour changer d'avis après un achat à distance, sauf exceptions (produit personnalisé, billets datés, denrées périssables…).",
      "Depuis le **19 juin 2026**, le vendeur doit proposer sur son site une fonctionnalité gratuite « **renoncer au contrat ici** ».",
      "Si la commande n'arrive pas ou est défectueuse, tu as des recours même après les 14 jours."
    ],
    etapes: [
      { t: "Compter ton délai", d: "Pour un bien, le délai de 14 jours commence à la réception. Pour un service, à la conclusion du contrat. Ne laisse pas passer la date." },
      { t: "Exercer ton droit", d: "Utilise le bouton « renoncer au contrat ici » du site s'il existe, ou envoie un mail ou courrier clair avec ton numéro de commande. Un modèle est dans les [lettres types](#lettres)." },
      { t: "Renvoyer le produit", d: "Dans les 14 jours suivant ta décision, sauf si le vendeur vient le chercher. Garde la preuve d'expédition. Les frais de retour peuvent rester à ta charge si le vendeur l'a indiqué." },
      { t: "Obtenir ton remboursement", d: "Le vendeur doit te rembourser dans les 14 jours suivant la rétractation (il peut attendre le retour du produit)." },
      { t: "En cas de litige", d: "Contacte d'abord le service client par écrit, puis un **médiateur de la consommation**, **SignalConso** ou une association. Voir [Litige avec un professionnel](#guide-litige-conso)." }
    ],
    pieges: [
      "Penser qu'on peut tout renvoyer : certains produits sont exclus du droit de rétractation.",
      "Oublier de garder la preuve d'envoi du retour.",
      "Acheter à un particulier sur une plateforme en croyant bénéficier des mêmes droits qu'avec un professionnel."
    ],
    liens: [
      { label: "Achat à distance : droit de rétractation (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F10485" },
      { label: "Vente à distance : droit de rétractation (économie.gouv.fr)", url: "https://www.economie.gouv.fr/particuliers/mes-droits-conso/bien-consommer/vente-distance-tout-savoir-sur-votre-droit-de-retractation" }
    ],
    sources: ["Service-Public F10485 (rétractation 14 jours)", "économie.gouv.fr (bouton « renoncer au contrat ici » à compter du 19 juin 2026)"],
    voir: ["abonnements", "litige-conso", "arnaques"], verifie: "octobre 2026"
  },
  {
    id: "abonnements", theme: "droits", titre: "Résilier un abonnement (téléphone, salle de sport, streaming)",
    accroche: "Comment sortir proprement d'un contrat et éviter les pièges de la reconduction.",
    temps: "15 min", cout: "Gratuit", pour: ["lyceen", "etudiant", "salarie"], quand: "Dès que tu veux arrêter un abonnement.",
    mots: ["abonnement", "résiliation", "reconduction", "préavis", "streaming", "salle de sport", "box", "mobile"],
    todo: { si: ["a18", "etudiant"], prio: 3, pourquoi: "Un abonnement oublié coûte cher sur la durée." },
    enBref: [
      "Un contrat conclu **en ligne** doit pouvoir être **résilié en ligne**, aussi simplement qu'il a été souscrit.",
      "Lis les conditions : **durée d'engagement**, **préavis**, **reconduction tacite**.",
      "Garde toujours une **preuve** de ta demande de résiliation."
    ],
    etapes: [
      { t: "Retrouver le contrat", d: "Cherche les conditions générales, la durée d'engagement et le préavis. Sans engagement, tu peux généralement partir à tout moment." },
      { t: "Résilier par le bon canal", d: "Utilise le bouton de résiliation en ligne si le site l'offre ; sinon envoie un courrier recommandé ou un mail avec accusé. Un modèle est dans les [lettres types](#lettres)." },
      { t: "Surveiller la date d'effet", d: "Note la date de fin demandée et vérifie que le prélèvement s'arrête. Résilier ne suffit pas toujours : certains contrats prévoient des frais de sortie." },
      { t: "Arrêter les prélèvements", d: "Si le prélèvement continue sans motif, contacte l'entreprise, puis ta banque pour contester le prélèvement non autorisé." },
      { t: "Recourir en cas de blocage", d: "Si l'entreprise refuse la résiliation, écris au service client, puis à un médiateur de la consommation ou via SignalConso." }
    ],
    pieges: [
      "Oublier la reconduction automatique d'un abonnement annuel.",
      "Résilier par un moyen sans trace.",
      "Continuer à payer par habitude un service que tu n'utilises plus."
    ],
    liens: [
      { label: "Résilier un abonnement (économie.gouv.fr)", url: "https://www.economie.gouv.fr/particuliers/mes-droits-conso" },
      { label: "SignalConso", url: "https://signal.conso.gouv.fr" }
    ],
    sources: ["économie.gouv.fr, droits du consommateur (résiliation en ligne)", "DGCCRF, SignalConso"],
    voir: ["achat-ligne", "litige-conso", "ouvrir-compte"], verifie: "octobre 2026"
  },
  {
    id: "litige-conso", theme: "droits", titre: "Litige avec un professionnel : les recours dans l'ordre",
    accroche: "Réclamation, médiateur de la consommation, SignalConso : comment faire valoir tes droits.",
    temps: "30 min", cout: "Gratuit", pour: ["lyceen", "etudiant", "salarie"], quand: "Dès qu'un vendeur ou prestataire ne respecte pas ses engagements.",
    mots: ["litige", "réclamation", "médiateur", "signalconso", "dgccrf", "garantie légale", "service client", "consommation"],
    todo: { si: ["a18"], prio: 3, pourquoi: "Savoir par où commencer te fait gagner du temps." },
    enBref: [
      "Commence par une **réclamation écrite** au vendeur, avec preuves.",
      "Sans réponse satisfaisante, saisis le **médiateur de la consommation** : c'est gratuit.",
      "Tu peux aussi signaler un problème sur **SignalConso** (DGCCRF)."
    ],
    etapes: [
      { t: "Réunir les preuves", d: "Facture, mails, captures d'écran, photos du défaut, conditions de vente. Plus c'est précis, plus c'est solide." },
      { t: "Écrire au vendeur", d: "Envoie une réclamation datée (recommandé ou mail avec accusé), en précisant ta demande : remboursement, échange, réparation. Un modèle est dans les [lettres types](#lettres)." },
      { t: "Invoquer la garantie légale", d: "Un bien non conforme est couvert par la **garantie légale de conformité** : le vendeur doit réparer, remplacer ou rembourser. Cite-la dans ta lettre." },
      { t: "Saisir le médiateur", d: "Si le professionnel ne répond pas ou refuse, saisis le **médiateur de la consommation** dont il doit t'indiquer les coordonnées. La procédure est gratuite pour toi." },
      { t: "Signaler et, en dernier recours, agir en justice", d: "Signale sur SignalConso. Pour une petite somme, une association de consommateurs ou un conciliateur de justice peut t'aider avant tout procès." }
    ],
    pieges: [
      "Se contenter d'une réclamation orale ou par téléphone : conserve toujours une trace écrite.",
      "Attendre trop longtemps : certaines garanties ont des durées limitées.",
      "Accepter un « avoir » alors que tu veux un remboursement."
    ],
    liens: [
      { label: "SignalConso (DGCCRF)", url: "https://signal.conso.gouv.fr" },
      { label: "Service-Public : garantie légale de conformité", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11094" },
      { label: "Le médiateur de la consommation (économie.gouv.fr)", url: "https://www.economie.gouv.fr/mediation-conso" }
    ],
    sources: ["Service-Public, garantie légale de conformité", "DGCCRF, SignalConso", "économie.gouv.fr, médiation de la consommation"],
    voir: ["achat-ligne", "abonnements", "aide-juridique"], verifie: "octobre 2026"
  },
  {
    id: "plainte-depot", theme: "droits", titre: "Porter plainte : comment, où et à quoi s'attendre",
    accroche: "Commissariat, gendarmerie, plainte en ligne : les étapes et les droits de la victime.",
    temps: "1 h", cout: "Gratuit", pour: ["lyceen", "etudiant", "salarie", "mineur"], quand: "Après un vol, une agression, une escroquerie ou des menaces.",
    mots: ["plainte", "commissariat", "gendarmerie", "main courante", "vol", "agression", "victime", "pré-plainte"],
    todo: { si: ["p-victime"], prio: 1, pourquoi: "Porter plainte ouvre tes droits de victime." },
    enBref: [
      "Tu peux porter plainte **au commissariat ou à la gendarmerie** de ton choix, même si les faits ont eu lieu ailleurs.",
      "Un·e **mineur·e** peut porter plainte, avec ou sans ses parents.",
      "Une **main courante** n'est pas une plainte : elle signale des faits sans déclencher d'enquête."
    ],
    etapes: [
      { t: "Mettre en sécurité", d: "En cas de danger immédiat, appelle le **17** ou le **112**. Si tu es blessé·e, va d'abord aux urgences (le **15**) : demande un certificat médical." },
      { t: "Rassembler les preuves", d: "Photos, captures d'écran, messages, témoins, factures. Ne supprime rien." },
      { t: "Déposer plainte", d: "Rends-toi dans un commissariat ou une gendarmerie. Pour certaines infractions, tu peux faire une **pré-plainte en ligne** puis signer sur place. Un récépissé te sera remis." },
      { t: "Garder le récépissé", d: "Il prouve le dépôt de plainte et sert pour ton assurance, ta banque ou tes démarches (carte perdue, vol de papiers)." },
      { t: "Suivre la procédure", d: "Tu peux être convoqué·e, informé·e des suites et, si tu es victime, accompagné·e par une association d'aide aux victimes (France Victimes, 116 006)." }
    ],
    pieges: [
      "Confondre main courante et plainte.",
      "Ne pas demander de copie du récépissé.",
      "Renoncer à porter plainte par peur de représailles : des dispositifs de protection existent."
    ],
    liens: [
      { label: "Service-Public : déposer plainte", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1435" },
      { label: "France Victimes (116 006)", url: "https://www.france-victimes.fr" }
    ],
    sources: ["Service-Public, déposer plainte", "France Victimes, ligne 116 006"],
    voir: ["harcelement-violences", "fraude-carte", "perte-vol-papiers"], verifie: "octobre 2026"
  },
  {
    id: "harcelement-violences", theme: "droits", titre: "Harcèlement, cyberharcèlement et violences",
    accroche: "Qui appeler, comment se protéger et garder des preuves.",
    temps: "10 min", cout: "Gratuit", pour: ["lyceen", "etudiant", "salarie", "mineur"], quand: "Dès que tu es victime ou témoin.",
    mots: ["harcèlement", "cyberharcèlement", "violences", "3018", "3020", "3919", "119", "agression", "violences conjugales", "harcèlement scolaire"],
    todo: { si: ["lyceen", "etudiant", "p-victime"], prio: 2, pourquoi: "Savoir qui appeler permet de réagir vite." },
    enBref: [
      "**3018** : cyberharcèlement et violences numériques. **3020** : harcèlement scolaire. **119** : enfance en danger.",
      "**3919** : violences faites aux femmes, gratuit, anonyme.",
      "En danger immédiat : **17** ou **112** (et **114** par SMS)."
    ],
    etapes: [
      { t: "Se mettre en sécurité", d: "Éloigne-toi de la situation, va vers une personne de confiance. En danger : 17 ou 112." },
      { t: "Garder des preuves", d: "Captures d'écran avec date et pseudo, messages, mails, témoignages. Ne réponds pas aux provocations, et ne supprime rien." },
      { t: "Demander de l'aide", d: "- **3018** (cyber)\n- **3020** (harcèlement scolaire)\n- **119** (enfants et ados en danger)\n- **3919** (violences faites aux femmes)\nTous sont gratuits et confidentiels." },
      { t: "Signaler", d: "Signale les contenus sur la plateforme, puis sur **Pharos** (internet-signalement.gouv.fr). Au travail ou à l'école, informe un responsable, le médecin ou l'infirmier·ère." },
      { t: "Porter plainte", d: "Si les faits sont graves ou répétés, dépose plainte. Voir [Porter plainte](#guide-plainte-depot). Au travail, tu peux aussi prévenir l'inspection du travail ou saisir le Défenseur des droits." }
    ],
    pieges: [
      "Rester seul·e : parler à quelqu'un est le premier pas.",
      "Supprimer les messages avant d'en avoir fait une copie.",
      "Se venger en ligne : cela peut te mettre toi aussi en difficulté."
    ],
    liens: [
      { label: "3018 : cyberharcèlement", url: "https://3018.fr" },
      { label: "Non au harcèlement (3020)", url: "https://www.nonauharcelement.education.gouv.fr" },
      { label: "Pharos : signaler un contenu illicite", url: "https://www.internet-signalement.gouv.fr" }
    ],
    sources: ["3018.fr", "education.gouv.fr, Non au harcèlement (3020)", "arretonslesviolences.gouv.fr (3919)", "119 allo enfance en danger"],
    voir: ["plainte-depot", "defenseur-droits", "psy-sante-mentale"], verifie: "octobre 2026"
  },
  {
    id: "defenseur-droits", theme: "droits", titre: "Discrimination et conflit avec une administration : le Défenseur des droits",
    accroche: "Une institution gratuite pour contester une discrimination ou un litige avec un service public.",
    temps: "20 min", cout: "Gratuit", pour: ["lyceen", "etudiant", "salarie", "etranger"], quand: "Quand tu estimes avoir été traité·e injustement.",
    mots: ["défenseur des droits", "discrimination", "service public", "administration", "réclamation", "délégué", "recours", "conflit"],
    todo: { si: ["p-victime"], prio: 2, pourquoi: "C'est un recours gratuit et sans avocat." },
    enBref: [
      "Le **Défenseur des droits** peut être saisi **gratuitement**, sans avocat.",
      "Il traite les **discriminations**, les litiges avec les **services publics**, les droits des enfants et la déontologie des forces de sécurité.",
      "Tu peux le saisir en ligne ou rencontrer un·e **délégué·e** près de chez toi."
    ],
    etapes: [
      { t: "Essayer d'abord le dialogue", d: "Écris à l'organisme concerné pour demander une explication ou contester la décision. Garde une copie." },
      { t: "Constituer le dossier", d: "Décision contestée, dates, échanges, témoignages, preuves. Plus c'est précis, plus c'est utile." },
      { t: "Saisir le Défenseur des droits", d: "En ligne sur defenseurdesdroits.fr, par courrier gratuit, ou auprès d'un·e délégué·e (permanences dans les préfectures, maisons de justice et du droit...).", lien: { label: "Défenseur des droits", url: "https://www.defenseurdesdroits.fr" } },
      { t: "Suivre le traitement", d: "L'institution peut demander des explications, proposer une médiation ou faire des recommandations. Ce n'est pas un tribunal, mais ses avis pèsent." },
      { t: "Compléter si besoin", d: "Pour un litige au travail, un syndicat peut t'aider et le conseil de prud'hommes tranche les litiges individuels. Pour une action en justice, voir [Aide juridique](#guide-aide-juridique)." }
    ],
    pieges: [
      "Attendre trop longtemps : certains recours ont des délais.",
      "Saisir sans pièces.",
      "Confondre Défenseur des droits et tribunal."
    ],
    liens: [
      { label: "Défenseur des droits", url: "https://www.defenseurdesdroits.fr" },
      { label: "Service-Public : saisir en ligne le Défenseur des droits", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/R20689" }
    ],
    sources: ["defenseurdesdroits.fr", "Service-Public, Défenseur des droits"],
    voir: ["harcelement-violences", "aide-juridique", "droits-au-travail"], verifie: "octobre 2026"
  },
  {
    id: "aide-juridique", theme: "droits", titre: "Aide juridique gratuite : où trouver un conseil",
    accroche: "Points-justice, avocat, aide juridictionnelle : comment être conseillé·e sans te ruiner.",
    temps: "20 min", cout: "Gratuit ou sous conditions", pour: ["lyceen", "etudiant", "salarie", "chomeur"], quand: "Avant de t'engager dans une procédure.",
    mots: ["avocat", "aide juridictionnelle", "point-justice", "conseil juridique", "tribunal", "conciliateur", "justice", "procès"],
    todo: { si: ["p-victime", "p-dette"], prio: 2, pourquoi: "Un conseil gratuit évite des erreurs coûteuses." },
    enBref: [
      "Les **Points-justice** donnent un conseil juridique **gratuit**, anonyme et confidentiel.",
      "L'**aide juridictionnelle** peut prendre en charge tout ou partie des frais d'avocat, selon tes ressources.",
      "Pour un petit litige, un **conciliateur de justice** peut t'aider gratuitement."
    ],
    etapes: [
      { t: "Trouver le bon interlocuteur", d: "Cherche près de chez toi sur justice.fr : Point-justice, maison de justice et du droit, permanence d'avocat, conciliateur de justice.", lien: { label: "Annuaire de la justice", url: "https://www.justice.fr" } },
      { t: "Préparer ton rendez-vous", d: "Apporte les pièces utiles (contrat, courriers, mails) et résume les faits en quelques lignes avec les dates." },
      { t: "Demander l'aide juridictionnelle si besoin", d: "Si tes ressources sont faibles, tu peux demander que l'État prenne en charge les frais de procédure et d'avocat. Le dossier se fait en ligne ou au tribunal." },
      { t: "Envisager la conciliation ou la médiation", d: "Pour un litige entre particuliers ou avec un petit commerçant, c'est souvent plus rapide et moins coûteux qu'un procès." },
      { t: "Vérifier ton assurance", d: "Ton assurance habitation ou ta mutuelle peut inclure une garantie protection juridique." }
    ],
    pieges: [
      "Payer un « conseiller juridique » en ligne sans vérifier son sérieux.",
      "Laisser passer les délais de recours.",
      "Ne pas conserver les documents."
    ],
    liens: [
      { label: "justice.fr : accès au droit", url: "https://www.justice.fr" },
      { label: "Service-Public : aide juridictionnelle", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F18074" }
    ],
    sources: ["justice.fr, accès au droit", "Service-Public, aide juridictionnelle"],
    voir: ["defenseur-droits", "litige-conso", "decouvert-surendettement"], verifie: "octobre 2026"
  },
  {
    id: "donnees-perso", theme: "droits", titre: "Tes données personnelles : droit d'accès, effacement, plainte CNIL",
    accroche: "Faire supprimer une photo, retrouver ce qu'un site sait de toi et agir en cas de fuite.",
    temps: "20 min", cout: "Gratuit", pour: ["lyceen", "etudiant", "salarie"], quand: "Quand tu veux reprendre le contrôle de tes données en ligne.",
    mots: ["données personnelles", "rgpd", "cnil", "droit à l'oubli", "effacement", "photo", "réseaux sociaux", "fuite de données"],
    todo: { si: ["lyceen", "etudiant"], prio: 3, pourquoi: "Tes droits RGPD sont gratuits et s'exercent en quelques lignes." },
    enBref: [
      "Tu as le droit d'**accéder** à tes données, de les **corriger** et de demander leur **effacement**.",
      "Écris d'abord à l'organisme (le **délégué à la protection des données**), puis saisis la **CNIL** s'il ne répond pas.",
      "Un·e mineur·e peut demander l'effacement de contenus publiés quand il ou elle était enfant."
    ],
    etapes: [
      { t: "Identifier le site ou l'organisme", d: "Repère qui détient tes données (réseau social, boutique, jeu) et son contact « données personnelles » dans la politique de confidentialité." },
      { t: "Exercer ton droit par écrit", d: "Envoie une demande (mail ou formulaire) : accès, rectification, effacement ou opposition. L'organisme doit répondre dans un délai limité (en général un mois). Un modèle est dans les [lettres types](#lettres)." },
      { t: "Relancer et saisir la CNIL", d: "Sans réponse ou si la réponse est insuffisante, dépose une plainte en ligne sur cnil.fr.", lien: { label: "CNIL : plaintes", url: "https://www.cnil.fr/fr/plaintes" } },
      { t: "Se protéger ensuite", d: "Change tes mots de passe, active la double authentification, vérifie tes paramètres de confidentialité." },
      { t: "En cas de fuite de données", d: "Change tes mots de passe, surveille tes comptes, méfie-toi des mails de phishing. Voir [Arnaques](#guide-arnaques)." }
    ],
    pieges: [
      "Penser qu'un contenu supprimé de ton compte l'est partout.",
      "Réutiliser le même mot de passe sur plusieurs sites.",
      "Cliquer sur les liens de messages qui prétendent venir d'un site touché par une fuite."
    ],
    liens: [
      { label: "CNIL : exercer ses droits", url: "https://www.cnil.fr/fr/les-droits-pour-maitriser-vos-donnees-personnelles" },
      { label: "Cybermalveillance", url: "https://www.cybermalveillance.gouv.fr" }
    ],
    sources: ["cnil.fr, droits sur les données personnelles", "cybermalveillance.gouv.fr"],
    voir: ["arnaques", "harcelement-violences", "fraude-carte"], verifie: "octobre 2026"
  }
);
