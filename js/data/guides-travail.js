/* Thème « Travail & emploi ». Sources : Service-Public, Code du travail numérique, Unédic, France Travail, travail-emploi.gouv.fr. */
(P.GUIDES = P.GUIDES || []).push(
  {
    id: "stage", theme: "travail", titre: "Stage : convention, gratification, droits",
    accroche: "Ce qu'il faut signer avant de commencer, et ce que l'entreprise te doit.",
    temps: "20 min", cout: "Gratuit", pour: ["lyceen", "etudiant"], quand: "Avant le début du stage : la convention doit être signée avant ton arrivée.",
    mots: ["stage", "gratification", "convention de stage", "stagiaire", "indemnité", "4,50", "durée"],
    todo: { si: ["r-stage", "etudiant", "lyceen"], prio: 2, pourquoi: "Sans convention signée, tu n'es pas couvert·e : vérifie-la avant de commencer." },
    enBref: [
      "La **gratification est obligatoire** quand le stage dépasse **2 mois** (44 jours à 7 heures par jour, soit à partir de la 309ᵉ heure).",
      "Le minimum légal en 2026 est de **4,50 € par heure de présence** (15 % du plafond horaire de la Sécurité sociale, fixé à 30 €).",
      "Un stage se fait toujours avec une **convention signée par trois parties** : toi, l'entreprise et ton établissement, avant le début du stage."
    ],
    etapes: [
      { t: "Faire établir la convention", d: "Ton établissement te fournit la convention de stage. Elle précise les dates, les horaires, les missions, la gratification et le tuteur. **Elle doit être signée par toi, l'entreprise et l'établissement avant ton premier jour.**" },
      { t: "Vérifier la gratification", d: "Au-delà de 2 mois (ou 308 heures de présence), elle est due pour chaque heure de présence effective : minimum **4,50 € de l'heure** en 2026. Une entreprise peut verser plus. Pour un stage plus court, elle n'est pas obligatoire mais peut être proposée.", lien: { label: "Calculer ma gratification minimale", url: "#outil-stage" } },
      { t: "Connaître tes droits pendant le stage", d: "Tu es stagiaire, pas salarié·e : tes missions doivent servir ta formation et ne pas remplacer un poste. Tu as un **tuteur**, tu bénéficies des mêmes règles de durée du travail que les salariés et, en général, de la prise en charge de la moitié de ton abonnement de transport en commun." },
      { t: "Penser à l'impôt et aux aides", d: "La gratification d'un stage inclus dans ta formation est **exonérée d'impôt sur le revenu** (dans la limite de 21 622 € pour les revenus 2025). En revanche, elle **ne compte pas comme revenu d'activité** pour la [prime d'activité](#guide-prime-activite). Voir [Job étudiant, stage : est-ce imposable ?](#guide-job-etudiant-impots)." },
      { t: "Après le stage", d: "Demande une **attestation de stage**. Si tu es embauché·e dans les 3 mois après un stage de dernière année intégré à ton cursus, la durée du stage est déduite de ta période d'essai (dans la limite de la moitié, sauf accord plus favorable)." }
    ],
    pieges: [
      "Commencer un stage sans convention signée : en cas d'accident ou de litige, tu n'as aucune protection.",
      "Accepter de faire le travail d'un salarié sans gratification quand le stage dépasse 2 mois.",
      "Confondre stage et alternance : en alternance tu es salarié·e (voir [Alternance](#guide-alternance))."
    ],
    liens: [
      { label: "Gratification minimale d'un stagiaire (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F32131" },
      { label: "Le montant de la gratification passe à 4,50 € (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/actualites/A18709" },
      { label: "Simulateur de gratification (Service-Public Entreprendre)", url: "https://entreprendre.service-public.gouv.fr/simulateur/calcul/gratification-stagiaire" }
    ],
    sources: ["Service-Public F32131 et A18709 (gratification 2026)", "Code du travail numérique (période d'essai et stage)", "impots.gouv.fr (gratification exonérée)"],
    voir: ["job-etudiant-impots", "premier-emploi", "prime-activite"], verifie: "octobre 2026",
    outil: { id: "stage", label: "Calculer ma gratification" }
  },
  {
    id: "premier-emploi", theme: "travail", titre: "Premier contrat : CDI, CDD, intérim",
    accroche: "Ce que contient un contrat, la période d'essai et ce que l'employeur doit déclarer.",
    temps: "25 min", cout: "Gratuit", pour: ["etudiant", "salarie", "chomeur"], quand: "Avant de signer, puis au premier jour de travail.",
    mots: ["cdi", "cdd", "intérim", "contrat de travail", "période d'essai", "premier emploi", "signer"],
    todo: { si: ["p-emploi", "chomeur", "salarie"], prio: 2, pourquoi: "Savoir lire un contrat évite de signer des conditions illégales." },
    enBref: [
      "Un **CDD** et un contrat d'intérim doivent être **écrits**. Un CDI peut être oral, mais demande toujours un écrit.",
      "Période d'essai d'un CDI : **2 mois** (4 avec renouvellement) pour un employé ou un ouvrier, **3 mois** (6) pour un technicien, **4 mois** (8) pour un cadre.",
      "Période d'essai d'un CDD : **1 jour par semaine** de contrat prévu (4 jours pour 4 semaines, 8 jours pour 8 semaines, 2 semaines maximum pour 4 ou 5 mois) ; en intérim : **2, 3 ou 5 jours** selon la durée de la mission."
    ],
    etapes: [
      { t: "Lire le contrat avant de signer", d: "Vérifie : le poste, la date de début, la durée (CDD), la **rémunération**, la durée de travail, le lieu, la **convention collective** applicable et la période d'essai. Demande le temps de le relire." },
      { t: "Connaître la période d'essai", d: "Elle doit être **écrite dans le contrat**. Elle est plafonnée par la loi (voir ci-dessus). Un employeur ne peut pas imposer d'emblée 4 mois à un employé : il faut 2 mois renouvelés une fois, si le contrat ou la convention le prévoit." },
      { t: "Fournir les pièces demandées", d: "Pièce d'identité, numéro de sécurité sociale, RIB, titre de séjour ou autorisation de travail si nécessaire, attestation de droits. L'employeur fait la **déclaration préalable à l'embauche** : tu n'as rien à faire." },
      { t: "Vérifier ce qui doit suivre", d: "Au premier mois : un **bulletin de paie** (voir [Lire sa fiche de paie](#guide-fiche-de-paie)), l'adhésion à la **mutuelle d'entreprise** si elle est obligatoire, et la mise en place du prélèvement à la source (voir [le prélèvement à la source](#guide-prelevement-source))." },
      { t: "Savoir ce que tu peux demander", d: "Salaire au moins égal au **Smic** (1 867,02 € brut par mois pour un temps plein à la date de vérification), heures supplémentaires majorées, congés payés. Voir [Tes droits de salarié·e](#guide-droits-au-travail)." }
    ],
    pieges: [
      "Signer un CDD sans motif écrit ou sans date de fin précise : le motif de recours doit figurer au contrat.",
      "Accepter une période d'essai plus longue que la loi : elle est réduite de plein droit.",
      "Ne pas garder une copie du contrat et de tes bulletins de paie."
    ],
    liens: [
      { label: "Période d'essai pour un salarié (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1643" },
      { label: "Durée de la période d'essai CDI/CDD (Code du travail numérique)", url: "https://code.travail.gouv.fr/contribution/quelle-est-la-duree-maximale-de-la-periode-dessai-sans-et-avec-renouvellement" },
      { label: "Smic (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2300" }
    ],
    sources: ["Service-Public F1643", "Code du travail numérique (durées de période d'essai CDI, CDD, intérim)", "Service-Public F2300 (Smic)"],
    voir: ["fiche-de-paie", "droits-au-travail", "demission-fin-contrat"], verifie: "octobre 2026"
  },
  {
    id: "fiche-de-paie", theme: "travail", titre: "Lire sa fiche de paie",
    accroche: "Brut, net, net social, impôt : ce que dit chaque ligne et ce qu'il faut garder.",
    temps: "15 min", cout: "Gratuit", pour: ["etudiant", "alternant", "salarie"], quand: "Chaque mois, dès ton premier bulletin.",
    mots: ["fiche de paie", "bulletin de salaire", "brut", "net", "net social", "cotisations", "smic", "impôt à la source"],
    todo: { si: ["r-salaire", "r-job", "alternant"], prio: 2, pourquoi: "Ton bulletin sert de justificatif pour la banque, la Caf et un logement." },
    enBref: [
      "Du **brut** au **net à payer** : on retire les cotisations salariales, puis l'impôt prélevé à la source.",
      "Au Smic, le net représente environ **79 % du brut** : 1 477,93 € net pour 1 867,02 € brut par mois à la date de vérification.",
      "**Garde tes bulletins** : demandés pour un logement, un prêt, la Caf, et utiles pour ta retraite."
    ],
    etapes: [
      { t: "Repérer les grandes lignes", d: "- **Salaire brut** : ce que ton employeur prévoit avant retenues\n- **Cotisations salariales** : retraite, chômage, maladie…\n- **Net avant impôt** : ce qu'il reste après cotisations\n- **Impôt sur le revenu prélevé à la source** : ligne séparée\n- **Net à payer** : ce qui arrive sur ton compte" },
      { t: "Vérifier tes heures et ton taux", d: "Contrôle les heures travaillées, les heures supplémentaires, les primes, et que le taux horaire est au moins égal au Smic (**12,31 € brut** de l'heure à la date de vérification)." },
      { t: "Comprendre le « net social »", d: "Une ligne « montant net social » figure sur le bulletin : c'est elle que la Caf utilise pour calculer tes aides (APL, prime d'activité). Recopie-la à l'identique dans tes déclarations de ressources." },
      { t: "Conserver tes bulletins", d: "Un bulletin dématérialisé est déposé dans un coffre-fort numérique : télécharge-le et garde-le. Conserve-les idéalement toute ta vie (retraite, litige, prêt). Tu peux demander un bulletin papier si tu préfères." },
      { t: "Signaler une erreur", d: "Écris à l'employeur (mail, courrier) en citant la ligne concernée. Si le problème persiste, l'inspection du travail ou un syndicat peut t'aider." }
    ],
    pieges: [
      "Confondre le net **avant** impôt et le net **après** impôt dans une demande d'aide.",
      "Perdre l'accès au coffre-fort numérique à la fin du contrat : télécharge tout avant de partir.",
      "Ignorer une retenue que tu ne comprends pas : pose la question tout de suite."
    ],
    liens: [
      { label: "Smic : montants brut et net (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2300" },
      { label: "Prime d'activité : étudiant, stagiaire, apprenti (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F33375" }
    ],
    sources: ["Service-Public F2300 (Smic 12,31 € brut horaire, net mensuel 1 477,93 €)", "Service-Public F33375 (déclaration de ressources en montant net social)"],
    voir: ["premier-emploi", "prelevement-source", "prime-activite"], verifie: "octobre 2026"
  },
  {
    id: "alternance", theme: "travail", titre: "Alternance : apprentissage ou professionnalisation",
    accroche: "Trouver un contrat, savoir ce que tu touches et ce que l'école doit faire.",
    temps: "30 min", cout: "Gratuit", pour: ["lyceen", "etudiant", "alternant"], quand: "Plusieurs mois avant la rentrée : le contrat se cherche tôt.",
    mots: ["alternance", "apprentissage", "contrat de professionnalisation", "cfa", "salaire apprenti", "employeur"],
    todo: { si: ["alternant"], prio: 1, pourquoi: "Ton contrat d'alternance fixe ton salaire, tes congés et tes aides." },
    enBref: [
      "En **apprentissage**, la formation est **gratuite pour toi** et ton salaire est un pourcentage du Smic selon ton âge et ton année.",
      "À 18-20 ans, le minimum est de **43 %** du Smic la 1ʳᵉ année, **51 %** la 2ᵉ, **67 %** la 3ᵉ ; à 21-25 ans : **53 %**, **61 %**, **78 %**.",
      "Tu es **salarié·e** : tu as un contrat de travail, des congés payés et une fiche de paie."
    ],
    etapes: [
      { t: "Choisir la formation et le centre", d: "Trouve la formation (BTS, BUT, licence, école…) et un **CFA** ou un établissement qui propose l'alternance. Beaucoup d'écoles t'aident à trouver une entreprise, mais le contrat se signe avec l'employeur." },
      { t: "Chercher l'entreprise", d: "Candidate comme pour un emploi (CV, lettre) dès l'automne. Les sites de l'alternance, ton CFA, Parcoursup et le réseau LinkedIn sont des pistes. Pour te repérer dans les métiers, essaie [Aiguillage](https://julomasu.github.io/aiguillage/)." },
      { t: "Signer le contrat", d: "Le contrat d'apprentissage est écrit, signé par toi, l'employeur et le centre de formation. Vérifie la durée, le salaire, la durée du travail, et que le centre de formation est bien désigné." },
      { t: "Connaître le salaire minimum", d: "Le salaire minimum dépend de ton âge et de ton année de contrat (voir ci-dessus). Il peut être plus élevé selon la convention collective. Pour un contrat commencé depuis le 1ᵉʳ mars 2025, l'exonération de cotisations salariales porte sur la part du salaire jusqu'à 50 % du Smic." },
      { t: "Penser aux aides et aux impôts", d: "Ton salaire d'apprenti est exonéré d'impôt jusqu'au Smic annuel (voir [Apprenti·e : ton salaire et l'impôt](#guide-apprenti-impots)). Tu peux aussi demander l'[APL](#guide-apl-etudiant) et la [prime d'activité](#guide-prime-activite) selon tes ressources." }
    ],
    pieges: [
      "Commencer en entreprise sans contrat signé.",
      "Ne pas vérifier que ton salaire respecte le minimum pour ton âge et ton année.",
      "Rompre le contrat sans avoir cherché de médiation (CFA, médiateur de l'apprentissage) : il existe des règles précises pour la rupture."
    ],
    liens: [
      { label: "Contrat d'apprentissage : salaire et cotisations (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2918" },
      { label: "Salaire d'un apprenti et impôt (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11249" },
      { label: "1jeune1solution : alternance", url: "https://www.1jeune1solution.gouv.fr" }
    ],
    sources: ["Service-Public F2918 (rémunération minimale de l'apprenti, cotisations)", "Service-Public F11249 (impôt)"],
    voir: ["apprenti-impots", "prime-activite", "apl-etudiant", "premier-emploi"], verifie: "octobre 2026"
  },
  {
    id: "job-etudiant-droits", theme: "travail", titre: "Job étudiant : contrat, heures, étudiants étrangers",
    accroche: "Ton contrat, ton salaire minimum et la limite des 964 heures pour les étudiant·es étranger·ères.",
    temps: "15 min", cout: "Gratuit", pour: ["etudiant", "etranger"], quand: "Avant de commencer un job.",
    mots: ["job étudiant", "contrat étudiant", "salaire minimum", "964 heures", "étudiant étranger", "travail"],
    todo: { si: ["r-job", "etudiant"], prio: 2, pourquoi: "Un job sans contrat écrit ne te protège pas et n'ouvre aucun droit." },
    enBref: [
      "Même pour quelques heures, tu as droit à un **contrat écrit**, au **Smic horaire** (12,31 € brut) et à une fiche de paie.",
      "Étudiant·e **étranger·ère** avec un visa ou un titre « étudiant » : tu peux travailler **964 heures par an** (60 % de la durée légale, soit environ 20 heures par semaine) sans autorisation de travail.",
      "Les salaires d'un job étudiant sont **exonérés d'impôt** jusqu'à 5 405 € si tu as 25 ans ou moins (revenus 2025)."
    ],
    etapes: [
      { t: "Choisir le type de job", d: "Job pendant l'année, job d'été, saisonnier, tutorat, baby-sitting déclaré (CESU), ou une activité indépendante (voir [Créer sa micro-entreprise](#guide-creer-micro))." },
      { t: "Exiger un contrat écrit", d: "Un CDD d'usage ou un contrat étudiant doit préciser les horaires, le salaire, les dates et le lieu. Le travail non déclaré t'expose à ne pas être payé·e, à ne pas être couvert·e en cas d'accident et à ne rien cotiser pour ta retraite." },
      { t: "Vérifier ton salaire", d: "Au minimum le Smic horaire si tu es majeur·e. Avant 18 ans, il peut être réduit (80 % avant 17 ans, 90 % entre 17 et 18 ans). Les congés payés se calculent sur tes heures." },
      { t: "Si tu es étudiant·e étranger·ère", d: "Ton VLS-TS « étudiant » ou ta carte de séjour « étudiant » t'autorise à travailler jusqu'à **964 heures par an** sans autorisation de travail. Au-delà de cette durée, une autorisation de travail est nécessaire. Voir [Étudier en France : titre de séjour](#guide-titre-sejour-etudiant)." },
      { t: "Déclarer et profiter des aides", d: "Déclare tes revenus (voir [Ma première déclaration](#guide-premiere-declaration)) et regarde la [prime d'activité](#guide-prime-activite) si ton revenu mensuel est suffisant." }
    ],
    pieges: [
      "Accepter d'être payé·e « au black » : aucun droit, aucune preuve de revenus.",
      "Dépasser 964 heures par an quand tu es étudiant·e étranger·ère : cela peut compromettre le renouvellement de ton titre.",
      "Ne pas garder tes fiches de paie : elles servent pour le logement et les aides."
    ],
    liens: [
      { label: "Autorisation de travail d'un salarié étranger (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2728" },
      { label: "Travailler pendant ses études (Campus France)", url: "https://www.campusfrance.org/fr/travail-etudiant" },
      { label: "Smic (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2300" }
    ],
    sources: ["Service-Public F2728 (964 heures, 60 % de la durée annuelle)", "Campus France (VLS-TS étudiant, 964 heures)", "Service-Public F1649 (rémunération des mineurs)"],
    voir: ["job-etudiant-impots", "fiche-de-paie", "titre-sejour-etudiant", "job-ete-mineur"], verifie: "octobre 2026"
  },
  {
    id: "job-ete-mineur", theme: "travail", titre: "Job d'été avant 18 ans",
    accroche: "À partir de quel âge, avec quelle autorisation et pour quel salaire.",
    temps: "10 min", cout: "Gratuit", pour: ["lyceen", "mineur"], quand: "Au moins 15 jours avant l'embauche pour un jeune de 14 à 16 ans.",
    mots: ["job d'été", "mineur", "14 ans", "16 ans", "autorisation parentale", "inspection du travail"],
    todo: { si: ["a15", "a16"], prio: 3, pourquoi: "Le job d'été avant 18 ans suit des règles précises, protégées par la loi." },
    enBref: [
      "Tu peux travailler dès **16 ans**, avec l'**autorisation écrite de ton représentant légal**.",
      "À **14 ou 15 ans**, uniquement pendant les **vacances scolaires** (au moins 14 jours), pour des travaux légers, avec l'accord de l'inspection du travail.",
      "Avant 16 ans : maximum **35 heures par semaine** et **7 heures par jour**, avec un repos continu au moins égal à la moitié des vacances."
    ],
    etapes: [
      { t: "Vérifier ton âge et la période", d: "À 14-15 ans, seulement pendant les vacances scolaires qui durent au moins 14 jours. À 16 ans et plus, plus de restriction de période." },
      { t: "Obtenir les autorisations", d: "Avant 16 ans, c'est **l'employeur** qui demande l'autorisation à l'inspecteur du travail (au moins 15 jours avant l'embauche). À 16 ans, tu as besoin de l'autorisation écrite d'un parent ou tuteur." },
      { t: "Connaître ta rémunération", d: "Au moins **80 % du Smic** avant 17 ans, **90 %** entre 17 et 18 ans, puis 100 % à 18 ans. Certaines conventions prévoient mieux." },
      { t: "Respecter les limites de travail", d: "Pas de travaux dangereux avant 18 ans, des horaires et des pauses encadrés. L'employeur te remet un contrat écrit et un bulletin de paie." },
      { t: "Penser à la suite", d: "Tes revenus de job d'été sont en général exonérés d'impôt dans la limite de 5 405 € (voir [Job étudiant, job d'été, stage](#guide-job-etudiant-impots)). Ouvre un compte pour te faire payer (voir [Ouvrir un compte](#guide-ouvrir-compte))." }
    ],
    pieges: [
      "Commencer sans autorisation : c'est l'employeur qui est en infraction, mais tu n'es pas protégé·e.",
      "Travailler de nuit ou sur des machines dangereuses avant 18 ans.",
      "Oublier de demander le contrat et la fiche de paie."
    ],
    liens: [
      { label: "À partir de quel âge peut-on travailler ? (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1649" },
      { label: "Le job d'été : formalités et obligations (travail-emploi.gouv.fr)", url: "https://travail-emploi.gouv.fr/le-job-dete-les-formalites-et-les-obligations" }
    ],
    sources: ["Service-Public F1649 (âge, durées, 80 % du Smic)", "travail-emploi.gouv.fr (autorisation 15 jours avant l'embauche, 35 h/semaine)"],
    voir: ["job-etudiant-droits", "ouvrir-compte", "job-etudiant-impots"], verifie: "octobre 2026"
  },
  {
    id: "chomage-are", theme: "travail", titre: "Chômage : ai-je droit à l'ARE ?",
    accroche: "La condition des 6 mois de travail, ce qui compte et ce qui ne compte pas.",
    temps: "20 min", cout: "Gratuit", pour: ["salarie", "chomeur", "alternant"], quand: "Dès la fin du contrat : inscris-toi sans attendre.",
    mots: ["chômage", "are", "allocation", "130 jours", "910 heures", "unédic", "france travail", "démission"],
    todo: { si: ["chomeur"], prio: 1, pourquoi: "Plus tu t'inscris tôt, plus tôt tes droits peuvent s'ouvrir." },
    enBref: [
      "Il faut avoir travaillé au moins **130 jours ou 910 heures (environ 6 mois)** au cours des **24 derniers mois**.",
      "Ces jours n'ont pas besoin d'être continus ni chez le même employeur. Les périodes de stage et d'études **ne comptent pas** comme travail.",
      "En principe, **démissionner ne donne pas droit** à l'ARE, sauf motif légitime ou projet professionnel."
    ],
    etapes: [
      { t: "Compter tes jours travaillés", d: "Additionne tous tes contrats (CDD, intérim, CDI, alternance) sur les 24 derniers mois. 130 jours ou 910 heures suffisent. Des règles particulières existent pour certains cas : renseigne-toi auprès de France Travail." },
      { t: "Vérifier la cause de la fin du contrat", d: "L'ARE couvre la **perte involontaire** d'emploi : fin de CDD ou de mission, licenciement, rupture conventionnelle. Une démission ouvre des droits seulement dans des cas précis (motifs légitimes, projet professionnel)." },
      { t: "T'inscrire à France Travail", d: "L'inscription comme demandeur d'emploi se fait en ligne, **dès la fin du contrat**. Voir [S'inscrire à France Travail](#guide-inscription-france-travail)." },
      { t: "Réunir tes documents", d: "Ton employeur doit te remettre l'**attestation destinée à France Travail**, le certificat de travail et le solde de tout compte. Voir [Fin de contrat, démission, rupture](#guide-demission-fin-contrat)." },
      { t: "Si tu n'as pas assez travaillé", d: "Inscris-toi quand même : France Travail peut t'accompagner et t'ouvrir d'autres droits (formation, CPF). Si tu as entre 16 et 25 ans, regarde le [contrat d'engagement jeune](#guide-cej)." }
    ],
    pieges: [
      "Croire que les études ou un stage comptent comme travail : seuls les jours travaillés comptent.",
      "Démissionner sans vérifier si tu rentres dans un motif légitime.",
      "S'inscrire en retard : l'indemnisation ne peut pas toujours être rattrapée."
    ],
    liens: [
      { label: "Ai-je droit à l'allocation chômage ? (France Travail)", url: "https://www.francetravail.fr/candidat/mes-droits-aux-aides-et-allocati/lessentiel-a-savoir-sur-lallocat/ai-je-droit-a-lallocation-chomag.html" },
      { label: "Conditions pour avoir droit aux allocations chômage (Unédic)", url: "https://www.unedic.org/l-assurance-chomage-et-vous/demandeur-d-emploi-ou-salarie/mon-indemnisation/quelles-sont-les-conditions-pour-avoir-droit-aux-allocations-chomage" }
    ],
    sources: ["France Travail, « Ai-je droit à l'allocation chômage ? » (130 jours ou 910 heures)", "Unédic, conditions d'ouverture de droits (24 derniers mois, démission)"],
    voir: ["inscription-france-travail", "demission-fin-contrat", "cej", "cpf-formation"], verifie: "octobre 2026"
  },
  {
    id: "inscription-france-travail", theme: "travail", titre: "S'inscrire à France Travail",
    accroche: "Les étapes de l'inscription, l'actualisation mensuelle et les erreurs qui coûtent cher.",
    temps: "45 min", cout: "Gratuit", pour: ["chomeur", "salarie", "etudiant"], quand: "Le plus tôt possible après la fin de ton contrat.",
    mots: ["france travail", "pôle emploi", "inscription", "demandeur d'emploi", "actualisation", "chômage"],
    todo: { si: ["chomeur", "nini"], prio: 1, pourquoi: "L'inscription ouvre l'accompagnement, la formation et l'indemnisation éventuelle." },
    enBref: [
      "L'inscription se fait **en ligne** sur francetravail.fr, avec ton numéro de sécurité sociale et une adresse mail.",
      "Chaque mois, tu dois **t'actualiser** : oublier l'actualisation peut te faire perdre tes droits.",
      "Même sans droit à l'allocation, l'inscription ouvre l'accès à un conseiller, à des formations et au contrat d'engagement jeune."
    ],
    etapes: [
      { t: "Préparer tes informations", d: "Pièce d'identité, numéro de sécurité sociale, RIB, justificatifs de formation, derniers contrats ou attestations employeur. Garde-les en PDF." },
      { t: "Créer ton espace en ligne", d: "Rends-toi sur francetravail.fr, rubrique inscription. Tu peux te connecter avec FranceConnect. L'inscription se termine par la création de ton profil." },
      { t: "Faire ta demande d'allocation", d: "Si tu penses avoir droit à l'ARE, fais la demande d'allocation dans la foulée, avec l'attestation de ton employeur. France Travail calcule ensuite ton droit." },
      { t: "T'actualiser chaque mois", d: "Chaque mois, tu déclares si tu as travaillé, été malade ou en formation, et si tu cherches toujours un emploi. **Ne manque jamais cette étape** : elle conditionne ton paiement et ton inscription." },
      { t: "Utiliser l'accompagnement", d: "Demande un entretien, des offres, des formations, une aide à la mobilité. Si tu as entre 16 et 25 ans, la **mission locale** et le [contrat d'engagement jeune](#guide-cej) sont à connaître." }
    ],
    pieges: [
      "Oublier l'actualisation mensuelle.",
      "Ne pas répondre à une convocation : tu risques une radiation.",
      "Ne pas déclarer un travail ou une formation en cours."
    ],
    liens: [
      { label: "France Travail", url: "https://www.francetravail.fr" },
      { label: "Contrat d'engagement jeune (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F32700" }
    ],
    sources: ["France Travail (inscription et actualisation, principes généraux)", "Service-Public F32700 (CEJ)"],
    voir: ["chomage-are", "cej", "demission-fin-contrat"], verifie: "octobre 2026"
  },
  {
    id: "demission-fin-contrat", theme: "travail", titre: "Fin de contrat, démission, rupture : les papiers",
    accroche: "Ce que l'employeur doit te remettre, et les droits qui changent selon la façon dont tu pars.",
    temps: "20 min", cout: "Gratuit", pour: ["salarie", "alternant", "etudiant"], quand: "Le dernier jour du contrat.",
    mots: ["démission", "fin de cdd", "rupture conventionnelle", "certificat de travail", "solde de tout compte", "attestation employeur", "prime de précarité"],
    todo: { si: ["chomeur", "salarie"], prio: 3, pourquoi: "Les documents de fin de contrat conditionnent tes droits au chômage." },
    enBref: [
      "À la fin du contrat, l'employeur doit te remettre le **certificat de travail**, l'**attestation destinée à France Travail** et le **solde de tout compte**.",
      "**Démission** : en principe pas d'ARE (sauf motif légitime). **Rupture conventionnelle** ou **fin de CDD** : droits possibles.",
      "Un CDD donne en général droit à une **indemnité de fin de contrat de 10 %**, sauf cas particuliers (par exemple un job pendant tes vacances scolaires ou universitaires)."
    ],
    etapes: [
      { t: "Choisir comment partir", d: "- **Démission** : tu décides, avec un préavis prévu par ton contrat ou ta convention collective.\n- **Rupture conventionnelle** : accord avec l'employeur, qui ouvre droit à l'ARE.\n- **Fin de CDD ou de mission** : à la date prévue.\n- **Licenciement** : à l'initiative de l'employeur." },
      { t: "Écrire ta démission", d: "Une lettre simple suffit, remise en main propre contre signature ou en recommandé. Respecte le préavis. Un modèle est disponible dans les [lettres types](#lettres)." },
      { t: "Récupérer tes documents", d: "- **Certificat de travail** : dates et poste\n- **Attestation destinée à France Travail** : pour t'inscrire et demander l'ARE\n- **Solde de tout compte** : salaire restant, congés payés, indemnités\n- Tes derniers bulletins de paie" },
      { t: "Vérifier ton solde", d: "Contrôle les congés payés non pris, les heures supplémentaires et l'éventuelle indemnité de fin de contrat. En cas d'erreur, écris à l'employeur en précisant les lignes." },
      { t: "Faire les démarches suivantes", d: "Inscris-toi à France Travail (voir [S'inscrire](#guide-inscription-france-travail)), préviens ta mutuelle et la Caf si tes ressources changent, et mets à jour ton taux de prélèvement à la source." }
    ],
    pieges: [
      "Démissionner sans avoir vérifié l'impact sur ton chômage.",
      "Signer le solde de tout compte sans le relire.",
      "Partir sans l'attestation employeur : sans elle, ton dossier ARE est bloqué."
    ],
    liens: [
      { label: "Conditions pour avoir droit aux allocations chômage (Unédic)", url: "https://www.unedic.org/l-assurance-chomage-et-vous/demandeur-d-emploi-ou-salarie/mon-indemnisation/quelles-sont-les-conditions-pour-avoir-droit-aux-allocations-chomage" },
      { label: "Code du travail numérique", url: "https://code.travail.gouv.fr" }
    ],
    sources: ["Unédic (démission et droits au chômage)", "Code du travail numérique (documents de fin de contrat, indemnité de fin de contrat)"],
    voir: ["chomage-are", "inscription-france-travail", "fiche-de-paie"], verifie: "octobre 2026"
  },
  {
    id: "cpf-formation", theme: "travail", titre: "Le CPF : 500 € par an pour te former",
    accroche: "Ouvrir ton compte, voir ton solde et financer une formation.",
    temps: "20 min", cout: "Gratuit", pour: ["salarie", "chomeur", "etudiant", "alternant"], quand: "Dès 16 ans, puis chaque année de travail.",
    mots: ["cpf", "compte personnel de formation", "formation", "500 euros", "moncompteformation", "permis"],
    todo: { si: ["a16", "a18", "salarie", "chomeur"], prio: 3, pourquoi: "Ton CPF s'alimente tout seul : autant savoir combien tu as." },
    enBref: [
      "Le CPF est alimenté de **500 € par année de travail**, jusqu'à **5 000 €** au maximum.",
      "Tu peux ouvrir ton compte **dès 16 ans** et le gérer sur moncompteformation.gouv.fr.",
      "Il finance des formations certifiantes (langues, permis, diplômes…) sur une liste officielle."
    ],
    etapes: [
      { t: "Créer ton compte", d: "Rends-toi sur moncompteformation.gouv.fr avec FranceConnect ou ton numéro de sécurité sociale. Tu y vois ton solde en euros.", lien: { label: "Mon compte formation", url: "https://www.moncompteformation.gouv.fr" } },
      { t: "Comprendre comment il s'alimente", d: "500 € par année de travail effectuée (au prorata si tu travailles moins que la moitié du temps légal), jusqu'à un plafond de 5 000 €. Les périodes de stage et d'études ne l'alimentent pas." },
      { t: "Choisir une formation", d: "Cherche dans le catalogue officiel : seules les formations éligibles sont financées. Compare l'organisme, le prix et les avis." },
      { t: "Régler le reste éventuel", d: "Si le coût dépasse ton solde, un complément est à prévoir (toi, ton employeur, France Travail…). Une participation forfaitaire peut aussi rester à ta charge." },
      { t: "Éviter les arnaques", d: "N'accepte jamais de donner ton mot de passe ou un code reçu par SMS à un démarcheur qui te promet une formation gratuite. Voir [Reconnaître une arnaque](#guide-arnaques)." }
    ],
    pieges: [
      "Se faire démarcher pour une « formation gratuite » : l'objectif est souvent de capter tes droits CPF.",
      "Oublier que les formations doivent être éligibles.",
      "Laisser ton compte sans mot de passe sécurisé."
    ],
    liens: [
      { label: "CPF d'un salarié du secteur privé (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F10705" },
      { label: "Le compte personnel de formation (travail-emploi.gouv.fr)", url: "https://travail-emploi.gouv.fr/le-compte-personnel-de-formation-cpf" }
    ],
    sources: ["Service-Public F10705 (500 € par an, plafond 5 000 €)", "travail-emploi.gouv.fr (CPF)", "Service-Public F12382 (CPF dès 16 ans)"],
    voir: ["chomage-are", "permis", "arnaques"], verifie: "octobre 2026"
  },
  {
    id: "droits-au-travail", theme: "travail", titre: "Tes droits de salarié·e : durée, congés, heures sup",
    accroche: "35 heures, congés payés, heures supplémentaires, convention collective : les bases.",
    temps: "20 min", cout: "Gratuit", pour: ["salarie", "alternant", "etudiant"], quand: "Dès le premier jour de contrat.",
    mots: ["droits", "35 heures", "congés payés", "heures supplémentaires", "convention collective", "temps de travail", "repos", "smic"],
    todo: { si: ["salarie", "alternant", "r-salaire"], prio: 2, pourquoi: "Connaître les règles de base t'évite de te faire imposer des horaires illégaux." },
    enBref: [
      "La durée légale est de **35 heures par semaine**. Au-delà, ce sont des heures supplémentaires, majorées.",
      "Tu acquiers en général **2,5 jours ouvrables de congés payés par mois travaillé**, soit 30 jours (5 semaines) par an.",
      "Le **Smic** est de **12,31 € brut de l'heure** à la date de vérification ; ta **convention collective** peut prévoir mieux."
    ],
    etapes: [
      { t: "Trouver ta convention collective", d: "Elle est indiquée sur ton contrat et ta fiche de paie. Le **Code du travail numérique** t'explique ce qu'elle prévoit (salaire minimum, préavis, primes).", lien: { label: "Code du travail numérique", url: "https://code.travail.gouv.fr" } },
      { t: "Connaître la durée du travail", d: "35 heures par semaine par défaut. Les heures supplémentaires sont majorées (en général +25 % pour les 8 premières, +50 % ensuite), sauf accord plus favorable. Tu dois bénéficier de pauses et d'un repos quotidien." },
      { t: "Poser tes congés", d: "Les congés se prennent en accord avec l'employeur, qui fixe l'ordre des départs. Si tu n'en as pas acquis assez, tu peux demander des jours sans solde." },
      { t: "Ce qu'il faut garder par écrit", d: "Contrat, avenants, bulletins de paie, mails sur tes horaires et tes missions. En cas de litige, ces documents prouvent tes droits." },
      { t: "Où t'adresser en cas de problème", d: "D'abord l'employeur ou les représentants du personnel. Un syndicat peut t'aider. L'**inspection du travail** contrôle le respect du Code du travail mais **ne règle pas un litige individuel** : pour cela, il faut le **conseil de prud'hommes** (voir [Qui contacter ?](#contacts))." }
    ],
    pieges: [
      "Accepter que des heures supplémentaires ne soient pas payées ni récupérées.",
      "Ne pas savoir de quelle convention collective tu dépends.",
      "Attendre trop longtemps pour contester : certaines actions ont des délais."
    ],
    liens: [
      { label: "Code du travail numérique", url: "https://code.travail.gouv.fr" },
      { label: "Smic (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2300" }
    ],
    sources: ["Code du travail numérique (durée du travail, congés, heures supplémentaires)", "Service-Public F2300 (Smic)"],
    voir: ["premier-emploi", "fiche-de-paie", "harcelement-violences"], verifie: "octobre 2026"
  }
);
