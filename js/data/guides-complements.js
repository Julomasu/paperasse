/* Compléments par thème : logement, entreprise, impôts, papiers, travail. Sources : Service-Public, impots.gouv.fr, economie.gouv.fr, Urssaf, ANTS, service-civique.gouv.fr. */
(P.GUIDES = P.GUIDES || []).push(
  /* ——— Logement */
  {
    id: "assurance-habitation", theme: "logement", titre: "Assurance habitation : obligatoire, combien et comment",
    accroche: "L'attestation à fournir au propriétaire, ce qu'elle couvre et comment choisir.",
    temps: "20 min", cout: "Variable", pour: ["etudiant", "alternant", "salarie"], quand: "Avant la remise des clés.",
    mots: ["assurance habitation", "multirisque", "attestation", "locataire", "responsabilité civile", "dégât des eaux", "incendie"],
    todo: { si: ["locataire", "cherche-logement", "coloc"], prio: 1, pourquoi: "Le propriétaire peut exiger l'attestation à la remise des clés." },
    enBref: [
      "Un **locataire doit assurer son logement** au moins contre les risques locatifs : incendie, explosion, dégâts des eaux.",
      "Tu dois remettre une **attestation** à ton propriétaire à la remise des clés, puis chaque année.",
      "En **colocation**, vérifie si chacun a son contrat ou si vous prenez un contrat commun."
    ],
    etapes: [
      { t: "Choisir le contrat", d: "Une « multirisque habitation » couvre les risques locatifs, la responsabilité civile et, selon l'offre, tes biens. Compare franchises, plafonds et exclusions." },
      { t: "Demander plusieurs devis", d: "Banque, assureur en ligne, mutuelle. Des offres spéciales étudiants existent. Vérifie si les parents peuvent t'étendre leur contrat pendant tes études." },
      { t: "Signer avant les clés", d: "Souscris dès que tu as la date de remise des clés. L'assureur t'envoie l'attestation par mail." },
      { t: "Remettre l'attestation", d: "Donne-la à ton propriétaire ou ton agence, et garde une copie." },
      { t: "Déclarer un sinistre", d: "Dégât des eaux, cambriolage, incendie : préviens vite ton assureur (souvent sous 5 jours) et conserve photos, factures, constat amiable." }
    ],
    pieges: [
      "Laisser l'attestation expirer : le propriétaire peut te mettre en demeure d'assurer.",
      "Ne pas lire les franchises et exclusions.",
      "Ne pas déclarer ton déménagement à ton assureur."
    ],
    liens: [
      { label: "Service-Public : l'assurance du locataire (risques locatifs)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F31300" },
      { label: "Service-Public : colocation et assurance habitation", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F21478" }
    ],
    sources: ["Service-Public, assurance du locataire (obligation, attestation)"],
    voir: ["bail-etat-lieux", "colocation", "trouver-logement"], verifie: "octobre 2026"
  },
  {
    id: "visale-garant", theme: "logement", titre: "Visale : la caution gratuite pour les 30 ans et moins",
    accroche: "Comment obtenir le visa et le présenter au propriétaire.",
    temps: "20 min", cout: "Gratuit", pour: ["etudiant", "alternant", "salarie", "lyceen"], quand: "Avant de signer le bail.",
    mots: ["visale", "garant", "caution", "action logement", "visa", "loyer", "sans garant", "30 ans"],
    todo: { si: ["cherche-logement", "etudiant", "alternant"], prio: 1, pourquoi: "Visale remplace le garant et se demande avant la signature du bail." },
    enBref: [
      "Visale est une **caution gratuite**, accordée par **Action Logement**, pour les locataires **jusqu'à 30 ans** (étudiants, alternants, salariés).",
      "Elle garantit au propriétaire le **paiement du loyer et des charges** en cas d'impayé.",
      "Le **visa** se demande en ligne **avant** de signer le bail."
    ],
    etapes: [
      { t: "Vérifier ton éligibilité", d: "Tu dois avoir 30 ans ou moins (jusqu'à la veille de ton 31ᵉ anniversaire) et le logement doit respecter les plafonds de loyer indiqués sur visale.fr.", lien: { label: "Visale", url: "https://www.visale.fr" } },
      { t: "Créer ton dossier en ligne", d: "Sur visale.fr, avec tes justificatifs (pièce d'identité, situation d'étudiant ou de salarié)." },
      { t: "Obtenir ton visa", d: "Tu reçois un **visa** (certificat de garantie) que tu présentes au propriétaire pour le logement visé." },
      { t: "Signer le bail avec Visale", d: "Le propriétaire doit accepter la garantie. Il fait ensuite le contrat sur le site." },
      { t: "Savoir ce que Visale ne dispense pas", d: "Tu restes redevable du loyer : Visale avance les impayés et peut ensuite te les réclamer." }
    ],
    pieges: [
      "Demander le visa trop tard : il faut l'avoir avant la signature.",
      "Croire que Visale annule tes dettes.",
      "Accepter de payer une caution à un site privé : Visale est gratuit."
    ],
    liens: [
      { label: "Visale : garantie gratuite (Action Logement)", url: "https://www.actionlogement.fr/la-garantie-visale" },
      { label: "Service-Public : garantie Visale", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F33453" }
    ],
    sources: ["Action Logement et visale.fr (30 ans et moins, gratuité)", "Service-Public F33453"],
    voir: ["trouver-logement", "bail-etat-lieux", "assurance-habitation"], verifie: "octobre 2026"
  },
  {
    id: "colocation", theme: "logement", titre: "Colocation : bail, solidarité, départ d'un colocataire",
    accroche: "Bail unique ou individuel, clause de solidarité, APL en colocation.",
    temps: "25 min", cout: "Gratuit", pour: ["etudiant", "alternant", "salarie"], quand: "Avant de signer un bail à plusieurs.",
    mots: ["colocation", "clause de solidarité", "bail", "colocataire", "départ", "dépôt de garantie", "apl", "caution"],
    todo: { si: ["coloc"], prio: 1, pourquoi: "Dans un bail commun, tu peux répondre des dettes des autres." },
    enBref: [
      "Dans un **bail unique**, une **clause de solidarité** peut te rendre responsable de l'ensemble du loyer, pas seulement de ta part.",
      "Quand un colocataire part, sa solidarité s'arrête en général **au plus tard 6 mois** après la fin de son préavis (ou plus tôt s'il est remplacé).",
      "L'**APL** est calculée par chambre ou par colocation selon le bail : renseigne bien la Caf."
    ],
    etapes: [
      { t: "Choisir le type de bail", d: "- **Bail unique** pour tous, avec ou sans solidarité\n- **Baux individuels** pour chaque chambre, plus simples en cas de départ\nDemande clairement la formule au propriétaire." },
      { t: "Comprendre la solidarité", d: "Si la clause existe, chaque colocataire peut être poursuivi pour la totalité des loyers impayés. Mesure ce risque avant de signer." },
      { t: "Prévoir l'assurance et les garanties", d: "Chaque colocataire peut avoir son assurance, ou un contrat commun. Voir [Assurance habitation](#guide-assurance-habitation) et [Visale](#guide-visale-garant)." },
      { t: "Organiser un départ", d: "Le colocataire qui part donne son préavis par recommandé. Cherchez un remplaçant et mettez à jour le bail par avenant." },
      { t: "Déclarer à la Caf", d: "La Caf doit connaître la situation du bail et le nombre de colocataires. Voir [APL](#guide-apl-etudiant)." }
    ],
    pieges: [
      "Signer une clause de solidarité sans mesurer le risque.",
      "Partir sans remplacer : tu restes engagé·e jusqu'à la fin de la solidarité.",
      "Ne pas formaliser les arrangements entre colocataires par écrit."
    ],
    liens: [
      { label: "Service-Public : colocation, bail et solidarité", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34661" },
      { label: "ADIL : conseil juridique logement gratuit", url: "https://www.anil.org" }
    ],
    sources: ["Service-Public, colocation (clause de solidarité, durée après congé)", "ANIL / ADIL"],
    voir: ["bail-etat-lieux", "assurance-habitation", "preavis-logement"], verifie: "octobre 2026"
  },
  {
    id: "preavis-logement", theme: "logement", titre: "Quitter son logement : préavis, état des lieux, dépôt",
    accroche: "1 ou 3 mois de préavis, lettre recommandée et récupération du dépôt de garantie.",
    temps: "30 min", cout: "Gratuit", pour: ["etudiant", "alternant", "salarie"], quand: "Au moins 1 à 3 mois avant ton départ.",
    mots: ["préavis", "départ", "congé", "dépôt de garantie", "état des lieux", "zone tendue", "résilier bail", "loyer"],
    todo: { si: ["locataire"], prio: 2, pourquoi: "Un préavis mal donné te coûte des loyers supplémentaires." },
    enBref: [
      "Préavis du locataire : **3 mois** en logement vide, **1 mois** en logement meublé ou en zone tendue (et dans certains cas particuliers).",
      "Le congé se donne par **lettre recommandée**, acte de commissaire de justice ou remise en main propre contre récépissé.",
      "Le **dépôt de garantie** doit être restitué dans un délai d'un à deux mois selon l'état des lieux."
    ],
    etapes: [
      { t: "Déterminer ton préavis", d: "Vérifie sur ton bail s'il est meublé ou vide et si tu es en zone tendue. Les cas particuliers (premier emploi, mutation, perte d'emploi, santé) peuvent ouvrir un préavis d'un mois." },
      { t: "Envoyer ton congé", d: "Par recommandé avec accusé de réception. Le préavis commence le jour de la réception. Un modèle est dans les [lettres types](#lettre-preavis-logement)." },
      { t: "Préparer l'état des lieux de sortie", d: "Nettoie, répare les petits dégâts, photographie. Compare avec l'état des lieux d'entrée. Voir [Bail et état des lieux](#guide-bail-etat-lieux)." },
      { t: "Payer le loyer jusqu'à la fin du préavis", d: "Sauf si le propriétaire accepte un départ anticipé, ou si un nouveau locataire entre plus tôt." },
      { t: "Récupérer le dépôt de garantie", d: "Le propriétaire le restitue en déduisant les sommes justifiées. S'il tarde, relance par recommandé." }
    ],
    pieges: [
      "Envoyer un simple mail sans accusé de réception.",
      "Partir sans état des lieux de sortie contradictoire.",
      "Oublier de résilier électricité, internet et assurance."
    ],
    liens: [
      { label: "Service-Public : donner congé de son logement", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1168" },
      { label: "Service-Public : dépôt de garantie", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F31269" }
    ],
    sources: ["Service-Public, congé du locataire (préavis 3 mois ou 1 mois)", "Service-Public, dépôt de garantie"],
    voir: ["bail-etat-lieux", "colocation", "changement-adresse"], verifie: "octobre 2026"
  },
  {
    id: "energie-internet", theme: "logement", titre: "Électricité, gaz, internet : ouvrir et choisir ses contrats",
    accroche: "Mettre le courant, comparer et profiter du chèque énergie quand tu y as droit.",
    temps: "30 min", cout: "Variable", pour: ["etudiant", "alternant", "salarie"], quand: "Dès que tu as les clés, et si possible un peu avant.",
    mots: ["électricité", "gaz", "internet", "box", "chèque énergie", "fournisseur", "compteur", "contrat", "abonnement"],
    todo: { si: ["locataire", "cherche-logement"], prio: 2, pourquoi: "Un contrat d'énergie se fait avant d'emménager." },
    enBref: [
      "Pour ouvrir l'électricité ou le gaz, tu as besoin de l'**adresse**, de la **date d'emménagement** et du **relevé du compteur**.",
      "Tu peux **comparer** les offres et changer de fournisseur gratuitement.",
      "Le **chèque énergie** est envoyé automatiquement selon tes revenus et ta composition de foyer, s'il y a droit."
    ],
    etapes: [
      { t: "Relever le compteur", d: "Le jour de l'emménagement, note l'index des compteurs (électricité, gaz, eau) et prends-les en photo." },
      { t: "Choisir un fournisseur", d: "Compare les offres : prix du kWh, abonnement, durée d'engagement. Les offres réglementées ou de marché existent." },
      { t: "Souscrire", d: "Par téléphone ou en ligne, avec adresse, date d'emménagement et RIB. La mise en service est souvent rapide." },
      { t: "Internet et mobile", d: "Compare box et forfaits : durée d'engagement, prix après promotion, frais de résiliation. Une box peut être un frein à un départ rapide." },
      { t: "Vérifier ton droit au chèque énergie", d: "Il est attribué selon le revenu fiscal de référence : fais ta déclaration chaque année pour ne pas le perdre." }
    ],
    pieges: [
      "S'engager sur une offre promotionnelle sans lire le prix après promotion.",
      "Laisser un contrat actif après ton départ.",
      "Se faire démarcher par téléphone pour un faux « changement de fournisseur obligatoire »."
    ],
    liens: [
      { label: "Chèque énergie : vérifier son éligibilité (chequeenergie.gouv.fr)", url: "https://chequeenergie.gouv.fr/" },
      { label: "Énergie-info : comparer les offres", url: "https://www.energie-info.fr" }
    ],
    sources: ["Service-Public, chèque énergie", "energie-info.fr (médiateur national de l'énergie)"],
    voir: ["changement-adresse", "preavis-logement", "abonnements"], verifie: "octobre 2026"
  },

  /* ——— Entreprise */
  {
    id: "cfe-micro", theme: "entreprise", titre: "La CFE : la taxe que beaucoup oublient",
    accroche: "Pas de CFE l'année de création, puis une cotisation minimale selon ton chiffre d'affaires.",
    temps: "15 min", cout: "Variable", pour: ["independant"], quand: "Chaque année, et avant le 31 décembre de l'année de création pour la déclaration initiale.",
    mots: ["cfe", "cotisation foncière", "micro-entrepreneur", "impôts locaux", "1447-c", "taxe", "espace professionnel"],
    todo: { si: ["independant"], prio: 2, pourquoi: "La CFE s'ajoute aux cotisations Urssaf et surprend beaucoup de créateurs." },
    enBref: [
      "**Aucune CFE** n'est due **l'année de création** de l'entreprise.",
      "Ensuite, une **cotisation minimale** est due, sauf si ton chiffre d'affaires est **inférieur ou égal à 5 000 €**.",
      "Ton avis de CFE n'arrive pas par courrier : il est **dans ton espace professionnel** sur impots.gouv.fr."
    ],
    etapes: [
      { t: "Déposer la déclaration initiale", d: "Une déclaration **1447-C** doit être déposée au service des impôts des entreprises avant le 31 décembre de l'année de création." },
      { t: "Créer ton espace professionnel", d: "Sur impots.gouv.fr, crée ton espace professionnel pour consulter ton avis de CFE et payer en ligne." },
      { t: "Vérifier si tu es exonéré·e", d: "Si ton chiffre d'affaires de la période de référence ne dépasse pas 5 000 €, tu es exonéré·e de la cotisation minimale. Sinon, elle est calculée selon un barème local." },
      { t: "Payer en ligne", d: "Le paiement est dématérialisé : en ligne, prélèvement mensuel ou à l'échéance." },
      { t: "Provisionner chaque année", d: "Mets de côté quelques dizaines à quelques centaines d'euros selon ton chiffre d'affaires et ta commune." }
    ],
    pieges: [
      "Ne pas consulter ton espace professionnel et rater l'avis de CFE.",
      "Oublier la déclaration de création avant le 31 décembre.",
      "Croire que l'exonération de la première année dure toujours."
    ],
    liens: [
      { label: "Micro-entrepreneur : CFE et espace professionnel (impots.gouv.fr)", url: "https://www.impots.gouv.fr/professionnel/questions/je-suis-micro-entrepreneur-dois-je-payer-une-cotisation-fonciere-des" },
      { label: "Tout savoir sur la CFE (économie.gouv.fr)", url: "https://www.economie.gouv.fr/entreprises/gerer-sa-fiscalite-et-ses-impots/autres-impots-et-taxes/tout-savoir-sur-la-cotisation-fonciere-des-entreprises-cfe" }
    ],
    sources: ["impots.gouv.fr, CFE du micro-entrepreneur (exonération l'année de création, seuil de 5 000 €, avis en ligne)", "économie.gouv.fr, CFE"],
    voir: ["creer-micro", "impots-micro", "pieges-entrepreneur"], verifie: "octobre 2026"
  },
  {
    id: "factures-micro", theme: "entreprise", titre: "Faire une facture en micro-entreprise",
    accroche: "Les mentions obligatoires et la phrase sur la TVA.",
    temps: "20 min", cout: "Gratuit", pour: ["independant"], quand: "Avant ta toute première facture.",
    mots: ["facture", "mentions obligatoires", "siret", "tva non applicable", "devis", "client", "numérotation"],
    todo: { si: ["independant", "p-entreprise"], prio: 2, pourquoi: "Une facture incomplète peut être refusée ou sanctionnée." },
    enBref: [
      "Chaque vente ou service doit donner lieu à une **facture** numérotée et datée.",
      "Mentionne ton identité, ton **SIRET**, les coordonnées du client, la description, le prix et les conditions de paiement.",
      "En **franchise de TVA**, ajoute « **TVA non applicable, art. 293 B du CGI** »."
    ],
    etapes: [
      { t: "Choisir un outil", d: "Un modèle gratuit (Word, tableur) suffit. Certains logiciels gratuits génèrent des factures conformes." },
      { t: "Remplir les mentions obligatoires", d: "- Date et numéro de facture\n- Ton nom, adresse, SIRET\n- Nom et adresse du client\n- Description et prix\n- Conditions et date de paiement\n- Pénalités de retard\n- Mention sur la TVA si franchise" },
      { t: "Numéroter sans trou", d: "Les numéros se suivent sans interruption (ex. 2026-001, 2026-002)." },
      { t: "Envoyer et conserver", d: "Garde chaque facture et chaque paiement, pour ton livre des recettes et ta déclaration." },
      { t: "Relancer les impayés", d: "Envoie une relance amiable, puis une mise en demeure par recommandé. Voir [Pièges de l'entrepreneur](#guide-pieges-entrepreneur)." }
    ],
    pieges: [
      "Oublier la mention sur la TVA en franchise.",
      "Ne pas tenir de livre des recettes.",
      "Mélanger recettes personnelles et professionnelles sur le même compte."
    ],
    liens: [
      { label: "Facture : mentions obligatoires (Service-Public Entreprendre)", url: "https://entreprendre.service-public.gouv.fr/vosdroits/F31808" }
    ],
    sources: ["Service-Public Entreprendre, facture (mentions obligatoires)"],
    voir: ["creer-micro", "tva-micro", "cotisations-micro"], verifie: "octobre 2026"
  },
  {
    id: "declarer-urssaf", theme: "entreprise", titre: "Déclarer son chiffre d'affaires à l'Urssaf",
    accroche: "Mensuel ou trimestriel, les dates limites et le piège du « zéro ».",
    temps: "10 min", cout: "Gratuit", pour: ["independant"], quand: "À la fin de chaque mois ou de chaque trimestre.",
    mots: ["urssaf", "déclaration", "chiffre d'affaires", "mensuel", "trimestriel", "cotisations", "autoentrepreneur", "zéro"],
    todo: { si: ["independant"], prio: 1, pourquoi: "Une déclaration oubliée entraîne des pénalités." },
    enBref: [
      "Tu déclares ton **chiffre d'affaires** à l'Urssaf **chaque mois ou chaque trimestre**, même si tu n'as rien encaissé (déclare alors **0 €**).",
      "Tu ne paies des cotisations que sur ce que tu **encaisses**.",
      "Tu peux choisir ta périodicité à la création, puis la modifier selon les règles."
    ],
    etapes: [
      { t: "Choisir la périodicité", d: "Mensuelle (une déclaration par mois) ou trimestrielle (quatre par an). Le choix se fait à la création et peut être revu selon les règles de l'Urssaf." },
      { t: "Noter les échéances", d: "Mensuel : avant la fin du mois suivant. Trimestriel : fin janvier, fin avril, fin juillet, fin octobre. Mets des rappels dans ton agenda." },
      { t: "Déclarer en ligne", d: "Sur autoentrepreneur.urssaf.fr : saisis le montant encaissé (ventes, prestations) par catégorie.", lien: { label: "autoentrepreneur.urssaf.fr", url: "https://www.autoentrepreneur.urssaf.fr" } },
      { t: "Payer", d: "Les cotisations se calculent automatiquement ; le paiement se fait en ligne ou par prélèvement. Voir [Combien je paie vraiment](#guide-cotisations-micro)." },
      { t: "Tenir ton livre des recettes", d: "Note chaque encaissement : date, client, montant. C'est obligatoire et très utile pour la déclaration d'impôts." }
    ],
    pieges: [
      "Ne pas déclarer quand on n'a pas de chiffre d'affaires : il faut déclarer « 0 ».",
      "Confondre facturé et encaissé.",
      "Oublier la déclaration d'impôts qui vient en plus de l'Urssaf."
    ],
    liens: [
      { label: "Urssaf : déclarer et payer", url: "https://www.autoentrepreneur.urssaf.fr" },
      { label: "Service-Public Entreprendre : micro-entrepreneur", url: "https://entreprendre.service-public.gouv.fr/vosdroits/F36233" }
    ],
    sources: ["Urssaf, déclaration du chiffre d'affaires du micro-entrepreneur"],
    voir: ["cotisations-micro", "impots-micro", "cfe-micro"], verifie: "octobre 2026"
  },
  {
    id: "association-creation", theme: "entreprise", titre: "Créer une association (loi 1901)",
    accroche: "Statuts, déclaration en préfecture, bureau : le minimum pour lancer un projet collectif.",
    temps: "2 h", cout: "Gratuit", pour: ["lyceen", "etudiant"], quand: "Avant de collecter de l'argent ou d'ouvrir un compte au nom du groupe.",
    mots: ["association", "loi 1901", "statuts", "préfecture", "bureau", "président", "trésorier", "bde", "journal officiel"],
    todo: { si: ["p-asso"], prio: 3, pourquoi: "Une association permet d'ouvrir un compte et d'avoir une existence légale." },
    enBref: [
      "Il faut **au moins deux personnes** pour créer une association.",
      "La déclaration en préfecture est **gratuite** ; la publication au Journal officiel est facultative mais utile pour avoir la capacité juridique complète.",
      "Les **statuts** décrivent l'objet, le fonctionnement et le bureau."
    ],
    etapes: [
      { t: "Définir l'objet et le nom", d: "Qu'est-ce que votre association fait ? Choisis un nom disponible et un objet précis, non lucratif." },
      { t: "Rédiger les statuts", d: "Objet, siège, durée, cotisations, bureau, assemblée générale. Des modèles existent sur Service-Public." },
      { t: "Tenir une assemblée constitutive", d: "Faites voter les statuts et élire un bureau (président·e, trésorier·e, secrétaire). Rédigez un procès-verbal." },
      { t: "Déclarer l'association", d: "En ligne via le service de déclaration des associations. Tu reçois un récépissé.", lien: { label: "Service-Public : créer une association", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1119" } },
      { t: "Ouvrir un compte et tenir ses comptes", d: "Avec le récépissé et les statuts, tu peux ouvrir un compte bancaire au nom de l'association. Tenez une comptabilité simple et gardez les justificatifs." }
    ],
    pieges: [
      "Utiliser son compte personnel pour les dépenses de l'association.",
      "Oublier de déclarer les changements de bureau.",
      "Ne pas organiser d'assemblée générale annuelle."
    ],
    liens: [
      { label: "Service-Public : créer une association", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1119" },
      { label: "Associations.gouv.fr", url: "https://www.associations.gouv.fr" }
    ],
    sources: ["Service-Public, création d'une association", "associations.gouv.fr"],
    voir: ["choisir-statut", "comptes-a-creer", "ouvrir-compte"], verifie: "octobre 2026"
  },
  {
    id: "cessation-micro", theme: "entreprise", titre: "Arrêter sa micro-entreprise proprement",
    accroche: "Radiation, dernière déclaration et obligations après la fermeture.",
    temps: "30 min", cout: "Gratuit", pour: ["independant"], quand: "Quand tu cesses ton activité.",
    mots: ["cessation", "radiation", "fermer", "micro-entreprise", "dernière déclaration", "guichet unique", "arrêter"],
    todo: { si: ["independant"], prio: 3, pourquoi: "Une activité non radiée continue d'entraîner des obligations." },
    enBref: [
      "Pour fermer, tu fais une **déclaration de cessation** sur le **guichet unique** des formalités.",
      "Tu dois déclarer ton **dernier chiffre d'affaires** à l'Urssaf et payer les cotisations dues.",
      "Garde tes documents comptables pendant la durée légale."
    ],
    etapes: [
      { t: "Déclarer la cessation", d: "Sur le guichet unique des formalités d'entreprises (formalites.entreprises.gouv.fr).", lien: { label: "Guichet unique des formalités", url: "https://formalites.entreprises.gouv.fr" } },
      { t: "Faire la dernière déclaration à l'Urssaf", d: "Déclare le dernier chiffre d'affaires jusqu'à la date de cessation, et paie les cotisations." },
      { t: "Déclarer tes revenus aux impôts", d: "Les revenus de l'année de cessation se déclarent dans ta déclaration annuelle. Voir [Déclarer ses revenus de micro-entreprise](#guide-impots-micro)." },
      { t: "Régler la CFE", d: "La CFE peut rester due pour l'année de cessation selon la date. Vérifie dans ton espace professionnel." },
      { t: "Conserver les documents", d: "Garde factures, livre des recettes et justificatifs pendant plusieurs années." }
    ],
    pieges: [
      "Laisser l'entreprise ouverte sans activité : les obligations déclaratives continuent.",
      "Oublier la dernière déclaration Urssaf.",
      "Jeter les documents comptables."
    ],
    liens: [
      { label: "Guichet unique des formalités d'entreprises", url: "https://formalites.entreprises.gouv.fr" },
      { label: "Service-Public Entreprendre : cesser son activité", url: "https://entreprendre.service-public.gouv.fr" }
    ],
    sources: ["Guichet unique des formalités d'entreprises", "Urssaf, cessation d'activité"],
    voir: ["declarer-urssaf", "cfe-micro", "impots-micro"], verifie: "octobre 2026"
  },

  /* ——— Impôts */
  {
    id: "plateformes-revenus", theme: "impots", titre: "Vinted, Leboncoin, Airbnb : faut-il déclarer ?",
    accroche: "Vente d'occasion, revenus de plateformes, ce qui est imposable ou non.",
    temps: "15 min", cout: "Gratuit", pour: ["lyceen", "etudiant", "salarie"], quand: "Au moment de ta déclaration de revenus.",
    mots: ["vinted", "leboncoin", "airbnb", "plateforme", "revente", "occasion", "revenus", "dac7", "imposable"],
    todo: { si: ["r-plateforme"], prio: 2, pourquoi: "Les plateformes transmettent les données de certains vendeurs à l'administration fiscale." },
    enBref: [
      "Vendre **tes objets personnels d'occasion** à un prix inférieur à leur prix d'achat n'est en général **pas imposable**.",
      "Si tu **achètes pour revendre** de façon régulière, c'est une activité professionnelle à déclarer.",
      "Les plateformes transmettent à l'administration fiscale les données des vendeurs qui dépassent des seuils (par exemple **30 ventes** ou **2 000 €** sur l'année)."
    ],
    etapes: [
      { t: "Te poser les bonnes questions", d: "Vends-tu des objets que tu possédais déjà ? Ou achètes-tu pour revendre ? Combien de ventes par an ?" },
      { t: "Consulter les récapitulatifs", d: "Les plateformes mettent à disposition un récapitulatif annuel. Garde-le et compare-le avec tes ventes." },
      { t: "Si tu loues ou revends régulièrement", d: "Les revenus sont à déclarer dans les catégories prévues (micro-entreprise, revenus de location meublée…). Voir [Créer sa micro-entreprise](#guide-creer-micro)." },
      { t: "Remplir ta déclaration", d: "Reporte les revenus imposables dans la bonne case, avec l'aide de l'aide en ligne de impots.gouv.fr." },
      { t: "En cas de doute", d: "Appelle le service des impôts des particuliers ou utilise la messagerie de ton espace. Garde la trace de ta demande." }
    ],
    pieges: [
      "Penser que « ça ne se voit pas » : les plateformes transmettent des données.",
      "Mélanger revente occasionnelle et activité régulière.",
      "Ne pas garder tes justificatifs d'achat et de vente."
    ],
    liens: [
      { label: "impots.gouv.fr : déclarer ses revenus de l'économie collaborative", url: "https://www.impots.gouv.fr/particulier/questions/comment-declarer-mes-revenus-issus-de-leconomie-collaborative" },
      { label: "Service-Public : revenus d'une activité accessoire et plateformes", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F31725" }
    ],
    sources: ["impots.gouv.fr, ventes sur plateformes en ligne", "Service-Public, obligations déclaratives des plateformes"],
    voir: ["premiere-declaration", "impots-micro", "creer-micro"], verifie: "octobre 2026"
  },
  {
    id: "paiement-impot", theme: "impots", titre: "Je ne peux pas payer mon impôt : délais et remise",
    accroche: "Demander un délai de paiement, étaler ou obtenir une remise gracieuse.",
    temps: "20 min", cout: "Gratuit", pour: ["etudiant", "salarie", "independant"], quand: "Dès réception de l'avis, avant la date limite.",
    mots: ["délai de paiement", "impôt", "remise gracieuse", "mensualisation", "difficulté", "sie", "trésor public", "échéancier"],
    todo: { si: ["p-dette"], prio: 1, pourquoi: "Un impôt non payé à temps est majoré de 10 %." },
    enBref: [
      "Si tu ne peux pas payer, **contacte ton centre des finances publiques avant la date limite**.",
      "Un **délai de paiement** ou un **échéancier** peut être accordé selon ta situation.",
      "En cas de difficulté grave, tu peux demander une **remise gracieuse**."
    ],
    etapes: [
      { t: "Lire l'avis", d: "Montant, date limite, voies de recours. Garde-le sous la main." },
      { t: "Contacter l'administration", d: "Sur ton espace particulier (messagerie sécurisée) ou par téléphone. Explique ta situation et propose un calendrier de paiement." },
      { t: "Joindre les justificatifs", d: "Ressources, charges, dettes, situation familiale. L'administration évalue ce que tu peux payer." },
      { t: "Mettre en place un plan", d: "Si un échéancier est accordé, respecte les dates : le non-respect peut tout remettre en cause." },
      { t: "Demander une remise si besoin", d: "Une remise gracieuse (de tout ou partie de l'impôt ou des majorations) est possible en cas de gêne grave. Voir [Corriger une erreur](#guide-corriger-declaration)." }
    ],
    pieges: [
      "Ne rien faire : la majoration de 10 % s'applique.",
      "Attendre un courrier de l'huissier avant de contacter l'administration.",
      "Croire que la demande de remise gracieuse suspend le paiement : ce n'est pas le cas, l'administration peut continuer à recouvrer l'impôt.",
      "Ne pas prévoir de mensualisation pour l'année suivante."
    ],
    liens: [
      { label: "Impossible de payer : délais et remise gracieuse (impots.gouv.fr)", url: "https://www.impots.gouv.fr/particulier/questions/je-suis-dans-limpossibilite-absolue-de-payer-mes-impots-meme-avec-un-delai-de" },
      { label: "Comment demander une remise gracieuse (impots.gouv.fr)", url: "https://www.impots.gouv.fr/particulier/questions/comment-faire-une-demande-de-remise-gracieuse" }
    ],
    sources: ["impots.gouv.fr, difficultés de paiement", "Service-Public, délais de paiement et remises gracieuses"],
    voir: ["avis-imposition", "prelevement-source", "decouvert-surendettement"], verifie: "octobre 2026"
  },

  /* ——— Papiers */
  {
    id: "etat-civil", theme: "papiers", titre: "Acte de naissance et état civil",
    accroche: "Obtenir gratuitement une copie ou un extrait, et savoir laquelle est demandée.",
    temps: "10 min", cout: "Gratuit", pour: ["lyceen", "etudiant", "etranger"], quand: "Avant un mariage, une inscription ou une demande de papiers.",
    mots: ["acte de naissance", "état civil", "extrait", "copie intégrale", "mairie", "livret de famille", "naissance"],
    todo: { si: ["a16", "a18"], prio: 3, pourquoi: "On te le demande pour presque toutes les démarches administratives." },
    enBref: [
      "L'**acte de naissance** est **gratuit** : demande-le à la mairie de ton lieu de naissance ou en ligne sur Service-Public.",
      "On distingue la **copie intégrale** et l'**extrait avec ou sans filiation** : vérifie lequel est demandé.",
      "Pour une naissance à l'étranger, l'acte se demande au **service central d'état civil** (Nantes)."
    ],
    etapes: [
      { t: "Savoir quel acte demander", d: "Un extrait sans filiation suffit souvent. Un extrait avec filiation ou une copie intégrale est demandé pour certaines démarches (passeport, mariage)." },
      { t: "Faire la demande en ligne", d: "Sur Service-Public, avec FranceConnect si la commune est raccordée, ou sur le site de ta mairie de naissance.", lien: { label: "Service-Public : acte de naissance", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1427" } },
      { t: "Ou par courrier", d: "Écris à la mairie en indiquant nom, prénoms, date et lieu de naissance, et joins une enveloppe timbrée." },
      { t: "Ou se déplacer", d: "Présente-toi à la mairie avec une pièce d'identité." },
      { t: "Né·e à l'étranger", d: "Adresse-toi au service central d'état civil du ministère des Affaires étrangères." }
    ],
    pieges: [
      "Payer un site non officiel pour un acte gratuit.",
      "Présenter un acte trop ancien : certaines administrations exigent moins de 3 mois.",
      "Confondre acte de naissance et livret de famille."
    ],
    liens: [
      { label: "Service-Public : acte de naissance", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1427" },
      { label: "France Diplomatie : services aux Français (état civil)", url: "https://www.diplomatie.gouv.fr/fr/services-aux-francais/etat-civil-et-nationalite-francaise/" }
    ],
    sources: ["Service-Public, copie ou extrait d'acte de naissance (gratuit)"],
    voir: ["carte-identite-passeport", "titre-sejour-etudiant", "perte-vol-papiers"], verifie: "octobre 2026"
  },
  {
    id: "carte-grise", theme: "papiers", titre: "Acheter ou vendre un véhicule : carte grise et cession",
    accroche: "Certificat de cession, changement de titulaire, assurance : les étapes à ne pas rater.",
    temps: "45 min", cout: "Selon région et véhicule", pour: ["etudiant", "salarie"], quand: "Au moment de l'achat ou de la vente.",
    mots: ["carte grise", "certificat d'immatriculation", "cession", "véhicule", "ants", "assurance auto", "voiture", "scooter"],
    todo: { si: ["p-voiture"], prio: 2, pourquoi: "Le changement de titulaire se fait dans un délai court." },
    enBref: [
      "Pour un véhicule d'occasion, tu dois faire **changer le titulaire** de la carte grise sur le site de l'**ANTS**, dans un délai court après l'achat.",
      "Le vendeur remet un **certificat de cession** et la carte grise barrée avec la date et sa signature.",
      "Tu dois être **assuré·e** avant de rouler."
    ],
    etapes: [
      { t: "Vérifier le véhicule", d: "Demande le certificat de situation administrative (non gage, non opposition), le contrôle technique récent et l'historique d'entretien." },
      { t: "Signer le certificat de cession", d: "À deux exemplaires, avec les mentions obligatoires. Le vendeur le déclare lui aussi en ligne." },
      { t: "Souscrire une assurance", d: "Avant la première utilisation. Les jeunes conducteurs paient plus cher : compare plusieurs offres." },
      { t: "Demander la nouvelle carte grise", d: "Sur le site de l'ANTS, avec les pièces demandées (pièce d'identité, justificatif de domicile, cession, assurance). Le prix dépend de la région et de la puissance.", lien: { label: "ANTS : immatriculation", url: "https://immatriculation.ants.gouv.fr" } },
      { t: "Garder le certificat provisoire", d: "Tu peux circuler avec le certificat provisoire d'immatriculation en attendant la carte grise." }
    ],
    pieges: [
      "Passer par un site non officiel qui majore le prix.",
      "Acheter un véhicule sans vérifier sa situation administrative.",
      "Rouler sans assurance."
    ],
    liens: [
      { label: "ANTS : immatriculation d'un véhicule", url: "https://immatriculation.ants.gouv.fr" },
      { label: "Service-Public : immatriculer un véhicule d'occasion", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1050" }
    ],
    sources: ["ANTS, immatriculation", "Service-Public, achat d'un véhicule d'occasion"],
    voir: ["permis", "amendes", "assurance-habitation"], verifie: "octobre 2026"
  },
  {
    id: "titre-sejour-etudiant", theme: "papiers", titre: "Étudier en France : visa, titre de séjour, sécurité sociale",
    accroche: "Valider ton VLS-TS, renouveler, travailler 964 h par an et t'affilier à la Sécu.",
    temps: "1 h", cout: "Variable", pour: ["etranger"], quand: "À ton arrivée en France, puis chaque année.",
    mots: ["titre de séjour", "vls-ts", "visa étudiant", "préfecture", "étranger", "campus france", "ofii", "validation", "renouvellement"],
    todo: { si: ["etranger"], prio: 1, pourquoi: "Un titre non validé ou non renouvelé met ton séjour en danger." },
    enBref: [
      "Avec un **VLS-TS « étudiant »**, tu dois **valider ton visa en ligne** et payer la taxe **dans les 3 mois** suivant ton arrivée.",
      "Tu peux **travailler 964 heures par an** sans autorisation de travail.",
      "Pense à l'**attestation CVEC** et à ton **affiliation à la Sécurité sociale étudiante**."
    ],
    etapes: [
      { t: "À l'arrivée : valider le visa", d: "Valide ton VLS-TS sur le site officiel du ministère de l'Intérieur, dans les 3 mois suivant ton arrivée, et paie la taxe. Garde l'attestation de validation.", lien: { label: "Administration étrangers en France", url: "https://administration-etrangers-en-france.interieur.gouv.fr" } },
      { t: "Obtenir l'attestation CVEC", d: "Elle est indispensable pour t'inscrire. Voir [La CVEC](#guide-cvec)." },
      { t: "T'affilier à la Sécurité sociale", d: "Crée ton compte ameli et demande ton affiliation en tant qu'étudiant·e. Voir [Sécurité sociale à 18 ans](#guide-secu-18-ans)." },
      { t: "Renouveler à temps", d: "Anticipe ton renouvellement avant l'échéance sur le site dédié, avec ton inscription, tes ressources et tes justificatifs de logement." },
      { t: "Travailler dans la limite autorisée", d: "Jusqu'à 964 heures par an. Voir [Job étudiant et étudiants étrangers](#guide-job-etudiant-droits)." }
    ],
    pieges: [
      "Oublier de valider ton visa dans le délai.",
      "Dépasser les 964 heures de travail annuelles.",
      "Attendre la dernière minute pour renouveler ton titre."
    ],
    liens: [
      { label: "Campus France : vivre en France", url: "https://www.campusfrance.org" },
      { label: "Service-Public : étudiant étranger, visa de long séjour ou titre de séjour", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2231" }
    ],
    sources: ["Campus France (VLS-TS, 964 heures)", "Service-Public F2231 (étudiant étranger : validation du VLS-TS dans les 3 mois)"],
    voir: ["job-etudiant-droits", "cvec", "secu-18-ans"], verifie: "octobre 2026"
  },
  {
    id: "perte-vol-papiers", theme: "papiers", titre: "Papiers perdus ou volés : le plan d'action",
    accroche: "Déclaration, opposition, refaire carte d'identité, carte Vitale, carte bancaire.",
    temps: "1 h", cout: "Variable", pour: ["lyceen", "etudiant", "salarie"], quand: "Dès la perte ou le vol.",
    mots: ["perte", "vol", "papiers", "carte d'identité", "carte vitale", "carte bancaire", "déclaration de perte", "opposition", "permis"],
    todo: { si: ["tous"], prio: 3, pourquoi: "Savoir quoi faire à l'avance fait gagner du temps le jour J." },
    enBref: [
      "En cas de **vol**, dépose **plainte**. En cas de **perte**, fais une **déclaration de perte** en ligne.",
      "Fais tout de suite **opposition** à ta carte bancaire.",
      "Prévois un budget pour **refaire** ta carte d'identité (timbre de 25 € en cas de perte ou vol)."
    ],
    etapes: [
      { t: "Bloquer ce qui peut l'être", d: "Carte bancaire (opposition immédiate), téléphone, comptes en ligne. Voir [Fraude à la carte](#guide-fraude-carte)." },
      { t: "Déclarer la perte ou le vol", d: "Perte : déclaration en ligne sur Service-Public. Vol : plainte au commissariat ou à la gendarmerie. Voir [Porter plainte](#guide-plainte-depot)." },
      { t: "Refaire la carte d'identité ou le passeport", d: "Nouvelle pré-demande en ligne, timbre fiscal pour perte ou vol. Voir [Carte d'identité et passeport](#guide-carte-identite-passeport)." },
      { t: "Remplacer la carte Vitale", d: "Commande-la depuis ton compte ameli. Voir [Sécurité sociale](#guide-secu-18-ans)." },
      { t: "Prévenir les organismes concernés", d: "Banque, assurance, école, employeur, selon les documents perdus. Garde un justificatif de chaque démarche." }
    ],
    pieges: [
      "Attendre avant de bloquer la carte bancaire.",
      "Oublier de garder le récépissé de plainte.",
      "Ne pas faire de copie numérique de tes papiers à l'avance."
    ],
    liens: [
      { label: "Service-Public : refaire sa carte d'identité volée ou perdue", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1759" },
      { label: "Achat en ligne du timbre fiscal pour refaire sa carte d'identité (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/R47754" }
    ],
    sources: ["Service-Public, perte ou vol de la carte d'identité (timbre fiscal de 25 €)"],
    voir: ["carte-identite-passeport", "fraude-carte", "plainte-depot"], verifie: "octobre 2026"
  },
  {
    id: "voyager", theme: "papiers", titre: "Voyager à l'étranger : papiers, santé, assurance",
    accroche: "Carte d'identité ou passeport, carte européenne, assurance : la check-list avant de partir.",
    temps: "20 min", cout: "Variable", pour: ["lyceen", "etudiant"], quand: "Au moins 2 à 3 mois avant le départ.",
    mots: ["voyage", "passeport", "carte d'identité", "visa", "assurance voyage", "ceam", "étranger", "conseils aux voyageurs"],
    todo: { si: ["p-etranger"], prio: 2, pourquoi: "Un passeport expiré ou un visa manquant bloquent le départ." },
    enBref: [
      "Vérifie la **validité** de ta carte d'identité ou de ton passeport **plusieurs mois avant** le départ.",
      "Consulte les **Conseils aux voyageurs** du ministère des Affaires étrangères pour ta destination.",
      "Prévois ta **CEAM** pour l'Europe et une **assurance voyage** hors Europe."
    ],
    etapes: [
      { t: "Vérifier tes papiers", d: "Selon la destination, une carte d'identité suffit ou un passeport est nécessaire, parfois avec une durée de validité minimale. Anticipe les délais de fabrication." },
      { t: "Consulter les conseils aux voyageurs", d: "Sur diplomatie.gouv.fr : visa, vaccins, sécurité, formalités à l'entrée.", lien: { label: "Conseils aux voyageurs", url: "https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/" } },
      { t: "Préparer ta santé", d: "CEAM en Europe, assurance voyage ailleurs, vaccins recommandés, médicaments avec ordonnance. Voir [Tomber malade à l'étranger](#guide-soins-etranger)." },
      { t: "Inscrire ton voyage", d: "Le dispositif Ariane du ministère permet de recevoir des alertes de sécurité pendant ton séjour." },
      { t: "Garder des copies", d: "Garde des copies numériques de tes papiers dans ton coffre-fort ou ton mail." }
    ],
    pieges: [
      "Découvrir au dernier moment que ton passeport expire trop tôt.",
      "Voyager sans assurance rapatriement hors Europe.",
      "Ignorer les formalités d'entrée spécifiques à la destination."
    ],
    liens: [
      { label: "Conseils aux voyageurs (diplomatie.gouv.fr)", url: "https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/" },
      { label: "Service-Public : voyager en Europe", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F13605" }
    ],
    sources: ["diplomatie.gouv.fr, Conseils aux voyageurs", "Service-Public, voyager avec sa carte d'identité"],
    voir: ["carte-identite-passeport", "soins-etranger", "perte-vol-papiers"], verifie: "octobre 2026"
  },

  /* ——— Travail */
  {
    id: "service-civique", theme: "travail", titre: "Service civique : une mission indemnisée de 6 à 12 mois",
    accroche: "Conditions, indemnité et ce que ça t'apporte pour la suite.",
    temps: "30 min", cout: "Gratuit", pour: ["lyceen", "etudiant", "chomeur"], quand: "À tout moment, si tu as entre 16 et 25 ans.",
    mots: ["service civique", "volontariat", "mission", "indemnité", "engagement", "16 25 ans", "association"],
    todo: { si: ["nini", "chomeur", "p-emploi"], prio: 3, pourquoi: "Le service civique peut aider à t'orienter et à construire un projet." },
    enBref: [
      "Il s'adresse aux jeunes de **16 à 25 ans** (jusqu'à 30 ans en situation de handicap), **sans condition de diplôme**.",
      "Tu touches **619,83 € nets par mois**, dont 504,98 € de l'État et 114,85 € de la structure d'accueil.",
      "La mission dure de **6 à 12 mois**."
    ],
    etapes: [
      { t: "Chercher une mission", d: "Sur le site du Service Civique, filtre par domaine (solidarité, environnement, sport, culture) et par ville.", lien: { label: "Service Civique", url: "https://www.service-civique.gouv.fr" } },
      { t: "Candidater", d: "Postule directement auprès des structures qui proposent des missions, avec un CV et quelques lignes de motivation." },
      { t: "Signer le contrat", d: "Un contrat d'engagement de service civique précise la durée, la mission et l'indemnité." },
      { t: "Connaître tes droits", d: "Couverture sociale, congés, formation civique et citoyenne, accompagnement à ton projet d'avenir." },
      { t: "Préparer la suite", d: "Le tutorat prévu pendant la mission t'aide à réfléchir à tes études ou à ton emploi. Pour t'orienter, essaie [Aiguillage](https://julomasu.github.io/aiguillage/)." }
    ],
    pieges: [
      "Confondre service civique et emploi : ce n'est pas un contrat de travail.",
      "Choisir une mission sans regarder la structure d'accueil et le tutorat.",
      "Oublier de déclarer l'indemnité si une aide en tient compte (selon l'aide)."
    ],
    liens: [
      { label: "Service Civique : droits et avantages", url: "https://www.service-civique.gouv.fr/etre-volontaire/etape03-realiser-mon-service-civique/avantages-volontaires-service-civique" },
      { label: "info.gouv.fr : conditions, missions, indemnités", url: "https://www.info.gouv.fr/actualite/service-civique-conditions-missions-indemnites" }
    ],
    sources: ["service-civique.gouv.fr (619,83 € nets par mois, 16 à 25 ans)", "info.gouv.fr (504,98 € État + 114,85 € structure)"],
    voir: ["cej", "inscription-france-travail", "alternance"], verifie: "octobre 2026"
  }
);
