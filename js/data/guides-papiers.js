/* Thème « Papiers & démarches ». Sources : Service-Public, ANTS, Défense+, cybermalveillance.gouv.fr. */
(P.GUIDES = P.GUIDES || []).push(
  {
    id: "carte-identite-passeport", theme: "papiers", titre: "Carte d'identité et passeport",
    accroche: "Les prix, les délais et le bon site pour faire la demande.",
    temps: "30 min + rendez-vous", cout: "Gratuit (carte) · 86 € (passeport majeur)", mots: ["carte d'identité", "cni", "passeport", "ants", "timbre fiscal", "photo", "france identité", "mairie"],
    enBref: [
      "La **carte d'identité** d'un majeur est valable **10 ans** et **gratuite**, sauf en cas de perte ou de vol : timbre fiscal de **25 €**.",
      "Le **passeport** coûte **86 €** pour un majeur, **42 €** pour un mineur de 15 à 17 ans, **17 €** pour un enfant de moins de 15 ans (timbre fiscal).",
      "Fais ta **pré-demande en ligne** puis prends rendez-vous dans une mairie équipée : anticipe, les délais varient."
    ],
    etapes: [
      { t: "Faire la pré-demande en ligne", d: "Sur le site de l'ANTS, tu crées un compte et remplis ta demande de carte d'identité ou de passeport. Tu reçois un numéro de pré-demande à présenter en mairie.", lien: { label: "ANTS : passeport et carte d'identité", url: "https://passeport.ants.gouv.fr" } },
      { t: "Acheter le timbre fiscal si nécessaire", d: "Le timbre s'achète en ligne sur timbres.impots.gouv.fr : 86 € pour un passeport majeur, 25 € pour une carte d'identité perdue ou volée. Sinon, la carte d'identité est gratuite.", lien: { label: "Acheter un timbre fiscal", url: "https://timbres.impots.gouv.fr" } },
      { t: "Réunir tes pièces", d: "- Une **photo d'identité conforme** (cabine agréée ou photographe, avec code e-photo)\n- Un justificatif de domicile\n- Ton ancien titre, ou ton acte de naissance pour une première demande\n- Le timbre fiscal si besoin" },
      { t: "Prendre rendez-vous en mairie équipée", d: "Les empreintes sont prises dans une mairie dotée d'une station biométrique, pas dans toutes. Prends rendez-vous tôt, surtout avant l'été." },
      { t: "Retirer ton titre", d: "Tu es prévenu·e par SMS ou courriel. Le retrait se fait en personne. Pense à vérifier la validité de ton passeport **plusieurs mois** avant un voyage ou un examen." },
      { t: "Activer France Identité", d: "L'application France Identité permet de prouver son identité en ligne et de se connecter à des services publics avec une carte d'identité récente.", lien: { label: "France Identité", url: "https://france-identite.gouv.fr" } }
    ],
    pieges: [
      "Passer par un **site non officiel** qui te fait payer la démarche : seuls les sites en .gouv.fr (ANTS, Service-Public) sont officiels.",
      "Attendre la veille d'un voyage ou d'un examen.",
      "Une photo non conforme est refusée : utilise une cabine agréée avec code e-photo."
    ],
    liens: [
      { label: "ANTS : passeport", url: "https://passeport.ants.gouv.fr" },
      { label: "Combien coûte un passeport ? (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34752" },
      { label: "Carte d'identité : renouvellement en cas de vol (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1759" }
    ],
    sources: ["Service-Public F34752 et R39812 (prix du passeport)", "Service-Public F1759 et R47754 (carte d'identité, timbre de 25 €, validité 10 ans)", "ANTS, passeport"],
    voir: ["recensement-jdc-vote", "arnaques", "comptes-a-creer"], verifie: "octobre 2026"
  },
  {
    id: "recensement-jdc-vote", theme: "papiers", titre: "Recensement, JDC et inscription pour voter",
    accroche: "Ce qu'il faut faire à 16 ans pour être inscrit·e d'office à 18.",
    temps: "20 min", cout: "Gratuit", mots: ["recensement", "jdc", "défense", "voter", "listes électorales", "procuration", "18 ans", "mairie"],
    enBref: [
      "Le **recensement citoyen** se fait à la mairie (ou en ligne) **dès 16 ans**.",
      "Si tu es recensé·e à 16 ans, tu es **inscrit·e d'office sur les listes électorales** à 18 ans.",
      "La **JDC** (journée défense et citoyenneté) est obligatoire avant 18 ans : son certificat est exigé pour le permis et les examens publics."
    ],
    etapes: [
      { t: "Te faire recenser à 16 ans", d: "Rends-toi à la mairie de ton domicile avec une pièce d'identité et le livret de famille, ou fais-le en ligne sur Service-Public. Tu reçois une attestation de recensement.", lien: { label: "Recensement citoyen (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F870" } },
      { t: "Participer à la JDC", d: "Tu reçois ta convocation par courrier (et tu peux la consulter sur ton compte Défense +). Après la journée, tu obtiens un certificat de participation.", lien: { label: "Journée défense et citoyenneté", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F871" } },
      { t: "Vérifier ton inscription électorale", d: "À 18 ans, vérifie sur Service-Public avec « Interroger sa situation électorale » que tu es bien inscrit·e et dans quel bureau de vote.", lien: { label: "Inscription d'office à 18 ans (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1961" } },
      { t: "T'inscrire si besoin", d: "Si tu n'as pas fait ton recensement à 16 ans, tu peux t'inscrire en ligne, par courrier ou en mairie, avec un justificatif de domicile et une pièce d'identité." },
      { t: "Mettre à jour après un déménagement", d: "Si tu déménages, inscris-toi dans ta nouvelle commune (ou reste inscrit·e dans celle de tes parents) bien avant un scrutin." },
      { t: "Voter par procuration si tu es loin", d: "Étudiant·e dans une autre ville le jour du vote ? Une procuration permet à quelqu'un de voter à ta place, démarche en ligne sur maprocuration.gouv.fr.", lien: { label: "Maprocuration", url: "https://www.maprocuration.gouv.fr" } }
    ],
    pieges: [
      "Oublier le recensement à 16 ans : pas d'inscription d'office.",
      "Perdre ton certificat de JDC : il est demandé pour le permis de conduire et les examens publics jusqu'à 24 ans.",
      "Être inscrit·e dans une commune où tu n'habites plus."
    ],
    liens: [
      { label: "Recensement citoyen", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F870" },
      { label: "Journée défense et citoyenneté", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F871" },
      { label: "Inscription d'office sur les listes électorales", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1961" }
    ],
    sources: ["Service-Public F870 (recensement)", "Service-Public F871 (JDC, justificatifs de 18 à 24 ans)", "Service-Public F1961 (inscription d'office)"],
    voir: ["permis", "carte-identite-passeport", "changement-adresse"], verifie: "octobre 2026"
  },
  {
    id: "permis", theme: "papiers", titre: "Le permis de conduire : démarches et dossier",
    accroche: "Inscription, justificatifs, financement : ce qu'on te demande vraiment.",
    temps: "1 h", cout: "Variable", mots: ["permis", "conduite", "auto-école", "code", "ants", "cpf", "conduite accompagnée", "candidat libre"],
    enBref: [
      "Le dossier de permis se dépose en ligne sur **l'ANTS** ; l'auto-école (ou toi, en candidat libre) le prépare.",
      "Entre 18 et 24 ans, on te demande ton **certificat de JDC** pour t'inscrire à l'examen.",
      "Le permis B peut se financer en partie avec ton **compte personnel de formation** (CPF)."
    ],
    etapes: [
      { t: "Choisir ta voie", d: "Auto-école classique, conduite accompagnée (dès 15 ans, examen possible à 17 ans) ou candidat libre. Compare les prix, les taux de réussite et la manière de te former." },
      { t: "Rassembler tes pièces", d: "Pièce d'identité, justificatif de domicile, photo d'identité conforme (e-photo), attestation de recensement ou certificat de JDC selon ton âge, attestation scolaire de sécurité routière (ASSR) si tu es né·e après 1987." },
      { t: "Déposer le dossier sur l'ANTS", d: "Tu crées un compte et déposes ton inscription. Tu obtiens un numéro NEPH qui te suit toute ta vie de conducteur·rice.", lien: { label: "ANTS : permis de conduire", url: "https://permisdeconduire.ants.gouv.fr" } },
      { t: "Passer le code, puis la conduite", d: "Le code se passe dans un centre agréé. Garde tes dates d'examen et tes résultats." },
      { t: "Financer ton permis", d: "Regarde ton CPF, les aides de ta région ou ta mission locale. Vérifie l'éligibilité de chaque aide avant de payer ton auto-école." },
      { t: "Garder tes points", d: "Ton permis est probatoire les premières années : respecte les limitations de vitesse et l'alcoolémie, qui sont plus strictes." }
    ],
    pieges: [
      "Payer un forfait sans lire les conditions de remboursement et de report.",
      "Passer par un site non officiel pour « accélérer » ton inscription.",
      "Oublier ton certificat de JDC : il bloque l'inscription."
    ],
    liens: [
      { label: "ANTS : permis de conduire", url: "https://permisdeconduire.ants.gouv.fr" },
      { label: "Service-Public : permis de conduire", url: "https://www.service-public.gouv.fr/particuliers" }
    ],
    sources: ["Service-Public F871 (JDC exigée pour le permis de 18 à 24 ans)", "ANTS, permis de conduire"],
    voir: ["recensement-jdc-vote", "carte-identite-passeport", "arnaques"], verifie: "octobre 2026"
  },
  {
    id: "changement-adresse", theme: "papiers", titre: "Changer d'adresse : qui prévenir",
    accroche: "La liste complète pour ne pas rater un courrier ou une aide.",
    temps: "30 min", cout: "Gratuit", mots: ["adresse", "déménagement", "changement", "carte grise", "impôts", "caf", "banque", "assurance"],
    enBref: [
      "Le téléservice officiel de **changement d'adresse** prévient plusieurs organismes à la fois.",
      "N'oublie pas ceux qu'il ne couvre pas : banque, employeur, assurance, école, mutuelle.",
      "La **carte grise** doit être mise à jour dans le mois qui suit ton déménagement."
    ],
    etapes: [
      { t: "Utiliser le service officiel de changement d'adresse", d: "Sur Service-Public, un téléservice permet de signaler ton déménagement à plusieurs organismes publics et à certains fournisseurs en une seule fois.", lien: { label: "Service-Public.gouv.fr", url: "https://www.service-public.gouv.fr/particuliers" } },
      { t: "Prévenir la Caf et l'Assurance Maladie", d: "Mets à jour ton adresse dans ton espace caf.fr et ameli. Un changement d'adresse peut modifier ton aide au logement : voir [APL](#guide-apl-etudiant)." },
      { t: "Mettre à jour tes impôts", d: "Dans ton espace impots.gouv.fr, indique ta nouvelle adresse pour recevoir tes avis." },
      { t: "Prévenir banque, assurances, mutuelle, employeur, école", d: "Ces organismes ne sont pas toujours couverts par le téléservice : envoie un message à chacun avec ta nouvelle adresse." },
      { t: "Mettre à jour ta carte grise", d: "Si tu as un véhicule, mets à jour l'adresse sur le site de l'ANTS dans le mois." },
      { t: "Voir tes listes électorales", d: "Inscris-toi dans ta nouvelle commune si tu veux y voter : voir [recensement et vote](#guide-recensement-jdc-vote)." },
      { t: "Faire suivre ton courrier", d: "La Poste propose un service de réexpédition temporaire pour ne pas rater les courriers de la période de transition." }
    ],
    pieges: [
      "Oublier la Caf : les prestations peuvent être suspendues si tes courriers reviennent.",
      "Ne pas mettre à jour ton adresse sur ton compte bancaire : tu rates les courriers importants."
    ],
    liens: [{ label: "Service-Public : déménagement", url: "https://www.service-public.gouv.fr/particuliers" }],
    sources: ["Service-Public, changement d'adresse (principes généraux)", "ANTS, carte grise"],
    voir: ["bail-etat-lieux", "apl-etudiant", "comptes-a-creer"], verifie: "octobre 2026"
  },
  {
    id: "arnaques", theme: "papiers", titre: "Reconnaître et signaler une arnaque",
    accroche: "Faux SMS des impôts, de la Caf ou d'ameli, fausses annonces de logement : les réflexes qui protègent.",
    temps: "10 min", cout: "Gratuit", mots: ["arnaque", "phishing", "faux sms", "faux mail", "escroquerie", "cybermalveillance", "33700", "signal spam"],
    enBref: [
      "Une administration ne te demande **jamais** ton mot de passe, ton code reçu par SMS ou ton numéro de carte par message.",
      "Les sites officiels finissent en **.gouv.fr** (ou .fr pour ameli, caf.fr, urssaf.fr) : tape l'adresse toi-même.",
      "Signale : **33700** pour les SMS et appels, **signal-spam.fr** pour les mails, **cybermalveillance.gouv.fr** si tu es victime."
    ],
    etapes: [
      { t: "Repérer les signaux d'alerte", d: "- Urgence ou menace (« votre compte sera bloqué »)\n- Remboursement inattendu, colis, amende, « mise à jour de dossier »\n- Lien raccourci ou adresse bizarre\n- Demande de paiement par carte cadeau, virement immédiat ou frais pour un document public" },
      { t: "Ne pas cliquer, aller sur le site officiel", d: "Tape toi-même l'adresse de l'organisme ou utilise l'appli officielle. Si le message est vrai, tu retrouves l'information dans ton espace." },
      { t: "Ne jamais donner un code", d: "Ni code de validation reçu par SMS, ni mot de passe, ni code de ta carte bancaire, même à quelqu'un qui se présente comme conseiller de ta banque." },
      { t: "Si tu as cliqué ou payé", d: "Contacte ta banque pour faire opposition, change tes mots de passe, dépose plainte si tu as perdu de l'argent, et utilise le service d'aide aux victimes.", lien: { label: "Cybermalveillance.gouv.fr", url: "https://www.cybermalveillance.gouv.fr" } },
      { t: "Signaler", d: "Transfère les SMS suspects au 33700, signale les mails sur signal-spam.fr, et les contenus illicites sur internet-signalement.gouv.fr.", lien: { label: "33700 : signaler un spam SMS ou vocal", url: "https://www.33700.fr" } },
      { t: "Connaître les arnaques qui visent les jeunes", d: "Fausses annonces de location avec acompte avant visite, faux jobs qui te demandent de recevoir de l'argent, faux sites de démarches (passeport, permis), faux messages de la Caf, d'ameli ou des impôts." }
    ],
    pieges: [
      "Payer des « frais de dossier » sur un site qui ne finit pas en .gouv.fr pour un passeport ou un permis.",
      "Donner ton code SMS en croyant annuler une opération.",
      "Garder le silence par honte : les escroqueries touchent tout le monde, signaler aide à protéger les autres."
    ],
    liens: [
      { label: "Cybermalveillance.gouv.fr", url: "https://www.cybermalveillance.gouv.fr" },
      { label: "33700", url: "https://www.33700.fr" },
      { label: "Signal Spam", url: "https://www.signal-spam.fr" },
      { label: "Internet-signalement.gouv.fr (Pharos)", url: "https://www.internet-signalement.gouv.fr" }
    ],
    sources: ["Cybermalveillance.gouv.fr (bonnes pratiques)", "33700.fr", "Service-Public, escroqueries en ligne"],
    voir: ["comptes-a-creer", "carte-identite-passeport", "trouver-logement"], verifie: "octobre 2026"
  },
  {
    id: "comptes-a-creer", theme: "papiers", titre: "Les comptes à ouvrir à 18 ans",
    accroche: "impots.gouv, ameli, Caf, FranceConnect : la liste utile, dans l'ordre.",
    temps: "1 h", cout: "Gratuit", mots: ["compte", "franceconnect", "france identité", "impots.gouv", "ameli", "caf", "france travail", "messervices.etudiant", "mot de passe"],
    enBref: [
      "**FranceConnect** te permet de te connecter à plusieurs services publics avec un seul identifiant.",
      "Les comptes qui servent le plus : **impots.gouv.fr**, **ameli**, **caf.fr**, **messervices.etudiant.gouv.fr**.",
      "Protège-les avec un **mot de passe unique** et la **double authentification**."
    ],
    etapes: [
      { t: "Activer France Identité ou FranceConnect", d: "C'est le sésame pour t'identifier sur de nombreux services. Avec une carte d'identité récente, l'application France Identité simplifie les connexions.", lien: { label: "FranceConnect", url: "https://franceconnect.gouv.fr" } },
      { t: "Ouvrir ton espace impots.gouv.fr", d: "Pour déclarer, récupérer ton avis d'imposition et gérer ton prélèvement à la source. Voir [Ma première déclaration](#guide-premiere-declaration)." },
      { t: "Ouvrir ton compte ameli", d: "Pour tes remboursements, ton attestation de droits et ton médecin traitant : voir [Sécurité sociale](#guide-secu-18-ans)." },
      { t: "Ouvrir ton espace caf.fr", d: "Même si tu ne touches rien aujourd'hui, ton espace servira pour l'APL ou la prime d'activité." },
      { t: "Si tu es étudiant·e : messervices.etudiant.gouv.fr", d: "Le portail unique pour la bourse, le logement Crous et d'autres aides." },
      { t: "Si tu cherches du travail : France Travail", d: "L'inscription ouvre des droits et donne accès au CEJ et à des services d'accompagnement. Voir [le contrat d'engagement jeune](#guide-cej)." },
      { t: "Sécuriser tout ça", d: "Utilise un gestionnaire de mots de passe, un mot de passe différent par site, et active la double authentification quand elle est proposée." }
    ],
    pieges: [
      "Utiliser le même mot de passe partout.",
      "Entrer tes identifiants sur un site dont l'adresse ne ressemble pas à l'adresse officielle : voir [arnaques](#guide-arnaques).",
      "Perdre l'accès à ton adresse mail principale : tous tes comptes en dépendent."
    ],
    liens: [
      { label: "FranceConnect", url: "https://franceconnect.gouv.fr" },
      { label: "impots.gouv.fr", url: "https://www.impots.gouv.fr" },
      { label: "ameli.fr", url: "https://www.ameli.fr" },
      { label: "caf.fr", url: "https://www.caf.fr" },
      { label: "Mes services étudiants", url: "https://www.messervices.etudiant.gouv.fr" }
    ],
    sources: ["Service-Public (FranceConnect)", "impots.gouv.fr, ameli.fr, caf.fr, messervices.etudiant.gouv.fr"],
    voir: ["premiere-declaration", "secu-18-ans", "arnaques"], verifie: "octobre 2026"
  }
);
