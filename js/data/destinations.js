/* Destinations : pour chaque cas (pays ou situation), l'essentiel, les blocs travail / études / santé / impôts et les guides utiles.
   Tout ce qui est écrit ici reprend les faits déjà sourcés dans les guides du thème « Partir à l'étranger » (voir leurs sources). */
P.DESTINATIONS = [
  {
    id: "ue", nom: "Union européenne, Islande, Norvège, Liechtenstein", court: "Europe (UE / EEE)", sous: "Allemagne, Espagne, Belgique, Italie, Irlande…",
    accroche: "Tu peux y travailler et y chercher un emploi sans visa ni permis de travail.",
    essentiel: [
      "En tant que citoyen·ne de l'UE, tu peux **accepter un emploi ou en chercher un** dans un autre pays de l'UE **sans visa ni permis de travail**.",
      "Selon les pays, tu dois **déclarer ta présence** auprès des autorités locales si tu restes plus de quelques mois.",
      "Une **carte d'identité ou un passeport valide** suffit en général pour entrer ; vérifie la page du pays sur France Diplomatie."
    ],
    travail: ["Tu relèves en général de la **sécurité sociale du pays où tu travailles**.", "Si tu es **détaché·e** par ton employeur français (24 mois maximum sauf dérogation), tu restes affilié·e en France avec le formulaire **A1**.", "Chômage : tu peux garder ton allocation française **jusqu'à 3 mois** pendant ta recherche d'emploi dans un autre État européen, avec le **U2**."],
    etudes: ["**Erasmus+** finance des échanges d'étudiants en Europe, avec une bourse.", "L'**aide à la mobilité internationale (AMI)** couvre 1 à 10 mois consécutifs, 10 mois maximum sur l'ensemble des études supérieures.", "Un **stage** à l'étranger exige une convention de stage signée avant le départ."],
    sante: ["Pour un séjour temporaire (voyage, études), la **CEAM** (carte européenne d'assurance maladie) t'aide à être soigné·e aux conditions locales.", "Si tu t'installes pour travailler, tu rends ta carte Vitale et ta CEAM et tu dépends du pays de travail."],
    impots: ["Un foyer fiscal hors de France fait de toi un **non-résident** : l'année du départ, tu déclares tes revenus du 1ᵉʳ janvier à la date du départ.", "Les conventions fiscales évitent la double imposition."],
    guides: ["partir-etranger-checklist", "travailler-europe", "etudier-etranger", "stage-etranger", "secu-expatrie", "chomage-etranger", "impots-expatrie", "expatriation-inscription", "permis-etranger", "volontariat-international", "au-pair"],
    liens: [
      { label: "Travailler dans un autre pays de l'UE (Commission européenne)", url: "https://employment-social-affairs.ec.europa.eu/policies-and-activities/moving-working-europe/working-another-eu-country_fr" },
      { label: "Voyager dans l'UE (Europe Direct)", url: "https://european-union.europa.eu/live-work-study/travelling-eu_fr" },
      { label: "Conseils aux voyageurs (France Diplomatie)", url: "https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/" }
    ]
  },
  {
    id: "suisse", nom: "Suisse et travail frontalier", court: "Suisse / frontalier", sous: "Genève, Bâle, Luxembourg, Belgique, Allemagne…",
    accroche: "Tu habites en France et tu travailles de l'autre côté de la frontière.",
    essentiel: [
      "Un **travailleur frontalier** habite dans un pays et travaille dans un autre, en rentrant chaque jour (ou chaque semaine) chez lui.",
      "Tu dois choisir ta **couverture maladie** : en **Suisse**, tu as **3 mois pour exercer ton droit d'option** ; passé ce délai, tu es affilié·e à l'assurance suisse, et l'option est **irrévocable**.",
      "Pour les autres pays européens, tu t'inscris auprès de l'assurance maladie du pays de travail et demandes un **formulaire S1** à remettre à ta CPAM."
    ],
    travail: ["Ton employeur étranger te remet les documents d'affiliation à la sécurité sociale du pays de travail.", "Ta déclaration de revenus et ton lieu d'imposition dépendent de la convention fiscale entre la France et le pays de travail : renseigne-toi avant de signer."],
    etudes: [],
    sante: ["Voir le guide « Travailleur frontalier » : droit d'option en Suisse, S1 pour les autres pays européens."],
    impots: ["Ton foyer fiscal reste en France si tu y habites : déclare aussi tes revenus étrangers selon la convention applicable."],
    guides: ["frontalier", "secu-expatrie", "impots-expatrie", "chomage-etranger"],
    liens: [
      { label: "Travailleur frontalier : droits et prise en charge (ameli)", url: "https://www.ameli.fr/assure/droits-demarches/europe-international/travailleur-frontalier-droits-prise-en-charge" },
      { label: "Travailleur frontalier en Suisse (ameli)", url: "https://www.ameli.fr/assure/droits-demarches/europe-international/travailleur-frontalier-suisse" }
    ]
  },
  {
    id: "uk", nom: "Royaume-Uni (après le Brexit)", court: "Royaume-Uni", sous: "Londres, Écosse, pays de Galles, Irlande du Nord",
    accroche: "Plus dans l'UE depuis le 31 janvier 2020 : visa, ETA et passeport.",
    essentiel: [
      "Pour **travailler, étudier ou s'installer**, un **visa de long séjour** est nécessaire.",
      "Pour un séjour **touristique ou de courte durée**, il faut une **ETA** : **20 £**, valable **2 ans**, pour des séjours de **6 mois maximum** chacun.",
      "Il faut un **passeport valide** : la carte d'identité n'est plus acceptée, sauf pour les résidents titulaires du « settled » ou « pre-settled status »."
    ],
    travail: ["Le visa **Skilled Worker** correspond à un emploi qualifié avec un employeur reconnu : vérifie les conditions sur le site officiel du gouvernement britannique.", "Pense à vérifier ta situation sur la page « Check if you need a UK visa » avant de réserver."],
    etudes: ["Pour étudier, un **visa étudiant de long séjour** est requis. Erasmus+ ne couvre plus automatiquement le Royaume-Uni : renseigne-toi auprès de ton établissement."],
    sante: ["La CEAM n'est plus valable comme avant : prévois une assurance santé ou voyage adaptée."],
    impots: ["Vois le guide « Impôts : partir à l'étranger » et la convention fiscale France–Royaume-Uni si tu t'installes."],
    guides: ["royaume-uni", "partir-etranger-checklist", "secu-expatrie", "impots-expatrie", "etudier-etranger", "britannique-en-france"],
    liens: [
      { label: "Entrée et séjour au Royaume-Uni (France Diplomatie)", url: "https://www.diplomatie.gouv.fr/fr/information-par-pays/royaume-uni/conseils-aux-voyageurs-entree-sejour" },
      { label: "Check if you need a UK visa (gov.uk)", url: "https://www.gov.uk/check-uk-visa" },
      { label: "Skilled Worker visa (gov.uk)", url: "https://www.gov.uk/skilled-worker-visa" }
    ]
  },
  {
    id: "us", nom: "États-Unis", court: "États-Unis", sous: "Voyage, stage, études, J-1",
    accroche: "ESTA pour voyager ; visa pour travailler, faire un stage ou étudier.",
    essentiel: [
      "L'**ESTA** permet de voyager pour **affaires ou loisirs** dans le cadre du programme d'exemption de visa, mais **ne garantit pas l'entrée** : elle est accordée ou refusée à l'arrivée.",
      "Pour **travailler, faire un stage ou étudier**, il faut en général un **visa** demandé auprès d'une ambassade ou d'un consulat américain (par exemple le visa d'échange **J-1**).",
      "La Sécu française ne te couvre pas aux États-Unis : une **assurance santé et rapatriement** est indispensable."
    ],
    travail: ["Le type de visa dépend de ton projet ; commence par les pages officielles de l'ambassade des États-Unis."],
    etudes: ["Le visa étudiant et le J-1 demandent un établissement ou un organisme agréé qui te parraine."],
    sante: ["Souscris une assurance santé et rapatriement avant le départ : les soins sont très coûteux."],
    impots: ["Voir le guide « Impôts : partir à l'étranger » et la convention fiscale applicable."],
    guides: ["etats-unis", "partir-etranger-checklist", "stage-etranger", "secu-expatrie", "impots-expatrie"],
    liens: [
      { label: "Entrée et séjour aux États-Unis (France Diplomatie)", url: "https://www.diplomatie.gouv.fr/fr/information-par-pays/etats-unis/conseils-aux-voyageurs-entree-sejour" },
      { label: "ESTA (site officiel)", url: "https://esta.cbp.dhs.gov/?lang=fr" }
    ]
  },
  {
    id: "ca", nom: "Canada", court: "Canada", sous: "Études, Mobilité francophone, PVT",
    accroche: "Permis d'études, Mobilité francophone, accord de mobilité des jeunes.",
    essentiel: [
      "Pour **étudier**, il faut un **permis d'études** ; une autorisation de voyage électronique (AVE) peut aussi être demandée selon ton mode de transport.",
      "Le programme **Mobilité francophone** propose un **permis de travail** hors Québec pour un emploi francophone ; frais indiqués : **155 $** (vérifie la page officielle).",
      "Un accord franco-canadien facilite la **mobilité des jeunes de 18 à 35 ans** (vacances-travail)."
    ],
    travail: ["Compare PVT et Mobilité francophone : le second exige un emploi avec offre d'un employeur."],
    etudes: ["Le permis d'études se demande avant le départ, avec une lettre d'admission d'un établissement reconnu."],
    sante: ["Prévois une assurance santé pour la durée du séjour (la Sécu française ne te couvre pas)."],
    impots: ["Voir le guide « Impôts : partir à l'étranger » et la convention fiscale France–Canada."],
    guides: ["canada", "pvt", "etudier-etranger", "partir-etranger-checklist", "impots-expatrie"],
    liens: [
      { label: "Étudier au Canada (IRCC)", url: "https://www.canada.ca/fr/immigration-refugies-citoyennete/services/etudier-canada.html" },
      { label: "Mobilité francophone (IRCC)", url: "https://www.canada.ca/fr/immigration-refugies-citoyennete/services/travailler-canada/instructions-speciales/mobilite-francophone.html" }
    ]
  },
  {
    id: "pvt", nom: "Programme Vacances-Travail (Australie, Nouvelle-Zélande, Japon…)", court: "PVT (vacances-travail)", sous: "Partir un an et travailler sur place",
    accroche: "Un visa d'un an pour voyager et travailler dans un pays partenaire, de 18 à 30 ans.",
    essentiel: [
      "Le **PVT** permet de séjourner **jusqu'à un an** dans un pays partenaire en travaillant pour financer ton séjour.",
      "Il faut avoir **18 à 30 ans révolus** à la date de la demande, et **jusqu'à 35 ans** pour l'**Australie**, le **Canada** et l'**Argentine**.",
      "Chaque pays a **ses règles** (quotas, durée, justificatifs, assurance) : suis la page officielle du pays visé."
    ],
    travail: ["Tu peux travailler pour financer ton séjour, avec des limites variables selon le pays."],
    etudes: [],
    sante: ["Prévois une assurance santé, rapatriement et responsabilité civile pour toute la durée du séjour."],
    impots: ["Selon la durée, tu peux rester résident fiscal français : voir le guide « Impôts : partir à l'étranger »."],
    guides: ["pvt", "partir-etranger-checklist", "secu-expatrie", "impots-expatrie", "permis-etranger", "retour-france"],
    liens: [
      { label: "Programme vacances-travail (France Diplomatie)", url: "https://www.diplomatie.gouv.fr/fr/services-aux-francaises-et-aux-francais/preparer-son-expatriation/programme-vacances-travail-pvt" },
      { label: "Working Holiday Visa en Australie", url: "https://au.diplomatie.gouv.fr/fr/visa-vacances-travail-working-holiday-visa-en-australie" }
    ]
  },
  {
    id: "monde", nom: "Reste du monde", court: "Autre pays", sous: "Asie, Afrique, Amérique latine, Océanie…",
    accroche: "La méthode universelle : pays, durée, motif, puis la fiche officielle de France Diplomatie.",
    essentiel: [
      "Les démarches dépendent surtout de **trois choses** : le pays (UE ou non), la **durée** du séjour et le **motif** (travail, études, stage, vacances).",
      "Consulte la **fiche pays** de France Diplomatie : entrée et séjour, santé, sécurité.",
      "Avant de partir, **restitue ta carte Vitale et ta CEAM** si tu t'installes pour travailler à l'étranger, et prévois ta **couverture santé** sur place.",
      "Pour plus de **6 mois**, inscris-toi au **registre des Français établis hors de France**."
    ],
    travail: ["Visa de travail, permis de séjour et reconnaissance des diplômes dépendent du pays : commence par son ambassade en France."],
    etudes: ["Passe par ton établissement (échanges) ou par l'ambassade du pays pour le visa étudiant."],
    sante: ["Assurance santé, rapatriement et vaccins : voir [Voyager à l'étranger](#guide-voyager)."],
    impots: ["Le départ change ton statut fiscal : voir le guide « Impôts : partir à l'étranger »."],
    guides: ["partir-etranger-checklist", "expatriation-inscription", "secu-expatrie", "impots-expatrie", "permis-etranger", "voyager", "volontariat-international"],
    liens: [
      { label: "Conseils aux voyageurs (France Diplomatie)", url: "https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/" },
      { label: "Registre des Français établis hors de France (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F33307" }
    ]
  },
  {
    id: "retour", nom: "Je rentre en France", court: "Retour en France", sous: "Sécu, chômage, impôts, logement",
    accroche: "Retrouver ta couverture santé, tes droits et ta situation fiscale.",
    essentiel: [
      "Si tu **reprends un travail en France**, l'affiliation à l'Assurance Maladie est acquise **dès la 1ʳᵉ heure travaillée**.",
      "Si tu rentres **sans activité**, tu peux demander la **protection universelle maladie (Puma)** ; en l'absence de maintien de droits, un **délai de 3 mois** peut s'appliquer.",
      "Si tu touchais le chômage à l'étranger, tu remets le document **U2** à France Travail."
    ],
    travail: ["Inscris-toi à France Travail dès ton retour si tu cherches un emploi."],
    etudes: [],
    sante: ["Demande ta couverture santé dès ton arrivée pour éviter une rupture : voir « Rentrer en France »."],
    impots: ["Signale ton retour à l'administration fiscale : tu redeviens résident fiscal français."],
    guides: ["retour-france", "secu-18-ans", "inscription-france-travail", "changement-adresse", "ouvrir-compte"],
    liens: [
      { label: "Retour en France : couverture maladie (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F32823" },
      { label: "Puma (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F32824" }
    ]
  },
  {
    id: "venir", nom: "Je viens en France depuis l'étranger", court: "Venir en France", sous: "Études, travail, Brexit",
    accroche: "Étudiant·e étranger·ère, Britannique installé·e en France : titre de séjour et droits.",
    essentiel: [
      "Avec un titre étudiant, tu peux travailler **964 heures par an**.",
      "À la fin des études, tu peux demander une **carte de séjour salarié ou travailleur temporaire** si tu as un contrat (ou une promesse d'embauche) et que ton employeur a obtenu une **autorisation de travail**.",
      "Les **ressortissants britanniques** installés en France avant le **31 décembre 2020** relèvent de l'accord de retrait et ont un titre de séjour dédié."
    ],
    travail: ["Le changement de statut se demande dans les **2 mois précédant la fin de validité** de ta carte étudiant."],
    etudes: ["Voir le guide « Titre de séjour étudiant » et la CVEC."],
    sante: ["Affilie-toi à la Sécurité sociale dès que possible."],
    impots: ["Pense à ta première déclaration de revenus en France."],
    guides: ["titre-sejour-etudiant", "travailler-france-etranger", "britannique-en-france", "cvec", "secu-18-ans", "ouvrir-compte", "job-etudiant-droits"],
    liens: [
      { label: "Étudiant étranger : changement de statut (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2229" },
      { label: "APS (Campus France)", url: "https://www.campusfrance.org/fr/l-autorisation-provisoire-de-sejour-ou-aps" }
    ]
  }
];
