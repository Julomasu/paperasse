/* Thème « Argent & banque ». Sources : Service-Public, Banque de France, Crous, etudiant.gouv.fr, impots.gouv.fr. */
(P.GUIDES = P.GUIDES || []).push(
  {
    id: "ouvrir-compte", theme: "argent", titre: "Ouvrir son premier compte bancaire",
    accroche: "Banque en ligne ou agence, carte, frais, droit au compte : comment choisir sans te faire piéger.",
    temps: "30 min", cout: "Gratuit (offres jeunes)", pour: ["lyceen", "etudiant", "alternant", "etranger"], quand: "À 16-18 ans, avant ton premier salaire ou ta première bourse.",
    mots: ["compte bancaire", "banque", "carte bancaire", "rib", "frais", "droit au compte", "néobanque", "premier compte"],
    todo: { si: ["a16", "a18", "r-job", "r-salaire", "alternant"], prio: 1, pourquoi: "Il te faut un compte à ton nom pour être payé·e, recevoir tes aides et louer un logement." },
    enBref: [
      "Il te faut un **compte à ton nom** pour recevoir un salaire, une bourse ou les aides de la Caf.",
      "Tu as **droit à un compte** : si une banque refuse, la **Banque de France** peut en désigner une (droit au compte).",
      "Compare les **frais** (tenue de compte, carte, retraits) : beaucoup d'offres sont **gratuites pour les jeunes**."
    ],
    etapes: [
      { t: "Choisir le type de banque", d: "- **Banque en agence** : conseiller, rendez-vous, souvent un compte jeune gratuit\n- **Banque en ligne** ou **néobanque** : ouverture rapide, frais réduits, tout par application\nLa solution n'est pas « la meilleure » en soi : choisis selon tes besoins (espèces, dépôts, conseils)." },
      { t: "Rassembler les pièces", d: "Pièce d'identité, justificatif de domicile (de tes parents au besoin), numéro de téléphone et adresse mail. Un mineur a besoin de l'accord de son représentant légal." },
      { t: "Comparer les frais", d: "Regarde : la **tenue de compte**, le prix de la **carte**, les frais de retrait, de virement, de découvert. Demande la **brochure tarifaire** : la banque doit te la fournir." },
      { t: "Ouvrir et sécuriser", d: "Active la double authentification, ne partage jamais ton code ni tes identifiants. Voir [Fraude à la carte](#guide-fraude-carte) et [Arnaques](#guide-arnaques)." },
      { t: "Donner ton RIB aux bons endroits", d: "Employeur, Caf, école, propriétaire (pour le loyer), opérateur mobile. Il est le seul document bancaire à communiquer sans risque." }
    ],
    pieges: [
      "Laisser dériver les frais : surveille les petites lignes (cotisation carte, assurance, SMS).",
      "Accepter un découvert autorisé sans comprendre son coût.",
      "Donner ton code de carte, tes identifiants ou un code reçu par SMS à quelqu'un qui t'appelle."
    ],
    liens: [
      { label: "Droit au compte (Banque de France)", url: "https://www.banque-france.fr/fr/a-votre-service/particuliers/droit-au-compte-bancaire" },
      { label: "Refus d'ouverture de compte : droit au compte (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2417" }
    ],
    sources: ["Banque de France, droit au compte", "Service-Public, ouverture d'un compte bancaire"],
    voir: ["fraude-carte", "epargne-livret", "comptes-a-creer"], verifie: "octobre 2026"
  },
  {
    id: "fraude-carte", theme: "argent", titre: "Paiement frauduleux : que faire et dans quel délai",
    accroche: "Opposition, contestation, remboursement : les gestes dans l'ordre.",
    temps: "20 min", cout: "Gratuit", pour: ["lyceen", "etudiant", "salarie"], quand: "Dès que tu constates un paiement que tu n'as pas fait, ou après la perte de ta carte.",
    mots: ["fraude", "carte bancaire", "opposition", "contestation", "paiement non autorisé", "13 mois", "remboursement", "phishing"],
    todo: { si: ["a16", "a18"], prio: 3, pourquoi: "Réagir vite évite de perdre de l'argent." },
    enBref: [
      "Tu peux contester un paiement que tu n'as pas autorisé **jusqu'à 13 mois** après le débit.",
      "En cas de perte, de vol ou de fraude : **fais opposition immédiatement** via ton application ou le numéro de ta banque.",
      "Ta banque doit en principe te **rembourser rapidement** le paiement non autorisé, sauf faute grave de ta part."
    ],
    etapes: [
      { t: "Faire opposition", d: "Bloque ta carte dans ton application bancaire ou en appelant ta banque (numéro au dos de la carte). Fais-le tout de suite, avant même de chercher plus d'informations." },
      { t: "Faire le point", d: "Repère les opérations suspectes (date, montant, commerçant). Fais des captures d'écran et garde les mails et SMS suspects." },
      { t: "Contester auprès de ta banque", d: "Écris à ta banque (recommandé ou formulaire en ligne) en précisant les opérations. Demande le **remboursement** des sommes. Un modèle est disponible dans les [lettres types](#lettres)." },
      { t: "Déposer plainte si nécessaire", d: "Dépose plainte au commissariat ou en ligne si tu as été victime d'un vol ou d'une escroquerie. Certaines banques le demandent pour le dossier." },
      { t: "Signaler l'arnaque", d: "Sur **cybermalveillance.gouv.fr** et **Info Escroqueries** pour aider à stopper les escrocs. Voir [Reconnaître et signaler une arnaque](#guide-arnaques)." }
    ],
    pieges: [
      "Communiquer le code reçu par SMS à quelqu'un qui t'appelle : c'est exactement ce que veulent les fraudeurs.",
      "Attendre : plus tu tardes, plus c'est difficile à justifier.",
      "Croire un appel de « ta banque » sans rappeler toi-même le numéro officiel."
    ],
    liens: [
      { label: "Cybermalveillance : assistance aux victimes", url: "https://www.cybermalveillance.gouv.fr" },
      { label: "Service-Public : fraude à la carte bancaire", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F31324" },
      { label: "Info Escroqueries : 0 805 805 817 (gratuit, du lundi au vendredi de 9 h à 18 h 30)", url: "https://www.police-nationale.interieur.gouv.fr/actualite/info-escroqueries-plate-forme-pour-signaler-escroqueries-sur-internet" }
    ],
    sources: ["Service-Public, contestation d'une opération par carte (13 mois)", "cybermalveillance.gouv.fr"],
    voir: ["arnaques", "ouvrir-compte", "plainte-depot"], verifie: "octobre 2026"
  },
  {
    id: "bourse-crous", theme: "argent", titre: "Bourse sur critères sociaux et logement Crous",
    accroche: "Le dossier social étudiant (DSE) : dates, conditions et ce qu'il ouvre.",
    temps: "1 h", cout: "Gratuit", pour: ["lyceen", "etudiant"], quand: "Entre le 1ᵉʳ mars et le 31 mai pour la rentrée suivante.",
    mots: ["bourse", "crous", "dse", "dossier social étudiant", "boursier", "échelon", "logement crous", "critères sociaux"],
    todo: { si: ["lyceen", "etudiant", "b-bourse"], prio: 1, pourquoi: "Le dossier se dépose avant le 31 mai : au-delà, tu risques de perdre des mois d'aide." },
    enBref: [
      "Un seul dossier, le **DSE**, sert à demander la **bourse** et un **logement Crous**.",
      "Pour 2026-2027, la demande se faisait **entre le 1ᵉʳ mars et le 31 mai 2026** : prévois le même calendrier chaque année.",
      "Tu peux demander **même si tu penses ne pas avoir droit** : le simulateur te donne une estimation."
    ],
    etapes: [
      { t: "Simuler ton droit", d: "Avant de constituer le dossier, utilise le simulateur du Crous pour estimer ton échelon.", lien: { label: "Simulateur de bourse (Crous)", url: "https://www.messervices.etudiant.gouv.fr" } },
      { t: "Créer ton compte", d: "Sur Mesr Services (messervices.etudiant.gouv.fr) : tu y déposes le DSE, tu demandes un logement et tu suis ton dossier." },
      { t: "Rassembler les justificatifs", d: "Avis d'imposition des parents (ou le tien si tu es indépendant·e), situation familiale, établissement visé. Les revenus pris en compte sont ceux de l'avant-dernière année." },
      { t: "Déposer avant la date limite", d: "Respecte le calendrier : un dossier déposé en retard peut être examiné plus tard et entraîner un retard de versement. Tu peux aussi demander un logement Crous dans le même dossier." },
      { t: "Confirmer ton inscription", d: "Après ton inscription dans un établissement, ton dossier est validé et la bourse est versée mensuellement. N'oublie pas la [CVEC](#guide-cvec)." }
    ],
    pieges: [
      "Attendre septembre pour faire la demande.",
      "Oublier de renouveler le DSE chaque année.",
      "Ne pas actualiser ton dossier après un changement de situation familiale ou de ressources."
    ],
    liens: [
      { label: "DSE : comment demander une bourse (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F12216" },
      { label: "Demande de bourse : les étapes (Crous)", url: "https://www.lescrous.fr/dse/" },
      { label: "Étudiant.gouv.fr : bourse et logement", url: "https://www.etudiant.gouv.fr/fr/bourse-et-logement-constituez-votre-dossier-social-etudiant-dse-409" }
    ],
    sources: ["Service-Public F12216 (DSE, du 1ᵉʳ mars au 31 mai)", "lescrous.fr, étapes du DSE"],
    voir: ["cvec", "apl-etudiant", "pret-etudiant"], verifie: "octobre 2026"
  },
  {
    id: "cvec", theme: "argent", titre: "La CVEC : ce que c'est et comment l'obtenir",
    accroche: "La contribution de 105 € (2026-2027), les exonérations et l'attestation obligatoire.",
    temps: "10 min", cout: "105 € (gratuit pour les boursiers)", pour: ["etudiant", "etranger"], quand: "Avant ton inscription dans un établissement d'enseignement supérieur.",
    mots: ["cvec", "contribution vie étudiante", "attestation", "boursier", "inscription", "crous", "105 euros"],
    todo: { si: ["etudiant", "etranger"], prio: 1, pourquoi: "Sans attestation CVEC, tu ne peux pas t'inscrire." },
    enBref: [
      "La **CVEC** est une contribution annuelle de **105 €** pour 2026-2027.",
      "Tu dois obtenir une **attestation** avant de t'inscrire dans ton établissement.",
      "Les **boursiers** en sont exonérés, mais doivent quand même récupérer leur attestation."
    ],
    etapes: [
      { t: "Te connecter au portail", d: "Rends-toi sur cvec.etudiant.gouv.fr, crée ton compte ou connecte-toi avec ton compte Étudiant." },
      { t: "Payer ou déclarer ton exonération", d: "Paye la contribution en ligne. Si tu es boursier, ton exonération est prise en compte automatiquement." },
      { t: "Télécharger l'attestation", d: "L'attestation CVEC est à fournir à ton établissement lors de l'inscription. Garde-la dans ton coffre-fort ou ton téléphone." },
      { t: "Savoir à quoi elle sert", d: "Elle finance l'accueil, la santé, la culture, le sport et l'accompagnement social des étudiants dans ton établissement et ta ville." }
    ],
    pieges: [
      "Oublier l'attestation : sans elle, ton inscription est bloquée.",
      "Passer par un site non officiel : seule la plateforme .gouv.fr est valable.",
      "Penser que tu paies deux fois : l'attestation reste valable pour toute l'année universitaire."
    ],
    liens: [
      { label: "CVEC : une démarche de rentrée incontournable", url: "https://www.etudiant.gouv.fr/fr/cvec-une-demarche-de-rentree-incontournable-955" },
      { label: "Portail CVEC", url: "https://cvec.etudiant.gouv.fr" }
    ],
    sources: ["etudiant.gouv.fr, CVEC 2026-2027 (105 €)"],
    voir: ["bourse-crous", "titre-sejour-etudiant"], verifie: "octobre 2026"
  },
  {
    id: "pret-etudiant", theme: "argent", titre: "Prêt étudiant : à quoi faire attention",
    accroche: "Prêt garanti par l'État, prêt bancaire classique, taux et remboursement.",
    temps: "30 min", cout: "Gratuit à comparer", pour: ["etudiant"], quand: "Avant de t'endetter pour tes études.",
    mots: ["prêt étudiant", "crédit", "garantie de l'état", "bpifrance", "taux", "emprunt", "études", "remboursement"],
    todo: { si: ["etudiant"], prio: 3, pourquoi: "Un prêt mal choisi peut peser des années." },
    enBref: [
      "Un **prêt étudiant garanti par l'État** (Bpifrance) peut aller **jusqu'à 20 000 €**, sur **2 à 10 ans**, avec les banques partenaires.",
      "Compare le **taux**, les **frais de dossier**, la **durée** et la possibilité de **différé** de remboursement.",
      "Un prêt est une dette : ne l'accepte qu'après avoir regardé les aides gratuites (bourse, logement Crous, aides des régions)."
    ],
    etapes: [
      { t: "Épuiser d'abord les aides gratuites", d: "Bourse sur critères sociaux, logement Crous, aides au mérite, aides de la région, job étudiant, alternance. Voir [Bourse et Crous](#guide-bourse-crous) et [Toutes les aides](#aides)." },
      { t: "Estimer ton besoin réel", d: "Frais de scolarité, logement, transport, matériel. Un budget précis évite de trop emprunter." },
      { t: "Comparer plusieurs offres", d: "Dans plusieurs banques : taux, assurance obligatoire, frais de dossier, différé, remboursement anticipé." },
      { t: "Lire l'offre avant de signer", d: "Tu as un délai de réflexion. Vérifie la mensualité, la durée et le coût total du crédit." },
      { t: "Prévoir le remboursement", d: "Estime tes revenus futurs et ta mensualité maximale. Un différé total ou partiel peut aider pendant les études, mais augmente le coût final." }
    ],
    pieges: [
      "Signer sans comprendre le coût total du crédit.",
      "S'endetter pour une école dont l'insertion n'est pas démontrée : regarde les données officielles d'insertion (voir [Aiguillage](https://julomasu.github.io/aiguillage/)).",
      "Se faire démarcher par un organisme qui promet un « prêt garanti » sans l'avoir demandé."
    ],
    liens: [
      { label: "Prêt étudiant garanti par l'État (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F986" },
      { label: "Étudiant.gouv.fr : financer ses études", url: "https://www.etudiant.gouv.fr" }
    ],
    sources: ["Service-Public F986 et Bpifrance (prêt jusqu'à 20 000 €, durée de 2 à 10 ans)"],
    voir: ["bourse-crous", "decouvert-surendettement", "epargne-livret"], verifie: "octobre 2026"
  },
  {
    id: "epargne-livret", theme: "argent", titre: "Épargner : Livret A, LDDS, livret jeune",
    accroche: "Plafonds, taux et pièges : où mettre quelques centaines d'euros en sécurité.",
    temps: "15 min", cout: "Gratuit", pour: ["lyceen", "etudiant", "salarie"], quand: "Dès que tu as un peu d'argent de côté.",
    mots: ["livret a", "ldds", "livret jeune", "épargne", "taux", "plafond", "intérêts", "épargner"],
    todo: { si: ["a16", "a18", "r-job"], prio: 3, pourquoi: "Un livret protège ton épargne et rapporte un peu." },
    enBref: [
      "Le **Livret A** est plafonné à **22 950 €** ; ses intérêts sont **exonérés d'impôt**. Son taux est fixé par l'État et révisé deux fois par an.",
      "Il s'ouvre **dès la naissance**, sans condition de revenus, dans la plupart des banques.",
      "Le **livret jeune** (12-25 ans) a un plafond plus bas, et la banque fixe son taux (au moins celui du Livret A)."
    ],
    etapes: [
      { t: "Choisir un livret", d: "- **Livret A** : plafond 22 950 €, intérêts non imposables\n- **LDDS** : un autre livret réglementé, plafond plus bas\n- **Livret jeune** : 12-25 ans, plafond limité, taux au moins égal au Livret A\nPour commencer, un Livret A suffit." },
      { t: "Vérifier le taux en vigueur", d: "Le taux du Livret A est publié par la Banque de France et révisé le 1ᵉʳ février et le 1ᵉʳ août : 1,70 % depuis août 2026. Vérifie avant de comparer." },
      { t: "Ouvrir le livret", d: "En ligne ou en agence, dans ta banque ou une autre. Une seule ouverture de Livret A par personne." },
      { t: "Alimenter régulièrement", d: "Un petit virement automatique chaque mois crée une habitude : même 20 € par mois." },
      { t: "Garder une épargne de précaution", d: "L'objectif classique : de quoi couvrir 2 à 3 mois de dépenses avant de chercher des placements plus risqués." }
    ],
    pieges: [
      "Se laisser démarcher pour un « placement garanti à 10 % » : c'est presque toujours une arnaque (voir [Arnaques](#guide-arnaques)).",
      "Mettre toute ton épargne dans des cryptos ou des produits que tu ne comprends pas.",
      "Oublier que certains livrets bancaires ont des taux promotionnels temporaires."
    ],
    liens: [
      { label: "Livret A : plafond et taux (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2365" },
      { label: "Banque de France : livrets d'épargne réglementée, la rémunération change (Livret A à 1,7 % au 1ᵉʳ août 2026)", url: "https://www.banque-france.fr/fr/actualites/livrets-depargne-reglementee-leur-remuneration-change" }
    ],
    sources: ["Service-Public, Livret A (plafond 22 950 €)", "Service-Public A18000 et Banque de France (Livret A à 1,7 % depuis le 1ᵉʳ août 2026)"],
    voir: ["ouvrir-compte", "arnaques", "decouvert-surendettement"], verifie: "octobre 2026"
  },
  {
    id: "decouvert-surendettement", theme: "argent", titre: "Découvert, impayés, surendettement",
    accroche: "Que faire quand le compte est dans le rouge ou que les dettes s'accumulent.",
    temps: "30 min", cout: "Gratuit", pour: ["etudiant", "salarie", "chomeur", "independant"], quand: "Dès que tu ne peux plus payer une facture ou un crédit.",
    mots: ["découvert", "dette", "surendettement", "impayé", "banque de france", "huissier", "commission", "frais bancaires"],
    todo: { si: ["p-dette"], prio: 1, pourquoi: "Plus tu agis tôt, plus tu as de solutions." },
    enBref: [
      "Parle **tout de suite** à ta banque ou à ton créancier : un délai ou un échéancier est souvent possible.",
      "Le dossier de **surendettement** à la **Banque de France** est **gratuit**.",
      "Ne paie jamais un intermédiaire qui promet « d'effacer tes dettes »."
    ],
    etapes: [
      { t: "Faire le point sur tes dettes", d: "Liste tout ce que tu dois (banque, loyer, téléphone, impôts), les montants, les échéances et les relances reçues." },
      { t: "Contacter ta banque et tes créanciers", d: "Demande un étalement, un report ou une réduction des frais. Fais-le par écrit ou via ton espace client pour garder une trace." },
      { t: "Chercher de l'aide gratuite", d: "Ton assistant·e social·e (établissement, mairie), les **Points Conseil Budget** et les associations (UDAF, Crésus, Restos du Cœur) t'aident sans frais." },
      { t: "Déposer un dossier si nécessaire", d: "Si tu ne peux vraiment plus rembourser, la **commission de surendettement** de la Banque de France examine ta situation. Le dépôt est gratuit.", lien: { label: "Surendettement (Banque de France)", url: "https://www.banque-france.fr/fr/a-votre-service/particuliers/faire-face-difficultes-financieres-ou-dettes" } },
      { t: "Éviter l'aggravation", d: "N'emprunte pas pour rembourser un autre prêt sans conseil. Surveille les frais d'incident bancaire." }
    ],
    pieges: [
      "Payer des frais à un « cabinet » qui promet d'effacer tes dettes.",
      "Ignorer les courriers : les délais de réponse comptent.",
      "Faire un crédit revolving pour combler un trou."
    ],
    liens: [
      { label: "Faire face à des difficultés financières ou à des dettes (Banque de France)", url: "https://www.banque-france.fr/fr/a-votre-service/particuliers/faire-face-difficultes-financieres-ou-dettes" },
      { label: "Banque de France : faire face à des difficultés financières (Points conseil budget)", url: "https://www.banque-france.fr/fr/a-votre-service/particuliers/faire-face-difficultes-financieres-ou-dettes" }
    ],
    sources: ["Banque de France, procédure de surendettement (gratuite)"],
    voir: ["ouvrir-compte", "pret-etudiant", "aide-juridique"], verifie: "octobre 2026"
  },
  {
    id: "caf-compte", theme: "argent", titre: "Ton compte Caf : ouvrir, déclarer, ne rien oublier",
    accroche: "Créer ton espace, déclarer tes ressources et signaler les changements à temps.",
    temps: "20 min", cout: "Gratuit", pour: ["etudiant", "alternant", "salarie", "chomeur"], quand: "Dès que tu veux demander une aide (APL, prime d'activité) ou que ta situation change.",
    mots: ["caf", "allocataire", "compte caf", "déclaration de ressources", "changement de situation", "apl", "prime d'activité", "numéro allocataire"],
    todo: { si: ["etudiant", "alternant", "salarie", "chomeur"], prio: 2, pourquoi: "Le compte Caf est le point d'entrée de presque toutes les aides." },
    enBref: [
      "Tu peux demander **toutes les aides de la Caf** depuis un seul compte sur caf.fr.",
      "Signale **tout changement** : adresse, colocation, ressources, situation familiale.",
      "Une erreur ou un oubli de déclaration peut te faire **rembourser** des aides indues."
    ],
    etapes: [
      { t: "Créer ton compte", d: "Sur caf.fr, avec ton numéro de sécurité sociale. Tu reçois ton **numéro d'allocataire** par courrier ou dans ton espace." },
      { t: "Faire une simulation", d: "Le simulateur de la Caf te donne une estimation de tes droits (APL, prime d'activité, RSA). C'est gratuit, sans engagement.", lien: { label: "Mes droits (caf.fr)", url: "https://www.caf.fr" } },
      { t: "Déposer la demande", d: "Pour chaque aide, tu remplis la demande en ligne et tu joins les pièces : pièce d'identité, RIB, bail, ressources. Voir [APL](#guide-apl-etudiant) et [prime d'activité](#guide-prime-activite)." },
      { t: "Déclarer tes ressources", d: "La déclaration se fait en ligne selon la périodicité de ton aide. Utilise le **montant net social** de tes fiches de paie." },
      { t: "Signaler tout changement", d: "Déménagement, colocation, nouvel emploi, rupture, naissance : déclare-le dans ton espace pour éviter un indu." }
    ],
    pieges: [
      "Ne pas déclarer un changement de situation et devoir rembourser plus tard.",
      "Se tromper entre net imposable et **net social** dans la déclaration de ressources.",
      "Passer par un site non officiel : seule l'adresse caf.fr est valable."
    ],
    liens: [
      { label: "caf.fr", url: "https://www.caf.fr" },
      { label: "Prime d'activité : ressources à déclarer (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F33375" }
    ],
    sources: ["caf.fr (compte allocataire)", "Service-Public F33375 (montant net social)"],
    voir: ["apl-etudiant", "prime-activite", "fiche-de-paie"], verifie: "octobre 2026"
  }
);
