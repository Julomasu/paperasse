/* Thème « Famille & vie perso ». Sources : Service-Public, ameli, caf.fr, MDPH en ligne. */
(P.GUIDES = P.GUIDES || []).push(
  {
    id: "pacs", theme: "famille", titre: "Se pacser : conditions, démarches, effets",
    accroche: "En mairie ou chez un notaire : les documents, l'enregistrement et ce que ça change pour tes impôts et tes aides.",
    temps: "1 h", cout: "Gratuit en mairie", pour: ["etudiant", "salarie", "alternant", "chomeur"], quand: "Avant de signer, pour préparer les documents.",
    mots: ["pacs", "pacte civil de solidarité", "couple", "vie à deux", "mairie", "notaire", "concubinage", "dissolution"],
    todo: { si: ["p-couple"], prio: 2, pourquoi: "Un PACS change ta déclaration d'impôts, tes aides et tes droits." },
    enBref: [
      "Le **PACS** se conclut **en mairie** (celle du lieu de résidence commune) **ou chez un notaire**.",
      "Les **documents** à fournir (acte de naissance, pièce d'identité, convention…) dépendent de ta situation : un simulateur officiel les liste.",
      "Après l'enregistrement, la **mention** apparaît sur ton acte de naissance."
    ],
    etapes: [
      { t: "Choisir où se pacser", d: "En **mairie** (service d'état civil) ou **chez un notaire**, si tu veux un contrat sur mesure ou si tu as besoin d'un acte authentique.", lien: { label: "Se pacser (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1618" } },
      { t: "Réunir les documents", d: "Acte de naissance, pièce d'identité, déclaration conjointe, convention de PACS. Le simulateur indique la liste exacte selon ta situation.", lien: { label: "Quels documents faut-il pour un Pacs ? (simulateur)", url: "https://www.service-public.gouv.fr/simulateur/calcul/ListeDocumentsPourUnPacs" } },
      { t: "Faire enregistrer le PACS", d: "Le PACS est enregistré en mairie ou par le notaire, qui transmet l'information à l'état civil." },
      { t: "Garder la preuve", d: "La mention sur l'acte de naissance et le visa sur la convention prouvent ton PACS." },
      { t: "Prévenir les organismes", d: "Caf, impôts, banque, assurance, employeur, mutuelle. Le PACS change les règles de déclaration : tu es imposé·e ensemble à partir de l'année du PACS. Voir [Compte Caf](#guide-caf-compte) et [Ma première déclaration](#guide-premiere-declaration)." }
    ],
    pieges: [
      "Oublier de prévenir la Caf : le PACS compte comme un couple pour le calcul de tes aides.",
      "Ne pas anticiper l'impact sur le rattachement fiscal et les bourses.",
      "Rédiger une convention sans comprendre ses effets : renseigne-toi auprès d'un notaire ou d'un point d'accès au droit."
    ],
    liens: [
      { label: "Se pacser (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1618" },
      { label: "Simulateur : documents pour un Pacs", url: "https://www.service-public.gouv.fr/simulateur/calcul/ListeDocumentsPourUnPacs" }
    ],
    sources: ["Service-Public F1618 (Se pacser : mairie ou notaire, mention sur l'acte de naissance)"],
    voir: ["mariage", "caf-compte", "premiere-declaration", "aide-juridique"], verifie: "octobre 2026"
  },
  {
    id: "mariage", theme: "famille", titre: "Se marier : dossier en mairie, publication des bans",
    accroche: "Le dossier, les délais, les pièces à fournir et ce qui change après.",
    temps: "2 h", cout: "Gratuit", pour: ["etudiant", "salarie", "alternant", "chomeur"], quand: "Plusieurs mois avant la date souhaitée.",
    mots: ["mariage", "se marier", "mairie", "publication des bans", "livret de famille", "contrat de mariage", "nom d'usage"],
    todo: { si: ["p-couple"], prio: 2, pourquoi: "Le dossier se prépare plusieurs semaines à l'avance." },
    enBref: [
      "Le mariage civil se célèbre **en mairie** ; un dossier est déposé auprès de la mairie du mariage.",
      "La **publication des bans** est une étape obligatoire avant la cérémonie.",
      "Un simulateur officiel indique **les documents à fournir** selon ta situation (nationalité, lieu de naissance…)."
    ],
    etapes: [
      { t: "Choisir la mairie", d: "La mairie du domicile ou de la résidence de l'un des deux futurs époux, ou celle d'un parent selon les cas.", lien: { label: "Mariage en France (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F930" } },
      { t: "Constituer le dossier", d: "Pièces d'identité, actes de naissance récents, justificatifs de domicile, éventuellement contrat de mariage. Le simulateur donne la liste exacte.", lien: { label: "Documents à fournir pour se marier (simulateur)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/N142" } },
      { t: "Publication des bans", d: "La mairie publie les bans : elle te précise les délais à respecter avant la célébration." },
      { t: "La cérémonie et le livret de famille", d: "Après la célébration, tu reçois le livret de famille." },
      { t: "Prévenir les organismes", d: "Impôts, Caf, banque, employeur, mutuelle, assurance, bailleur. Pense aussi à mettre à jour tes papiers si tu changes de nom d'usage. Voir [Changer de nom ou de prénom](#guide-changement-nom)." }
    ],
    pieges: [
      "Attendre le dernier moment : certaines pièces (actes de naissance) ont une durée de validité courte.",
      "Oublier de mettre à jour tes papiers et organismes après le mariage.",
      "Ne pas anticiper l'impact sur tes aides (APL, prime d'activité, bourse)."
    ],
    liens: [
      { label: "Mariage en France (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F930" },
      { label: "Mariage : documents à fournir", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/N142" }
    ],
    sources: ["Service-Public F930 et N142 (mariage en France, publication des bans)"],
    voir: ["pacs", "etat-civil", "changement-nom", "caf-compte"], verifie: "octobre 2026"
  },
  {
    id: "naissance", theme: "famille", titre: "Devenir parent : déclaration de naissance, congés, Caf",
    accroche: "Les démarches dans les premiers jours, le congé de naissance et les aides.",
    temps: "1 h", cout: "Gratuit", pour: ["etudiant", "salarie", "alternant", "chomeur", "independant"], quand: "Dès la grossesse, puis dans les jours qui suivent la naissance.",
    mots: ["naissance", "bébé", "enfant", "parent", "déclaration de naissance", "congé de naissance", "congé paternité", "caf", "prestations familiales"],
    todo: { si: ["p-enfant"], prio: 1, pourquoi: "La déclaration de naissance et le choix du congé ont des délais." },
    enBref: [
      "La **naissance se déclare à la mairie** du lieu d'accouchement, **dans un délai de quelques jours** après la naissance (le délai exact et des exemples sont sur Service-Public).",
      "Pour les enfants nés **à partir du 1ᵉʳ juillet 2026**, un **congé supplémentaire de naissance** doit être pris **dans les 9 mois** suivant la naissance.",
      "Préviens ta **Caf**, ta **mutuelle** et ton **employeur** : certaines aides et congés ont des délais."
    ],
    etapes: [
      { t: "Déclarer la naissance", d: "À la mairie du lieu de naissance, dans le délai légal. La maternité peut t'aider pour la démarche.", lien: { label: "Déclaration de naissance (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F961" } },
      { t: "Prévenir ton employeur", d: "Préviens-le dès que possible et renseigne-toi sur les congés auxquels tu as droit, dont le congé supplémentaire de naissance pour les naissances depuis le 1ᵉʳ juillet 2026.", lien: { label: "Je deviens parent (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F16225" } },
      { t: "Prévenir la Caf et l'Assurance Maladie", d: "Déclare la naissance dans ton espace Caf et ameli pour ouvrir tes droits aux prestations et rattacher l'enfant. Voir [Compte Caf](#guide-caf-compte)." },
      { t: "Ajouter l'enfant à ta mutuelle", d: "Préviens ta mutuelle : certaines couvrent le nouveau-né dès la naissance si tu les prévenis à temps." },
      { t: "Modifier tes impôts", d: "Déclare la naissance dans ton espace impots.gouv pour mettre à jour ton quotient familial et ton taux de prélèvement. Voir [Prélèvement à la source](#guide-prelevement-source)." }
    ],
    pieges: [
      "Dépasser le délai pour déclarer la naissance.",
      "Oublier le délai de 9 mois pour le congé supplémentaire de naissance.",
      "Ne pas prévenir la Caf : les prestations commencent plus tard."
    ],
    liens: [
      { label: "Déclaration de naissance (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F961" },
      { label: "Je deviens parent (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F16225" }
    ],
    sources: ["Service-Public F961 (déclaration de naissance)", "Service-Public F16225 (congé supplémentaire de naissance pour les enfants nés à compter du 1ᵉʳ juillet 2026, à prendre dans les 9 mois)"],
    voir: ["caf-compte", "prelevement-source", "mutuelle-c2s", "droits-au-travail"], verifie: "octobre 2026"
  },
  {
    id: "deces-proche", theme: "famille", titre: "Décès d'un proche : les premières démarches",
    accroche: "Qui prévenir, quels papiers demander et à quoi sert l'entreprise de pompes funèbres.",
    temps: "1 h", cout: "Variable", pour: ["lyceen", "etudiant", "salarie", "chomeur"], quand: "Dès le décès, puis dans les semaines suivantes.",
    mots: ["décès", "deuil", "obsèques", "acte de décès", "mort d'un proche", "pompes funèbres", "succession"],
    todo: { si: ["tous"], prio: 3, pourquoi: "À lire avant d'en avoir besoin : on ne sait pas par où commencer dans ces moments-là." },
    enBref: [
      "Après un décès, le **médecin constate le décès** ; la **déclaration de décès** est faite en mairie, en général par l'entreprise de pompes funèbres.",
      "**L'entreprise de pompes funèbres** prend en charge la plupart des formalités jusqu'aux obsèques.",
      "Tu peux demander des **copies de l'acte de décès**, souvent nécessaires pour les banques, assurances et organismes."
    ],
    etapes: [
      { t: "Faire constater le décès", d: "Appelle le médecin traitant ou le **15**. Le certificat de décès est indispensable pour la suite." },
      { t: "Contacter une entreprise de pompes funèbres", d: "Elle s'occupe en général de la déclaration de décès en mairie et des formalités liées aux obsèques. Demande un devis écrit.", lien: { label: "Un proche est décédé (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F16507" } },
      { t: "Demander des copies de l'acte de décès", d: "Elles servent pour la banque, l'assurance, la Sécu, la Caf, l'employeur. Le délai de délivrance est d'environ 30 jours.", lien: { label: "Acte de décès : copie (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1444" } },
      { t: "Prévenir les organismes", d: "Banque, assurances, Caf, Sécu, mutuelle, employeur, bailleur, opérateurs. Fais une liste et note qui tu as prévenu." },
      { t: "Prendre soin de toi", d: "Un décès est une épreuve : parle à des proches, à ton médecin ou à une ligne d'écoute. En cas de détresse, le **3114** est joignable 24 h/24. Voir [Aide psychologique](#guide-psy-sante-mentale)." }
    ],
    pieges: [
      "Signer un devis de pompes funèbres sans le comparer.",
      "Oublier de demander assez de copies de l'acte de décès.",
      "Ne pas demander d'aide : des services d'écoute et d'accompagnement existent."
    ],
    liens: [
      { label: "Un proche est décédé (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F16507" },
      { label: "Acte de décès : copie intégrale (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1444" }
    ],
    sources: ["Service-Public F16507 (décès d'un proche)", "Service-Public F1444 (copie d'acte de décès, délai d'environ 30 jours)"],
    voir: ["psy-sante-mentale", "etat-civil", "aide-juridique"], verifie: "octobre 2026"
  },
  {
    id: "handicap-mdph", theme: "famille", titre: "Handicap : MDPH, RQTH, AAH, aides",
    accroche: "Faire reconnaître un handicap ou une maladie invalidante : à qui s'adresser et comment.",
    temps: "1 h", cout: "Gratuit", pour: ["lyceen", "etudiant", "salarie", "chomeur", "alternant"], quand: "Dès que tu as besoin d'aménagements, d'aides ou d'une reconnaissance.",
    mots: ["handicap", "mdph", "rqth", "aah", "reconnaissance", "maladie chronique", "aménagement", "travailleur handicapé", "allocation"],
    todo: { si: ["handicap"], prio: 1, pourquoi: "La reconnaissance du handicap ouvre des aides, des aménagements et des droits." },
    enBref: [
      "La **MDPH** (maison départementale des personnes handicapées) de ton département reçoit **toutes les demandes** : RQTH, AAH, prestations, aménagements.",
      "Tu peux faire la demande **en ligne** ou **par courrier** avec un formulaire et des justificatifs.",
      "La **RQTH** (reconnaissance de la qualité de travailleur handicapé) est examinée par la commission de la MDPH, qui répond dans un **délai de 4 mois**."
    ],
    etapes: [
      { t: "Parler à un professionnel", d: "Médecin, assistante sociale, service de santé universitaire ou référent handicap de ton établissement : ils t'aident à constituer le dossier." },
      { t: "Faire la demande à la MDPH", d: "En ligne si ta MDPH le propose, ou par courrier avec le formulaire de demande. Joins les justificatifs demandés.", lien: { label: "MDPH en ligne", url: "https://mdphenligne.cnsa.fr/" } },
      { t: "Comprendre la RQTH", d: "Elle facilite l'accès à l'emploi et aux aménagements de poste. Toute demande d'AAH déclenche automatiquement une procédure de RQTH.", lien: { label: "RQTH (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1650" } },
      { t: "Demander l'AAH si besoin", d: "L'allocation aux adultes handicapés est une aide financière soumise à conditions.", lien: { label: "AAH (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F12242" } },
      { t: "Demander des aménagements", d: "À l'école, à l'université (aménagement d'examens) ou au travail : parle-en à ton référent handicap ou à la médecine du travail." }
    ],
    pieges: [
      "Attendre : les délais d'instruction peuvent atteindre plusieurs mois.",
      "Envoyer un dossier incomplet.",
      "Ne pas demander d'aménagements pourtant possibles."
    ],
    liens: [
      { label: "MDPH en ligne", url: "https://mdphenligne.cnsa.fr/" },
      { label: "RQTH (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1650" },
      { label: "AAH (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F12242" }
    ],
    sources: ["Service-Public F1650 (RQTH, réponse dans un délai de 4 mois)", "Service-Public F12242 (AAH)", "mdphenligne.cnsa.fr"],
    voir: ["droits-au-travail", "secu-18-ans", "defenseur-droits"], verifie: "octobre 2026"
  },
  {
    id: "changement-nom", theme: "famille", titre: "Changer de nom ou de prénom",
    accroche: "Les procédures simplifiées en mairie et ce qu'elles coûtent.",
    temps: "1 h", cout: "Variable", pour: ["etudiant", "salarie", "etranger"], quand: "Quand tu veux faire modifier officiellement ton état civil.",
    mots: ["changement de nom", "changement de prénom", "nom de famille", "prénom", "état civil", "mairie", "transidentité"],
    todo: { si: ["tous"], prio: 3, pourquoi: "Utile si ton nom ou ton prénom ne te correspond pas." },
    enBref: [
      "Un **changement de prénom** se demande à la **mairie** du lieu de résidence.",
      "Pour le **nom de famille**, une **procédure simplifiée** (une seule fois dans la vie) permet par exemple de porter le nom du parent qui ne t'a pas transmis le sien : **gratuite**, en mairie.",
      "Un changement pour un autre motif passe par une procédure payante."
    ],
    etapes: [
      { t: "Choisir la procédure", d: "Prénom : demande en mairie. Nom de famille : procédure simplifiée ou procédure générale selon ton motif.", lien: { label: "Changement de prénom (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F885" } },
      { t: "Constituer le dossier", d: "Acte de naissance, pièce d'identité, justificatif de domicile et éventuels justificatifs du motif." },
      { t: "Déposer la demande à la mairie", d: "À la mairie de ta résidence. L'officier d'état civil examine la demande.", lien: { label: "Changement de nom de famille (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F36379" } },
      { t: "Faire mettre à jour tes papiers", d: "Carte d'identité, passeport, permis, Carte Vitale, banque, employeur, impôts, Caf. Voir [Changer d'adresse : qui prévenir](#guide-changement-adresse) pour la logique de mise à jour." }
    ],
    pieges: [
      "Oublier de mettre à jour tous les organismes après le changement.",
      "Utiliser la procédure simplifiée de nom alors qu'elle n'est utilisable qu'une seule fois.",
      "Passer par un site non officiel payant."
    ],
    liens: [
      { label: "Changement de prénom (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F885" },
      { label: "Changement de nom de famille : procédure simplifiée (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F36379" }
    ],
    sources: ["Service-Public F885 (changement de prénom)", "Service-Public F36379 (procédure simplifiée de changement de nom, utilisable une seule fois)"],
    voir: ["etat-civil", "mariage", "carte-identite-passeport"], verifie: "octobre 2026"
  }
);
