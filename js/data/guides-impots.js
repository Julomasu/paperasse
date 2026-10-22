/* Thème « Impôts ». Chiffres : revenus 2025 déclarés en 2026, barème 2026. Sources : Service-Public, impots.gouv.fr, BOFiP. */
(P.GUIDES = P.GUIDES || []).push(
  {
    id: "premiere-declaration", theme: "impots", titre: "Ma première déclaration de revenus",
    accroche: "Quand, comment et pourquoi déclarer, même si tu ne paies rien.",
    temps: "30 min", cout: "Gratuit", mots: ["impots", "déclaration", "premier", "salaire", "numéro fiscal", "impots.gouv"],
    enBref: [
      "Tu déclares **une fois par an, au printemps**, les revenus de l'année précédente : au printemps 2027, ceux de 2026.",
      "Même si tu ne paies pas d'impôt, **déclare** : ton avis d'imposition servira ensuite de justificatif (logement, aides, bourses).",
      "Le barème 2026 est progressif : **0 % jusqu'à 11 600 €** de revenu net imposable pour une part, et chaque taux ne s'applique qu'à sa tranche."
    ],
    etapes: [
      { t: "Savoir si tu dois déclarer seul·e", d: "Tu déclares si tu as des revenus (salaire, job, apprentissage, gratification de stage, micro-entreprise…) et que tu n'es pas rattaché·e à tes parents.\n\nSi tu es rattaché·e à leur foyer fiscal, ils ajoutent tes revenus à leur déclaration : tu n'en fais pas une à part. Lis d'abord [Rattaché·e ou déclarer seul·e ?](#guide-rattachement).", lien: { label: "Voir la page officielle « C'est ma première déclaration »", url: "https://www.impots.gouv.fr/particulier/questions/cest-ma-premiere-declaration-que-dois-je-declarer" } },
      { t: "Créer ton espace particulier", d: "Sur impots.gouv.fr, ouvre ton espace avec ton **numéro fiscal** (13 chiffres), qui t'est attribué à ta première déclaration. Tu peux ensuite te connecter via [[france-connect|FranceConnect]] (ameli, La Poste, France Identité).\n\nFais-le avant l'ouverture de la campagne, pas le dernier jour." },
      { t: "Réunir tes revenus de l'année", d: "- Ta fiche de paie de **décembre** (elle donne le cumul annuel « net imposable »)\n- Tes attestations (apprentissage, stage, job d'été)\n- Si tu as une micro-entreprise : le total du chiffre d'affaires déclaré à l'Urssaf\n\nLes salaires sont normalement **préremplis** : vérifie qu'ils correspondent." },
      { t: "Déclarer en ligne au printemps", d: "La campagne ouvre en général en avril et se termine fin mai ou début juin, selon ton département : les dates exactes sont annoncées chaque année sur impots.gouv.fr.\n\nContrôle les montants préremplis, ajoute ce qui manque, indique les exonérations qui te concernent (job étudiant, apprentissage, stage) puis **valide** et garde le numéro de confirmation.", lien: { label: "Accéder à impots.gouv.fr", url: "https://www.impots.gouv.fr" } },
      { t: "Comprendre comment l'impôt est calculé", d: "Pour **une part**, le barème 2026 (revenus 2025) est :\n\n- jusqu'à 11 600 € : 0 %\n- de 11 601 € à 29 579 € : 11 %\n- de 29 580 € à 84 577 € : 30 %\n- de 84 578 € à 181 917 € : 41 %\n- au-delà : 45 %\n\nExemple officiel : 30 000 € de revenu net imposable donnent 2 103,99 € d'impôt, soit 7 % de ce revenu. Les salaires bénéficient en plus d'un abattement forfaitaire de 10 % pour frais." },
      { t: "Lire ton avis d'imposition", d: "Il arrive en été, même si tu ne dois rien. Garde-le : il contient ton revenu fiscal de référence, demandé pour un logement ou une aide. Voir [À quoi sert l'avis d'imposition](#guide-avis-imposition)." }
    ],
    pieges: [
      "« Je ne gagne rien, je ne déclare pas » : tu te prives d'un justificatif utile et, si tu avais des revenus à déclarer, tu risques des majorations.",
      "Déclarer deux fois : si tu es rattaché·e à tes parents, c'est **leur** déclaration qui contient tes revenus.",
      "Oublier un revenu (job d'été, micro-entreprise, plateforme de vente) : tu peux corriger en ligne, voir [Corriger sa déclaration](#guide-corriger-declaration).",
      "Les dates et plafonds changent chaque année : vérifie le calendrier de la campagne en cours."
    ],
    liens: [
      { label: "Barème de l'impôt sur le revenu (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1419" },
      { label: "C'est ma première déclaration (impots.gouv.fr)", url: "https://www.impots.gouv.fr/particulier/questions/cest-ma-premiere-declaration-que-dois-je-declarer" },
      { label: "Brochure pratique de la déclaration", url: "https://www.impots.gouv.fr/particulier" }
    ],
    sources: ["Service-Public F1419 (barème 2026)", "impots.gouv.fr, première déclaration", "Loi de finances 2026 (indexation de 0,9 %)"],
    voir: ["rattachement", "job-etudiant-impots", "prelevement-source", "avis-imposition"], verifie: "octobre 2026"
  },
  {
    id: "rattachement", theme: "impots", titre: "Rattaché·e à mes parents ou déclarer seul·e ?",
    accroche: "Le choix qui change l'impôt de ta famille, et parfois le tien.",
    temps: "15 min", cout: "Gratuit", mots: ["rattachement", "parents", "foyer fiscal", "demi-part", "étudiant", "pension alimentaire", "détacher"],
    enBref: [
      "Tu peux être rattaché·e au foyer fiscal de tes parents si tu as **moins de 21 ans**, ou **moins de 25 ans** si tu poursuis tes études (âge au 1er janvier de l'année d'imposition).",
      "Pour tes parents, le rattachement ajoute une **demi-part** de quotient familial ; l'économie d'impôt est **plafonnée à 1 807 € par demi-part** (déclaration 2026).",
      "Tes revenus (au-dessus des exonérations) sont alors ajoutés aux leurs et imposés à **leur** taux."
    ],
    etapes: [
      { t: "Vérifier que tu remplis les conditions", d: "Rattachement possible si tu es célibataire, sans charge de famille, et que tu as moins de 21 ans ou moins de 25 ans en poursuivant des études (le 1er janvier de l'année d'imposition).\n\nSi tes parents sont séparés, tu ne peux demander ton rattachement qu'à l'un des deux foyers.", lien: { label: "Rattachement d'un enfant majeur (impots.gouv.fr)", url: "https://www.impots.gouv.fr/particulier/questions/mon-enfant-est-majeur-comment-le-declarer" } },
      { t: "Compter ce que tu as gagné", d: "Tes salaires de job étudiant sont exonérés jusqu'à **5 405 €** (revenus 2025, jusqu'à 25 ans), ton salaire d'apprenti jusqu'à **21 622 €**. Utilise le calculateur pour savoir ce qui reste imposable.", lien: { label: "Calculer la part imposable", url: "#outil-job" } },
      { t: "Comparer les deux options avec tes parents", d: "- **Rattaché·e** : tes parents gagnent une demi-part (jusqu'à 1 807 € d'impôt en moins) et déclarent tes revenus imposables ; tu ne remplis pas de déclaration à part.\n- **Déclaration séparée** : tu déclares seul·e, tes parents perdent la demi-part et peuvent, à la place, déduire une **pension alimentaire** s'ils t'aident financièrement (dans une limite fixée chaque année).\n\nLe plus souvent le rattachement est plus avantageux pour la famille, surtout si tes revenus sont exonérés. Fais le test avec le simulateur officiel.", lien: { label: "Simulateur d'impôt (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/R2740" } },
      { t: "Déclarer ton choix", d: "Chaque année, c'est une **demande de rattachement**. En ligne, elle se fait depuis ton espace (ou celui de tes parents, qui déclarent ton rattachement). Sans demande, tu es considéré·e comme un contribuable autonome." },
      { t: "Penser aux conséquences ailleurs", d: "Le foyer fiscal n'est pas la même chose que ton lieu de vie : tu peux être rattaché·e fiscalement et vivre dans une autre ville. Pour une aide (APL, bourse), c'est une règle propre à chaque organisme : suis leur propre simulateur." }
    ],
    pieges: [
      "Décider seul·e : le rattachement change la déclaration de tes parents, parle-en avant le printemps.",
      "Croire que le rattachement bloque tes aides : chaque organisme a sa règle (bourse, APL, prime d'activité), vérifie-la sur son simulateur.",
      "Un enfant marié, pacsé ou chargé de famille ne peut pas augmenter le quotient familial de ses parents : les règles diffèrent."
    ],
    liens: [
      { label: "Revenus et rattachement d'un enfant majeur (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F3085" },
      { label: "Mon enfant est majeur, comment le déclarer ? (impots.gouv.fr)", url: "https://www.impots.gouv.fr/particulier/questions/mon-enfant-est-majeur-comment-le-declarer" },
      { label: "Dois-je déclarer les revenus de mon enfant majeur ?", url: "https://www.service-public.gouv.fr/particuliers/actualites/A17332" }
    ],
    sources: ["Service-Public F3085, A17332", "impots.gouv.fr, enfant majeur", "BOFiP BOI-IR-LIQ-20-20-20 (plafond 1 807 € par demi-part)"],
    voir: ["job-etudiant-impots", "apprenti-impots", "premiere-declaration"], verifie: "octobre 2026",
    outil: { id: "job", label: "Calculer la part imposable de mon job" }
  },
  {
    id: "job-etudiant-impots", theme: "impots", titre: "Job étudiant, job d'été, stage : est-ce imposable ?",
    accroche: "Les seuils d'exonération à connaître avant de te faire des idées sur ta fiche de paie.",
    temps: "10 min", cout: "Gratuit", mots: ["job", "job étudiant", "job d'été", "stage", "gratification", "exonération", "smic", "5405"],
    enBref: [
      "Les salaires des étudiants de **25 ans au plus** sont exonérés dans la limite de **3 fois le Smic mensuel : 5 405 €** pour les revenus 2025. Seule la part au-dessus est imposable.",
      "Les **gratifications de stage** inclus dans une formation sont exonérées, dans la limite de **21 622 €** (revenus 2025). Cet avantage se cumule avec celui du job étudiant.",
      "Même exonérés, **déclare-les** : ils servent de justificatif."
    ],
    etapes: [
      { t: "Identifier ta catégorie de revenu", d: "- Salaire d'un **job étudiant ou d'été** : exonération jusqu'à 5 405 € si tu as 25 ans ou moins\n- **Gratification** d'un stage obligatoire de ta formation : exonérée dans la limite de 21 622 €\n- **Apprentissage** : voir [le guide dédié](#guide-apprenti-impots)\n- Revenus d'une **micro-entreprise** : voir [Déclarer ses revenus de micro-entrepreneur](#guide-impots-micro)" },
      { t: "Faire le calcul", d: "Additionne ce que tu as perçu en net imposable sur l'année. Si c'est sous le plafond, rien n'est imposable. Au-dessus, seule la différence l'est.", lien: { label: "Utiliser le calculateur", url: "#outil-job" } },
      { t: "Vérifier la déclaration préremplie", d: "L'employeur transmet les salaires à l'administration : vérifie-les et indique l'exonération qui te concerne (job étudiant, stage, apprentissage) à l'endroit prévu de la déclaration." },
      { t: "Garder tes justificatifs", d: "Garde les fiches de paie et attestations plusieurs années : l'administration peut te les demander, et la Caf aussi pour une aide." }
    ],
    pieges: [
      "Dépasser l'âge de 25 ans : l'exonération « job étudiant » ne s'applique plus, le salaire est imposable comme un salaire ordinaire.",
      "Confondre brut et net imposable : le seuil s'apprécie sur le net imposable de ta fiche de paie.",
      "Oublier qu'une partie imposable s'ajoute au revenu de tes parents si tu es rattaché·e (voir [Rattachement](#guide-rattachement))."
    ],
    liens: [
      { label: "Mon enfant est étudiant : ses revenus sont-ils imposables ? (impots.gouv.fr)", url: "https://www.impots.gouv.fr/particulier/questions/mon-enfant-est-etudiant-les-revenus-quil-percus-sont-ils-imposables" },
      { label: "Déclarer les sommes perçues par un jeune (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1228" }
    ],
    sources: ["Service-Public A17332 et F1228 (5 405 € et 21 622 € pour les revenus 2025)", "impots.gouv.fr, revenus d'un étudiant"],
    voir: ["rattachement", "premiere-declaration", "prime-activite"], verifie: "octobre 2026",
    outil: { id: "job", label: "Calculer la part imposable" }
  },
  {
    id: "apprenti-impots", theme: "impots", titre: "Apprenti·e : ton salaire et l'impôt",
    accroche: "Ton salaire d'apprentissage est exonéré jusqu'au Smic annuel.",
    temps: "10 min", cout: "Gratuit", mots: ["apprenti", "alternance", "apprentissage", "contrat", "salaire", "exonération"],
    enBref: [
      "Le salaire d'un contrat d'apprentissage est **exonéré d'impôt sur le revenu dans la limite du Smic annuel : 21 622 €** pour les revenus 2025.",
      "Le salaire est aussi allégé de cotisations : pour un contrat commencé depuis le 1er mars 2025, l'exonération porte sur la part du salaire mensuel brut jusqu'à 50 % du Smic.",
      "Tu dois quand même déclarer ces revenus : l'exonération s'applique ensuite."
    ],
    etapes: [
      { t: "Vérifier ton type de contrat", d: "L'exonération vise le **contrat d'apprentissage** (secteur privé ou fonction publique). Un contrat de professionnalisation ou un stage suit d'autres règles." },
      { t: "Déclarer ton salaire d'apprenti", d: "Le salaire est prérempli par l'employeur. Dans la déclaration, indique qu'il s'agit d'un salaire d'apprenti pour bénéficier de l'exonération, jusqu'à 21 622 € pour les revenus 2025." },
      { t: "Surveiller ton prélèvement à la source", d: "Ton employeur peut prélever un impôt au taux neutre alors que tu n'en dois pas : tu seras remboursé·e après la déclaration, ou tu peux modifier ton taux en ligne. Voir [le prélèvement à la source](#guide-prelevement-source)." },
      { t: "Penser aux aides", d: "Avec un salaire d'apprenti, tu peux toucher la [prime d'activité](#guide-prime-activite) et l'[APL](#guide-apl-etudiant) si tu remplis leurs conditions." }
    ],
    pieges: [
      "Croire que ton salaire d'apprenti n'a pas besoin d'être déclaré.",
      "Oublier que le salaire d'un parent, lui, est imposable : l'exonération concerne **ton** salaire d'apprenti.",
      "Les plafonds (21 622 €) sont ceux des revenus 2025 : ils sont revalorisés chaque année avec le Smic."
    ],
    liens: [
      { label: "Salaire d'un apprenti et impôt sur le revenu (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11249" },
      { label: "Contrat d'apprentissage : salaire et cotisations (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2918" }
    ],
    sources: ["Service-Public F11249 (21 622 € pour 2025)", "Service-Public F2918 (cotisations, contrats depuis le 1er mars 2025)"],
    voir: ["prelevement-source", "prime-activite", "rattachement"], verifie: "octobre 2026",
    outil: { id: "job", label: "Calculer la part imposable" }
  },
  {
    id: "prelevement-source", theme: "impots", titre: "Prélèvement à la source : taux neutre ou personnalisé ?",
    accroche: "Pourquoi ton employeur retient de l'impôt sur ton premier salaire, et comment l'ajuster.",
    temps: "10 min", cout: "Gratuit", mots: ["prélèvement", "taux", "taux neutre", "premier salaire", "fiche de paie", "employeur"],
    enBref: [
      "L'impôt est prélevé sur ton salaire chaque mois par ton employeur, au taux que lui communique l'administration.",
      "Sans taux connu (par exemple à ton premier job), un **taux neutre** s'applique, qui peut être supérieur à ce que tu dois vraiment.",
      "Tu peux **modifier ton taux** en ligne, et l'excédent est remboursé après ta déclaration."
    ],
    etapes: [
      { t: "Repérer la ligne sur ta fiche de paie", d: "Elle s'appelle « Impôt sur le revenu prélevé à la source » et indique un taux et un montant. Un taux de 0 % signifie qu'aucun impôt n'est retenu." },
      { t: "Comprendre le taux appliqué", d: "- **Taux personnalisé** : calculé à partir de ta dernière déclaration.\n- **Taux neutre** : une grille simple, appliquée quand l'administration n'a pas de taux pour toi ou quand tu le demandes.\n- **Taux individualisé** : quand vous êtes en couple, chacun peut avoir son taux." },
      { t: "Ajuster si besoin", d: "Dans ton espace impots.gouv.fr, rubrique « Gérer mon prélèvement à la source », tu peux changer ton taux ou demander le taux neutre. Le nouveau taux est transmis à l'employeur sous un à deux mois." },
      { t: "Attendre la régularisation", d: "Après ta déclaration, ton impôt réel est calculé : si tu as trop payé, tu es remboursé·e, en général l'été. Si tu n'as pas payé assez, la différence est prélevée." }
    ],
    pieges: [
      "Paniquer devant un prélèvement alors que tes revenus sont exonérés : il sera remboursé.",
      "Oublier de mettre ton taux à jour après un changement de situation (premier emploi, fin d'alternance).",
      "Demander le taux neutre pour « payer moins » : ça ne change pas l'impôt final, seulement le moment où tu le paies."
    ],
    liens: [
      { label: "Prélèvement à la source (impots.gouv.fr)", url: "https://www.impots.gouv.fr/particulier" },
      { label: "Service-Public : le prélèvement à la source", url: "https://www.service-public.gouv.fr/particuliers" }
    ],
    sources: ["impots.gouv.fr, prélèvement à la source (principes généraux)"],
    voir: ["premiere-declaration", "apprenti-impots", "avis-imposition"], verifie: "octobre 2026"
  },
  {
    id: "avis-imposition", theme: "impots", titre: "L'avis d'imposition : à quoi il sert",
    accroche: "Le papier que tout le monde te demande (propriétaire, Caf, école).",
    temps: "5 min", cout: "Gratuit", mots: ["avis", "imposition", "justificatif", "rfr", "revenu fiscal de référence", "logement", "bourse"],
    enBref: [
      "Tu le reçois **après ta déclaration**, en général en été, même si tu ne paies rien.",
      "Il contient ton **revenu fiscal de référence** (RFR), que les propriétaires et organismes regardent.",
      "Tu le retrouves dans ton espace impots.gouv.fr : télécharge-le quand tu en as besoin."
    ],
    etapes: [
      { t: "Le télécharger", d: "Dans ton espace particulier, rubrique « Documents » : « avis d'impôt sur le revenu » (PDF). Tu peux en demander la version papier." },
      { t: "Repérer les chiffres utiles", d: "- **Revenu fiscal de référence** (RFR)\n- **Nombre de parts**\n- **Impôt net** (zéro si tu n'es pas imposable)" },
      { t: "L'utiliser pour un dossier", d: "Un propriétaire demande souvent le dernier avis d'imposition (le tien, ou celui de tes parents si tu es rattaché·e). Pour un dossier de location, prépare-le avec [Visale et le dossier de location](#guide-trouver-logement)." },
      { t: "Le vérifier", d: "Compare les revenus et le nombre de parts avec ce que tu as déclaré. Une erreur se corrige : voir [Corriger sa déclaration](#guide-corriger-declaration)." }
    ],
    pieges: [
      "Donner ton avis complet (avec numéro fiscal et référence de l'avis) à n'importe qui : propose plutôt ce qui est demandé.",
      "Croire qu'« avis de non-imposition » = pas d'avis : si tu n'es pas imposable, tu reçois quand même un avis."
    ],
    liens: [{ label: "Accéder à ton espace impots.gouv.fr", url: "https://www.impots.gouv.fr" }],
    sources: ["impots.gouv.fr, avis d'impôt sur le revenu (principes généraux)"],
    voir: ["premiere-declaration", "corriger-declaration", "trouver-logement"], verifie: "octobre 2026"
  },
  {
    id: "corriger-declaration", theme: "impots", titre: "J'ai fait une erreur ou oublié un revenu",
    accroche: "Corriger en ligne, avant ou après l'avis d'imposition.",
    temps: "15 min", cout: "Gratuit", mots: ["correction", "erreur", "oubli", "rectifier", "réclamation", "déclaration"],
    enBref: [
      "Tant que la campagne est ouverte, tu peux **modifier** ta déclaration en ligne.",
      "Après l'avis, une **correction en ligne** reste possible jusqu'à une date annoncée chaque année.",
      "Passé ce délai, tu peux faire une **réclamation** auprès de ton service des impôts, dans un délai de deux ans environ."
    ],
    etapes: [
      { t: "Repérer l'erreur", d: "Revenu oublié, mauvaise case, enfant ou rattachement non déclaré, exonération non demandée." },
      { t: "Corriger en ligne", d: "Dans ton espace particulier, ouvre ta déclaration et choisis « Corriger ma déclaration ». Les nouveaux montants donnent un nouvel avis." },
      { t: "Si tu as oublié un revenu", d: "Mieux vaut le déclarer toi-même que d'attendre un contrôle. Précise l'origine du revenu et garde les justificatifs." },
      { t: "Si le délai est passé", d: "Fais une réclamation écrite (messagerie sécurisée de ton espace, ou courrier) en joignant les justificatifs. Le délai est d'environ deux ans après l'avis : vérifie-le sur impots.gouv.fr.", lien: { label: "Corriger ou réclamer (impots.gouv.fr)", url: "https://www.impots.gouv.fr/particulier" } }
    ],
    pieges: [
      "Attendre un contrôle pour avouer un oubli.",
      "Corriger sans conserver les justificatifs : garde-les plusieurs années."
    ],
    liens: [{ label: "impots.gouv.fr, espace particulier", url: "https://www.impots.gouv.fr" }],
    sources: ["impots.gouv.fr, correction et réclamation (principes généraux ; dates à vérifier chaque année)"],
    voir: ["avis-imposition", "premiere-declaration"], verifie: "octobre 2026"
  }
);
