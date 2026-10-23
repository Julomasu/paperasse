/* Thème « Partir à l'étranger ». Sources : France Diplomatie, Service-Public, ameli, France Travail, impots.gouv.fr, gov.uk, canada.ca, Your Europe. */
(P.GUIDES = P.GUIDES || []).push(
  {
    id: "partir-etranger-checklist", theme: "etranger", titre: "Partir à l'étranger : la check-list complète",
    accroche: "Papiers, Sécu, impôts, banque, logement, consulat : tout ce qu'on oublie, dans l'ordre.",
    temps: "30 min", cout: "Gratuit", pour: ["lyceen", "etudiant", "alternant", "salarie", "chomeur"], quand: "3 à 6 mois avant le départ.",
    mots: ["partir à l'étranger", "expatriation", "check-list", "départ", "déménager à l'étranger", "voyage long", "année à l'étranger"],
    todo: { si: ["p-etranger"], prio: 1, pourquoi: "Un départ mal préparé coûte cher : Sécu, impôts, papiers et assurances se règlent avant de partir." },
    enBref: [
      "Les démarches dépendent surtout de **trois choses** : le pays (UE ou non), la **durée** du séjour et le **motif** (travail, études, stage, vacances).",
      "Avant de partir, il faut **restituer ta carte Vitale et ta CEAM** si tu t'installes pour travailler à l'étranger, et prévoir ta **couverture santé** sur place.",
      "Pour un séjour de **plus de 6 mois**, tu peux t'inscrire au **registre des Français établis hors de France** (consulat)."
    ],
    etapes: [
      { t: "Définir ton projet", d: "Quel pays ? Combien de temps (moins de 3 mois, 3 à 12 mois, plus d'un an) ? Pour quoi faire : travailler, étudier, stage, volontariat, vacances-travail ? C'est ce qui détermine les papiers.\n\nChoisis ta destination dans [Partir à l'étranger](#destination) : on te montre les démarches propres à chaque cas." },
      { t: "Vérifier tes papiers", d: "Passeport ou carte d'identité (selon le pays), validité restante, visa ou autorisation de voyage. Beaucoup de pays exigent une validité de plusieurs mois après la date de retour. Voir [Voyager à l'étranger](#guide-voyager) et [Carte d'identité et passeport](#guide-carte-identite-passeport).", lien: { label: "Conseils aux voyageurs (France Diplomatie)", url: "https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/" } },
      { t: "Régler la santé et la Sécu", d: "En Europe : la CEAM pour un séjour temporaire, ou l'affiliation locale si tu travailles sur place. Hors Europe : une assurance santé et rapatriement. Voir [Santé et Sécu à l'étranger](#guide-secu-expatrie) et [Tomber malade à l'étranger](#guide-soins-etranger)." },
      { t: "Préparer les impôts", d: "Si tu quittes la France pour t'installer, ta situation fiscale change l'année du départ. Voir [Impôts : partir vivre ou travailler à l'étranger](#guide-impots-expatrie)." },
      { t: "Prévenir les organismes", d: "Caf (APL, prime d'activité), France Travail, banque, assurance, mutuelle, opérateur mobile, bailleur, établissement d'enseignement. Garde des copies numériques de tes papiers (voir [Perdu ou volé](#guide-perte-vol-papiers))." },
      { t: "S'inscrire au consulat sur place", d: "Si tu restes plus de 6 mois, l'inscription au registre te permet d'être joint en cas d'urgence et de demander tes papiers français. Voir [S'inscrire au registre des Français de l'étranger](#guide-expatriation-inscription)." }
    ],
    pieges: [
      "Partir sans assurance santé et rapatriement hors Europe.",
      "Oublier de prévenir la Caf, le fisc ou ta banque : des aides ou des prélèvements continuent à tort.",
      "Découvrir au dernier moment que ton passeport expire trop tôt ou qu'un visa est nécessaire."
    ],
    liens: [
      { label: "Conseils aux voyageurs (France Diplomatie)", url: "https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/" },
      { label: "Inscription consulaire (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F33307" },
      { label: "Voyager dans l'UE : tes droits (Union européenne)", url: "https://european-union.europa.eu/live-work-study/travelling-eu_fr" }
    ],
    sources: ["France Diplomatie, Conseils aux voyageurs", "Service-Public F33307 (inscription consulaire, séjour de plus de 6 mois)", "ameli.fr, travailleur expatrié (restitution de la carte Vitale et de la CEAM)"],
    voir: ["travailler-europe", "secu-expatrie", "impots-expatrie", "expatriation-inscription", "retour-france"], verifie: "octobre 2026"
  },
  {
    id: "travailler-europe", theme: "etranger", titre: "Travailler dans un autre pays de l'Union européenne",
    accroche: "Pas de visa : tes droits, comment chercher, ce qu'il faut régler avant et sur place.",
    temps: "45 min", cout: "Gratuit", pour: ["etudiant", "salarie", "chomeur", "alternant"], quand: "Avant de signer un contrat ou de partir chercher du travail.",
    mots: ["travailler en europe", "union européenne", "libre circulation", "allemagne", "espagne", "belgique", "pays-bas", "irlande", "portugal", "italie", "emploi à l'étranger", "chercher un travail"],
    todo: { si: ["p-ue"], prio: 2, pourquoi: "En Europe tu peux travailler sans visa, mais Sécu, impôts et chômage se règlent avant." },
    enBref: [
      "En tant que citoyen·ne de l'UE, tu as le **droit d'accepter un emploi ou d'en chercher un** dans tout autre pays de l'UE, **sans visa ni permis de travail**.",
      "Selon les pays, tu dois **déclarer ta présence** et t'enregistrer auprès des autorités locales si tu restes plus de quelques mois.",
      "Si tu travailles sur place, tu dépends en général de **la sécurité sociale du pays de travail** (voir [Santé et Sécu à l'étranger](#guide-secu-expatrie))."
    ],
    etapes: [
      { t: "Savoir ce que tu peux faire", d: "Chercher un emploi, travailler, étudier, créer une activité : le droit de séjour est large, mais il a des règles (documents, durée de recherche, ressources suffisantes). Lis la page « Your Europe » du pays visé.", lien: { label: "Demandeurs d'emploi dans un autre pays de l'UE (Your Europe)", url: "https://europa.eu/youreurope/citizens/residence/residence-rights/jobseekers/index_fr.htm" } },
      { t: "Chercher un emploi", d: "Offres du portail européen EURES, sites de recrutement locaux, réseaux, agences d'emploi du pays. Adapte ton CV au format du pays." },
      { t: "Garder tes droits au chômage si tu en as", d: "Si tu touches l'allocation chômage en France, tu peux la conserver **jusqu'à 3 mois** dans un autre pays européen avec le formulaire **U2**. Voir [Chercher un emploi à l'étranger avec son chômage](#guide-chomage-etranger)." },
      { t: "T'enregistrer sur place", d: "Après ton arrivée : adresse, enregistrement auprès de la commune ou des autorités selon le pays, numéro fiscal ou de sécurité sociale locaux, compte bancaire. Les règles changent d'un pays à l'autre : renseigne-toi auprès de la commune ou du consulat." },
      { t: "Régler Sécu et impôts", d: "Si tu travailles dans l'UE, la **sécurité sociale du pays de travail** s'applique. Fiscalement, ta **résidence** détermine où tu es imposé·e. Voir [Impôts : partir vivre ou travailler à l'étranger](#guide-impots-expatrie)." }
    ],
    pieges: [
      "Croire que « sans visa » veut dire « sans aucune formalité » : l'enregistrement local reste souvent obligatoire.",
      "Oublier de prévenir la Caf, ta mutuelle et le fisc.",
      "Partir sans assurance au tout début, avant que ton affiliation locale soit active."
    ],
    liens: [
      { label: "Travailler dans un autre pays de l'UE (Commission européenne)", url: "https://employment-social-affairs.ec.europa.eu/policies-and-activities/moving-working-europe/working-another-eu-country_fr" },
      { label: "Voyager, vivre et travailler dans l'UE", url: "https://european-union.europa.eu/live-work-study/travelling-eu_fr" },
      { label: "Je pars chercher un emploi en Europe (France Travail)", url: "https://www.francetravail.fr/candidat/mes-droits-aux-aides-et-allocati/lallocation-chomage-a-letranger/je-pars-chercher-un-emploi-en-eu.html" }
    ],
    sources: ["Commission européenne, travailler dans un autre pays de l'UE", "Your Europe, droits de séjour des demandeurs d'emploi", "France Travail, chômage à l'étranger (U2, 3 mois)"],
    voir: ["secu-expatrie", "impots-expatrie", "chomage-etranger", "frontalier", "partir-etranger-checklist"], verifie: "octobre 2026"
  },
  {
    id: "royaume-uni", theme: "etranger", titre: "Royaume-Uni après le Brexit : voyager, travailler, étudier",
    accroche: "ETA, passeport, visa de travail ou d'études : ce qui a changé depuis que le Royaume-Uni a quitté l'UE.",
    temps: "30 min", cout: "ETA : 20 £", pour: ["lyceen", "etudiant", "salarie", "chomeur"], quand: "Avant de réserver un voyage ou d'accepter un job au Royaume-Uni.",
    mots: ["brexit", "royaume-uni", "angleterre", "uk", "londres", "eta", "visa", "skilled worker", "écosse", "britannique"],
    todo: { si: ["p-uk"], prio: 2, pourquoi: "Depuis le Brexit, il faut une ETA ou un visa : on ne voyage plus au Royaume-Uni comme en Europe." },
    enBref: [
      "Le Royaume-Uni ne fait plus partie de l'UE depuis le **31 janvier 2020** : pour y **travailler, étudier ou s'installer**, un **visa de long séjour** est nécessaire.",
      "Pour un **séjour touristique** ou de courte durée, il faut une **ETA** (autorisation électronique de voyage) à **20 £**, valable **2 ans** pour des séjours de 6 mois maximum chacun.",
      "Il faut un **passeport valide** : la carte d'identité n'est plus acceptée, sauf pour les résidents bénéficiant du « settled » ou « pre-settled status »."
    ],
    etapes: [
      { t: "Vérifier ce qu'il te faut", d: "Selon ton projet (voyage, travail, études), le gouvernement britannique propose un outil officiel pour savoir si un visa est nécessaire.", lien: { label: "Check if you need a UK visa (GOV.UK, en anglais)", url: "https://www.gov.uk/check-uk-visa" } },
      { t: "Demander l'ETA pour un court séjour", d: "Uniquement sur le **site officiel du gouvernement britannique** ou l'application « UK ETA » : le prix ne dépasse pas 20 £. Les sites qui te facturent davantage sont des intermédiaires.", lien: { label: "Demander une ETA (site officiel)", url: "https://apply-for-an-eta.homeoffice.gov.uk/apply/electronic-travel-authorisation" } },
      { t: "Pour travailler : le visa Skilled Worker", d: "Il faut une **offre d'emploi d'un employeur agréé** (sponsor), un poste d'un certain niveau, un niveau d'anglais et un salaire minimum. Les seuils changent : consulte la page officielle.", lien: { label: "Skilled Worker visa (GOV.UK)", url: "https://www.gov.uk/skilled-worker-visa" } },
      { t: "Pour étudier", d: "Un visa étudiant est nécessaire pour les études longues. Renseigne-toi auprès de l'établissement d'accueil, qui te fournit le justificatif nécessaire." },
      { t: "Préparer santé et assurances", d: "Le Royaume-Uni n'est plus couvert comme un pays de l'UE pour tous les cas : vérifie ta couverture santé et prévois une assurance voyage avec rapatriement. Voir [Tomber malade à l'étranger](#guide-soins-etranger)." }
    ],
    pieges: [
      "Passer par un site qui facture l'ETA beaucoup plus cher que le tarif officiel.",
      "Voyager avec une simple carte d'identité alors qu'un passeport est exigé.",
      "Voyager avec un passeport ou un titre déclaré perdu ou volé : il est retiré à la frontière."
    ],
    liens: [
      { label: "Royaume-Uni : entrée et séjour (France Diplomatie)", url: "https://www.diplomatie.gouv.fr/fr/information-par-pays/royaume-uni/conseils-aux-voyageurs-entree-sejour" },
      { label: "Skilled Worker visa (GOV.UK)", url: "https://www.gov.uk/skilled-worker-visa" },
      { label: "Vérifier si un visa est nécessaire (GOV.UK)", url: "https://www.gov.uk/check-uk-visa" }
    ],
    sources: ["France Diplomatie, Royaume-Uni : entrée / séjour (ETA à 20 £, passeport exigé, visa de long séjour pour travailler ou étudier)", "GOV.UK, Skilled Worker visa"],
    voir: ["voyager", "soins-etranger", "travailler-europe", "partir-etranger-checklist"], verifie: "octobre 2026"
  },
  {
    id: "pvt", theme: "etranger", titre: "Programme Vacances-Travail (PVT) : partir un an et travailler",
    accroche: "Australie, Canada, Argentine, Corée du Sud…: conditions d'âge, visa et démarches.",
    temps: "1 h", cout: "Variable (frais de visa)", pour: ["etudiant", "salarie", "chomeur", "lyceen"], quand: "2 à 4 mois avant le départ souhaité.",
    mots: ["pvt", "vacances-travail", "working holiday", "australie", "canada", "japon", "nouvelle-zélande", "corée", "argentine", "visa", "année sabbatique"],
    todo: { si: ["p-pvt"], prio: 2, pourquoi: "Un PVT permet de voyager et de travailler un an : les dossiers ont des quotas et des dates." },
    enBref: [
      "Le **PVT** permet de séjourner **jusqu'à un an** dans un pays partenaire en **travaillant pour financer ton séjour**.",
      "Il faut avoir **18 à 30 ans révolus** à la date de la demande de visa, et **jusqu'à 35 ans** pour l'**Australie**, le **Canada** et l'**Argentine**.",
      "Chaque pays a **ses règles** (quotas, durée, justificatifs, assurance) : consulte la page officielle du pays visé."
    ],
    etapes: [
      { t: "Vérifier ton éligibilité", d: "Âge, nationalité, casier, ressources minimales, assurance : les conditions diffèrent selon l'accord conclu entre la France et le pays. La liste des accords en vigueur est sur France Diplomatie.", lien: { label: "Programme Vacances-Travail (France Diplomatie)", url: "https://www.diplomatie.gouv.fr/fr/services-aux-francaises-et-aux-francais/preparer-son-expatriation/programme-vacances-travail-pvt" } },
      { t: "Choisir ton pays et ouvrir la demande", d: "Chaque pays a son site : par exemple pour l'Australie, le site de l'ambassade de France explique la procédure du « Working Holiday Visa ». Certains pays fonctionnent par tirage au sort ou par quotas : surveille les dates d'ouverture.", lien: { label: "Visa Vacances-Travail en Australie (ambassade de France)", url: "https://au.diplomatie.gouv.fr/fr/visa-vacances-travail-working-holiday-visa-en-australie" } },
      { t: "Préparer les justificatifs", d: "Passeport valide, ressources, assurance santé et rapatriement, billet retour ou fonds suffisants selon le pays." },
      { t: "Régler tes affaires en France", d: "Impôts, Sécu, banque, aides : voir [Partir à l'étranger : la check-list](#guide-partir-etranger-checklist), [Santé et Sécu à l'étranger](#guide-secu-expatrie) et [Impôts](#guide-impots-expatrie)." },
      { t: "Sur place : papiers et travail", d: "Numéro fiscal local, compte bancaire, contrats de travail écrits : demande toujours un contrat et vérifie que tu es déclaré·e. Inscris-toi au consulat si tu restes plus de 6 mois." }
    ],
    pieges: [
      "Rater l'ouverture des quotas : certains pays n'acceptent qu'un nombre limité de dossiers.",
      "Partir sans assurance santé et rapatriement.",
      "Accepter un travail non déclaré : tu n'as aucune protection."
    ],
    liens: [
      { label: "Programme Vacances-Travail (France Diplomatie)", url: "https://www.diplomatie.gouv.fr/fr/services-aux-francaises-et-aux-francais/preparer-son-expatriation/programme-vacances-travail-pvt" },
      { label: "Australie : visa vacances-travail", url: "https://au.diplomatie.gouv.fr/fr/visa-vacances-travail-working-holiday-visa-en-australie" },
      { label: "Accord franco-canadien relatif à la mobilité des jeunes", url: "https://ca.diplomatie.gouv.fr/fr/aller-en-france/accord-franco-canadien-relatif-la-mobilite-des-jeunes" }
    ],
    sources: ["France Diplomatie, PVT (18 à 30 ans, 35 ans pour l'Australie, le Canada et l'Argentine)", "Ambassade de France en Australie (limite portée à 35 ans depuis le 1ᵉʳ juillet 2019)", "Ambassade de France au Canada (accord de mobilité des jeunes, 18-35 ans)"],
    voir: ["canada", "partir-etranger-checklist", "secu-expatrie", "impots-expatrie"], verifie: "octobre 2026"
  },
  {
    id: "etats-unis", theme: "etranger", titre: "États-Unis : ESTA, visa de travail ou d'études",
    accroche: "Ce que permet l'ESTA, quand il faut un visa, et pourquoi l'assurance est vitale.",
    temps: "30 min", cout: "Variable", pour: ["lyceen", "etudiant", "salarie"], quand: "Au moins 3 mois avant un séjour de travail ou d'études.",
    mots: ["etats-unis", "usa", "esta", "visa j-1", "visa", "amérique", "new york", "californie", "stage aux états-unis"],
    todo: { si: ["p-us"], prio: 3, pourquoi: "L'ESTA ne permet pas de travailler : tout séjour d'études ou de stage demande un visa." },
    enBref: [
      "L'**ESTA** permet de voyager aux États-Unis pour **affaires ou loisirs** dans le cadre du programme d'exemption de visa, mais **ne garantit pas l'entrée** : elle est accordée ou refusée à l'arrivée.",
      "Pour **travailler, faire un stage ou étudier**, il faut en général un **visa** demandé auprès d'une ambassade ou d'un consulat américain (par exemple le visa d'échange **J-1**).",
      "La **couverture santé** n'est pas assurée par la Sécu française aux États-Unis : une assurance santé et rapatriement est indispensable."
    ],
    etapes: [
      { t: "Lire les conditions d'entrée à jour", d: "Les règles changent : consulte la page « Entrée / séjour » de France Diplomatie avant de réserver.", lien: { label: "États-Unis : entrée et séjour (France Diplomatie)", url: "https://www.diplomatie.gouv.fr/fr/information-par-pays/etats-unis/conseils-aux-voyageurs-entree-sejour" } },
      { t: "Demander l'ESTA (voyage)", d: "Uniquement sur le **site officiel du gouvernement américain**. Évite les sites intermédiaires qui majorent le prix.", lien: { label: "ESTA (site officiel)", url: "https://esta.cbp.dhs.gov/?lang=fr" } },
      { t: "Pour travailler ou étudier : le visa", d: "Passe par ton employeur, ton école ou un organisme de parrainage agréé, qui te remet les documents nécessaires, puis prends rendez-vous au consulat." },
      { t: "T'assurer", d: "Souscris une assurance santé et rapatriement adaptée : les soins coûtent très cher. Voir [Tomber malade à l'étranger](#guide-soins-etranger)." },
      { t: "Préparer ton retour et tes impôts", d: "Selon la durée de ton séjour, ta résidence fiscale peut changer. Voir [Impôts : partir vivre ou travailler à l'étranger](#guide-impots-expatrie)." }
    ],
    pieges: [
      "Croire que l'ESTA autorise à travailler ou à faire un stage.",
      "Passer par un faux site « ESTA » qui facture des frais supplémentaires.",
      "Partir sans assurance santé."
    ],
    liens: [
      { label: "États-Unis : entrée et séjour (France Diplomatie)", url: "https://www.diplomatie.gouv.fr/fr/information-par-pays/etats-unis/conseils-aux-voyageurs-entree-sejour" },
      { label: "ESTA (site officiel)", url: "https://esta.cbp.dhs.gov/?lang=fr" }
    ],
    sources: ["France Diplomatie, États-Unis : entrée / séjour (l'ESTA n'est pas un droit d'entrée)", "travel.state.gov, visas d'échange J-1 (demande auprès d'une ambassade ou d'un consulat)"],
    voir: ["voyager", "soins-etranger", "partir-etranger-checklist"], verifie: "octobre 2026"
  },
  {
    id: "canada", theme: "etranger", titre: "Canada : voyager, étudier, travailler",
    accroche: "Autorisation de voyage, permis d'études, Mobilité francophone, PVT.",
    temps: "30 min", cout: "Variable", pour: ["lyceen", "etudiant", "salarie"], quand: "3 à 6 mois avant le départ.",
    mots: ["canada", "québec", "montréal", "mobilité francophone", "permis d'études", "permis de travail", "ave", "eta", "pvt canada"],
    todo: { si: ["p-ca"], prio: 3, pourquoi: "Études et travail au Canada passent par des permis précis, avec des délais." },
    enBref: [
      "Pour **étudier** au Canada, il faut un **permis d'études** ; une autorisation de voyage électronique (AVE) peut aussi être demandée selon ton mode de transport.",
      "Le programme **Mobilité francophone** propose un **permis de travail** pour travailler dans une province hors Québec avec un emploi francophone ; les frais indiqués sont de **155 $** (consulte la page officielle).",
      "Un accord franco-canadien facilite la **mobilité des jeunes de 18 à 35 ans** (programme vacances-travail)."
    ],
    etapes: [
      { t: "Choisir ton projet", d: "Voyage, études, stage, travail ou PVT : chaque voie a ses propres conditions. Voir [PVT](#guide-pvt) pour un séjour d'un an." },
      { t: "Pour étudier", d: "Dépose une demande de permis d'études une fois admis·e dans un établissement agréé. Sous conditions, tu peux travailler hors campus pendant tes études, et rester travailler après un diplôme éligible.", lien: { label: "Étudier au Canada (canada.ca)", url: "https://www.canada.ca/fr/immigration-refugies-citoyennete/services/etudier-canada.html" } },
      { t: "Pour travailler avec Mobilité francophone", d: "Ce permis s'adresse à des travailleurs qualifiés qui ont une offre d'emploi dans une province hors Québec ; l'employeur a des formalités à remplir avant ta demande.", lien: { label: "Mobilité francophone (canada.ca)", url: "https://www.canada.ca/fr/immigration-refugies-citoyennete/services/travailler-canada/instructions-speciales/mobilite-francophone.html" } },
      { t: "Préparer les papiers et la santé", d: "Passeport valide, justificatifs de ressources, assurance santé pour la période où tu n'es pas couvert·e par le régime local. Voir [Tomber malade à l'étranger](#guide-soins-etranger)." },
      { t: "Régler tes affaires en France", d: "Impôts, Sécu, banque : voir [la check-list de départ](#guide-partir-etranger-checklist)." }
    ],
    pieges: [
      "Commencer à travailler sans le bon permis : il peut te coûter ton droit de rester.",
      "Passer par un intermédiaire payant pour une démarche gratuite.",
      "Oublier l'assurance santé le temps que ta couverture locale démarre."
    ],
    liens: [
      { label: "Étudier au Canada (canada.ca)", url: "https://www.canada.ca/fr/immigration-refugies-citoyennete/services/etudier-canada.html" },
      { label: "Mobilité francophone (canada.ca)", url: "https://www.canada.ca/fr/immigration-refugies-citoyennete/services/travailler-canada/instructions-speciales/mobilite-francophone.html" },
      { label: "Accord franco-canadien de mobilité des jeunes", url: "https://ca.diplomatie.gouv.fr/fr/aller-en-france/accord-franco-canadien-relatif-la-mobilite-des-jeunes" }
    ],
    sources: ["canada.ca, Mobilité francophone (frais de 155 $) et études au Canada", "Ambassade de France au Canada, accord de mobilité des jeunes (18-35 ans)"],
    voir: ["pvt", "soins-etranger", "partir-etranger-checklist"], verifie: "octobre 2026"
  },
  {
    id: "etudier-etranger", theme: "etranger", titre: "Étudier à l'étranger : Erasmus+ et aides à la mobilité",
    accroche: "Bourse Erasmus+, aide à la mobilité internationale, bourse Crous maintenue : ce que tu peux cumuler.",
    temps: "1 h", cout: "Gratuit", pour: ["etudiant"], quand: "6 à 12 mois avant le départ.",
    mots: ["erasmus", "erasmus+", "études à l'étranger", "mobilité internationale", "ami", "bourse", "échange universitaire", "semestre à l'étranger"],
    todo: { si: ["p-etudes-etranger"], prio: 2, pourquoi: "Les aides ont des dossiers et des dates : certaines se cumulent." },
    enBref: [
      "**Erasmus+** est le programme européen d'échanges d'étudiants qui permet d'étudier en Europe, avec une **bourse**.",
      "L'**aide à la mobilité internationale (AMI)** s'adresse à certains étudiants : séjour de **1 à 10 mois consécutifs**, dans le cadre de ton cursus, avec un total de **10 mois maximum** sur l'ensemble des études supérieures.",
      "D'autres aides existent : régions, communes, établissements, fondations. Les **bourses sur critères sociaux** peuvent être versées en Europe."
    ],
    etapes: [
      { t: "Voir avec ton établissement", d: "Le service des relations internationales de ton école ou de ton université gère les échanges, les accords et les dossiers Erasmus+. Candidate dans les délais." },
      { t: "Demander ta bourse Erasmus+", d: "Le montant dépend du pays et de la situation. Les étudiants des Outre-mer perçoivent un montant spécifique.", lien: { label: "Bourses Erasmus+ et AMI (Étudiant.gouv.fr)", url: "https://www.etudiant.gouv.fr/fr/bourses-erasmus-et-aide-la-mobilite-internationale-ami-67" } },
      { t: "Vérifier l'aide à la mobilité internationale", d: "Conditions, cumul et montant : consulte la fiche officielle.", lien: { label: "Aide à la mobilité internationale (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F380" } },
      { t: "Régler tes affaires en France", d: "Logement (préavis, assurance), Caf, bourse, mutuelle, impôts. Voir [la check-list de départ](#guide-partir-etranger-checklist) et [Bourse et logement Crous](#guide-bourse-crous)." },
      { t: "Prévoir santé et assurance", d: "CEAM en Europe pour un séjour temporaire d'études, assurance complémentaire (rapatriement). Voir [Tomber malade à l'étranger](#guide-soins-etranger)." }
    ],
    pieges: [
      "Oublier de renouveler ta demande de bourse ou ton DSE pendant ton année à l'étranger.",
      "Partir sans connaître le calendrier de versement de la bourse Erasmus+.",
      "Ne pas garder de justificatifs de ton séjour (certificat de présence) : ils conditionnent le paiement."
    ],
    liens: [
      { label: "Bourses Erasmus+ et AMI (Étudiant.gouv.fr)", url: "https://www.etudiant.gouv.fr/fr/bourses-erasmus-et-aide-la-mobilite-internationale-ami-67" },
      { label: "Aide à la mobilité internationale (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F380" },
      { label: "Mobilité internationale et académique (Étudiant.gouv.fr)", url: "https://www.etudiant.gouv.fr/fr/mobilite-internationale-et-academique" }
    ],
    sources: ["Étudiant.gouv.fr, bourses Erasmus+ et AMI (1 à 10 mois, 10 mois maximum au total)", "Service-Public F380"],
    voir: ["stage-etranger", "bourse-crous", "soins-etranger", "partir-etranger-checklist"], verifie: "octobre 2026"
  },
  {
    id: "stage-etranger", theme: "etranger", titre: "Faire un stage à l'étranger",
    accroche: "Convention, gratification, assurance, aides : les points à vérifier.",
    temps: "30 min", cout: "Gratuit", pour: ["etudiant", "lyceen"], quand: "Au moins 3 mois avant le début du stage.",
    mots: ["stage à l'étranger", "stage en europe", "convention de stage", "erasmus stage", "assurance stage", "gratification"],
    todo: { si: ["p-etudes-etranger"], prio: 2, pourquoi: "Un stage à l'étranger demande une convention et une assurance adaptées." },
    enBref: [
      "Un stage à l'étranger passe par une **convention de stage** signée avant le départ.",
      "La **gratification** et les droits dépendent des règles **du pays d'accueil** et de ta convention.",
      "Des aides existent (Erasmus+, aide à la mobilité internationale, régions) : demande-les avant de partir."
    ],
    etapes: [
      { t: "Valider le stage avec ton établissement", d: "Ton école doit valider le stage et signer la convention. Rappelle-toi les règles françaises sur la durée et la gratification : voir [Stage : convention, gratification, droits](#guide-stage)." },
      { t: "Vérifier le pays d'accueil", d: "Selon le pays, un visa ou un permis peut être exigé même pour un stage : renseigne-toi sur la page officielle du pays. Voir [Destinations](#destination)." },
      { t: "T'assurer", d: "Vérifie que ton assurance (établissement, entreprise ou personnelle) couvre la responsabilité civile, les soins et le rapatriement. Voir [Tomber malade à l'étranger](#guide-soins-etranger)." },
      { t: "Demander les aides", d: "Erasmus+ stage, aide à la mobilité internationale, aides régionales : dépose les dossiers avant le départ.", lien: { label: "Aide à la mobilité internationale (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F380" } },
      { t: "Préparer ton logement et tes papiers", d: "Garde ton logement en France ou résilie dans les délais (voir [Quitter son logement](#guide-preavis-logement)). Fais tes copies de papiers et inscris-toi au consulat si le séjour dépasse 6 mois." }
    ],
    pieges: [
      "Partir sans convention signée : tu n'es pas couvert·e.",
      "Découvrir sur place qu'un permis est nécessaire pour un stage.",
      "Ne pas vérifier que ton assurance couvre le pays visé."
    ],
    liens: [
      { label: "Stage d'un étudiant en milieu professionnel (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F16734" },
      { label: "Bourses Erasmus+ et AMI", url: "https://www.etudiant.gouv.fr/fr/bourses-erasmus-et-aide-la-mobilite-internationale-ami-67" }
    ],
    sources: ["Service-Public F16734 (convention de stage)", "Étudiant.gouv.fr, bourses Erasmus+ et AMI"],
    voir: ["stage", "etudier-etranger", "soins-etranger", "partir-etranger-checklist"], verifie: "octobre 2026"
  },
  {
    id: "expatriation-inscription", theme: "etranger", titre: "S'inscrire au registre des Français établis hors de France",
    accroche: "À quoi ça sert, comment faire, et quoi faire si tu rentres.",
    temps: "20 min", cout: "Gratuit", pour: ["etudiant", "salarie", "chomeur"], quand: "Dans les semaines qui suivent ton installation, si tu restes plus de 6 mois.",
    mots: ["registre", "inscription consulaire", "consulat", "français de l'étranger", "vote à l'étranger", "expatrié", "ambassade"],
    todo: { si: ["p-etranger"], prio: 3, pourquoi: "Utile en cas d'urgence et pour tes papiers sur place." },
    enBref: [
      "Si tu pars vivre à l'étranger **plus de 6 mois**, tu peux t'inscrire au **registre des Français établis hors de France**.",
      "Cette inscription permet au consulat de te **contacter, toi et tes proches, en cas d'urgence**.",
      "Elle se fait **en ligne** sur Service-Public ou auprès du consulat du pays de résidence."
    ],
    etapes: [
      { t: "Vérifier que tu es concerné·e", d: "Séjour de plus de 6 mois à l'étranger : inscription possible. Pour un voyage plus court, le dispositif « Ariane » du ministère permet de recevoir des alertes." },
      { t: "Faire la demande en ligne", d: "Sur Service-Public, avec une pièce d'identité, une photo et un justificatif de domicile sur place.", lien: { label: "Inscription consulaire (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F33307" } },
      { t: "Mettre à jour ton dossier", d: "À chaque changement d'adresse, de situation ou de pays. Renouvelle l'inscription quand elle arrive à échéance." },
      { t: "Utiliser ton consulat", d: "Passeport, carte d'identité, état civil, procuration de vote : le consulat t'aide pour les papiers français depuis l'étranger." },
      { t: "Te radier en rentrant", d: "À ton retour en France, demande ta radiation. Voir [Rentrer en France](#guide-retour-france)." }
    ],
    pieges: [
      "Oublier de mettre à jour ton adresse : le consulat ne peut plus te joindre.",
      "Croire que l'inscription remplace tes obligations fiscales ou sociales : ce sont d'autres démarches.",
      "Ne pas te radier en rentrant."
    ],
    liens: [
      { label: "Inscription consulaire (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F33307" },
      { label: "France Diplomatie : services aux Français", url: "https://www.diplomatie.gouv.fr/fr/services-aux-francaises-et-aux-francais" }
    ],
    sources: ["Service-Public F33307 (inscription au registre, séjour de plus de 6 mois)", "France Diplomatie, registre des Français établis hors de France"],
    voir: ["partir-etranger-checklist", "retour-france", "impots-expatrie"], verifie: "octobre 2026"
  },
  {
    id: "impots-expatrie", theme: "etranger", titre: "Impôts : partir vivre ou travailler à l'étranger",
    accroche: "Résidence fiscale, déclaration l'année du départ, impôts sur les revenus français.",
    temps: "30 min", cout: "Gratuit", pour: ["etudiant", "salarie", "independant", "chomeur"], quand: "L'année du départ, puis chaque printemps.",
    mots: ["impôts", "résidence fiscale", "non-résident", "expatrié", "déclaration à l'étranger", "départ", "convention fiscale", "foyer fiscal"],
    todo: { si: ["p-etranger"], prio: 2, pourquoi: "Ta situation fiscale change l'année du départ : un oubli entraîne des pénalités." },
    enBref: [
      "Si ton **foyer fiscal est hors de France**, tu es **non-résident** : tes démarches diffèrent pour l'année de ton départ et pour les années suivantes.",
      "L'année du départ, tu déclares **tous tes revenus du 1ᵉʳ janvier à la date du départ** ; ensuite, seuls tes **revenus de source française** sont imposables en France, sous réserve des conventions fiscales.",
      "La déclaration **par internet** est obligatoire si ta résidence est équipée d'un accès internet."
    ],
    etapes: [
      { t: "Savoir si tu restes résident fiscal français", d: "Cela dépend de ton foyer, de ton lieu de séjour principal et de ton activité. Ne présume rien : lis la page officielle et, si besoin, demande conseil à ton service des impôts.", lien: { label: "Impôt d'un Français qui part à l'étranger (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F31442" } },
      { t: "Prévenir l'administration fiscale", d: "Signale ta nouvelle adresse et ton départ dans ton espace particulier. Après traitement de ta déclaration de l'année du départ, le **service des impôts des particuliers non-résidents** devient ton interlocuteur si tu as des revenus de source française.", lien: { label: "Je pars vivre à l'étranger : quelles démarches ? (impots.gouv.fr)", url: "https://www.impots.gouv.fr/particulier/questions/je-pars-vivre-letranger-quelles-demarches-dois-je-accomplir-dois-je-cloturer" } },
      { t: "Faire la déclaration de l'année du départ", d: "Elle comprend tous les revenus perçus du 1ᵉʳ janvier à la date de départ, puis les revenus de source française jusqu'au 31 décembre." },
      { t: "Pour les années suivantes", d: "Si tu as encore des revenus de source française (location, dividendes…), tu dois les déclarer. Voir le point de vue du non-résident.", lien: { label: "Non-résident : dois-je déclarer des revenus en France ? (impots.gouv.fr)", url: "https://www.impots.gouv.fr/international-particulier/dois-je-declarer-mes-revenus-en-france" } },
      { t: "Déclarer aussi dans le pays d'accueil", d: "Selon le pays, tu peux avoir à déclarer ton revenu mondial. Une **convention fiscale** entre la France et le pays évite en principe la double imposition : renseigne-toi sur place." }
    ],
    pieges: [
      "Ne pas déclarer l'année de ton départ.",
      "Oublier que des revenus de source française (loyers, etc.) restent imposables en France.",
      "Ne pas vérifier la convention fiscale du pays d'accueil."
    ],
    liens: [
      { label: "Impôt d'un Français qui part vivre ou travailler à l'étranger (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F31442" },
      { label: "Je pars vivre à l'étranger (impots.gouv.fr)", url: "https://www.impots.gouv.fr/particulier/questions/je-pars-vivre-letranger-quelles-demarches-dois-je-accomplir-dois-je-cloturer" },
      { label: "Non-résident : revenus à déclarer en France", url: "https://www.impots.gouv.fr/international-particulier/dois-je-declarer-mes-revenus-en-france" }
    ],
    sources: ["Service-Public F31442 (Français qui part à l'étranger)", "impots.gouv.fr, départ à l'étranger et non-résident"],
    voir: ["partir-etranger-checklist", "secu-expatrie", "retour-france", "premiere-declaration"], verifie: "octobre 2026"
  },
  {
    id: "secu-expatrie", theme: "etranger", titre: "Santé et Sécu à l'étranger : CEAM, S1, A1, expatriation",
    accroche: "Ce que tu dois faire avant de partir selon que tu pars en Europe, hors Europe, en détachement ou en frontalier.",
    temps: "30 min", cout: "Gratuit", pour: ["etudiant", "salarie", "chomeur", "independant"], quand: "Avant le départ.",
    mots: ["sécurité sociale", "expatrié", "détachement", "a1", "s1", "ceam", "carte vitale", "assurance maladie à l'étranger", "mutuelle", "cleiss"],
    todo: { si: ["p-etranger"], prio: 1, pourquoi: "Une mauvaise couverture santé à l'étranger peut coûter des milliers d'euros." },
    enBref: [
      "Si tu **t'installes pour travailler** dans l'UE, l'EEE ou en Suisse, tu n'es plus assuré·e au régime français : **le pays de travail** te couvre.",
      "Avant un départ d'expatrié, tu dois **restituer ta carte Vitale et ta CEAM** à ta caisse d'assurance maladie.",
      "**Détaché** par ton employeur (24 mois maximum sauf dérogation) : tu restes affilié·e en France avec le formulaire **A1**."
    ],
    etapes: [
      { t: "Identifier ta situation", d: "- **Séjour temporaire** (voyage, études) : CEAM en Europe, assurance voyage ailleurs\n- **Détachement** par ton employeur : tu gardes la Sécu française\n- **Expatriation** (contrat local) : tu dépends du régime du pays de travail\n- **Frontalier** : voir [Travailleur frontalier](#guide-frontalier)" },
      { t: "Si tu es détaché·e", d: "Ton employeur demande le formulaire **A1** à l'Urssaf : il prouve que la législation française de sécurité sociale s'applique.", lien: { label: "Formulaire A1 (Cleiss)", url: "https://www.cleiss.fr/reglements/a1.html" } },
      { t: "Si tu t'expatries avec un contrat local", d: "Informe ta caisse d'assurance maladie, restitue ta carte Vitale et ta CEAM, et vérifie dans le pays d'accueil s'il existe une période minimale d'assurance ou de résidence.", lien: { label: "Travailleur expatrié (ameli)", url: "https://www.ameli.fr/assure/droits-demarches/europe-international/protection-sociale-etranger/travailleur-expatriation-etranger" } },
      { t: "Hors UE : regarder la convention de Sécu", d: "La France a signé des conventions de sécurité sociale avec certains pays. Sans convention, souscris une assurance santé adaptée avec rapatriement. Le Cleiss décrit les systèmes nationaux." },
      { t: "Prévoir ta famille", d: "Les membres de la famille qui t'accompagnent peuvent être couverts via le formulaire **S1** selon les cas : renseigne-toi avant le départ." }
    ],
    pieges: [
      "Partir sans prévenir ta caisse d'assurance maladie.",
      "Croire que la carte européenne couvre un séjour de travail ou d'installation : elle couvre un séjour temporaire.",
      "Oublier l'assurance rapatriement hors Europe."
    ],
    liens: [
      { label: "Assurance maladie d'un Français vivant à l'étranger (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F407" },
      { label: "Travailleur expatrié (ameli)", url: "https://www.ameli.fr/assure/droits-demarches/europe-international/protection-sociale-etranger/travailleur-expatriation-etranger" },
      { label: "Travailleur détaché à l'étranger (ameli)", url: "https://www.ameli.fr/assure/droits-demarches/europe-international/protection-sociale-etranger/travailleur-detachement-etranger" }
    ],
    sources: ["Service-Public F407 (assurance maladie d'un Français à l'étranger)", "ameli.fr, travailleur expatrié et détaché (A1, S1, restitution de la carte Vitale et de la CEAM)", "Service-Public F3155 (salarié détaché)"],
    voir: ["soins-etranger", "frontalier", "retour-france", "partir-etranger-checklist"], verifie: "octobre 2026"
  },
  {
    id: "frontalier", theme: "etranger", titre: "Travailleur frontalier : Suisse, Luxembourg, Belgique, Allemagne",
    accroche: "Habiter en France et travailler de l'autre côté de la frontière : Sécu, formulaire S1, droit d'option en Suisse.",
    temps: "30 min", cout: "Gratuit", pour: ["salarie", "etudiant", "alternant"], quand: "Avant ou dès la prise de poste.",
    mots: ["frontalier", "suisse", "luxembourg", "belgique", "allemagne", "permis g", "lamal", "s1", "droit d'option"],
    todo: { si: ["p-frontalier"], prio: 2, pourquoi: "Le choix d'assurance maladie en Suisse est limité à 3 mois et irrévocable." },
    enBref: [
      "Un **travailleur frontalier** habite dans un pays et travaille dans un autre, en rentrant chaque jour (ou chaque semaine) chez lui.",
      "Si tu résides en France et travailles dans un autre pays européen, tu t'inscris auprès de **l'assurance maladie du pays de travail** et demandes un **formulaire S1**, à remettre à ta **CPAM**.",
      "**Suisse** : tu as **3 mois** pour exercer ton **droit d'option** entre l'assurance maladie suisse et française ; **passé ce délai, tu es affilié·e à l'assurance suisse**, et l'option est **irrévocable**."
    ],
    etapes: [
      { t: "Vérifier ton statut", d: "Pour la Suisse, le **permis G** (frontalier) est généralement nécessaire. Un étudiant qui travaille ponctuellement en Suisse n'a pas forcément le droit d'option : renseigne-toi avant." },
      { t: "T'inscrire dans le pays de travail", d: "Demande l'inscription à l'organisme d'assurance maladie du pays où tu travailles, puis le formulaire S1.", lien: { label: "Travailleur frontalier : droits et prise en charge (ameli)", url: "https://www.ameli.fr/assure/droits-demarches/europe-international/travailleur-frontalier-droits-prise-en-charge" } },
      { t: "Remettre le S1 à ta CPAM", d: "La CPAM de ton lieu de résidence t'inscrit et te délivre la carte Vitale : c'est l'Assurance Maladie française qui prend en charge tes soins pour le compte du pays de travail." },
      { t: "Cas de la Suisse", d: "Choisis dans les 3 mois entre l'assurance suisse et l'assurance française. Les accidents du travail et la perte de gain relèvent obligatoirement du régime suisse.", lien: { label: "Travailleur frontalier suisse (ameli)", url: "https://www.ameli.fr/assure/droits-demarches/europe-international/travailleur-frontalier-suisse" } },
      { t: "Impôts", d: "Les règles fiscales des frontaliers dépendent des conventions entre la France et le pays de travail : renseigne-toi auprès du service des impôts et de ton employeur." }
    ],
    pieges: [
      "Laisser passer le délai de 3 mois pour le droit d'option en Suisse : tu es alors affilié·e d'office à l'assurance suisse.",
      "Croire que l'option est modifiable : elle est irrévocable.",
      "Oublier le S1 : tes soins ne sont pas pris en charge correctement."
    ],
    liens: [
      { label: "Travailleur frontalier : droits et prise en charge (ameli)", url: "https://www.ameli.fr/assure/droits-demarches/europe-international/travailleur-frontalier-droits-prise-en-charge" },
      { label: "Travailleur frontalier suisse (ameli)", url: "https://www.ameli.fr/assure/droits-demarches/europe-international/travailleur-frontalier-suisse" }
    ],
    sources: ["ameli.fr, travailleur frontalier (formulaire S1)", "ameli.fr, travailleur frontalier suisse (droit d'option de 3 mois, irrévocable)"],
    voir: ["secu-expatrie", "travailler-europe", "impots-expatrie"], verifie: "octobre 2026"
  },
  {
    id: "chomage-etranger", theme: "etranger", titre: "Chercher un emploi à l'étranger avec son chômage",
    accroche: "Le formulaire U2, les 3 mois, et le retour en France.",
    temps: "20 min", cout: "Gratuit", pour: ["chomeur"], quand: "Avant de partir chercher un emploi.",
    mots: ["chômage à l'étranger", "u2", "u1", "allocation à l'étranger", "chercher un emploi en europe", "france travail", "are"],
    todo: { si: ["p-ue"], prio: 2, pourquoi: "Sans le formulaire U2, tu perds ton indemnisation pendant la recherche." },
    enBref: [
      "Si tu **perçois l'allocation chômage en France**, tu peux continuer à la recevoir dans un autre État européen **jusqu'à 3 mois** (dans la limite de tes droits restants), avec le document **U2**.",
      "Il faut **prévenir France Travail avant de partir** et demander le U2.",
      "Au retour, tu t'inscris à nouveau à France Travail, avec ton document portable si tu es indemnisé·e dans l'autre pays."
    ],
    etapes: [
      { t: "Prévenir France Travail", d: "Signale ton intention de partir chercher un emploi dans un État européen (UE, EEE, Suisse) ou au Royaume-Uni." },
      { t: "Demander le formulaire U2", d: "France Travail te remet le U2, qui atteste la durée de maintien de tes droits. Tu le présentes aux services de l'emploi du pays de destination.", lien: { label: "Je pars chercher un emploi en Europe (France Travail)", url: "https://www.francetravail.fr/candidat/mes-droits-aux-aides-et-allocati/lallocation-chomage-a-letranger/je-pars-chercher-un-emploi-en-eu.html" } },
      { t: "T'inscrire sur place", d: "Inscris-toi comme demandeur d'emploi dans le pays d'accueil et respecte ses obligations de recherche." },
      { t: "Si tu trouves un emploi", d: "Tu relèveras de la protection sociale du pays de travail. Voir [Travailler dans l'UE](#guide-travailler-europe)." },
      { t: "Au retour", d: "Inscris-toi à France Travail à ton retour. Si tu étais indemnisé·e dans l'autre pays, remets ton document U2.", lien: { label: "Je rentre en France après avoir résidé en Europe (France Travail)", url: "https://www.francetravail.fr/candidat/mes-droits-aux-aides-et-allocati/lallocation-chomage-a-letranger/je-rentre-en-france-apres-avoir.html" } }
    ],
    pieges: [
      "Partir sans avoir demandé le U2 : l'indemnisation s'arrête.",
      "Dépasser les 3 mois sans avoir trouvé de travail : le maintien des droits prend fin.",
      "Oublier de t'inscrire dans le pays d'accueil."
    ],
    liens: [
      { label: "Je pars chercher un emploi en Europe (France Travail)", url: "https://www.francetravail.fr/candidat/mes-droits-aux-aides-et-allocati/lallocation-chomage-a-letranger/je-pars-chercher-un-emploi-en-eu.html" },
      { label: "Transfert des allocations de chômage (Your Europe)", url: "https://europa.eu/youreurope/citizens/work/social-security-and-benefits/transferring-unemployment-benefits/index_fr.htm" }
    ],
    sources: ["France Travail, chômage à l'étranger (U2, maintien des droits pendant 3 maximum)", "Your Europe, transfert des allocations de chômage"],
    voir: ["chomage-are", "inscription-france-travail", "travailler-europe", "retour-france"], verifie: "octobre 2026"
  },
  {
    id: "permis-etranger", theme: "etranger", titre: "Conduire à l'étranger : permis français, permis international, échange",
    accroche: "Quand ton permis suffit, quand il faut un permis international, et comment l'échanger.",
    temps: "20 min", cout: "Variable", pour: ["etudiant", "salarie", "etranger"], quand: "Avant un voyage de conduite ou une installation.",
    mots: ["permis international", "permis de conduire à l'étranger", "échange de permis", "conduire en europe", "permis étranger", "ants"],
    todo: { si: ["p-etranger"], prio: 3, pourquoi: "Le permis français ne suffit pas partout." },
    enBref: [
      "Le **permis français suffit** pour circuler dans de nombreux pays ; certains exigent en plus un **permis international**.",
      "Si tu t'installes à l'étranger, tu dois en général **échanger ton permis** ou **passer un permis local**.",
      "Quand tu t'installes en France avec un permis étranger **non européen**, l'**échange contre un permis français** est **obligatoire** pour conduire plus longtemps, et il est **payant depuis le 12 mai 2026**."
    ],
    etapes: [
      { t: "Voir si ton permis suffit", d: "Consulte la fiche « Conseils aux voyageurs » du pays : elle indique si un permis international est exigé.", lien: { label: "Permis international pour conduire à l'étranger (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11534" } },
      { t: "Demander un permis international", d: "La demande se fait avec ton permis en cours de validité et en bon état, ainsi que des justificatifs, comme indiqué sur Service-Public." },
      { t: "Si tu t'installes à l'étranger", d: "Demande aux autorités locales l'échange de ton permis français si c'est possible, ou obtiens un permis local." },
      { t: "Si tu arrives en France avec un permis étranger", d: "Les permis de l'UE/EEE s'échangent selon des règles particulières ; ceux d'un pays hors UE/EEE sont échangeables s'ils répondent aux conditions (catégorie équivalente, validité, traduction).", lien: { label: "Échange de permis obtenu hors UE/EEE (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1460" } },
      { t: "Faire l'échange en ligne", d: "L'échange se fait sur le site de l'ANTS.", lien: { label: "Échanger un permis étranger (ANTS)", url: "https://permisdeconduire.ants.gouv.fr/demarches-en-ligne/echanger-un-permis-etranger" } }
    ],
    pieges: [
      "Conduire dans un pays qui exige un permis international sans l'avoir.",
      "Attendre trop longtemps pour échanger un permis étranger en France.",
      "Oublier l'assurance du véhicule de location ou de ton véhicule dans le pays visé."
    ],
    liens: [
      { label: "Permis international (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11534" },
      { label: "Échange d'un permis hors UE/EEE (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1460" },
      { label: "Échanger un permis étranger (ANTS)", url: "https://permisdeconduire.ants.gouv.fr/demarches-en-ligne/echanger-un-permis-etranger" }
    ],
    sources: ["Service-Public F11534 et F1460", "ANTS, échange d'un permis étranger (payant à compter du 12 mai 2026)"],
    voir: ["permis", "voyager", "carte-grise"], verifie: "octobre 2026"
  },
  {
    id: "volontariat-international", theme: "etranger", titre: "Volontariat à l'étranger : VIE, VIA, Corps européen de solidarité",
    accroche: "Partir en mission à l'étranger avec un statut protégé et une indemnité.",
    temps: "30 min", cout: "Gratuit", pour: ["etudiant", "chomeur", "salarie"], quand: "Plusieurs mois avant le départ.",
    mots: ["via", "vie", "volontariat international", "corps européen de solidarité", "mission à l'étranger", "civiweb", "business france", "bénévolat"],
    todo: { si: ["p-etranger"], prio: 3, pourquoi: "Un volontariat est un bon moyen de partir avec un statut et une couverture sociale." },
    enBref: [
      "Le **VIA** (volontariat international en administration) est ouvert aux **18-28 ans** ; le départ en mission a lieu **au plus tard le jour de tes 29 ans**.",
      "Le **VIE** (en entreprise) est ouvert aux mêmes âges, via Business France.",
      "Le **Corps européen de solidarité** propose des activités de volontariat en Europe pour les jeunes."
    ],
    etapes: [
      { t: "Choisir ton dispositif", d: "VIA (administration, ambassades), VIE (entreprises), Corps européen de solidarité (associations), service civique à l'étranger. Compare durée, indemnité et conditions.", lien: { label: "VIA (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F13279" } },
      { t: "Chercher les missions", d: "Les offres sont publiées sur le portail dédié.", lien: { label: "Volontariat international (Civiweb)", url: "https://mon-vie-via.businessfrance.fr/" } },
      { t: "Candidater", d: "CV, lettre de motivation et, selon les cas, entretien avec l'organisme ou l'entreprise." },
      { t: "Préparer ton départ", d: "Voir [la check-list de départ](#guide-partir-etranger-checklist) : assurance, impôts, papiers. Ton statut de volontaire prévoit une couverture sociale spécifique : demande les détails à l'organisme." },
      { t: "Préparer la suite", d: "Pense à ton retour : Sécu, chômage, logement. Voir [Rentrer en France](#guide-retour-france)." }
    ],
    pieges: [
      "Dépasser la limite d'âge : aucune dérogation n'est accordée pour le VIA.",
      "Ne pas vérifier la couverture sociale et la fiscalité de ton indemnité.",
      "Partir sans avoir préparé ton retour."
    ],
    liens: [
      { label: "Volontariat international en administration (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F13279" },
      { label: "Activités de bénévolat (Portail européen de la jeunesse)", url: "https://youth.europa.eu/solidarity/young-people/volunteering_fr" },
      { label: "Engagement en France ou à l'étranger (jeunes.gouv.fr)", url: "https://www.jeunes.gouv.fr/concretiser-son-engagement-en-france-ou-l-etranger-2820" }
    ],
    sources: ["Service-Public F13279 (VIA : 18 à 28 ans, départ au plus tard à 29 ans)", "jeunes.gouv.fr, VIE et VIA"],
    voir: ["service-civique", "partir-etranger-checklist", "retour-france"], verifie: "octobre 2026"
  },
  {
    id: "au-pair", theme: "etranger", titre: "Partir au pair à l'étranger",
    accroche: "Logé·e et nourri·e en échange de la garde d'enfants : le cadre et les précautions.",
    temps: "20 min", cout: "Gratuit", pour: ["lyceen", "etudiant"], quand: "Plusieurs mois avant le départ.",
    mots: ["au pair", "jeune au pair", "garde d'enfants", "famille d'accueil", "apprendre une langue", "séjour au pair"],
    todo: { si: ["p-etranger"], prio: 3, pourquoi: "Le séjour au pair est encadré : il faut un contrat clair et une couverture adaptée." },
    enBref: [
      "Le **travail au pair** permet de partir dans une famille à l'étranger **en échange de services**, en particulier la garde d'enfants.",
      "Un **contrat ou accord écrit** précise horaires, argent de poche, jours de repos et conditions.",
      "Vérifie l'**assurance santé**, le **visa** éventuel et les règles propres au pays."
    ],
    etapes: [
      { t: "Comprendre le cadre", d: "La fiche Service-Public présente le cadre du séjour au pair d'un jeune Français à l'étranger.", lien: { label: "Travail au pair d'un jeune Français à l'étranger (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1664" } },
      { t: "Choisir une agence ou une famille", d: "Privilégie une agence reconnue ou un contact vérifié. Échange avec la famille avant de partir (visio, références)." },
      { t: "Signer un accord clair", d: "Horaires, tâches, jours de repos, argent de poche, durée, conditions de rupture : tout doit être écrit." },
      { t: "Vérifier visa et assurance", d: "Selon le pays, un visa ou une autorisation est nécessaire. Prévois une assurance santé et rapatriement. Voir [Tomber malade à l'étranger](#guide-soins-etranger)." },
      { t: "Savoir où demander de l'aide", d: "Garde le numéro du consulat et de l'agence. Si tu es en difficulté, contacte le consulat de France." }
    ],
    pieges: [
      "Partir sans contrat écrit.",
      "Accepter des horaires ou des tâches qui dépassent ce qui était convenu.",
      "Oublier l'assurance santé."
    ],
    liens: [
      { label: "Travail au pair d'un jeune Français à l'étranger (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1664" }
    ],
    sources: ["Service-Public F1664 (travail au pair à l'étranger)"],
    voir: ["partir-etranger-checklist", "soins-etranger", "voyager"], verifie: "octobre 2026"
  },
  {
    id: "retour-france", theme: "etranger", titre: "Rentrer en France après un séjour à l'étranger",
    accroche: "Sécu, chômage, impôts, logement, consulat : les démarches au retour.",
    temps: "30 min", cout: "Gratuit", pour: ["etudiant", "salarie", "chomeur"], quand: "Avant le retour et dans les semaines qui suivent.",
    mots: ["retour en france", "rentrer", "fin d'expatriation", "reprise des droits", "puma", "sécu au retour", "chômage au retour"],
    todo: { si: ["p-retour"], prio: 1, pourquoi: "Sans démarches, tes droits à la Sécu et au chômage ne s'ouvrent pas automatiquement." },
    enBref: [
      "Si tu **reprends un travail en France**, l'affiliation à l'Assurance Maladie est acquise **dès la 1ʳᵉ heure travaillée**.",
      "Si tu rentres **sans activité**, tu peux demander la **protection universelle maladie (Puma)** ; en l'absence de maintien de droits, un **délai de 3 mois** peut s'appliquer.",
      "Si tu touchais le chômage à l'étranger, tu remets le document **U2** à France Travail."
    ],
    etapes: [
      { t: "Avant de partir du pays", d: "Demande l'attestation de ta caisse locale, ta CEAM et, si tu étais indemnisé·e, le document U2. Récupère tes fiches de paie et attestations." },
      { t: "Ouvrir tes droits à la Sécu", d: "Si tu travailles : envoie à ta CPAM le contrat ou une fiche de paie avec la demande d'ouverture des droits. Sinon : demande la Puma.", lien: { label: "Je rentre en France après avoir vécu à l'étranger (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F32823" } },
      { t: "Mettre à jour ta carte Vitale", d: "Après ta réinscription, mets à jour ta carte Vitale dans une pharmacie ou sur une borne." },
      { t: "S'inscrire à France Travail", d: "Inscris-toi dès ton retour. Voir [S'inscrire à France Travail](#guide-inscription-france-travail) et [Chômage à l'étranger](#guide-chomage-etranger)." },
      { t: "Impôts, consulat, aides", d: "Signale ton retour à ton service des impôts, demande ta radiation du registre consulaire, et vérifie tes droits à la Caf. Voir [Impôts](#guide-impots-expatrie) et [Compte Caf](#guide-caf-compte)." }
    ],
    pieges: [
      "Croire que tes droits à la Sécu s'ouvrent seuls au retour.",
      "Attendre pour t'inscrire à France Travail.",
      "Oublier de signaler ton retour au fisc."
    ],
    liens: [
      { label: "Je rentre en France après avoir vécu à l'étranger (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F32823" },
      { label: "Quelle assurance maladie au retour d'expatriation ? (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F32824" },
      { label: "Je rentre en France après avoir résidé en Europe (France Travail)", url: "https://www.francetravail.fr/candidat/mes-droits-aux-aides-et-allocati/lallocation-chomage-a-letranger/je-rentre-en-france-apres-avoir.html" }
    ],
    sources: ["Service-Public F32823 et F32824 (reprise de l'Assurance maladie, Puma, délai de 3 mois)", "France Travail, retour en France après un séjour en Europe (U2)"],
    voir: ["secu-expatrie", "chomage-etranger", "inscription-france-travail", "caf-compte"], verifie: "octobre 2026"
  },
  {
    id: "travailler-france-etranger", theme: "etranger", titre: "Étudiant·e étranger·ère : travailler en France pendant et après les études",
    accroche: "964 heures, changement de statut, APS : les règles pour passer des études à l'emploi.",
    temps: "30 min", cout: "Variable", pour: ["etranger"], quand: "Dès la 2ᵉ moitié du dernier cycle d'études, et au moins 2 mois avant la fin du titre.",
    mots: ["travailler en france après les études", "changement de statut", "aps", "autorisation provisoire de séjour", "titre de séjour salarié", "étudiant étranger", "964 heures", "master", "talent"],
    todo: { si: ["etranger"], prio: 2, pourquoi: "Le changement de statut doit être demandé dans les 2 mois avant la fin de ta carte étudiant." },
    enBref: [
      "Avec un titre étudiant, tu peux travailler **964 heures par an** (voir [Job étudiant et étudiants étrangers](#guide-job-etudiant-droits)).",
      "À la fin des études, tu peux demander une **carte de séjour salarié ou travailleur temporaire** si tu as un **contrat (ou une promesse d'embauche)** et que ton employeur a obtenu une **autorisation de travail**.",
      "La demande de **changement de statut** se fait **dans les 2 mois précédant la fin de validité** de ta carte étudiant."
    ],
    etapes: [
      { t: "Pendant les études", d: "Respecte la limite de 964 heures. Au-delà, tu risques le retrait ou le refus de renouvellement du titre." },
      { t: "Trouver un employeur", d: "Contrat de travail ou promesse d'embauche : c'est ton employeur qui demande l'autorisation de travail." },
      { t: "Faire le changement de statut", d: "Selon ton diplôme (Bac+2, licence, licence pro, master), les conditions diffèrent (par exemple pour la licence pro et le master, la situation de l'emploi peut t'être opposée sauf métier en tension ou salaire minimal).", lien: { label: "Étudiant étranger : travailler en France après ses études (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2229" } },
      { t: "L'APS pour chercher un emploi ou créer une entreprise", d: "Si ton pays d'origine a un accord avec la France, l'**autorisation provisoire de séjour** te permet de rester pour chercher un travail ou préparer la création d'une entreprise.", lien: { label: "L'autorisation provisoire de séjour (Campus France)", url: "https://www.campusfrance.org/fr/l-autorisation-provisoire-de-sejour-ou-aps" } },
      { t: "Ne pas attendre", d: "Demande ton changement de statut avant l'expiration de ta carte : n'attends pas le dernier jour." }
    ],
    pieges: [
      "Dépasser les 964 heures.",
      "Demander ton changement de statut trop tard (en dehors des 2 mois avant l'expiration).",
      "Commencer à travailler avant que l'employeur ait obtenu l'autorisation de travail."
    ],
    liens: [
      { label: "Étudiant étranger : travailler en France après ses études (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2229" },
      { label: "Un étudiant non européen peut-il travailler en France ? (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2713" },
      { label: "L'APS (Campus France)", url: "https://www.campusfrance.org/fr/l-autorisation-provisoire-de-sejour-ou-aps" }
    ],
    sources: ["Service-Public F2229 et F2713 (964 heures, changement de statut dans les 2 mois)", "Campus France, APS"],
    voir: ["titre-sejour-etudiant", "job-etudiant-droits", "creer-micro"], verifie: "octobre 2026"
  },
  {
    id: "britannique-en-france", theme: "etranger", titre: "Britannique en France après le Brexit : titre de séjour",
    accroche: "Accord de retrait, titre de séjour, renouvellement : les règles pour les Britanniques installés en France.",
    temps: "30 min", cout: "Variable", pour: ["etranger", "salarie", "etudiant"], quand: "Dès que possible, et 2 mois avant l'échéance du titre.",
    mots: ["brexit", "britannique", "titre de séjour", "accord de retrait", "carte de séjour", "uk", "royaume-uni", "résident britannique"],
    todo: { si: ["etranger"], prio: 3, pourquoi: "Un titre de séjour est obligatoire pour les Britanniques installés en France." },
    enBref: [
      "Depuis le Brexit, les **ressortissants britanniques** doivent détenir un **titre de séjour** pour résider en France ; l'**accord de retrait** (entré en vigueur le 1ᵉʳ février 2020) prévoit des dispositions particulières.",
      "Si tu t'es installé·e en France **avant le 31 décembre 2020**, tu pouvais demander le titre « accord de retrait du Royaume-Uni de l'UE » (avant le 4 octobre 2021, mais la demande reste possible).",
      "Le titre de 5 ans se **renouvelle dans les 2 mois précédant** sa fin ; après 5 ans de séjour, un titre « séjour permanent » **valable 10 ans** peut être demandé."
    ],
    etapes: [
      { t: "Identifier ta situation", d: "Installé·e avant le 31 décembre 2020, membre de famille, jeune devenu majeur : les règles diffèrent. La fiche Service-Public détaille chaque cas.", lien: { label: "Britannique en France : que faire ? (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F35032" } },
      { t: "Faire la demande", d: "Consulte le site de la préfecture de ton domicile : il indique la procédure locale (internet, courrier ou rendez-vous)." },
      { t: "Renouveler à temps", d: "La demande de renouvellement se fait dans les 2 mois précédant la fin de validité du titre de 5 ans." },
      { t: "Demander le séjour permanent", d: "Après au moins 5 ans de séjour en France, tu peux demander la carte « séjour permanent », valable 10 ans." },
      { t: "Garder tes preuves", d: "Conserve les justificatifs de domicile, de ressources et de travail : ils servent à chaque démarche." }
    ],
    pieges: [
      "Laisser expirer ton titre sans demander le renouvellement.",
      "Croire que le Brexit n'a rien changé à ton droit au séjour.",
      "Ne pas consulter la préfecture de ton domicile pour la procédure locale."
    ],
    liens: [
      { label: "Britannique en France : que faire ? (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F35032" },
      { label: "Brexit : carte de séjour (Préfecture de police)", url: "https://www.prefecturedepolice.interieur.gouv.fr/demarches/brexit" }
    ],
    sources: ["Service-Public F35032 (accord de retrait, titre de séjour, renouvellement dans les 2 mois, séjour permanent de 10 ans)", "Préfecture de police, Brexit"],
    voir: ["titre-sejour-etudiant", "travailler-france-etranger", "royaume-uni"], verifie: "octobre 2026"
  }
);
