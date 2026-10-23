/* Guides supplémentaires dans les thèmes existants : logement, travail, argent, santé, droits, papiers.
   Sources : Service-Public, code.travail.gouv.fr, Action Logement, ameli, lassuranceretraite.fr, economie.gouv.fr, vaccination-info-service.fr. */
(P.GUIDES = P.GUIDES || []).push(
  /* ——— Logement */
  {
    id: "demenagement", theme: "logement", titre: "Déménager : la check-list avant, pendant, après",
    accroche: "Préavis, assurance, énergie, internet, adresse : l'ordre pour ne rien oublier.",
    temps: "30 min", cout: "Gratuit", pour: ["etudiant", "alternant", "salarie"], quand: "6 à 8 semaines avant le déménagement.",
    mots: ["déménager", "déménagement", "changement d'adresse", "check-list", "emménager", "carton", "nouvelle adresse"],
    todo: { si: ["cherche-logement", "locataire"], prio: 2, pourquoi: "Un déménagement mal préparé coûte des loyers et des abonnements en double." },
    enBref: [
      "Tu peux **déclarer ton changement d'adresse en ligne, en une seule fois**, à plusieurs organismes (CPAM, impôts, France Travail, Caf, fournisseur d'énergie…).",
      "Donne ton **préavis** à ton propriétaire dans les délais et prévois l'**état des lieux de sortie**.",
      "Pense à ta **nouvelle assurance habitation** et à tes contrats d'énergie et d'internet avant l'arrivée."
    ],
    etapes: [
      { t: "Avant : préavis et contrats", d: "Envoie ton congé (voir [Quitter son logement](#guide-preavis-logement)), résilie ou transfère électricité, gaz et internet, et souscris ta nouvelle assurance (voir [Assurance habitation](#guide-assurance-habitation))." },
      { t: "Avant : organiser le déménagement", d: "Réserve le véhicule ou les déménageurs, fais le tri, prépare les cartons et garde avec toi tes papiers importants." },
      { t: "Le jour J : états des lieux et relevés", d: "Fais l'état des lieux de sortie, relève les compteurs (en photo) et récupère l'attestation d'assurance de ton nouveau logement. Voir [Bail, état des lieux](#guide-bail-etat-lieux)." },
      { t: "Après : changer d'adresse en ligne", d: "Utilise la déclaration unique en ligne pour la CPAM, les impôts, France Travail, la Caf et d'autres organismes. Puis préviens à part ta banque, ta mutuelle, ton employeur et ton école.", lien: { label: "Je déménage en France (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F14128" } },
      { t: "Après : papiers et liste électorale", d: "Mets à jour ta carte grise et ton inscription électorale si besoin. Voir [Changer d'adresse : qui prévenir](#guide-changement-adresse)." }
    ],
    pieges: [
      "Oublier de résilier internet : les frais de résiliation peuvent être élevés.",
      "Ne pas relever les compteurs le jour du départ ou de l'arrivée.",
      "Ne pas prévenir la Caf : ton APL peut être suspendue ou mal calculée."
    ],
    liens: [
      { label: "Je déménage en France (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F14128" },
      { label: "Déclaration de changement d'adresse en ligne", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/R11193" }
    ],
    sources: ["Service-Public F14128 et R11193 (déclaration unique de changement d'adresse en ligne)"],
    voir: ["preavis-logement", "changement-adresse", "energie-internet", "assurance-habitation"], verifie: "octobre 2026"
  },
  {
    id: "loyer-hausse", theme: "logement", titre: "Hausse de loyer : ce que le propriétaire peut (ou non) faire",
    accroche: "IRL, révision annuelle, encadrement en zone tendue.",
    temps: "15 min", cout: "Gratuit", pour: ["etudiant", "alternant", "salarie"], quand: "Dès que tu reçois un courrier d'augmentation.",
    mots: ["loyer", "augmentation", "irl", "indice de référence des loyers", "révision", "zone tendue", "encadrement", "propriétaire"],
    todo: { si: ["locataire"], prio: 3, pourquoi: "Une augmentation hors des règles est contestable." },
    enBref: [
      "Pour un logement loué **vide**, le propriétaire ne peut augmenter le loyer **en cours de bail que dans certains cas**.",
      "La **révision annuelle** est limitée par l'évolution de l'**IRL** (indice de référence des loyers).",
      "En **zone tendue**, des règles d'encadrement s'appliquent aussi à la remise en location."
    ],
    etapes: [
      { t: "Lire ton bail", d: "Il doit prévoir une clause de révision et une date. Sans clause, pas de révision.", lien: { label: "Augmentation et révision du loyer (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1311" } },
      { t: "Comparer avec l'IRL", d: "L'augmentation maximale correspond à l'évolution annuelle de l'IRL.", lien: { label: "Indice de référence des loyers (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F13723" } },
      { t: "Vérifier si ton logement est en zone tendue", d: "Dans ce cas, l'encadrement limite les hausses lors de nouveaux baux.", lien: { label: "Encadrement des loyers en zone tendue (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1314" } },
      { t: "Contester par écrit", d: "Réponds par lettre recommandée en citant la règle. Garde une copie." },
      { t: "Demander de l'aide", d: "L'ADIL de ton département donne un conseil juridique gratuit sur le logement. Voir [Qui contacter](#contacts)." }
    ],
    pieges: [
      "Payer une hausse sans vérifier qu'elle est autorisée.",
      "Refuser de payer le loyer en attendant : conteste par écrit, mais continue de payer le loyer dû.",
      "Ne pas garder trace des échanges."
    ],
    liens: [
      { label: "Augmentation et révision du loyer (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1311" },
      { label: "IRL (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F13723" }
    ],
    sources: ["Service-Public F1311 (hausse du loyer en cours de bail dans certains cas seulement)", "Service-Public F13723 (IRL) et F1314 (encadrement en zone tendue)"],
    voir: ["bail-etat-lieux", "reparations-charges", "logement-indecent"], verifie: "octobre 2026"
  },
  {
    id: "reparations-charges", theme: "logement", titre: "Réparations et charges : qui paie quoi ?",
    accroche: "Entretien courant du locataire, charges récupérables, gros travaux du propriétaire.",
    temps: "15 min", cout: "Gratuit", pour: ["etudiant", "alternant", "salarie"], quand: "Quand quelque chose tombe en panne ou à la régularisation des charges.",
    mots: ["réparations locatives", "charges locatives", "entretien", "panne", "chaudière", "régularisation des charges", "propriétaire", "locataire"],
    todo: { si: ["locataire"], prio: 3, pourquoi: "Savoir qui paie évite des retenues abusives sur le dépôt de garantie." },
    enBref: [
      "Le locataire doit l'**entretien courant** et les **réparations locatives** (liste officielle non exhaustive).",
      "Le propriétaire se fait rembourser les **charges récupérables** par le locataire.",
      "Les **gros travaux** et la vétusté restent en principe à la charge du propriétaire."
    ],
    etapes: [
      { t: "Consulter la liste des réparations locatives", d: "Elle détaille ce qui relève du locataire (joints, ampoules, entretien des équipements…).", lien: { label: "Réparations locatives à la charge du locataire (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F31697" } },
      { t: "Comprendre les charges", d: "Eau, entretien de l'immeuble, ascenseur : le propriétaire peut les récupérer sous forme de provisions puis de régularisation.", lien: { label: "Charges à payer par le locataire (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F947" } },
      { t: "Signaler une panne", d: "Préviens le propriétaire par écrit (mail ou recommandé) avec photos. Garde une trace de sa réponse." },
      { t: "Contrôler la régularisation", d: "Demande le détail des charges et les justificatifs si le montant te surprend." },
      { t: "Au départ", d: "Compare avec l'état des lieux d'entrée : seule la dégradation hors usure normale peut justifier une retenue. Voir [Quitter son logement](#guide-preavis-logement)." }
    ],
    pieges: [
      "Faire réaliser de gros travaux à tes frais sans accord écrit.",
      "Accepter une retenue sur le dépôt de garantie pour une usure normale.",
      "Ne pas garder tes justificatifs."
    ],
    liens: [
      { label: "Réparations locatives (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F31697" },
      { label: "Charges locatives (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F947" }
    ],
    sources: ["Service-Public F31697 (réparations locatives) et F947 (charges récupérables)"],
    voir: ["bail-etat-lieux", "logement-indecent", "preavis-logement"], verifie: "octobre 2026"
  },
  {
    id: "logement-indecent", theme: "logement", titre: "Logement indécent, humide, mal chauffé : tes recours",
    accroche: "Mise en demeure, saisine du juge, aides : comment faire valoir tes droits de locataire.",
    temps: "30 min", cout: "Gratuit", pour: ["etudiant", "alternant", "salarie"], quand: "Dès que le problème persiste après une première demande.",
    mots: ["logement indécent", "insalubre", "humidité", "chauffage", "moisissure", "recours locataire", "logement non décent", "mise en demeure"],
    todo: { si: ["locataire"], prio: 3, pourquoi: "Un logement doit rester décent : tu as des recours." },
    enBref: [
      "En général, un chauffage est jugé **insuffisant** s'il ne permet pas d'atteindre **18 °C au centre de chaque pièce**.",
      "Commence par une **lettre recommandée** de mise en demeure au propriétaire.",
      "Sans réponse, tu peux saisir le **juge des contentieux de la protection**."
    ],
    etapes: [
      { t: "Constater et documenter", d: "Photos, relevés de température, mails, factures. Plus ton dossier est précis, mieux c'est." },
      { t: "Écrire au propriétaire", d: "Envoie un courrier recommandé qui décrit le problème et demande de le faire cesser. Voir [Qui contacter](#contacts) pour l'ADIL.", lien: { label: "Température d'un logement (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F32563" } },
      { t: "Saisir les organismes compétents", d: "Mairie, ADIL, et, pour un habitat insalubre, les services compétents de la commune ou de l'ARS.", lien: { label: "Habitat insalubre (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F16158" } },
      { t: "Aller devant le juge", d: "Sans réponse, le locataire peut saisir le juge des contentieux de la protection du tribunal dont dépend le logement." },
      { t: "Continuer de payer ton loyer", d: "Sauf décision de justice, ne suspends pas le paiement. Voir [Aide juridique gratuite](#guide-aide-juridique)." }
    ],
    pieges: [
      "Arrêter de payer le loyer sans décision de justice.",
      "Ne pas garder de preuves.",
      "Attendre trop longtemps avant de faire une première demande écrite."
    ],
    liens: [
      { label: "À quelle température doit être chauffé un logement ? (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F32563" },
      { label: "Habitat insalubre ou indigne (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F16158" }
    ],
    sources: ["Service-Public F32563 (chauffage insuffisant sous 18 °C, mise en demeure puis juge)", "Service-Public F16158 (habitat insalubre)"],
    voir: ["reparations-charges", "aide-juridique", "bail-etat-lieux"], verifie: "octobre 2026"
  },
  {
    id: "logement-social", theme: "logement", titre: "Demander un logement social (HLM)",
    accroche: "Plafonds de ressources, numéro unique, délais et situations prioritaires.",
    temps: "45 min", cout: "Gratuit", pour: ["etudiant", "alternant", "salarie", "chomeur"], quand: "Dès que tu peux, même si tu n'es pas pressé·e : l'ancienneté de la demande compte.",
    mots: ["hlm", "logement social", "demande de logement social", "numéro unique", "bailleur social", "plafond de ressources", "attente"],
    todo: { si: ["cherche-logement", "locataire"], prio: 3, pourquoi: "Les délais sont longs : mieux vaut déposer la demande tôt." },
    enBref: [
      "Il faut **faire une demande** et **ne pas dépasser un revenu maximum**, qui dépend du nombre de personnes à loger et du lieu.",
      "Le **délai d'attente** varie selon le logement et la commune.",
      "Certaines situations sont **prioritaires** : handicap, mal-logement, absence de logement, menace d'expulsion, victime de violences."
    ],
    etapes: [
      { t: "Vérifier les conditions", d: "Les plafonds de ressources varient selon la zone et la composition du foyer.", lien: { label: "Conditions pour obtenir un logement social (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F869" } },
      { t: "Déposer la demande", d: "En ligne sur le site national ou auprès d'un bailleur social, d'une mairie ou d'un service habitat. Tu reçois un numéro unique.", lien: { label: "Faire une demande de logement social (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F10007" } },
      { t: "Joindre les pièces", d: "Pièce d'identité, avis d'imposition, justificatifs de ressources, situation familiale et motif de la demande." },
      { t: "Renouveler chaque année", d: "La demande doit être renouvelée pour garder ton ancienneté : ne rate pas la date indiquée dans ton courrier." },
      { t: "Chercher en parallèle", d: "Pense aussi à Visale et aux aides Action Logement. Voir [Aides Action Logement](#guide-aides-action-logement)." }
    ],
    pieges: [
      "Oublier de renouveler la demande : tu perds ton ancienneté.",
      "Ne pas préciser une situation prioritaire.",
      "Ne demander qu'un seul bailleur ou une seule commune."
    ],
    liens: [
      { label: "Conditions pour un logement social (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F869" },
      { label: "Faire une demande de logement social (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F10007" },
      { label: "Demande de logement social (site national)", url: "https://www.demande-logement-social.gouv.fr" }
    ],
    sources: ["Service-Public F869 et F10007 (conditions, délai d'attente variable, situations prioritaires)"],
    voir: ["trouver-logement", "apl-etudiant", "aides-action-logement"], verifie: "octobre 2026"
  },
  {
    id: "aides-action-logement", theme: "logement", titre: "Action Logement : Mobili-Jeune, Loca-Pass, Visale",
    accroche: "Trois aides pour les moins de 30 ans : une partie du loyer, le dépôt de garantie et la caution.",
    temps: "30 min", cout: "Gratuit", pour: ["etudiant", "alternant", "salarie", "chomeur"], quand: "Avant de signer le bail.",
    mots: ["action logement", "mobili-jeune", "loca-pass", "avance dépôt de garantie", "visale", "alternant", "aide au loyer", "moins de 30 ans"],
    todo: { si: ["alternant", "cherche-logement"], prio: 1, pourquoi: "Ces aides se demandent avant ou juste après l'entrée dans le logement." },
    enBref: [
      "L'**aide Mobili-Jeune** prend en charge une partie du loyer des **moins de 30 ans, alternants** d'une entreprise du secteur privé non agricole.",
      "L'**avance Loca-Pass** finance ton **dépôt de garantie** : prêt à **taux 0 %**, **jusqu'à 1 200 €**.",
      "La **garantie Visale** est une caution **gratuite** (voir [Visale](#guide-visale-garant))."
    ],
    etapes: [
      { t: "Vérifier ton éligibilité", d: "Âge, statut (alternant, salarié, recherche d'emploi), type de logement : les conditions sont sur le site d'Action Logement.", lien: { label: "L'aide Mobili-Jeune (Action Logement)", url: "https://www.actionlogement.fr/l-aide-mobili-jeune" } },
      { t: "Demander l'avance Loca-Pass", d: "Elle concerne les salarié·es du secteur privé non agricole (quel que soit l'âge), les moins de 30 ans en emploi, en alternance ou en recherche d'emploi, et certains étudiants salariés ou boursiers. L'avance ne couvre que la part de dépôt de garantie demandée à chaque colocataire.", lien: { label: "L'avance Loca-Pass (Action Logement)", url: "https://www.actionlogement.fr/l-avance-loca-pass" } },
      { t: "Faire la demande Mobili-Jeune", d: "Crée ton compte sur la plateforme dédiée et dépose tes justificatifs en ligne.", lien: { label: "Demander Mobili-Jeune", url: "https://mobilijeune.actionlogement.fr/" } },
      { t: "Ajouter Visale", d: "Si tu n'as pas de garant, demande le visa avant de signer le bail.", lien: { label: "Visale (Action Logement)", url: "https://www.actionlogement.fr/la-garantie-visale" } },
      { t: "Cumuler avec la Caf", d: "Ces aides se combinent avec l'APL selon les cas : renseigne-toi. Voir [APL](#guide-apl-etudiant)." }
    ],
    pieges: [
      "Faire la demande après avoir payé le dépôt de garantie : l'avance se demande selon des délais précis.",
      "Ne pas vérifier ton statut (alternant, secteur privé non agricole).",
      "Passer par un site non officiel."
    ],
    liens: [
      { label: "L'aide Mobili-Jeune (Action Logement)", url: "https://www.actionlogement.fr/l-aide-mobili-jeune" },
      { label: "L'avance Loca-Pass (Action Logement)", url: "https://www.actionlogement.fr/l-avance-loca-pass" }
    ],
    sources: ["Action Logement, Mobili-Jeune (moins de 30 ans, alternants du secteur privé non agricole)", "Action Logement, Loca-Pass (prêt à 0 %, jusqu'à 1 200 €)"],
    voir: ["visale-garant", "apl-etudiant", "trouver-logement", "alternance"], verifie: "octobre 2026"
  },
  {
    id: "location-saisonniere", theme: "logement", titre: "Louer sur Airbnb ou en location saisonnière : impôts et règles",
    accroche: "Les revenus sont imposables : ce qu'il faut déclarer et à quel moment.",
    temps: "20 min", cout: "Gratuit", pour: ["etudiant", "salarie"], quand: "Avant de publier une annonce, puis chaque printemps.",
    mots: ["airbnb", "location saisonnière", "meublé de tourisme", "location de vacances", "revenus locatifs", "plateforme", "déclaration"],
    todo: { si: ["r-plateforme"], prio: 2, pourquoi: "Les plateformes transmettent un récapitulatif de tes revenus à l'administration." },
    enBref: [
      "Les revenus tirés d'un **meublé de tourisme** sont **soumis à l'impôt sur le revenu** (loueur non professionnel) et se déclarent dans une **déclaration complémentaire**.",
      "La **plateforme** doit te fournir **en janvier** un document indiquant le **montant brut** de tes transactions de l'année passée.",
      "Si tu es locataire, regarde ton **bail** : la sous-location sans accord du propriétaire est interdite."
    ],
    etapes: [
      { t: "Vérifier que tu en as le droit", d: "Propriétaire : certaines communes imposent une déclaration ou un enregistrement. Locataire : la sous-location nécessite l'accord écrit du propriétaire." },
      { t: "Garder le récapitulatif de la plateforme", d: "Télécharge chaque janvier le document de revenus de l'année passée.", lien: { label: "Location de vacances en résidence secondaire (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2043" } },
      { t: "Déclarer tes revenus", d: "Dans la déclaration complémentaire de revenus, selon la catégorie qui t'est applicable. Voir [Vinted, Leboncoin, Airbnb](#guide-plateformes-revenus).", lien: { label: "Location de sa résidence principale en meublé de tourisme (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F33175" } },
      { t: "Gérer assurance et voisinage", d: "Préviens ton assureur et la copropriété, respecte le règlement et les voisins." },
      { t: "Si l'activité devient régulière", d: "Elle peut relever d'un statut professionnel (micro-entreprise). Voir [Créer sa micro-entreprise](#guide-creer-micro)." }
    ],
    pieges: [
      "Croire que les revenus d'une plateforme ne sont pas vus par l'administration.",
      "Sous-louer sans accord du propriétaire.",
      "Oublier la déclaration complémentaire."
    ],
    liens: [
      { label: "Meublé de tourisme en résidence secondaire (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2043" },
      { label: "Meublé de tourisme en résidence principale (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F33175" }
    ],
    sources: ["Service-Public F2043 et F33175 (meublé de tourisme : impôt sur le revenu, document de la plateforme en janvier)"],
    voir: ["plateformes-revenus", "creer-micro", "bail-etat-lieux"], verifie: "octobre 2026"
  },

  /* ——— Travail */
  {
    id: "rupture-conventionnelle", theme: "travail", titre: "Rupture conventionnelle : la procédure pas à pas",
    accroche: "Rétractation de 15 jours, homologation, pas de préavis et indemnité minimale.",
    temps: "30 min", cout: "Gratuit", pour: ["salarie", "alternant"], quand: "Quand toi et ton employeur voulez vous séparer d'un commun accord.",
    mots: ["rupture conventionnelle", "départ négocié", "indemnité de rupture", "rétractation", "homologation", "cdi", "dreets", "télérc"],
    todo: { si: ["salarie"], prio: 3, pourquoi: "Savoir comment ça marche avant d'en discuter avec ton employeur." },
    enBref: [
      "Après la signature, **chacun a 15 jours calendaires pour se rétracter**.",
      "La convention est ensuite envoyée à l'administration (Dreets) : elle a **15 jours ouvrables** pour répondre, et **sans réponse la convention est homologuée**.",
      "Il n'y a **pas de préavis**, et l'**indemnité** ne peut pas être inférieure à l'indemnité légale de licenciement."
    ],
    etapes: [
      { t: "Discuter et se mettre d'accord", d: "La rupture doit être voulue par les deux parties : personne ne peut te l'imposer. Tu peux te faire assister lors des entretiens." },
      { t: "Signer la convention", d: "Elle fixe la date de rupture, le montant de l'indemnité et la date de fin du délai de rétractation.", lien: { label: "Rupture conventionnelle (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F19030" } },
      { t: "Respecter le délai de rétractation", d: "15 jours calendaires à partir du lendemain de la signature. Pendant ce temps, chacun peut revenir sur sa décision." },
      { t: "Demande d'homologation", d: "L'employeur (ou toi) envoie la convention à l'administration via le téléservice dédié. Un refus doit être motivé.", lien: { label: "Rupture conventionnelle : étapes et délais (Code du travail numérique)", url: "https://code.travail.gouv.fr/information/rupture-conventionnelle-individuelle-la-procedure-en-details" } },
      { t: "Après la rupture", d: "Récupère tes documents de fin de contrat et inscris-toi à France Travail. Voir [Fin de contrat, démission, rupture](#guide-demission-fin-contrat) et [Chômage](#guide-chomage-are)." }
    ],
    pieges: [
      "Signer sans avoir vérifié le montant de l'indemnité.",
      "Croire que tu peux t'être rétracté·e après le délai de 15 jours.",
      "Oublier tes congés payés : ils sont indemnisés s'ils n'ont pas été pris."
    ],
    liens: [
      { label: "Rupture conventionnelle (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F19030" },
      { label: "Procédure en détail (Code du travail numérique)", url: "https://code.travail.gouv.fr/information/rupture-conventionnelle-individuelle-la-procedure-en-details" }
    ],
    sources: ["Service-Public F19030 et Code du travail numérique (rétractation de 15 jours calendaires, instruction de 15 jours ouvrables, pas de préavis)"],
    voir: ["demission-fin-contrat", "chomage-are", "droits-au-travail"], verifie: "octobre 2026"
  },
  {
    id: "accident-travail", theme: "travail", titre: "Accident du travail : les démarches du salarié",
    accroche: "Certificat médical, déclaration, prise en charge : quoi faire dans l'ordre.",
    temps: "20 min", cout: "Gratuit", pour: ["salarie", "alternant", "etudiant"], quand: "Dès l'accident, y compris pour un petit incident.",
    mots: ["accident du travail", "accident de trajet", "certificat médical", "cpam", "arrêt", "blessure au travail", "déclaration d'accident"],
    todo: { si: ["salarie", "alternant"], prio: 3, pourquoi: "Un accident non déclaré peut te priver de ta prise en charge." },
    enBref: [
      "Fais **constater les lésions par un médecin**, qui établit un **certificat médical** (en 2 exemplaires).",
      "Préviens **ton employeur** rapidement : il déclare l'accident à la CPAM.",
      "Un accident survenu pendant ton trajet domicile-travail peut aussi être pris en charge."
    ],
    etapes: [
      { t: "Soigner d'abord", d: "Fais-toi soigner et demande au médecin de décrire les lésions sur le certificat." },
      { t: "Prévenir ton employeur", d: "Préviens-le dès que possible (en principe dans les 24 heures), avec les circonstances, le lieu et les témoins éventuels." },
      { t: "Envoyer le certificat médical", d: "Un exemplaire à la CPAM, un à l'employeur selon les indications du médecin.", lien: { label: "Accident du travail : démarches (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F171" } },
      { t: "Garder les preuves", d: "Témoins, photos, mails, feuilles de soins. Garde tout." },
      { t: "Suivre ton dossier", d: "Consulte ton compte ameli pour connaître l'avancement de la prise en charge. Voir [Arrêt maladie](#guide-arret-maladie)." }
    ],
    pieges: [
      "Ne pas déclarer un accident « bénin » qui a des suites plus tard.",
      "Oublier d'envoyer le certificat médical.",
      "Ne pas garder de trace des circonstances de l'accident."
    ],
    liens: [
      { label: "Accident du travail : démarches (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F171" },
      { label: "Accident du travail ou de trajet (ameli)", url: "https://www.ameli.fr/entreprise/vos-salaries/accident-travail-trajet/demarches" }
    ],
    sources: ["Service-Public F171 (certificat médical en 2 exemplaires)", "ameli.fr, accident du travail ou de trajet"],
    voir: ["arret-maladie", "droits-au-travail", "medecin-traitant"], verifie: "octobre 2026"
  },
  {
    id: "interim", theme: "travail", titre: "Intérim : tes droits et ce que tu touches en fin de mission",
    accroche: "Contrat de mission, indemnité de fin de mission, congés, délai de carence.",
    temps: "15 min", cout: "Gratuit", pour: ["etudiant", "chomeur", "salarie"], quand: "Avant ta première mission.",
    mots: ["intérim", "travail temporaire", "contrat de mission", "agence d'intérim", "prime de précarité", "indemnité de fin de mission", "carence", "mission"],
    todo: { si: ["r-job", "chomeur"], prio: 3, pourquoi: "Les missions d'intérim ont leurs règles et leurs primes." },
    enBref: [
      "Le contrat de mission doit être **écrit**. Tu as un contrat avec l'**agence d'intérim**, pas avec l'entreprise cliente.",
      "À la fin, l'**indemnité de fin de mission** est au moins égale à **10 % de la rémunération brute totale**, sauf dispositions conventionnelles.",
      "L'**indemnité de congés payés** ne peut pas être inférieure à **10 %** de la rémunération brute (indemnité de fin de mission comprise)."
    ],
    etapes: [
      { t: "S'inscrire dans une agence", d: "Fournis pièces d'identité, RIB, numéro de sécurité sociale, diplômes et, selon le cas, titre de séjour. Plusieurs agences en parallèle augmentent tes chances." },
      { t: "Lire le contrat de mission", d: "Durée, poste, lieu, horaires, salaire, motif. Signe avant de commencer, pas après.", lien: { label: "Contrat de travail temporaire (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11215" } },
      { t: "Vérifier ta paie", d: "Contrôle le taux horaire, les heures, l'indemnité de fin de mission et l'indemnité de congés payés sur ton bulletin. Voir [Lire sa fiche de paie](#guide-fiche-de-paie)." },
      { t: "Comprendre le délai de carence", d: "Entre deux missions sur le même poste, l'entreprise doit respecter un délai calculé selon la durée de la mission.", lien: { label: "Délai de carence en intérim (Code du travail numérique)", url: "https://code.travail.gouv.fr/contribution/1516-faut-il-respecter-un-delai-de-carence-entre-deux-contrats-de-mission-interim" } },
      { t: "Penser à la suite", d: "Les périodes d'intérim comptent pour ouvrir des droits au chômage. Voir [Chômage : ai-je droit à l'ARE ?](#guide-chomage-are)." }
    ],
    pieges: [
      "Commencer une mission sans contrat signé.",
      "Ne pas vérifier l'indemnité de fin de mission sur la dernière paie.",
      "Oublier de t'inscrire à France Travail à la fin de la dernière mission."
    ],
    liens: [
      { label: "Contrat de travail temporaire (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11215" },
      { label: "Délai de carence (Code du travail numérique)", url: "https://code.travail.gouv.fr/contribution/1516-faut-il-respecter-un-delai-de-carence-entre-deux-contrats-de-mission-interim" }
    ],
    sources: ["Service-Public F11215 (indemnité de fin de mission d'au moins 10 %, congés payés d'au moins 10 %)", "Code du travail numérique, délai de carence en intérim"],
    voir: ["premier-emploi", "chomage-are", "fiche-de-paie"], verifie: "octobre 2026"
  },
  {
    id: "conges-payes", theme: "travail", titre: "Congés payés : combien tu en as et comment les poser",
    accroche: "2,5 jours par mois, arrêt maladie, report : les règles de base.",
    temps: "10 min", cout: "Gratuit", pour: ["salarie", "alternant", "etudiant"], quand: "Avant de poser des vacances ou quand tu quittes un poste.",
    mots: ["congés payés", "vacances", "jours ouvrables", "période de référence", "solde de tout compte", "poser ses congés", "congés sans solde"],
    todo: { si: ["salarie", "alternant"], prio: 3, pourquoi: "Un solde de congés non pris est payé à la fin du contrat." },
    enBref: [
      "Tu acquiers **2,5 jours ouvrables par mois de travail effectif** chez le même employeur, soit 30 jours sur l'année complète.",
      "Par exemple, **5 mois** de travail donnent **12,5 jours, arrondis à 13 jours ouvrables**.",
      "En cas d'arrêt maladie **non professionnel**, tu acquiers jusqu'à **2 jours ouvrables par mois** (24 jours par an)."
    ],
    etapes: [
      { t: "Calculer ton solde", d: "Regarde ton bulletin de paie : il indique les congés acquis et pris.", lien: { label: "Congés payés du salarié (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2258" } },
      { t: "Poser tes congés", d: "En accord avec l'employeur, qui fixe l'ordre des départs. Fais ta demande par écrit." },
      { t: "Savoir ce qui se passe en fin de contrat", d: "Les congés acquis et non pris sont payés (indemnité compensatrice) sur le solde de tout compte. Voir [Fin de contrat](#guide-demission-fin-contrat)." },
      { t: "Cas de l'alternance et des CDD", d: "Tu acquiers des congés comme les autres salariés ; en CDD ou en intérim, ils sont souvent payés en fin de contrat." },
      { t: "Si l'employeur refuse tout", d: "Garde les traces, puis contacte un syndicat ou l'inspection du travail. Voir [Qui contacter](#contacts)." }
    ],
    pieges: [
      "Ne pas vérifier ton solde sur ta fiche de paie.",
      "Poser des congés sans réponse écrite de l'employeur.",
      "Oublier que les congés acquis non pris s'indemnisent à la fin du contrat."
    ],
    liens: [
      { label: "Congés payés du salarié (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2258" },
      { label: "Report des congés non pris (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/actualites/A15702" }
    ],
    sources: ["Service-Public F2258 (2,5 jours ouvrables par mois, exemple de 5 mois, arrêt maladie non professionnel)"],
    voir: ["droits-au-travail", "fiche-de-paie", "demission-fin-contrat"], verifie: "octobre 2026"
  },
  {
    id: "transports-employeur", theme: "travail", titre: "Ton abonnement de transport remboursé par l'employeur",
    accroche: "Au moins 50 % : comment le demander et ce qu'il faut fournir.",
    temps: "10 min", cout: "Gratuit", pour: ["salarie", "alternant"], quand: "Dès que tu prends un abonnement de transport en commun.",
    mots: ["transports", "navigo", "abonnement", "remboursement employeur", "50 %", "titres de transport", "alternant", "pass"],
    todo: { si: ["salarie", "alternant"], prio: 3, pourquoi: "C'est un droit : sans demande, ton employeur ne rembourse pas toujours automatiquement." },
    enBref: [
      "L'employeur doit prendre en charge **au moins 50 %** du coût des **abonnements de transport public** de ses salariés.",
      "Seules les **cartes d'abonnement** sont prises en charge pour les transports publics.",
      "Pour un **temps partiel** inférieur à un mi-temps, la prise en charge est calculée au prorata."
    ],
    etapes: [
      { t: "Prendre l'abonnement", d: "Un abonnement mensuel, annuel ou hebdomadaire sur ton trajet domicile-travail." },
      { t: "Fournir le justificatif", d: "Remets à l'employeur ta carte ou ta facture d'abonnement, comme il te l'indique (RH ou paie).", lien: { label: "Remboursement des frais de transport domicile-travail (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F19846" } },
      { t: "Vérifier ta fiche de paie", d: "Le remboursement apparaît chaque mois. Voir [Lire sa fiche de paie](#guide-fiche-de-paie)." },
      { t: "Cas particuliers", d: "L'employeur peut refuser si tu perçois déjà une indemnité de frais de déplacement au moins équivalente.", lien: { label: "Prise en charge obligatoire (Service-Public Entreprendre)", url: "https://entreprendre.service-public.gouv.fr/vosdroits/F37900" } }
    ],
    pieges: [
      "Ne pas demander le remboursement.",
      "Oublier de donner le justificatif chaque année en cas de renouvellement.",
      "Croire que les trajets en voiture personnelle sont couverts obligatoirement : ce n'est pas le cas."
    ],
    liens: [
      { label: "Frais de transport domicile-travail (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F19846" },
      { label: "Prise en charge obligatoire des transports publics (Service-Public Entreprendre)", url: "https://entreprendre.service-public.gouv.fr/vosdroits/F37900" }
    ],
    sources: ["Service-Public F19846 et F37900 (prise en charge d'au moins 50 % des abonnements de transport public)"],
    voir: ["fiche-de-paie", "droits-au-travail", "alternance"], verifie: "octobre 2026"
  },
  {
    id: "retraite-jeunes", theme: "travail", titre: "Retraite : pourquoi s'en occuper dès tes premiers jobs",
    accroche: "Trimestres, relevé de carrière : tes petits boulots et stages comptent peut-être.",
    temps: "15 min", cout: "Gratuit", pour: ["etudiant", "alternant", "salarie"], quand: "Une fois par an, ou après tes premiers contrats.",
    mots: ["retraite", "trimestres", "relevé de carrière", "info-retraite", "cotisations", "job étudiant", "stage rémunéré", "compte retraite"],
    todo: { si: ["r-job", "r-salaire", "r-stage"], prio: 3, pourquoi: "Vérifier tôt ton relevé évite de perdre des trimestres." },
    enBref: [
      "Un trimestre se valide selon **les sommes sur lesquelles tu as cotisé**, pas selon ta durée de travail.",
      "Des **emplois saisonniers ou des stages rémunérés** peuvent compter pour la retraite.",
      "Tes trimestres sont reportés chaque année sur ton **relevé de carrière**, **au plus tard le 31 mars** de l'année suivante."
    ],
    etapes: [
      { t: "Créer ton compte retraite", d: "Sur le portail info-retraite.fr : tu y retrouves tous les régimes auxquels tu as cotisé.", lien: { label: "info-retraite.fr", url: "https://www.info-retraite.fr/" } },
      { t: "Consulter ton relevé de carrière", d: "Vérifie que chaque année travaillée apparaît, avec les bons montants.", lien: { label: "La prise en compte de ma carrière (L'Assurance retraite)", url: "https://www.lassuranceretraite.fr/portail-info/home/actif/ma-carriere/cotisation-carriere.html" } },
      { t: "Conserver tes bulletins de paie", d: "Ils servent à corriger une erreur. Voir [Lire sa fiche de paie](#guide-fiche-de-paie)." },
      { t: "Demander une régularisation si besoin", d: "Si une période manque, utilise le service de régularisation de carrière de l'Assurance retraite." },
      { t: "Penser aux enfants et aux périodes assimilées", d: "Des majorations existent si tu élèves des enfants, et certaines périodes non travaillées comptent comme périodes d'assurance." }
    ],
    pieges: [
      "Penser que les petits jobs « ne comptent pas ».",
      "Ne pas garder tes bulletins de paie.",
      "Attendre d'être proche de la retraite pour vérifier."
    ],
    liens: [
      { label: "info-retraite.fr", url: "https://www.info-retraite.fr/" },
      { label: "Ma carrière et mes trimestres (L'Assurance retraite)", url: "https://www.lassuranceretraite.fr/portail-info/home/actif/ma-carriere/cotisation-carriere.html" }
    ],
    sources: ["L'Assurance retraite, prise en compte de la carrière (trimestres selon les sommes cotisées, relevé reporté au plus tard le 31 mars)"],
    voir: ["fiche-de-paie", "job-etudiant-droits", "stage"], verifie: "octobre 2026"
  },

  /* ——— Argent */
  {
    id: "assurance-auto-jeune", theme: "argent", titre: "Assurance auto pour jeune conducteur : surprime et bonus-malus",
    accroche: "Pourquoi c'est cher, comment réduire la facture et ce que change la conduite accompagnée.",
    temps: "30 min", cout: "Variable", pour: ["lyceen", "etudiant", "alternant"], quand: "Avant de prendre la route avec ton premier véhicule.",
    mots: ["assurance auto", "jeune conducteur", "surprime", "bonus-malus", "conduite accompagnée", "premier contrat", "assurance scooter", "aac"],
    todo: { si: ["p-voiture"], prio: 2, pourquoi: "Rouler sans assurance est interdit et très coûteux en cas de sinistre." },
    enBref: [
      "L'assurance auto est **obligatoire** avant de circuler.",
      "Une **surprime** peut s'appliquer aux jeunes conducteurs (**moins de 3 ans de permis**) ; elle s'efface progressivement.",
      "Le **bonus-malus** réduit ta prime sans sinistre responsable et la majore en cas de sinistre responsable."
    ],
    etapes: [
      { t: "Comparer plusieurs devis", d: "À garanties égales (tiers, tiers étendu, tous risques), les écarts peuvent être importants. Compare la franchise, pas seulement le prix." },
      { t: "Comprendre la surprime", d: "Elle dépend de ton ancienneté de permis et de la conduite accompagnée. Un tableau détaillé existe sur Service-Public.", lien: { label: "Jeune conducteur et surprime (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2663" } },
      { t: "Choisir selon l'usage", d: "Usage privé ou trajet, kilométrage, stationnement la nuit, conducteur désigné : ces éléments changent le prix." },
      { t: "Lire les exclusions", d: "Vérifie les conditions de garantie du vol, du bris de glace et du prêt du véhicule à un tiers." },
      { t: "Garder ton relevé d'information", d: "Il atteste de ton bonus-malus quand tu changes d'assureur. Voir aussi [Carte grise et cession](#guide-carte-grise).", lien: { label: "Règles de la cotisation d'assurance auto (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2599" } }
    ],
    pieges: [
      "Rouler sans assurance, même un court trajet.",
      "Cacher un conducteur habituel pour payer moins : en cas de sinistre, l'assureur peut refuser de garantir.",
      "Ne pas demander ton relevé d'information avant de résilier."
    ],
    liens: [
      { label: "Jeune conducteur et surprime (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2663" },
      { label: "Montant de la cotisation d'assurance auto (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2599" }
    ],
    sources: ["Service-Public F2663 et F2599 (surprime pour moins de 3 ans de permis, bonus-malus)"],
    voir: ["permis", "carte-grise", "amendes"], verifie: "octobre 2026"
  },
  {
    id: "rsa-jeune", theme: "argent", titre: "RSA jeune actif : à partir de 18 ans, sous conditions",
    accroche: "Pour les 18-25 ans qui ont déjà travaillé : conditions et démarche à la Caf.",
    temps: "20 min", cout: "Gratuit", pour: ["chomeur", "salarie", "etranger"], quand: "Quand tu as peu ou pas de ressources après une période d'activité.",
    mots: ["rsa", "revenu de solidarité active", "rsa jeune", "moins de 25 ans", "aide caf", "sans ressources", "jeune actif"],
    todo: { si: ["nini", "chomeur", "p-dette"], prio: 2, pourquoi: "Le RSA jeune est réservé à ceux qui ont une certaine durée d'activité : simule avant de renoncer." },
    enBref: [
      "Les jeunes de **18 à 25 ans**, français ou étrangers, peuvent bénéficier du **RSA jeune actif** s'ils justifient d'**une certaine durée d'activité professionnelle**.",
      "Il faut aussi **habiter en France de façon stable**.",
      "La demande se fait à la **Caf**, qui estime le montant selon ta situation."
    ],
    etapes: [
      { t: "Vérifier les conditions", d: "Âge, durée d'activité, résidence : la fiche Service-Public détaille les cas (Français, étranger…).", lien: { label: "RSA jeune actif (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F286" } },
      { t: "Simuler", d: "Utilise le simulateur de la Caf pour estimer tes droits sans engagement.", lien: { label: "caf.fr", url: "https://www.caf.fr" } },
      { t: "Faire la demande", d: "Sur ton compte Caf, avec ta pièce d'identité, ton RIB et tes justificatifs d'activité. Voir [Compte Caf](#guide-caf-compte)." },
      { t: "Déclarer tes ressources", d: "Chaque trimestre, avec le montant net social. Voir [Lire sa fiche de paie](#guide-fiche-de-paie)." },
      { t: "Chercher un accompagnement", d: "Mission locale, France Travail, contrat d'engagement jeune : voir [CEJ](#guide-cej)." }
    ],
    pieges: [
      "Ne pas demander parce qu'on croit ne pas y avoir droit.",
      "Oublier de déclarer un changement de ressources.",
      "Confondre RSA et prime d'activité."
    ],
    liens: [
      { label: "RSA jeune actif (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F286" }
    ],
    sources: ["Service-Public F286 (RSA jeune actif, 18-25 ans, durée d'activité)", "caf.fr, RSA pour les moins de 25 ans (résidence stable en France)"],
    voir: ["caf-compte", "cej", "prime-activite", "inscription-france-travail"], verifie: "octobre 2026"
  },
  {
    id: "aide-urgence-etudiant", theme: "argent", titre: "Étudiant·e en difficulté : l'aide d'urgence du Crous",
    accroche: "Une aide financière ponctuelle quand la situation devient critique.",
    temps: "30 min", cout: "Gratuit", pour: ["etudiant", "etranger"], quand: "Dès que tu ne peux plus payer le loyer, la nourriture ou une dépense vitale.",
    mots: ["aide d'urgence", "crous", "aide spécifique ponctuelle", "étudiant en difficulté", "assistante sociale", "précarité étudiante", "aide financière"],
    todo: { si: ["etudiant", "p-dette"], prio: 2, pourquoi: "Cette aide existe pour les imprévus : n'attends pas d'être à découvert." },
    enBref: [
      "Si tu traverses une période difficile, tu peux **solliciter une aide financière en urgence**.",
      "La demande passe par le **service social du Crous** dont tu dépends.",
      "Elle est examinée par une **commission**, avec, si besoin, un entretien avec un·e assistant·e social·e."
    ],
    etapes: [
      { t: "Contacter le service social du Crous", d: "Prends rendez-vous ou envoie ta demande selon les indications de ton Crous.", lien: { label: "Solliciter une aide d'urgence (Étudiant.gouv.fr)", url: "https://www.etudiant.gouv.fr/fr/solliciter-une-aide-d-urgence-361" } },
      { t: "Préparer ton dossier", d: "Justificatifs de ressources, de dépenses, de loyer et de situation. Explique clairement ta situation." },
      { t: "Passer devant la commission", d: "Elle décide de l'attribution et du montant de l'aide.", lien: { label: "Aide spécifique ponctuelle (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34073" } },
      { t: "Chercher des aides complémentaires", d: "Bourse, APL, épicerie solidaire, aides de ton établissement. Voir [Toutes les aides](#aides)." },
      { t: "Ne pas t'isoler", d: "Parle à un·e assistant·e social·e ou à un service de santé universitaire. Voir [Aide psychologique](#guide-psy-sante-mentale)." }
    ],
    pieges: [
      "Attendre d'être à découvert pour demander de l'aide.",
      "Ne pas joindre de justificatifs.",
      "Croire qu'il faut être boursier·ère : la demande est possible dans d'autres cas."
    ],
    liens: [
      { label: "Solliciter une aide d'urgence (Étudiant.gouv.fr)", url: "https://www.etudiant.gouv.fr/fr/solliciter-une-aide-d-urgence-361" },
      { label: "Aide spécifique ponctuelle (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34073" }
    ],
    sources: ["Étudiant.gouv.fr, aide d'urgence", "Service-Public F34073 (aide spécifique ponctuelle, service social du Crous, commission)"],
    voir: ["bourse-crous", "decouvert-surendettement", "psy-sante-mentale", "caf-compte"], verifie: "octobre 2026"
  },

  /* ——— Santé */
  {
    id: "mon-espace-sante", theme: "sante", titre: "Mon espace santé : dossier médical et messagerie sécurisée",
    accroche: "Ton carnet de santé en ligne : comment l'activer et ce que tu peux y mettre.",
    temps: "15 min", cout: "Gratuit", pour: ["lyceen", "etudiant", "salarie", "alternant"], quand: "Dès que tu as ta Carte Vitale.",
    mots: ["mon espace santé", "dossier médical partagé", "dmp", "carnet de santé", "messagerie santé", "ordonnances", "vaccins", "documents médicaux"],
    todo: { si: ["a18", "etudiant"], prio: 3, pourquoi: "Un dossier médical accessible partout te simplifie la vie, surtout si tu changes de ville." },
    enBref: [
      "**Mon espace santé** est un **espace numérique individuel** : tu y stockes tes informations médicales et les partages avec les professionnels qui te soignent, **avec ton consentement**.",
      "Il comprend une **messagerie sécurisée** pour échanger avec les professionnels et recevoir des informations de prévention.",
      "L'activation se fait avec ton **numéro de sécurité sociale**, ta **date de naissance** et le **numéro de série de ta carte Vitale**."
    ],
    etapes: [
      { t: "Activer ton espace", d: "Va sur le site officiel et suis les étapes. Si tu n'as pas reçu de courrier, tu peux activer ton espace avec tes informations.", lien: { label: "monespacesante.fr", url: "https://www.monespacesante.fr/" } },
      { t: "Ajouter tes documents", d: "Ordonnances, comptes rendus, résultats d'analyses, vaccinations : garde-les au même endroit." },
      { t: "Gérer les accès", d: "Choisis quels professionnels peuvent consulter tes documents. Tu peux modifier ces choix." },
      { t: "Utiliser la messagerie", d: "Elle sert aux échanges confidentiels avec les professionnels de santé." },
      { t: "Garder aussi une copie hors ligne", d: "Télécharge les documents importants avant un départ à l'étranger. Voir [Partir à l'étranger](#guide-partir-etranger-checklist)." }
    ],
    pieges: [
      "Partager tes identifiants avec un tiers.",
      "Confondre Mon espace santé et ton compte ameli.",
      "Ne pas vérifier qui a accès à ton dossier."
    ],
    liens: [
      { label: "Mon espace santé", url: "https://www.monespacesante.fr/" },
      { label: "Qu'est-ce que Mon espace santé ? (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F36151" }
    ],
    sources: ["Service-Public F36151 (Mon espace santé : dossier médical partagé, messagerie sécurisée, consentement)", "monespacesante.fr"],
    voir: ["medecin-traitant", "secu-18-ans", "vaccins-jeunes"], verifie: "octobre 2026"
  },
  {
    id: "vaccins-jeunes", theme: "sante", titre: "Vaccins des ados et jeunes adultes : ce qui est recommandé",
    accroche: "HPV, rappels, hépatite B : à vérifier avec ton médecin et ton carnet de vaccination.",
    temps: "10 min", cout: "Souvent remboursé", pour: ["lyceen", "etudiant"], quand: "Au moins une fois entre 11 et 26 ans.",
    mots: ["vaccins", "vaccination", "hpv", "papillomavirus", "rappel", "carnet de vaccination", "hépatite b", "dtp", "méningocoque"],
    todo: { si: ["a16", "a18", "etudiant"], prio: 3, pourquoi: "Un rattrapage vaccinal est possible jusqu'à 26 ans pour certains vaccins." },
    enBref: [
      "La vaccination contre les **HPV** est recommandée aux **filles et aux garçons de 11 à 14 ans**, avec un **rattrapage de 15 à 26 ans** (3 doses).",
      "Elle est **gratuite** dans le cadre de la campagne en collège (classe de 5ᵉ).",
      "À partir de **16 ans**, la vaccination contre l'**hépatite B** est recommandée pour les personnes présentant un risque accru."
    ],
    etapes: [
      { t: "Retrouver tes vaccins", d: "Carnet de santé, carnet de vaccination, Mon espace santé ou ton médecin. Voir [Mon espace santé](#guide-mon-espace-sante)." },
      { t: "Faire le point avec ton médecin", d: "Il vérifie les rappels (dTcaP, etc.) et propose les vaccins adaptés à ton âge et à ta situation." },
      { t: "Se faire vacciner", d: "En cabinet, en centre de vaccination, à la pharmacie ou au service de santé universitaire selon le vaccin.", lien: { label: "Adolescents et jeunes adultes, 11 à 26 ans (Vaccination Info Service)", url: "https://www.vaccination-info-service.fr/La-vaccination-au-cours-de-la-vie/Adolescents-et-jeunes-adultes-11-a-26-ans" } },
      { t: "Pour un voyage", d: "Certains pays recommandent ou exigent des vaccins : consulte la fiche pays. Voir [Voyager à l'étranger](#guide-voyager)." },
      { t: "Noter la date des prochains rappels", d: "Sauvegarde-la dans ton agenda ou dans Mon espace santé." }
    ],
    pieges: [
      "Penser qu'il est trop tard : un rattrapage est possible jusqu'à 26 ans pour le HPV.",
      "Perdre ton carnet de vaccination : prends-le en photo.",
      "Ne pas vérifier tes vaccins avant un départ à l'étranger."
    ],
    liens: [
      { label: "Vaccination Info Service : 11 à 26 ans", url: "https://www.vaccination-info-service.fr/La-vaccination-au-cours-de-la-vie/Adolescents-et-jeunes-adultes-11-a-26-ans" },
      { label: "Infections à HPV (Vaccination Info Service)", url: "https://www.vaccination-info-service.fr/Les-maladies-et-leurs-vaccins/Infections-a-Papillomavirus-humains-HPV" }
    ],
    sources: ["Vaccination Info Service, adolescents et jeunes adultes (HPV recommandé de 11 à 14 ans, rattrapage de 15 à 26 ans, hépatite B à partir de 16 ans pour risque accru)"],
    voir: ["medecin-traitant", "prevention-depistage", "mon-espace-sante", "voyager"], verifie: "octobre 2026"
  },

  /* ——— Droits */
  {
    id: "controle-identite", theme: "droits", titre: "Contrôle d'identité : ce que dit le droit",
    accroche: "Qui peut te contrôler, que se passe-t-il si tu refuses et comment réagir à un contrôle discriminatoire.",
    temps: "10 min", cout: "Gratuit", pour: ["lyceen", "etudiant", "salarie", "mineur"], quand: "Avant d'être contrôlé·e, pour savoir quoi faire.",
    mots: ["contrôle d'identité", "police", "gendarmerie", "vérification d'identité", "relevé d'identité", "contrôle au faciès", "pièce d'identité"],
    todo: { si: ["tous"], prio: 3, pourquoi: "Connaître ses droits permet de garder son calme en cas de contrôle." },
    enBref: [
      "Si tu **refuses de justifier de ton identité** ou si tu ne peux pas le faire, tu peux être **retenu·e sur place ou au commissariat** pour une **vérification d'identité**.",
      "Les **agents de police judiciaire adjoints** (par exemple la police municipale) peuvent faire un **relevé d'identité** que tu **peux refuser** ; la contrainte est réservée aux officiers de police judiciaire et aux agents placés sous leur responsabilité.",
      "Tu peux **saisir le Défenseur des droits** en cas de contrôle discriminatoire."
    ],
    etapes: [
      { t: "Garder ta pièce d'identité", d: "Une carte d'identité, un passeport ou un titre de séjour (copie numérique en secours) facilite le contrôle. Voir [Carte d'identité et passeport](#guide-carte-identite-passeport)." },
      { t: "Rester calme", d: "Réponds poliment, ne t'enfuis pas, ne t'oppose pas physiquement. Tu peux demander le nom ou le matricule des agents." },
      { t: "Comprendre la différence", d: "Contrôle d'identité, vérification d'identité, relevé d'identité : les droits ne sont pas les mêmes.", lien: { label: "Contrôle d'identité (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1036" } },
      { t: "Garder une trace", d: "Note la date, le lieu, l'heure, les agents, les témoins et ce qui s'est passé juste après." },
      { t: "Réagir si c'est abusif ou discriminatoire", d: "Saisis le Défenseur des droits, gratuitement. Voir [Le Défenseur des droits](#guide-defenseur-droits).", lien: { label: "Contrôles d'identité (Défenseur des droits)", url: "https://www.defenseurdesdroits.fr/controles-didentite-que-dit-le-droit-et-comment-mettre-fin-aux-controles-discriminatoires-565" } }
    ],
    pieges: [
      "Refuser de justifier ton identité alors que le contrôle est légal : tu peux être retenu·e.",
      "Fuir ou t'opposer : cela aggrave ta situation.",
      "Ne pas noter les faits : tu perds des preuves pour une éventuelle réclamation."
    ],
    liens: [
      { label: "Contrôle d'identité (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1036" },
      { label: "Contrôles d'identité : que dit le droit ? (Défenseur des droits)", url: "https://www.defenseurdesdroits.fr/controles-didentite-que-dit-le-droit-et-comment-mettre-fin-aux-controles-discriminatoires-565" }
    ],
    sources: ["Service-Public F1036 (contrôle, vérification et relevé d'identité)", "Défenseur des droits, contrôles d'identité"],
    voir: ["defenseur-droits", "plainte-depot", "aide-juridique"], verifie: "octobre 2026"
  },
  {
    id: "demarchage-telephonique", theme: "droits", titre: "Démarchage téléphonique et SMS frauduleux : se protéger",
    accroche: "Bloctel a pris fin en 2026 : ce qui change et comment signaler.",
    temps: "10 min", cout: "Gratuit", pour: ["lyceen", "etudiant", "salarie"], quand: "Dès que tu reçois des appels ou SMS indésirables.",
    mots: ["démarchage téléphonique", "bloctel", "spam", "sms frauduleux", "33700", "appels commerciaux", "consentement", "faux conseiller"],
    todo: { si: ["a18"], prio: 3, pourquoi: "Les appels et SMS frauduleux sont la porte d'entrée de beaucoup d'arnaques." },
    enBref: [
      "Le service **Bloctel a pris fin** avec l'entrée en vigueur, au **11 août 2026**, d'un régime de démarchage téléphonique fondé sur le **recueil préalable du consentement**.",
      "Tu peux **signaler gratuitement** les spams vocaux et SMS indésirables au **33 700**.",
      "Ne donne **jamais** ton code reçu par SMS, ta carte ou tes identifiants à quelqu'un qui t'appelle."
    ],
    etapes: [
      { t: "Ne rien communiquer", d: "Ni code, ni numéro de carte, ni identifiants. Raccroche et rappelle toi-même le numéro officiel de l'organisme. Voir [Reconnaître une arnaque](#guide-arnaques)." },
      { t: "Signaler", d: "Transfère les SMS suspects ou signale l'appel au 33 700. Le signalement est gratuit.", lien: { label: "Se protéger du démarchage abusif (economie.gouv.fr)", url: "https://www.economie.gouv.fr/particuliers/numerique-et-cybersecurite/comment-se-proteger-du-demarchage-abusif" } },
      { t: "Refuser le consentement", d: "Quand une entreprise te demande ton accord pour être démarché·e, tu peux le refuser et retirer ton consentement quand tu veux." },
      { t: "Utiliser les filtres de ton opérateur", d: "Active les options de blocage ou de filtrage d'appels proposées dans l'application de ton opérateur." },
      { t: "En cas de pertes d'argent", d: "Fais opposition à ta carte et dépose plainte. Voir [Paiement frauduleux](#guide-fraude-carte)." }
    ],
    pieges: [
      "Croire un appel d'un « conseiller bancaire » qui te demande une validation sur ton téléphone.",
      "Rappeler un numéro surtaxé après un appel manqué.",
      "Cliquer sur un lien dans un SMS qui prétend venir d'un organisme public."
    ],
    liens: [
      { label: "Se protéger du démarchage abusif (economie.gouv.fr)", url: "https://www.economie.gouv.fr/particuliers/numerique-et-cybersecurite/comment-se-proteger-du-demarchage-abusif" },
      { label: "Cybermalveillance.gouv.fr", url: "https://www.cybermalveillance.gouv.fr" }
    ],
    sources: ["bloctel.gouv.fr (fin du service le 11 août 2026, consentement préalable)", "economie.gouv.fr (signalement au 33 700)"],
    voir: ["arnaques", "fraude-carte", "donnees-perso"], verifie: "octobre 2026"
  },
  {
    id: "vol-telephone", theme: "droits", titre: "Téléphone volé ou perdu : les 5 réflexes",
    accroche: "Verrouiller, suspendre la ligne, déclarer l'IMEI, porter plainte, prévenir l'assurance.",
    temps: "30 min", cout: "Gratuit", pour: ["lyceen", "etudiant", "salarie"], quand: "Dès que tu constates la perte ou le vol.",
    mots: ["téléphone volé", "perdu", "imei", "carte sim", "opérateur", "bloquer", "plainte", "smartphone"],
    todo: { si: ["tous"], prio: 3, pourquoi: "Note ton IMEI maintenant : tu le chercheras difficilement après un vol." },
    enBref: [
      "**Localise et verrouille** ton téléphone, change tes **mots de passe**, puis **joins ton opérateur** pour faire **suspendre la ligne**.",
      "Ton opérateur te communique le **numéro IMEI** (15 chiffres) : il permet de bloquer le téléphone et de l'identifier s'il est retrouvé.",
      "En cas de vol, **porte plainte rapidement**, même à l'étranger, et contacte ton assureur."
    ],
    etapes: [
      { t: "Verrouiller et changer tes mots de passe", d: "Utilise la fonction « localiser mon téléphone » pour verrouiller ou effacer l'appareil. Change les mots de passe de tes comptes importants (mail, banque, réseaux).", lien: { label: "Vol d'un téléphone portable (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34123" } },
      { t: "Faire suspendre la ligne", d: "Appelle ton opérateur : il désactive ta carte SIM. Il doit bloquer la ligne au plus tard dans les 4 jours suivant ta déclaration." },
      { t: "Noter l'IMEI", d: "Tu le trouves dans ton espace client, sur l'emballage d'origine, ou en tapant *#06# sur ton téléphone. Note-le hors du téléphone." },
      { t: "Porter plainte", d: "Au commissariat ou en gendarmerie, avec l'IMEI. Voir [Porter plainte](#guide-plainte-depot)." },
      { t: "Prévenir ton assureur et ta banque", d: "Si ton téléphone est assuré, déclare le vol. Surveille tes comptes et fais opposition à ta carte en cas d'opérations suspectes. Voir [Paiement frauduleux](#guide-fraude-carte)." }
    ],
    pieges: [
      "Ne pas noter ton IMEI avant le vol.",
      "Oublier de changer les mots de passe : le voleur accède à tes comptes.",
      "Attendre pour prévenir l'opérateur."
    ],
    liens: [
      { label: "Vol d'un téléphone portable (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34123" },
      { label: "Perte d'un téléphone portable (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F19066" }
    ],
    sources: ["Service-Public F34123 et F19066 (suspension de la ligne, IMEI, plainte, blocage sous 4 jours)"],
    voir: ["plainte-depot", "fraude-carte", "perte-vol-papiers"], verifie: "octobre 2026"
  },
  {
    id: "troubles-voisinage", theme: "droits", titre: "Bruit et conflits de voisinage : que faire",
    accroche: "Dialogue, courrier, conciliateur, police : les étapes avant d'en arriver au tribunal.",
    temps: "20 min", cout: "Gratuit", pour: ["etudiant", "alternant", "salarie"], quand: "Dès que la gêne est répétée.",
    mots: ["bruit", "tapage nocturne", "voisin", "nuisances", "trouble de voisinage", "conciliateur", "tapage", "musique"],
    todo: { si: ["locataire", "coloc"], prio: 3, pourquoi: "En colocation ou en résidence, les conflits de bruit sont fréquents." },
    enBref: [
      "Les **bruits ou tapages injurieux ou nocturnes** qui troublent la tranquillité d'autrui sont punis d'une **amende de 450 € maximum**.",
      "Commence par le **dialogue**, puis un **courrier recommandé** si la gêne continue.",
      "Un **conciliateur de justice** peut t'aider gratuitement avant toute procédure."
    ],
    etapes: [
      { t: "Parler au voisin", d: "Calmement, en proposant une solution (horaires, isolation). Beaucoup de conflits se règlent à ce stade.", lien: { label: "Bruits créés par des comportements anormaux (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F612" } },
      { t: "Garder des preuves", d: "Note les dates, les heures et la durée de la gêne. Demande à d'autres voisins d'en témoigner." },
      { t: "Envoyer un courrier recommandé", d: "Si la gêne continue, mets en demeure le voisin de cesser. Si c'est un locataire, tu peux aussi contacter son propriétaire.", lien: { label: "Le propriétaire est-il responsable des nuisances de son locataire ? (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F31522" } },
      { t: "Contacter un conciliateur ou la mairie", d: "La conciliation est gratuite. Voir [Aide juridique gratuite](#guide-aide-juridique)." },
      { t: "Appeler le 17 si c'est un tapage nocturne en cours", d: "En cas de gêne grave la nuit, tu peux solliciter la police ou la gendarmerie." }
    ],
    pieges: [
      "Répondre par des représailles ou des menaces.",
      "Appeler la police sans avoir tenté le dialogue pour une gêne ponctuelle.",
      "Ne pas garder de traces : sans preuves, la procédure est difficile."
    ],
    liens: [
      { label: "Troubles de voisinage : bruits (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F612" },
      { label: "Nuisances causées par un locataire (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F31522" }
    ],
    sources: ["Service-Public F612 (tapage injurieux ou nocturne, amende de 450 € maximum)", "Service-Public F31522 (mise en demeure par courrier recommandé)"],
    voir: ["aide-juridique", "logement-indecent", "colocation"], verifie: "octobre 2026"
  },

  /* ——— Papiers */
  {
    id: "conservation-papiers", theme: "papiers", titre: "Combien de temps garder ses papiers ?",
    accroche: "Un simulateur officiel et quelques règles pour trier sans risque.",
    temps: "10 min", cout: "Gratuit", pour: ["lyceen", "etudiant", "salarie"], quand: "Au moment du tri, ou à ton premier déménagement.",
    mots: ["conserver ses papiers", "durée de conservation", "archiver", "tri des papiers", "bulletins de paie", "attestations", "factures", "impôts"],
    todo: { si: ["a18"], prio: 3, pourquoi: "Jeter un papier trop tôt peut te coûter cher en cas de litige." },
    enBref: [
      "Les durées officielles sont des **durées minimales** : tu peux garder plus longtemps.",
      "Un **simulateur de Service-Public** indique combien de temps conserver chaque document.",
      "Les **attestations d'assurance** sont à garder **au moins 5 ans**, comme preuve en cas de sinistre."
    ],
    etapes: [
      { t: "Utiliser le simulateur", d: "Choisis le type de document (logement, impôts, banque, travail…) et vois la durée minimale conseillée.", lien: { label: "Vérifier combien de temps conserver un document (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/R60880" } },
      { t: "Numériser", d: "Prends les papiers importants en photo ou scanne-les, et range-les dans un coffre-fort numérique ou un dossier protégé." },
      { t: "Classer par thème", d: "Identité, logement, travail, impôts, santé, banque : une pochette ou un dossier par thème." },
      { t: "Garder certains papiers longtemps", d: "Bulletins de paie, contrats, diplômes, avis d'imposition : garde-les plus longtemps que le minimum, ils servent pour la retraite et les litiges. Voir [Retraite](#guide-retraite-jeunes)." },
      { t: "Trier une fois par an", d: "En janvier, par exemple : tu jettes ce qui a dépassé sa durée et tu ranges le reste." }
    ],
    pieges: [
      "Jeter un contrat ou un justificatif avant la fin d'un litige.",
      "Ne garder que la version papier d'un document important.",
      "Jeter un papier contenant des données personnelles sans le détruire."
    ],
    liens: [
      { label: "Durée de conservation des papiers (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F19134" },
      { label: "Simulateur : combien de temps conserver un document ?", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/R60880" }
    ],
    sources: ["Service-Public F19134 et R60880 (durées minimales de conservation, attestations d'assurance au moins 5 ans)"],
    voir: ["perte-vol-papiers", "retraite-jeunes", "etat-civil"], verifie: "octobre 2026"
  }
);
