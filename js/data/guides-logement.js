/* Thème « Logement, santé & CAF ». Sources : Service-Public, Caf, Visale, Action Logement, ameli. */
(P.GUIDES = P.GUIDES || []).push(
  {
    id: "trouver-logement", theme: "logement", titre: "Trouver un logement sans garant : dossier et Visale",
    accroche: "Monter un dossier solide, obtenir la caution gratuite Visale et éviter les arnaques.",
    temps: "1 h", cout: "Gratuit", mots: ["logement", "location", "garant", "visale", "caution", "dossier", "dossierfacile", "colocation", "crous"],
    enBref: [
      "**Visale** est la caution gratuite d'Action Logement : elle garantit les loyers impayés et les dégradations pour les locataires de **30 ans et moins**, étudiants et alternants compris.",
      "**DossierFacile** est un service public gratuit pour constituer un dossier numérique que le propriétaire peut vérifier.",
      "Un propriétaire ne peut demander qu'une **liste limitée de pièces** : pas de relevé bancaire, ni de carte Vitale."
    ],
    etapes: [
      { t: "Fixer ton budget", d: "Compte le loyer charges comprises, l'assurance, l'électricité, internet. Beaucoup de propriétaires visent des revenus d'environ trois fois le loyer : une caution comme Visale ou un garant compense des ressources plus faibles." },
      { t: "Constituer ton dossier", d: "- Pièce d'identité\n- Justificatif de domicile actuel\n- Justificatifs de ressources : contrat de travail ou d'alternance, bulletins de paie, avis de bourse, attestation d'aides\n- Dernier avis d'imposition (le tien, ou celui de tes parents si tu es rattaché·e)\n- Attestation d'inscription dans ton école", lien: { label: "Créer un dossier sur DossierFacile", url: "https://www.dossierfacile.logement.gouv.fr" } },
      { t: "Demander la garantie Visale", d: "Crée ton compte sur visale.fr et demande ton visa **avant de visiter** : tu le présentes au propriétaire à la place d'un garant. Le loyer maximum garanti dépend de la zone et de tes ressources : un simulateur te l'indique.", lien: { label: "Demander Visale", url: "https://www.visale.fr" } },
      { t: "Explorer les autres pistes", d: "Un garant physique, une caution bancaire, une résidence étudiante, ou une résidence du Crous (demande via ton dossier social étudiant sur messervices.etudiant.gouv.fr)." },
      { t: "Visiter et poser les bonnes questions", d: "Charges, chauffage, état des lieux, durée du bail, préavis. Voir [Bail et état des lieux](#guide-bail-etat-lieux)." },
      { t: "Signer, puis demander l'APL", d: "Dès la signature, ouvre ta demande d'aide au logement : voir [APL et ALS](#guide-apl-etudiant)." }
    ],
    pieges: [
      "Payer un **acompte ou envoyer des documents avant d'avoir visité** : c'est le schéma classique des fausses annonces.",
      "Envoyer ton dossier complet à n'importe qui : masque les données inutiles et ajoute la mention « document destiné à la location ».",
      "Croire qu'un étudiant sans garant n'a aucune chance : Visale existe pour ça, et les agences la connaissent."
    ],
    liens: [
      { label: "Visale", url: "https://www.visale.fr" },
      { label: "Garantie Visale (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F33453" },
      { label: "DossierFacile", url: "https://www.dossierfacile.logement.gouv.fr" }
    ],
    sources: ["Service-Public F33453 (Visale)", "Action Logement, garantie Visale (30 ans et moins)", "Visale.fr, éligibilité des locataires de 30 ans ou moins"],
    voir: ["bail-etat-lieux", "apl-etudiant", "arnaques"], verifie: "octobre 2026"
  },
  {
    id: "apl-etudiant", theme: "logement", titre: "APL, ALS : toucher une aide au logement",
    accroche: "Les conditions pour un étudiant, la demande à la Caf et les erreurs qui coûtent cher.",
    temps: "30 min", cout: "Gratuit", mots: ["apl", "als", "alf", "caf", "aide au logement", "loyer", "étudiant", "résidence principale"],
    enBref: [
      "Un étudiant peut recevoir l'**APL, l'ALS ou l'ALF** (selon le type de logement) pour l'aider à payer son loyer, sous conditions.",
      "L'aide n'est versée que pour ta **résidence principale**, occupée au moins **8 mois par an**.",
      "La demande se fait **en ligne sur caf.fr** : fais-la dès que tu as signé ton bail."
    ],
    etapes: [
      { t: "Vérifier les conditions de base", d: "- Un logement qui est ta **résidence principale** (au moins 8 mois par an)\n- Un bail à ton nom ou en colocation\n- Des ressources prises en compte selon ta situation\n- Pour les étudiants de pays hors Union européenne : des conditions spécifiques s'appliquent depuis le 1er juillet 2026, vérifie-les sur le site de la Caf." },
      { t: "Faire une simulation", d: "Le simulateur officiel donne un ordre de grandeur avant la demande.", lien: { label: "Simuler mon aide au logement", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/R2972" } },
      { t: "Déposer la demande sur caf.fr", d: "Tu auras besoin de ton bail, de ton RIB, de ton numéro de sécurité sociale et des informations sur tes ressources.", lien: { label: "Caf.fr", url: "https://www.caf.fr" } },
      { t: "Suivre le dossier", d: "Signale tout changement : job, alternance, colocation qui s'arrête, déménagement. La Caf réexamine tes droits régulièrement." },
      { t: "Cumuler avec les autres aides", d: "L'aide au logement se cumule avec une bourse. Si tu travailles, regarde aussi la [prime d'activité](#guide-prime-activite)." }
    ],
    pieges: [
      "Attendre pour faire la demande : l'aide dépend de la date de ta demande et de ton entrée dans le logement.",
      "Ne pas déclarer un changement de situation : la Caf peut te demander de rembourser un trop-perçu.",
      "Prendre la simulation pour un engagement : seul l'examen de ta demande par la Caf fait foi."
    ],
    liens: [
      { label: "Un étudiant peut-il bénéficier d'une aide au logement ? (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1563" },
      { label: "Aide personnalisée au logement (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F12006" },
      { label: "Simulation Caf : le logement", url: "https://www.caf.fr" }
    ],
    sources: ["Service-Public F1563, F12006, R2972 (APL pour les étudiants, résidence principale 8 mois)", "Caf.fr, simulateur logement"],
    voir: ["trouver-logement", "bail-etat-lieux", "prime-activite"], verifie: "octobre 2026"
  },
  {
    id: "bail-etat-lieux", theme: "logement", titre: "Bail, dépôt de garantie, état des lieux, préavis",
    accroche: "Les règles de base d'un locataire pour ne pas perdre d'argent.",
    temps: "20 min", cout: "Gratuit", mots: ["bail", "état des lieux", "dépôt de garantie", "préavis", "assurance habitation", "loyer", "colocation", "agence"],
    enBref: [
      "**Dépôt de garantie** : au maximum 1 mois de loyer hors charges pour un logement vide, 2 mois pour un meublé.",
      "**Préavis** du locataire : 3 mois pour un logement vide, 1 mois pour un meublé (ou en zone tendue).",
      "L'**assurance habitation** est obligatoire pour un locataire : fournis l'attestation à la remise des clés."
    ],
    etapes: [
      { t: "Lire le bail avant de signer", d: "Vérifie le loyer, les charges, la durée (3 ans pour un logement vide, 1 an pour un meublé, 9 mois pour un bail étudiant meublé), le dépôt de garantie et la clause de colocation si tu en as une." },
      { t: "Faire l'état des lieux d'entrée", d: "Photographie tout, note les défauts, relève les compteurs. Garde un exemplaire signé. Si tu repères un défaut après coup, signale-le par écrit." },
      { t: "T'assurer", d: "Souscris une assurance habitation avant d'emménager (certaines résidences étudiantes ou banques proposent des offres adaptées)." },
      { t: "Payer et garder les preuves", d: "Garde les quittances de loyer, les virements et la liste des charges. Si l'aide au logement est versée directement au propriétaire, vérifie qu'il l'a bien déduite." },
      { t: "Partir proprement", d: "Envoie ton préavis en lettre recommandée (ou remise en main propre contre signature). Fais l'état des lieux de sortie, rends les clés et demande la restitution du dépôt : le propriétaire dispose d'un à deux mois selon que l'état des lieux est identique ou non." },
      { t: "Contester si besoin", d: "En cas de désaccord, une association de locataires ou la commission de conciliation peut t'aider avant d'aller plus loin." }
    ],
    pieges: [
      "Signer un état des lieux d'entrée trop rapide : tu risques d'être tenu·e pour responsable de défauts existants.",
      "Payer des frais d'agence abusifs : les honoraires facturés au locataire sont plafonnés.",
      "Oublier le préavis : sans lettre, le loyer continue de courir.",
      "Laisser le dépôt de garantie sans demande de restitution."
    ],
    liens: [
      { label: "Service-Public : particuliers, logement", url: "https://www.service-public.gouv.fr/particuliers" },
      { label: "ADIL : conseils gratuits sur le logement", url: "https://www.anil.org" }
    ],
    sources: ["Loi du 6 juillet 1989 (bail d'habitation)", "Service-Public, rubrique logement", "ANIL / ADIL, conseils aux locataires"],
    voir: ["trouver-logement", "apl-etudiant", "changement-adresse"], verifie: "octobre 2026"
  },
  {
    id: "secu-18-ans", theme: "logement", titre: "Sécurité sociale : ma carte Vitale et mon compte ameli",
    accroche: "Ouvrir tes propres droits : compte ameli, carte Vitale, médecin traitant.",
    temps: "20 min", cout: "Gratuit", mots: ["sécurité sociale", "ameli", "carte vitale", "médecin traitant", "18 ans", "cpam", "santé"],
    enBref: [
      "Les étudiants relèvent directement de l'Assurance Maladie : **il n'y a plus de cotisation de sécurité sociale étudiante**.",
      "Crée ton **compte ameli** : remboursements, attestation de droits, carte Vitale, changement d'adresse.",
      "**Déclare un médecin traitant** : sans lui, tu es moins bien remboursé·e."
    ],
    etapes: [
      { t: "Retrouver ton numéro de sécurité sociale", d: "Il figure sur ta carte Vitale ou sur une attestation de droits. Vérifie que ton nom, ta date de naissance et ton adresse sont à jour." },
      { t: "Créer ton compte ameli", d: "Avec ton numéro, ton code postal et ton RIB, ou via FranceConnect. Tu y télécharges ton attestation de droits et suis tes remboursements.", lien: { label: "ameli.fr", url: "https://www.ameli.fr" } },
      { t: "Déclarer ton médecin traitant", d: "Choisis un médecin (généraliste ou autre) et déclare-le à l'Assurance Maladie : c'est la base du « parcours de soins » qui assure les meilleurs remboursements." },
      { t: "Ajouter ton RIB et activer Mon espace santé", d: "Ton RIB permet les remboursements sur ton compte. Mon espace santé rassemble tes documents de santé : active-le et choisis qui peut y accéder.", lien: { label: "Mon espace santé", url: "https://www.monespacesante.fr" } },
      { t: "Voir ta mutuelle", d: "L'Assurance Maladie rembourse une partie des soins ; la mutuelle complète le reste. Voir [Mutuelle et C2S](#guide-mutuelle-c2s)." }
    ],
    pieges: [
      "Ne pas déclarer de médecin traitant : les consultations sont moins remboursées.",
      "Oublier de mettre à jour ton adresse : les courriers importants se perdent.",
      "Tomber sur un faux site ameli qui te demande ton numéro, ton RIB ou un paiement : voir [arnaques](#guide-arnaques)."
    ],
    liens: [
      { label: "ameli.fr", url: "https://www.ameli.fr" },
      { label: "Mon espace santé", url: "https://www.monespacesante.fr" }
    ],
    sources: ["ameli.fr, étudiants et assurance maladie", "Service-Public, assurance maladie des étudiants"],
    voir: ["mutuelle-c2s", "comptes-a-creer", "arnaques"], verifie: "octobre 2026"
  },
  {
    id: "mutuelle-c2s", theme: "logement", titre: "Mutuelle et Complémentaire santé solidaire (C2S)",
    accroche: "Rester sur celle de tes parents, prendre la tienne ou obtenir la C2S.",
    temps: "20 min", cout: "Gratuit à faible coût", mots: ["mutuelle", "c2s", "complémentaire santé solidaire", "monparcourspsy", "santé", "reste à charge"],
    enBref: [
      "La **mutuelle** rembourse ce que la Sécurité sociale laisse à ta charge (dentaire, optique, dépassements).",
      "Tu peux souvent **rester sur la mutuelle de tes parents** tant que ton contrat le permet (limite d'âge variable).",
      "La **C2S** est une complémentaire gratuite ou à petit prix selon tes ressources, sans avance de frais chez le médecin."
    ],
    etapes: [
      { t: "Demander à tes parents ce que couvre leur contrat", d: "Âge limite des enfants, conditions (études, ressources), garanties dentaires et optiques. C'est souvent la solution la moins chère." },
      { t: "Tester ton éligibilité à la C2S", d: "Un simulateur officiel te dit si tu peux y prétendre selon tes ressources et ton foyer.", lien: { label: "Complémentaire santé solidaire", url: "https://www.complementaire-sante-solidaire.gouv.fr" } },
      { t: "Comparer les mutuelles étudiantes", d: "Regarde le prix, mais aussi dentaire, optique, psy, hospitalisation. Évite les contrats qui doublonnent avec une couverture existante." },
      { t: "Penser à la santé mentale", d: "Des dispositifs permettent de consulter un psychologue avec une prise en charge, par exemple MonParcoursPsy ou le service de santé de ton établissement. Renseigne-toi auprès de ton médecin ou de ton université." }
    ],
    pieges: [
      "Prendre deux mutuelles pour la même chose : tu paies deux fois sans être mieux remboursé·e.",
      "Ne pas résilier un contrat que tu n'utilises plus.",
      "Retarder les soins par peur du coût : la C2S et d'autres aides existent."
    ],
    liens: [
      { label: "Complémentaire santé solidaire", url: "https://www.complementaire-sante-solidaire.gouv.fr" },
      { label: "ameli : droits et démarches", url: "https://www.ameli.fr" }
    ],
    sources: ["Complementaire-sante-solidaire.gouv.fr", "ameli.fr, complémentaire santé"],
    voir: ["secu-18-ans", "arnaques"], verifie: "octobre 2026"
  },
  {
    id: "prime-activite", theme: "logement", titre: "Prime d'activité : étudiants salariés et apprentis",
    accroche: "Un complément de revenu de la Caf quand tu travailles, sous conditions.",
    temps: "20 min", cout: "Gratuit", mots: ["prime d'activité", "caf", "apprenti", "étudiant salarié", "complément", "revenus"],
    enBref: [
      "Les **étudiants salariés, apprentis et stagiaires de plus de 18 ans** peuvent y avoir droit.",
      "Il faut une activité dont le **revenu mensuel dépasse 1 144,21 €** ; la **gratification de stage ne compte pas** comme revenu d'activité.",
      "La prime n'est **pas imposable**, elle est versée à partir du 1er jour du mois de la demande, et pas en dessous de 15 €."
    ],
    etapes: [
      { t: "Vérifier tes conditions", d: "Avoir plus de 18 ans, résider en France de façon stable, et avoir un revenu d'activité mensuel supérieur à 1 144,21 €. Le montant forfaitaire de base est de 638,28 €." },
      { t: "Simuler", d: "Le simulateur de la Caf estime ton droit selon ta situation.", lien: { label: "Simulateur prime d'activité (Caf)", url: "https://wwwd.caf.fr/wps/portal/caffr/simulateurpa/" } },
      { t: "Faire la demande en ligne", d: "Sur caf.fr, avec ton numéro d'allocataire ou en créant ton espace. Après examen, la prime est attribuée pour 3 mois.", lien: { label: "Demande de prime d'activité", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/R42724" } },
      { t: "Remplir la déclaration trimestrielle", d: "Chaque trimestre, valide tes ressources préremplies et complète-les si besoin. Sans déclaration, le versement s'arrête." },
      { t: "Signaler les changements", d: "Changement de contrat, fin d'apprentissage, déménagement : informe la Caf rapidement." }
    ],
    pieges: [
      "Compter sur la prime avec un petit job : le seuil de 1 144,21 € de revenu mensuel s'applique aux étudiants et apprentis.",
      "Oublier la déclaration trimestrielle.",
      "Un trop-perçu peut être réclamé pendant 2 ans."
    ],
    liens: [
      { label: "Prime d'activité : étudiant, stagiaire, apprenti (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F33375" },
      { label: "Prime d'activité revalorisée en 2026", url: "https://www.service-public.gouv.fr/particuliers/actualites/A18815" }
    ],
    sources: ["Service-Public F33375 (vérifiée le 1er juin 2026)", "Service-Public A18815, revalorisation 2026"],
    voir: ["apprenti-impots", "apl-etudiant", "job-etudiant-impots"], verifie: "octobre 2026"
  },
  {
    id: "cej", theme: "logement", titre: "Contrat d'engagement jeune : ni études, ni emploi",
    accroche: "Un accompagnement et une allocation pour les 16-25 ans qui cherchent leur voie.",
    temps: "30 min", cout: "Gratuit", mots: ["cej", "contrat d'engagement jeune", "mission locale", "france travail", "allocation", "ni ni", "16 25 ans"],
    enBref: [
      "Pour les **16-25 ans** (29 ans en situation de handicap) sans emploi, sans études et sans formation.",
      "Un accompagnement personnalisé par la **mission locale** ou **France Travail**, avec une **allocation mensuelle** pouvant aller jusqu'à environ 560 €.",
      "Le montant dépend de ton âge et de la situation fiscale de ton foyer."
    ],
    etapes: [
      { t: "Vérifier que tu es concerné·e", d: "Tu as entre 16 et 25 ans révolus (29 si handicap), tu n'es ni en emploi, ni en études, ni en formation, et tu as besoin d'un accompagnement vers l'emploi.", lien: { label: "Le contrat d'engagement jeune (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F32700" } },
      { t: "Contacter la mission locale ou France Travail", d: "Prends rendez-vous avec la mission locale de ton secteur ou inscris-toi auprès de France Travail : un conseiller évalue ta situation." },
      { t: "Signer le contrat", d: "Il fixe un parcours d'activités (formation, immersion, accompagnement) et des engagements de ta part." },
      { t: "Comprendre l'allocation", d: "À la date de vérification, entre 18 et 25 ans : 561,68 € si ton foyer fiscal n'est pas imposable, 337 € s'il est imposable à la première tranche ; entre 16 et 18 ans : 224,68 €. Ces montants sont revalorisés.", lien: { label: "L'allocation CEJ (France Travail)", url: "https://www.francetravail.fr/candidat/mes-droits-aux-aides-et-allocati/aides-financieres-et-autres-allo/autres-allocations/lallocation-cej--les-reponses-a.html" } },
      { t: "Compléter avec les autres aides", d: "Selon ta situation : logement ([APL](#guide-apl-etudiant)), santé ([C2S](#guide-mutuelle-c2s)), comptes administratifs ([les comptes à ouvrir](#guide-comptes-a-creer))." }
    ],
    pieges: [
      "Penser que l'allocation est automatique : elle est liée à la signature du contrat et au respect de tes engagements.",
      "Ne pas déclarer un changement de situation (emploi, formation, ressources) : l'allocation peut être suspendue ou réclamée."
    ],
    liens: [
      { label: "Contrat d'engagement jeune (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F32700" },
      { label: "1jeune1solution", url: "https://www.1jeune1solution.gouv.fr" }
    ],
    sources: ["Service-Public F32700 (CEJ)", "France Travail, allocation CEJ (montants à la date de vérification)"],
    voir: ["comptes-a-creer", "mutuelle-c2s", "trouver-logement"], verifie: "octobre 2026"
  }
);
