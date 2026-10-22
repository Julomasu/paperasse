/* Thème « Créer son entreprise ». Chiffres 2026 : Urssaf (auto-entrepreneur), Service-Public Entreprendre, impots.gouv.fr. */
(P.GUIDES = P.GUIDES || []).push(
  {
    id: "choisir-statut", theme: "entreprise", titre: "Quel statut pour mon activité ?",
    accroche: "Micro-entreprise, société ou autre : comment choisir sans te tromper.",
    temps: "20 min", cout: "Gratuit", mots: ["statut", "micro", "sasu", "eurl", "société", "entreprise individuelle", "freelance", "auto-entrepreneur", "choisir"],
    enBref: [
      "Pour **tester une activité seul·e** avec peu de frais, la **micro-entreprise** est la plus simple : inscription gratuite, cotisations proportionnelles au chiffre d'affaires.",
      "Une **société** (SASU, EURL) coûte plus à créer et à tenir, mais sépare mieux l'activité de tes biens personnels et permet de dépasser les plafonds de la micro.",
      "Les plafonds 2026 de la micro-entreprise sont de **83 600 €** (services) et **203 100 €** (vente)."
    ],
    etapes: [
      { t: "Décrire ton projet en quelques chiffres", d: "Quel chiffre d'affaires espères-tu la première année ? Quelles charges (matériel, logiciels, local, sous-traitance) ? Seul·e ou avec un·e associé·e ? Tes clients sont-ils des particuliers ou des entreprises ?" },
      { t: "Comparer les grandes options", d: "- **Micro-entreprise** : démarches et comptabilité minimales, pas de TVA sous les seuils, mais plafonds de chiffre d'affaires et charges non déductibles au réel (un abattement forfaitaire s'applique).\n- **Entreprise individuelle au réel** : tu déduis tes charges réelles, mais la comptabilité est plus lourde.\n- **SASU** : une société à un associé. Le président est assimilé salarié (bonne protection sociale, pas d'assurance chômage).\n- **EURL** : une société à un associé. Le gérant relève en principe du régime des indépendants.\n- **Association** : pour une activité non lucrative." },
      { t: "Utiliser le simulateur officiel", d: "Service-Public Entreprendre propose un outil qui te guide vers un statut selon ton projet.", lien: { label: "Trouver le bon statut juridique", url: "https://entreprendre.service-public.gouv.fr/vosdroits/R71957" } },
      { t: "Vérifier si ton activité est réglementée", d: "Certaines activités exigent un diplôme, une assurance ou une déclaration préalable (bâtiment, coiffure, restauration, transport, santé…). Renseigne-toi avant de t'immatriculer." },
      { t: "Te faire accompagner gratuitement", d: "Les chambres de commerce (CCI) et de métiers (CMA), les boutiques de gestion et Initiative France accompagnent les créateurs. Si tu es étudiant·e, ton **PEPITE** peut te proposer un statut national étudiant-entrepreneur.", lien: { label: "Les PEPITE", url: "https://www.pepite-france.fr" } }
    ],
    pieges: [
      "Créer une société « pour faire sérieux » alors que tu n'as pas encore de revenus : tu paies des frais et une comptabilité inutiles au début.",
      "Rester en micro sans anticiper le plafond : au-delà deux années de suite, tu sors du régime.",
      "Ignorer les règles propres à ton métier (assurance décennale, diplôme, carte professionnelle)."
    ],
    liens: [
      { label: "Trouver le bon statut (Service-Public Entreprendre)", url: "https://entreprendre.service-public.gouv.fr/vosdroits/R71957" },
      { label: "Seuils de chiffre d'affaires de la micro-entreprise", url: "https://entreprendre.service-public.gouv.fr/vosdroits/F32353" },
      { label: "Statut étudiant-entrepreneur (PEPITE)", url: "https://www.pepite-france.fr" }
    ],
    sources: ["Service-Public Entreprendre F32353, F11677 (statuts, plafonds)", "Urssaf auto-entrepreneur, essentiel du statut"],
    voir: ["creer-micro", "creer-societe", "cotisations-micro"], verifie: "octobre 2026"
  },
  {
    id: "creer-micro", theme: "entreprise", titre: "Créer sa micro-entreprise pas à pas",
    accroche: "De l'idée au SIRET : les étapes dans l'ordre, sans frais.",
    temps: "1 h", cout: "Gratuit", mots: ["micro-entreprise", "auto-entrepreneur", "siret", "siren", "immatriculation", "guichet", "créer", "freelance", "urssaf"],
    enBref: [
      "L'inscription se fait **en ligne sur le guichet unique des formalités des entreprises** et c'est **gratuit** pour une micro-entreprise.",
      "Après validation tu reçois ton **SIREN / SIRET**, puis tu crées ton compte Urssaf pour déclarer ton chiffre d'affaires.",
      "La **première déclaration** peut être faite au plus tôt 90 jours après le début d'activité, puis chaque mois ou trimestre, **même à 0 €**."
    ],
    etapes: [
      { t: "Choisir ta catégorie d'activité", d: "Elle détermine tes cotisations : vente de marchandises, prestations de services commerciales ou artisanales (BIC), activité libérale (BNC). Les taux sont dans [Cotisations 2026](#guide-cotisations-micro)." },
      { t: "Choisir ta date de début", d: "Si tu veux demander l'Acre, démarre de préférence en **début de trimestre** (janvier, avril, juillet, octobre) : l'exonération court jusqu'à la fin du 3ᵉ trimestre civil suivant le début d'activité. Voir [L'Acre en 2026](#guide-acre-2026)." },
      { t: "Faire ta déclaration sur le guichet des formalités", d: "Prépare : une pièce d'identité, un justificatif de domicile, ton numéro de sécurité sociale et une déclaration sur l'honneur de non-condamnation. Le dossier part ensuite aux organismes concernés.", lien: { label: "Guichet des formalités des entreprises", url: "https://formalites.entreprises.gouv.fr" } },
      { t: "Recevoir ton SIREN / SIRET", d: "Tu reçois ton numéro d'identification (SIREN, 9 chiffres, puis SIRET, 14 chiffres). Il doit figurer sur tes devis et factures." },
      { t: "Créer ton espace Urssaf et choisir ta fréquence", d: "Tu déclares ton chiffre d'affaires et paies tes cotisations **chaque mois ou chaque trimestre**, selon ton choix. Choisis un rythme que tu tiendras vraiment.", lien: { label: "Espace Urssaf auto-entrepreneur", url: "https://www.autoentrepreneur.urssaf.fr" } },
      { t: "Demander l'Acre si tu y as droit", d: "Elle n'est plus automatique depuis 2026 : demande-la **dans les 60 jours** qui suivent le début de ton activité." },
      { t: "Organiser le quotidien", d: "Ouvre un compte bancaire dédié (obligatoire quand ton chiffre d'affaires dépasse 10 000 € deux années de suite, conseillé dès le début), tiens un livre des recettes, et prépare des factures conformes." }
    ],
    pieges: [
      "Ne rien déclarer parce que le chiffre d'affaires est nul : la déclaration est obligatoire, même à 0 € (il n'y a alors aucune cotisation).",
      "Démarrer le 29 d'un mois de trimestre : l'Acre sera plus courte.",
      "Payer un site privé pour « t'inscrire » : l'immatriculation d'une micro-entreprise est gratuite sur le site officiel.",
      "Mélanger l'argent de l'activité et ton argent personnel."
    ],
    liens: [
      { label: "Guichet des formalités des entreprises", url: "https://formalites.entreprises.gouv.fr" },
      { label: "Autoentrepreneur.urssaf.fr", url: "https://www.autoentrepreneur.urssaf.fr" },
      { label: "Cotisations sociales d'un micro-entrepreneur (Service-Public Entreprendre)", url: "https://entreprendre.service-public.gouv.fr/vosdroits/F36232" }
    ],
    sources: ["Service-Public Entreprendre F36232 (déclaration à partir de 90 jours, CA à 0 €)", "Service-Public Entreprendre F11677 (Acre)", "Urssaf auto-entrepreneur"],
    voir: ["cotisations-micro", "acre-2026", "pieges-entrepreneur", "tva-micro"], verifie: "octobre 2026"
  },
  {
    id: "cotisations-micro", theme: "entreprise", titre: "Combien je paie vraiment en micro-entreprise (2026)",
    accroche: "Les taux de cotisations, le versement libératoire et les plafonds, avec un exemple chiffré.",
    temps: "15 min", cout: "Gratuit", mots: ["cotisations", "taux", "charges", "urssaf", "net", "versement libératoire", "plafond", "chiffre d'affaires"],
    enBref: [
      "Tes cotisations sont un **pourcentage du chiffre d'affaires** : 12,3 % (vente), 21,2 % (services BIC), 25,6 % (libéral BNC), 23,2 % (Cipav).",
      "Si tu ne gagnes rien un mois, tu ne paies rien. Tu **ne déduis pas** tes charges : le pourcentage est forfaitaire.",
      "Plafonds : **83 600 €** (services et libéral) ou **203 100 €** (vente), deux années consécutives de dépassement et tu sors du régime."
    ],
    etapes: [
      { t: "Repérer ton taux", d: "Taux global de cotisations en 2026 :\n\n- Vente de marchandises, restauration, hébergement : **12,3 %**\n- Prestations de services commerciales ou artisanales (BIC) : **21,2 %**\n- Activité libérale non réglementée (BNC) : **25,6 %** (en hausse au 1er janvier 2026)\n- Professions libérales réglementées relevant de la Cipav : **23,2 %**" },
      { t: "Faire un calcul", d: "Exemple : 12 000 € de prestations de services BIC dans l'année : 12 000 × 21,2 % = **2 544 €** de cotisations, soit **9 456 €** restants avant impôt sur le revenu.", lien: { label: "Simuler avec mes chiffres", url: "#outil-micro" } },
      { t: "Choisir : barème ou versement libératoire", d: "Par défaut, tes revenus de micro-entreprise sont imposés au barème (avec un abattement forfaitaire). Sous conditions de revenus de ton foyer fiscal, tu peux opter pour le **versement libératoire** : l'impôt est payé en même temps que les cotisations, à 13,3 % (vente), 22,9 % (services BIC), 27,8 % (BNC) ou 25,4 % (Cipav).\n\nCe n'est pas toujours avantageux : si ton foyer est peu ou pas imposé, le barème coûte souvent moins." },
      { t: "Déclarer et payer", d: "Chaque mois ou trimestre, sur ton espace Urssaf : tu indiques le chiffre d'affaires encaissé et la plateforme calcule le montant à payer." },
      { t: "Surveiller tes plafonds", d: "Le plafond de chiffre d'affaires est **proratisé** l'année de création. Exemple officiel : début d'activité le 1er mars 2026 en services, soit 306 jours : 83 600 € × 306 / 365 = 70 087 €." }
    ],
    pieges: [
      "Confondre cotisations sociales et impôt sur le revenu : ce sont deux paiements différents (sauf avec le versement libératoire).",
      "Dépenser tout le chiffre d'affaires : provisionne le pourcentage de cotisations dès que tu es payé·e.",
      "Oublier la CFE (taxe locale, due à partir de la 2ᵉ année)."
    ],
    liens: [
      { label: "Cotisations sociales d'un micro-entrepreneur (Service-Public Entreprendre)", url: "https://entreprendre.service-public.gouv.fr/vosdroits/F36232" },
      { label: "L'essentiel du statut (Urssaf)", url: "https://www.autoentrepreneur.urssaf.fr/portail/accueil/sinformer-sur-le-statut/lessentiel-du-statut.html" },
      { label: "Seuils 2026 (Urssaf)", url: "https://www.autoentrepreneur.urssaf.fr/portail/accueil/sinformer-sur-le-statut/toutes-les-actualites/2026--modification-des-seuils-de.html" }
    ],
    sources: ["Service-Public Entreprendre F36232 (taux et versement libératoire)", "Urssaf, 2026 : nouveaux seuils de chiffre d'affaires", "Urssaf, taux BNC au 1er janvier 2026"],
    voir: ["acre-2026", "tva-micro", "impots-micro"], verifie: "octobre 2026",
    outil: { id: "micro", label: "Simuler mes cotisations" }
  },
  {
    id: "acre-2026", theme: "entreprise", titre: "L'Acre en 2026 : ce qui change",
    accroche: "Une exonération réduite de moitié depuis juillet 2026, et qui se demande désormais.",
    temps: "20 min", cout: "Gratuit", mots: ["acre", "exonération", "création", "jeune", "18 25 ans", "urssaf", "nacre", "arce", "aide"],
    enBref: [
      "Pour une micro-entreprise **créée depuis le 1er juillet 2026**, l'Acre exonère **25 %** des cotisations (c'était 50 %) : tu paies 75 % du taux normal.",
      "Elle n'est **plus automatique** depuis le 1er janvier 2026 : il faut la demander à l'Urssaf **dans les 60 jours** après le début d'activité.",
      "Les **18-25 ans** y ont droit (la pièce d'identité suffit pour les moins de 26 ans), tout comme les moins de 30 ans non indemnisés par le chômage."
    ],
    etapes: [
      { t: "Vérifier ton éligibilité", d: "Parmi les cas ouvrant droit à l'Acre :\n\n- avoir entre **18 et 25 ans** (29 ans si reconnu handicapé)\n- avoir moins de 30 ans sans être indemnisé par l'assurance chômage\n- être demandeur d'emploi indemnisé, ou non indemnisé depuis plus de 6 mois sur les 18 derniers\n- toucher le RSA ou l'ASS\n- créer dans un quartier prioritaire (QPV) ou une zone France ruralités revitalisation\n\nTu ne dois pas avoir bénéficié de l'Acre dans les **3 années précédentes**." },
      { t: "Démarrer au bon moment", d: "L'exonération dure **jusqu'à la fin du 3ᵉ trimestre civil** qui suit la date de début d'activité. Exemple officiel : une activité lancée le 3 septembre 2026 est exonérée jusqu'au 30 juin 2027, soit 10 mois seulement. Lancée début juillet, elle l'aurait été 12 mois." },
      { t: "Finaliser tes formalités", d: "Termine ton immatriculation sur le guichet des formalités, puis télécharge le **justificatif de création d'activité**." },
      { t: "Envoyer la demande à l'Urssaf", d: "Remplis le formulaire de demande d'Acre et transmets-le immédiatement via la messagerie de ton espace Urssaf, avec le justificatif de création et la pièce qui prouve ton éligibilité.", lien: { label: "Formulaire de demande d'Acre (micro-entrepreneur)", url: "https://entreprendre.service-public.gouv.fr/vosdroits/R55376" } },
      { t: "Attendre la réponse", d: "L'Urssaf répond sous **30 jours**. Sans réponse, l'Acre est considérée comme accordée." },
      { t: "Ne pas la confondre avec d'autres aides", d: "L'**Arce** est un capital versé par France Travail (60 % de tes allocations chômage). L'accompagnement régional (ex-**Nacre**) est un soutien au montage de projet. Ce sont des dispositifs différents." }
    ],
    pieges: [
      "Oublier de faire la demande : sans elle, tu paies le taux plein, même si tu y avais droit.",
      "Dépasser les 60 jours : la demande doit être déposée dans ce délai après la date d'ouverture de l'activité.",
      "Croire qu'elle dure toujours 12 mois : elle s'arrête à la fin du 3ᵉ trimestre civil suivant le début.",
      "Compter sur 50 % : c'est 25 % pour les créations depuis le 1er juillet 2026."
    ],
    liens: [
      { label: "Acre : fiche officielle (Service-Public Entreprendre)", url: "https://entreprendre.service-public.gouv.fr/vosdroits/F11677" },
      { label: "L'Acre (Urssaf)", url: "https://www.urssaf.fr/accueil/exoneration-acre-createur.html" },
      { label: "Acre : du changement (Service-Public Entreprendre)", url: "https://entreprendre.service-public.gouv.fr/actualites/A18795" }
    ],
    sources: ["Service-Public Entreprendre F11677 (vérifiée le 1er juillet 2026)", "Service-Public Entreprendre A18795 (passage de 50 à 25 %)", "Urssaf, nouvelles règles de l'Acre"],
    voir: ["creer-micro", "cotisations-micro", "choisir-statut"], verifie: "octobre 2026",
    outil: { id: "micro", label: "Voir l'effet de l'Acre sur mes cotisations" }
  },
  {
    id: "tva-micro", theme: "entreprise", titre: "La TVA : la franchise en base",
    accroche: "Pourquoi tu ne factures pas de TVA au début, et à partir de quand ça change.",
    temps: "10 min", cout: "Gratuit", mots: ["tva", "franchise", "facture", "seuil", "293 B", "taxe"],
    enBref: [
      "Sous un seuil de chiffre d'affaires, tu es en **franchise en base de TVA** : tu ne factures pas de TVA, et tu n'en récupères pas non plus sur tes achats.",
      "Seuils 2026 : **85 000 €** (vente, restauration, hébergement) et **37 500 €** (services et libéral).",
      "Seuils majorés (tolérance) : **93 500 €** et **41 250 €**."
    ],
    etapes: [
      { t: "Savoir dans quel cas tu es", d: "Dès l'année de la création, la franchise s'applique de droit, sauf si le seuil majoré est atteint. Les années suivantes, elle dépend de ton chiffre d'affaires de l'année précédente." },
      { t: "Mettre la bonne mention sur tes factures", d: "En franchise, ajoute : « **TVA non applicable, article 293 B du CGI** ». Tu n'affiches pas de ligne de TVA." },
      { t: "Surveiller les seuils", d: "- Entre 85 000 € et 93 500 € (vente) ou entre 37 500 € et 41 250 € (services) : zone de tolérance, la franchise se maintient dans l'année mais renseigne-toi sur la suite.\n- Au-dessus du seuil majoré : tu deviens redevable de la TVA.", lien: { label: "Franchise en base de TVA (Service-Public Entreprendre)", url: "https://entreprendre.service-public.gouv.fr/vosdroits/F21746" } },
      { t: "Si tu deviens redevable", d: "Tu factures la TVA à tes clients, tu la déclares et la reverses. Prépare-toi à l'avance, car cela change tes prix ou ta marge." },
      { t: "Choisir la TVA volontairement ?", d: "Si tes clients sont des entreprises et que tu as des achats importants, opter pour la TVA te permet de la récupérer. À étudier avec un conseiller." }
    ],
    pieges: [
      "Facturer de la TVA alors que tu es en franchise : tu devrais la reverser.",
      "Ignorer le dépassement : il se suit tout au long de l'année, pas à la fin.",
      "Confondre le plafond du régime micro (83 600 €) et le seuil de TVA (37 500 € pour les services) : ce sont deux limites différentes."
    ],
    liens: [
      { label: "Franchise en base de TVA (Service-Public Entreprendre)", url: "https://entreprendre.service-public.gouv.fr/vosdroits/F21746" },
      { label: "Micro-entrepreneur et TVA (impots.gouv.fr)", url: "https://www.impots.gouv.fr/professionnel/questions/en-tant-que-micro-entrepreneur-puis-je-etre-redevable-de-la-tva" },
      { label: "Pouvez-vous bénéficier de la franchise de TVA ? (economie.gouv.fr)", url: "https://www.economie.gouv.fr/entreprises/gerer-sa-fiscalite-et-ses-impots/autres-impots-et-taxes/entreprises-pouvez-vous-beneficier-de-la-franchise-de-tva" }
    ],
    sources: ["Service-Public Entreprendre F21746 (seuils 2026)", "economie.gouv.fr, franchise de TVA", "impots.gouv.fr, micro-entrepreneur et TVA"],
    voir: ["cotisations-micro", "pieges-entrepreneur"], verifie: "octobre 2026",
    outil: { id: "micro", label: "Tester mon chiffre d'affaires" }
  },
  {
    id: "impots-micro", theme: "entreprise", titre: "Déclarer ses revenus de micro-entrepreneur aux impôts",
    accroche: "Abattement forfaitaire, base imposable et rattachement : ce qui compte à la déclaration.",
    temps: "20 min", cout: "Gratuit", mots: ["impôts", "micro", "abattement", "déclaration", "bic", "bnc", "revenus", "2042"],
    enBref: [
      "En micro, ton bénéfice imposable est ton chiffre d'affaires **moins un abattement forfaitaire** : 71 % (vente), 50 % (services BIC), 34 % (libéral BNC), avec un **minimum de 305 €**.",
      "Cette base s'ajoute aux autres revenus du **foyer fiscal** : celui de tes parents si tu es rattaché·e.",
      "Les cotisations sociales ne se déduisent pas en plus : l'abattement les couvre déjà."
    ],
    etapes: [
      { t: "Choisir comment tu es imposé·e", d: "Soit au **barème progressif** (régime par défaut), soit avec le **versement libératoire** si tu y es éligible : voir [Cotisations 2026](#guide-cotisations-micro)." },
      { t: "Reporter ton chiffre d'affaires", d: "Dans la déclaration de revenus, indique le chiffre d'affaires de l'année dans la rubrique des revenus professionnels non salariés (annexe 2042 C PRO). L'abattement est appliqué automatiquement." },
      { t: "Mesurer l'effet sur ton foyer", d: "Si tu es rattaché·e à tes parents, la base imposable de ta micro-entreprise s'ajoute à leur revenu. Compare avec une déclaration séparée dans le guide [Rattachement](#guide-rattachement)." },
      { t: "Ne pas oublier la CFE", d: "La cotisation foncière des entreprises n'est pas due la première année, mais elle l'est ensuite (avis à payer en fin d'année)." }
    ],
    pieges: [
      "Déclarer seulement le bénéfice que tu crois avoir gagné : en micro, c'est le chiffre d'affaires qui est déclaré.",
      "Oublier que le prélèvement à la source ne s'applique pas aux revenus de micro-entreprise de la même façon que pour un salarié : un acompte peut être calculé par l'administration.",
      "Ne pas anticiper l'impôt : mets de l'argent de côté dès les premiers encaissements."
    ],
    liens: [
      { label: "Régime fiscal de la micro-entreprise (Service-Public Entreprendre)", url: "https://entreprendre.service-public.gouv.fr/vosdroits/F23267" },
      { label: "Le régime unique des micro-entreprises (impots.gouv.fr)", url: "https://www.impots.gouv.fr/professionnel/le-regime-unique-des-tpe" }
    ],
    sources: ["Service-Public Entreprendre F23267 (régime micro-fiscal)", "impots.gouv.fr, régime unique des micro-entreprises (abattement minimum de 305 €)"],
    voir: ["rattachement", "cotisations-micro", "premiere-declaration"], verifie: "octobre 2026",
    outil: { id: "micro", label: "Estimer ma base imposable" }
  },
  {
    id: "creer-societe", theme: "entreprise", titre: "Créer une SASU ou une EURL",
    accroche: "Les étapes, les frais et ce que ça change par rapport à la micro-entreprise.",
    temps: "1 à 2 semaines", cout: "Frais d'immatriculation et d'annonce légale", mots: ["sasu", "eurl", "société", "statuts", "capital", "annonce légale", "kbis", "greffe"],
    enBref: [
      "SASU et EURL sont des **sociétés à un seul associé** : ta responsabilité est en principe limitée à tes apports.",
      "Le président de SASU est **assimilé salarié** ; le gérant d'EURL relève en principe du **régime des indépendants**.",
      "Il faut des **statuts**, un **capital** déposé, une **annonce légale** et une immatriculation via le guichet unique : compte quelques semaines et un budget."
    ],
    etapes: [
      { t: "Choisir entre SASU et EURL", d: "La SASU offre une protection sociale proche de celle d'un salarié (mais pas d'assurance chômage pour le président). L'EURL a souvent des cotisations plus basses avec une protection plus légère. Compare avec un expert ou le simulateur officiel.", lien: { label: "Trouver le bon statut", url: "https://entreprendre.service-public.gouv.fr/vosdroits/R71957" } },
      { t: "Rédiger les statuts", d: "Ils fixent le nom, l'objet, le siège, le capital et le fonctionnement. Tu peux utiliser un modèle, un service en ligne ou un professionnel (avocat, expert-comptable)." },
      { t: "Déposer le capital", d: "Le capital social est libre (même symbolique) mais doit être déposé sur un compte dédié avant l'immatriculation." },
      { t: "Publier l'annonce légale", d: "Dans un support habilité. Le tarif forfaitaire dépend du département et du type de société : un simulateur officiel donne le montant exact.", lien: { label: "Calculer une annonce légale", url: "https://entreprendre.service-public.gouv.fr/vosdroits/R69365" } },
      { t: "T'immatriculer sur le guichet unique", d: "Dépose le dossier en ligne : statuts, justificatifs, annonce légale, attestation de dépôt des fonds. Des frais d'immatriculation sont à prévoir.", lien: { label: "Coût des formalités de création d'une société", url: "https://entreprendre.service-public.gouv.fr/vosdroits/F37688" } },
      { t: "Recevoir ton extrait Kbis et ouvrir tes comptes", d: "Le Kbis prouve l'existence de la société. Ouvre ensuite un compte bancaire professionnel, un espace Urssaf si besoin, et prévois la comptabilité (bilan annuel obligatoire)." },
      { t: "Voir si tu peux demander l'Acre", d: "Les dirigeants de société peuvent y prétendre, à condition d'exercer le contrôle effectif de la société et de faire la demande à l'Urssaf." }
    ],
    pieges: [
      "Sous-estimer les frais courants : comptabilité, comptes annuels, éventuelle assurance.",
      "Prélever de l'argent sans respecter les règles de rémunération ou de dividendes.",
      "Choisir la SASU en pensant avoir droit au chômage : le président n'est en principe pas couvert."
    ],
    liens: [
      { label: "Coût des formalités de création (Service-Public Entreprendre)", url: "https://entreprendre.service-public.gouv.fr/vosdroits/F37688" },
      { label: "Annonces légales : tarifs 2026", url: "https://entreprendre.service-public.gouv.fr/vosdroits/F31972" },
      { label: "Guichet des formalités des entreprises", url: "https://formalites.entreprises.gouv.fr" }
    ],
    sources: ["Service-Public Entreprendre F37688, F31972, A18724 (annonces légales 2026)", "Service-Public Entreprendre F11677 (Acre des dirigeants de société)"],
    voir: ["choisir-statut", "acre-2026", "pieges-entrepreneur"], verifie: "octobre 2026"
  },
  {
    id: "pieges-entrepreneur", theme: "entreprise", titre: "Les pièges du premier mois d'entrepreneur",
    accroche: "Factures, comptes, CFE, démarchages abusifs : ce qu'on découvre trop tard.",
    temps: "10 min", cout: "Gratuit", mots: ["facture", "cfe", "compte bancaire", "livre des recettes", "arnaque", "démarchage", "assurance"],
    enBref: [
      "Une **facture** doit comporter ton nom, ton SIRET, la date, un numéro, le détail de la prestation et, en franchise, la mention « TVA non applicable, art. 293 B du CGI ».",
      "Tiens un **livre des recettes** (et un registre des achats si tu vends des marchandises).",
      "Méfie-toi des **faux courriers officiels** qui te demandent de payer pour t'inscrire ou figurer dans un annuaire."
    ],
    etapes: [
      { t: "Faire des factures conformes", d: "Numérote-les, indique ton SIRET, les coordonnées du client, la date, le détail et le prix, les conditions de paiement et la mention TVA." },
      { t: "Tenir tes comptes", d: "Un livre des recettes chronologique suffit au début. Garde tes factures et justificatifs plusieurs années." },
      { t: "Séparer tes comptes", d: "Un compte bancaire dédié à l'activité est obligatoire si ton chiffre d'affaires dépasse 10 000 € deux années consécutives, et très pratique avant." },
      { t: "Anticiper la CFE et l'impôt", d: "La CFE n'est pas due la première année. Mets de côté de quoi payer les cotisations et l'impôt dès que tu encaisses." },
      { t: "T'assurer si ton métier l'exige", d: "L'assurance responsabilité civile professionnelle est obligatoire pour certaines activités et vivement conseillée pour les autres." },
      { t: "Repérer les arnaques à la création", d: "Après une immatriculation, des sociétés envoient des courriers qui ressemblent à des avis officiels (annuaire, « mise en conformité », frais de dépôt). Les démarches officielles se font sur le guichet unique et l'Urssaf, pas par un chèque envoyé à un inconnu. Voir [Reconnaître une arnaque](#guide-arnaques)." }
    ],
    pieges: [
      "Payer un courrier qui a l'air officiel sans vérifier d'où il vient.",
      "Oublier de déclarer le chiffre d'affaires parce qu'il est nul.",
      "Ne pas garder de preuve des factures émises et reçues."
    ],
    liens: [
      { label: "Autoentrepreneur.urssaf.fr", url: "https://www.autoentrepreneur.urssaf.fr" },
      { label: "Service-Public Entreprendre", url: "https://entreprendre.service-public.gouv.fr" }
    ],
    sources: ["Service-Public Entreprendre (obligations du micro-entrepreneur)", "Urssaf auto-entrepreneur"],
    voir: ["creer-micro", "tva-micro", "arnaques"], verifie: "octobre 2026"
  }
);
