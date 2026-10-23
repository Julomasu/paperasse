/* Ajouts v2.1 : situations de vie, papiers, organismes, aides, lettres, calendrier, vrai/faux, glossaire et numéros
   pour les nouveaux guides (à l'étranger, famille, logement, travail, droits). Chaque lien vient d'une page officielle déjà citée dans les guides. */
(function () {
  const ajoute = (cle, l) => { P[cle] = (P[cle] || []).concat(l); };

  /* ——— Situations de vie */
  const dep = P.EVENEMENTS.find(v => v.id === "partir-etranger");
  if (dep) Object.assign(dep, {
    nom: "Je pars à l'étranger", accroche: "Études, stage, travail, vacances-travail : papiers, Sécu, impôts, banque.",
    intro: "Les démarches dépendent du pays, de la durée et du motif. Commence par la check-list, puis choisis ta destination.",
    mots: ["voyage", "erasmus", "étranger", "départ", "expatriation", "expatrié", "brexit", "pvt", "visa"],
    guides: ["partir-etranger-checklist", "carte-identite-passeport", "secu-expatrie", "impots-expatrie", "expatriation-inscription", "ouvrir-compte", "perte-vol-papiers", "mon-espace-sante", "vaccins-jeunes", "voyager"],
    documents: ["passeport", "cni", "ceam", "acte-naissance", "permis-conduire", "attestation-assurance"], numeros: ["112"]
  });
  const joint = (id, ...g) => { const v = P.EVENEMENTS.find(x => x.id === id); if (v) g.forEach(x => { if (!v.guides.includes(x)) v.guides.push(x); }); };
  joint("partir-etranger", "volontariat-international", "au-pair", "etats-unis");
  joint("premier-logement", "logement-social", "aides-action-logement", "demenagement");
  joint("rentree-sup", "aides-action-logement", "aide-urgence-etudiant", "vaccins-jeunes");
  joint("job-etudiant", "interim", "location-saisonniere", "retraite-jeunes");
  joint("premier-emploi", "transports-employeur", "conges-payes", "retraite-jeunes");
  joint("vehicule", "assurance-auto-jeune");
  joint("galere-argent", "rsa-jeune", "aide-urgence-etudiant");
  joint("18-ans", "controle-identite", "conservation-papiers", "mon-espace-sante", "demarchage-telephonique");
  ajoute("EVENEMENTS", [
    { id: "travailler-europe", nom: "Je vais travailler en Europe", accroche: "Sans visa dans l'UE, mais Sécu, impôts et chômage se préparent.",
      intro: "Dans l'UE, tu peux travailler sans permis. L'important : savoir qui te couvre pour la santé et comment déclarer tes impôts.",
      mots: ["travailler en europe", "union européenne", "allemagne", "espagne", "belgique", "irlande", "italie", "emploi à l'étranger"],
      guides: ["travailler-europe", "secu-expatrie", "impots-expatrie", "chomage-etranger", "expatriation-inscription", "permis-etranger", "retour-france"],
      documents: ["cni", "passeport", "ceam", "acte-naissance"], lettres: [], numeros: ["112"] },
    { id: "royaume-uni-brexit", nom: "Je vais au Royaume-Uni (Brexit)", accroche: "ETA, passeport, visa de travail ou d'études.",
      intro: "Depuis le Brexit, le Royaume-Uni n'est plus un pays comme les autres : passeport valide et ETA, ou visa selon ton projet.",
      mots: ["brexit", "uk", "angleterre", "londres", "eta", "visa", "royaume-uni"],
      guides: ["royaume-uni", "partir-etranger-checklist", "secu-expatrie", "impots-expatrie", "etudier-etranger"],
      documents: ["passeport", "ceam"], lettres: [], numeros: ["112"] },
    { id: "pvt-annee", nom: "Je pars un an en vacances-travail (PVT)", accroche: "Visa, assurance, banque, impôts, retour.",
      intro: "Un PVT se prépare plusieurs mois avant : quotas, visa, assurance et papiers, puis retour en France.",
      mots: ["pvt", "vacances-travail", "australie", "canada", "nouvelle-zélande", "japon", "working holiday"],
      guides: ["pvt", "partir-etranger-checklist", "secu-expatrie", "impots-expatrie", "ouvrir-compte", "permis-etranger", "retour-france"],
      documents: ["passeport", "acte-naissance", "permis-conduire", "attestation-assurance"], lettres: [], numeros: ["112"] },
    { id: "etudier-etranger", nom: "Je pars étudier ou faire un stage à l'étranger", accroche: "Erasmus+, aides à la mobilité, convention, couverture santé.",
      intro: "Vois d'abord les aides et le calendrier de ton établissement, puis l'assurance, la CEAM et la banque.",
      mots: ["erasmus", "échange", "étudier à l'étranger", "stage à l'étranger", "ami", "mobilité"],
      guides: ["etudier-etranger", "stage-etranger", "secu-expatrie", "aide-urgence-etudiant", "partir-etranger-checklist", "retour-france"],
      documents: ["passeport", "ceam", "convention-stage", "certificat-scolarite"], lettres: [], numeros: ["112"] },
    { id: "frontalier", nom: "Je travaille de l'autre côté de la frontière", accroche: "Suisse, Luxembourg, Belgique, Allemagne : santé, impôts, chômage.",
      intro: "Le choix d'assurance maladie en Suisse est limité à 3 mois et irrévocable : informe-toi avant de signer.",
      mots: ["frontalier", "suisse", "luxembourg", "belgique", "allemagne", "s1", "genève"],
      guides: ["frontalier", "secu-expatrie", "impots-expatrie", "chomage-etranger"],
      documents: ["carte-vitale", "contrat-travail"], lettres: [], numeros: [] },
    { id: "retour-france", nom: "Je rentre en France après l'étranger", accroche: "Sécu, chômage, impôts, compte, logement.",
      intro: "Dès ton retour : couverture santé, inscription à France Travail si besoin, changement d'adresse et situation fiscale.",
      mots: ["retour", "rentrer", "expatrié", "retour en france", "puma"],
      guides: ["retour-france", "secu-18-ans", "inscription-france-travail", "changement-adresse", "ouvrir-compte", "impots-expatrie"],
      documents: ["carte-vitale", "justificatif-domicile", "rib"], lettres: [], numeros: [] },
    { id: "venir-en-france", nom: "Je viens vivre en France", accroche: "Titre de séjour, Brexit, travail, Sécu.",
      intro: "Étudiant·e ou Britannique installé·e : vérifie ton titre de séjour et les délais de renouvellement.",
      mots: ["titre de séjour", "étranger", "brexit", "britannique", "changement de statut", "aps"],
      guides: ["travailler-france-etranger", "britannique-en-france", "titre-sejour-etudiant", "cvec", "secu-18-ans", "ouvrir-compte"],
      documents: ["titre-sejour", "attestation-cvec", "certificat-scolarite"], lettres: [], numeros: ["112"] },
    { id: "couple", nom: "Je me pacse ou je me marie", accroche: "Dossier, déclaration d'impôts, aides, changement de nom.",
      intro: "PACS ou mariage : les formalités sont différentes mais ont un effet sur les impôts, la Caf et le logement.",
      mots: ["pacs", "mariage", "se marier", "couple", "union"],
      guides: ["pacs", "mariage", "changement-nom", "premiere-declaration", "caf-compte", "changement-adresse"],
      documents: ["acte-naissance", "cni", "justificatif-domicile"], lettres: [], numeros: [] },
    { id: "naissance", nom: "J'attends ou j'accueille un enfant", accroche: "Déclaration de naissance, congés, Caf, mutuelle.",
      intro: "Des délais courts s'appliquent dès la naissance : déclaration, congé et démarches auprès de la Caf et de la Sécu.",
      mots: ["naissance", "bébé", "enceinte", "congé", "paternité", "maternité"],
      guides: ["naissance", "caf-compte", "mutuelle-c2s", "droits-au-travail", "arret-maladie", "mon-espace-sante"],
      documents: ["livret-famille", "acte-naissance", "carte-vitale", "attestation-caf"], lettres: [], numeros: ["15"] },
    { id: "deces", nom: "Un proche est décédé", accroche: "Les premières démarches, dans l'ordre.",
      intro: "Il n'y a pas de bonne façon de faire. Voici les démarches à engager, sans te presser sur celles qui peuvent attendre.",
      mots: ["décès", "deuil", "décédé", "obsèques", "succession"],
      guides: ["deces-proche", "droits-au-travail", "aide-juridique"],
      documents: ["livret-famille", "acte-naissance", "cni"], lettres: [], numeros: [] },
    { id: "handicap", nom: "Je suis en situation de handicap", accroche: "MDPH, RQTH, AAH, aménagements.",
      intro: "La reconnaissance du handicap ouvre des droits. Le dossier se dépose auprès de la MDPH de ton département.",
      mots: ["handicap", "mdph", "rqth", "aah", "maladie chronique", "invalidité"],
      guides: ["handicap-mdph", "caf-compte", "mutuelle-c2s", "droits-au-travail", "aide-juridique"],
      documents: ["cni", "justificatif-domicile", "carte-vitale"], lettres: [], numeros: [] },
    { id: "demenager", nom: "Je déménage", accroche: "Préavis, assurance, énergie, adresse : tout ce qu'il faut changer.",
      intro: "Beaucoup de choses se règlent avant le jour J. Une déclaration unique en ligne couvre plusieurs organismes.",
      mots: ["déménager", "déménagement", "nouvelle adresse", "emménager"],
      guides: ["demenagement", "preavis-logement", "bail-etat-lieux", "assurance-habitation", "energie-internet", "changement-adresse"],
      documents: ["bail", "etat-des-lieux", "attestation-assurance", "justificatif-domicile"], lettres: ["preavis-logement", "restitution-depot"], numeros: [] },
    { id: "probleme-logement", nom: "J'ai un problème avec mon logement", accroche: "Hausse de loyer, panne, humidité, bruit, dépôt de garantie.",
      intro: "Commence par un écrit au propriétaire, puis monte d'un cran : ADIL, conciliateur, juge.",
      mots: ["loyer", "humidité", "chauffage", "bruit", "voisin", "propriétaire", "indécent"],
      guides: ["loyer-hausse", "reparations-charges", "logement-indecent", "troubles-voisinage", "aide-juridique", "bail-etat-lieux"],
      documents: ["bail", "etat-des-lieux", "quittance-loyer"], lettres: ["contestation-hausse-loyer", "mise-en-demeure-proprietaire"], numeros: ["115"] },
    { id: "telephone-vole", nom: "On m'a volé ou j'ai perdu mon téléphone", accroche: "Verrouiller, suspendre la ligne, IMEI, plainte.",
      intro: "Les premières heures comptent : verrouille ton appareil, change tes mots de passe, puis préviens l'opérateur.",
      mots: ["téléphone volé", "perdu", "imei", "smartphone", "vol"],
      guides: ["vol-telephone", "plainte-depot", "fraude-carte", "perte-vol-papiers", "demarchage-telephonique"],
      documents: ["recepisse-plainte"], lettres: ["contestation-operation"], numeros: ["17", "0 805 805 817"] },
    { id: "quitter-emploi-negocie", nom: "Je quitte mon poste d'un commun accord", accroche: "Rupture conventionnelle, chômage, congés, papiers de fin de contrat.",
      intro: "Une rupture conventionnelle suit une procédure précise, avec un délai de rétractation de 15 jours calendaires.",
      mots: ["rupture conventionnelle", "départ négocié", "quitter son poste"],
      guides: ["rupture-conventionnelle", "conges-payes", "demission-fin-contrat", "inscription-france-travail", "chomage-are", "cpf-formation"],
      documents: ["attestation-employeur", "certificat-travail", "fiche-paie"], lettres: ["demande-documents-fin-contrat"], numeros: [] },
    { id: "accident-travail", nom: "J'ai eu un accident au travail", accroche: "Certificat médical, déclaration, prise en charge, arrêt.",
      intro: "Fais constater les lésions par un médecin, préviens ton employeur, puis suis ton dossier sur ameli.",
      mots: ["accident du travail", "blessure", "accident de trajet"],
      guides: ["accident-travail", "arret-maladie", "droits-au-travail", "medecin-traitant"],
      documents: ["carte-vitale", "contrat-travail", "fiche-paie"], lettres: [], numeros: ["15", "112"] }
  ]);

  /* ——— Papiers */
  ajoute("DOCUMENTS", [
    { id: "u2", cat: "Travail", nom: "Document U2 (chômage à l'étranger)", quoi: "Atteste la durée pendant laquelle tu gardes ton allocation chômage en cherchant un emploi dans un autre État européen.", pour: "Départ à l'étranger pendant que tu es indemnisé·e.",
      ou: [{ label: "France Travail : chercher un emploi en Europe", url: "https://www.francetravail.fr/candidat/mes-droits-aux-aides-et-allocati/lallocation-chomage-a-letranger/je-pars-chercher-un-emploi-en-eu.html" }], delai: "À demander avant le départ", cout: "Gratuit", guide: "chomage-etranger", mots: ["u2", "chômage", "europe", "allocation"] },
    { id: "a1-s1", cat: "Santé", nom: "Formulaires A1 et S1", quoi: "L'A1 prouve que tu restes affilié·e à la Sécu française quand ton employeur te détache. Le S1 sert aux travailleurs frontaliers.", pour: "Détachement ou travail frontalier.",
      ou: [{ label: "ameli : travailleur frontalier", url: "https://www.ameli.fr/assure/droits-demarches/europe-international/travailleur-frontalier-droits-prise-en-charge" }, { label: "ameli : détachement à l'étranger", url: "https://www.ameli.fr/assure/droits-demarches/europe-international/protection-sociale-etranger/travailleur-detachement-etranger" }], delai: "Selon ta situation", cout: "Gratuit", guide: "secu-expatrie", mots: ["a1", "s1", "frontalier", "détachement", "sécu"] },
    { id: "eta-esta", cat: "Voyage", nom: "ETA (Royaume-Uni) ou ESTA (États-Unis)", quoi: "Autorisation électronique de voyage à demander avant d'embarquer. L'ETA britannique coûte 20 £ et vaut 2 ans.", pour: "Voyage touristique ou d'affaires.",
      ou: [{ label: "Check if you need a UK visa (gov.uk)", url: "https://www.gov.uk/check-uk-visa" }, { label: "ESTA (site officiel)", url: "https://esta.cbp.dhs.gov/?lang=fr" }], delai: "À faire avant de réserver ou de partir", cout: "20 £ (ETA)", guide: "royaume-uni", mots: ["eta", "esta", "brexit", "royaume-uni", "états-unis"] },
    { id: "releve-carriere", cat: "Travail", nom: "Relevé de carrière (retraite)", quoi: "Liste tes périodes travaillées et tes trimestres, tous régimes confondus.", pour: "Vérifier que ton premier job est bien enregistré.",
      ou: [{ label: "info-retraite.fr", url: "https://www.info-retraite.fr/" }], delai: "Consultation en ligne", cout: "Gratuit", guide: "retraite-jeunes", mots: ["retraite", "trimestres", "relevé de carrière"] },
    { id: "carnet-vaccination", cat: "Santé", nom: "Carnet de vaccination", quoi: "Retrace tes vaccins et tes rappels. Garde-le aussi en photo ou dans Mon espace santé.", pour: "Études, voyage, travail dans la santé, rattrapage vaccinal.",
      ou: [{ label: "Mon espace santé", url: "https://www.monespacesante.fr/" }], delai: "Immédiat", cout: "Gratuit", guide: "vaccins-jeunes", mots: ["vaccins", "carnet de santé", "rappel", "hpv"] },
    { id: "rqth-mdph", cat: "Santé", nom: "Notification MDPH (RQTH, AAH…)", quoi: "Décision de la MDPH qui reconnaît ton handicap et ouvre des droits.", pour: "Aménagements, aides, emploi.",
      ou: [{ label: "MDPH en ligne", url: "https://mdphenligne.cnsa.fr/" }], delai: "Réponse sous 4 mois en principe pour la RQTH", cout: "Gratuit", guide: "handicap-mdph", mots: ["rqth", "mdph", "handicap", "aah"] },
    { id: "acte-mariage-pacs", cat: "Famille", nom: "Convention de PACS ou acte de mariage", quoi: "Prouve ta situation de couple pour l'administration fiscale, la Caf et la mutuelle.", pour: "Impôts, aides, déclaration commune.",
      ou: [{ label: "PACS (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1618" }, { label: "Mariage (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F930" }], delai: "Selon la mairie ou le notaire", cout: "Variable", guide: "pacs", mots: ["pacs", "mariage", "couple", "acte"] }
  ]);

  /* ——— Organismes */
  ajoute("CONTACTS", [
    { id: "diplomatie", nom: "France Diplomatie et consulats", pour: "Conseils aux voyageurs, fiches pays, registre des Français établis hors de France.", quand: "Avant un départ, ou si tu as un problème à l'étranger.", mots: ["consulat", "ambassade", "étranger", "voyage", "expatriation", "registre"],
      canaux: [{ label: "Conseils aux voyageurs", url: "https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/" }, { label: "Services aux Français à l'étranger", url: "https://www.diplomatie.gouv.fr/fr/services-aux-francaises-et-aux-francais" }, { label: "S'inscrire au registre (Service-Public)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F33307" }] },
    { id: "ameli-international", nom: "Assurance Maladie : Europe et international", pour: "CEAM, expatriation, détachement, frontalier, retour en France.", quand: "Tu pars, tu travailles à l'étranger ou tu rentres.", mots: ["ceam", "expatrié", "frontalier", "s1", "a1", "retour"],
      canaux: [{ label: "Frontalier : droits et prise en charge", url: "https://www.ameli.fr/assure/droits-demarches/europe-international/travailleur-frontalier-droits-prise-en-charge" }, { label: "Travailleur expatrié", url: "https://www.ameli.fr/assure/droits-demarches/europe-international/protection-sociale-etranger/travailleur-expatriation-etranger" }] },
    { id: "mdph", nom: "MDPH (Maison départementale des personnes handicapées)", pour: "Dossier de reconnaissance du handicap, RQTH, AAH.", quand: "Tu souhaites faire reconnaître un handicap ou une maladie invalidante.", mots: ["mdph", "handicap", "rqth", "aah"],
      canaux: [{ label: "MDPH en ligne", url: "https://mdphenligne.cnsa.fr/" }] },
    { id: "assurance-retraite", nom: "Assurance retraite", pour: "Relevé de carrière, trimestres, régularisation.", quand: "Tu veux vérifier que tes premiers jobs comptent pour la retraite.", mots: ["retraite", "trimestres", "carrière"],
      canaux: [{ label: "info-retraite.fr", url: "https://www.info-retraite.fr/" }, { label: "L'Assurance retraite", url: "https://www.lassuranceretraite.fr/portail-info/home/actif/ma-carriere/cotisation-carriere.html" }] },
    { id: "mon-espace-sante", nom: "Mon espace santé", pour: "Dossier médical, messagerie sécurisée, vaccins.", quand: "Tu veux centraliser tes documents de santé.", mots: ["dmp", "dossier médical", "messagerie santé"],
      canaux: [{ label: "monespacesante.fr", url: "https://www.monespacesante.fr/" }] }
  ]);

  /* ——— Numéros */
  ajoute("NUMEROS", [
    { cat: "Arnaques", n: "33 700", nom: "Signalement des spams vocaux et SMS indésirables", quand: "Tu reçois des appels ou SMS frauduleux ou non sollicités." }
  ]);

  /* ——— Aides */
  const pc = (P.AIDES || []).find(a => a.nom === "Pass Culture");
  if (pc) Object.assign(pc, {
    montant: "À 18 ans, un crédit de **150 €** pendant 3 ans (règles modifiées en 2026 : vérifie sur le site officiel).",
    pour: "Jeunes de 18 ans.", tags: ["etudiant", "alternant", "salarie", "chomeur"], lien: { label: "pass.culture.fr", url: "https://pass.culture.fr/le-pass-culture-cest-quoi" }
  });
  ajoute("AIDES", [
    { type: "Logement", nom: "Aide Mobili-Jeune", montant: "Une aide mensuelle (de **10 à 100 €** selon les cas, pendant un an) pour le loyer des alternants.", pour: "Moins de 30 ans, alternants d'une entreprise du secteur privé non agricole.", tags: ["alternant"], mots: ["mobili-jeune", "action logement", "alternant", "loyer"], guide: "aides-action-logement", lien: { label: "Action Logement", url: "https://www.actionlogement.fr/l-aide-mobili-jeune" } },
    { type: "Logement", nom: "Avance Loca-Pass", montant: "Prêt à **0 %** pour payer le dépôt de garantie, jusqu'à **1 200 €**.", pour: "Salarié·es du secteur privé non agricole, ou moins de 30 ans en emploi, en alternance ou en recherche d'emploi ; conditions pour certains étudiants.", tags: ["alternant", "salarie", "chomeur", "etudiant"], mots: ["loca-pass", "dépôt de garantie", "action logement"], guide: "aides-action-logement", lien: { label: "Action Logement", url: "https://www.actionlogement.fr/l-avance-loca-pass" } },
    { type: "Études", nom: "Aide d'urgence du Crous", montant: "Aide ponctuelle décidée par commission après étude de ta situation.", pour: "Étudiant·es en difficulté financière.", tags: ["etudiant", "etranger"], mots: ["aide d'urgence", "crous", "précarité", "aide spécifique"], guide: "aide-urgence-etudiant", lien: { label: "Étudiant.gouv.fr", url: "https://www.etudiant.gouv.fr/fr/solliciter-une-aide-d-urgence-361" } },
    { type: "Argent", nom: "RSA jeune actif", montant: "Montant calculé par la Caf selon ta situation et tes ressources.", pour: "18-25 ans ayant une certaine durée d'activité professionnelle.", tags: ["chomeur", "nini", "salarie"], mots: ["rsa", "caf", "jeune actif"], guide: "rsa-jeune", lien: { label: "Service-Public", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F286" } },
    { type: "Études", nom: "Erasmus+ et aide à la mobilité internationale (AMI)", montant: "Bourse Erasmus+ ; AMI pour un séjour de 1 à 10 mois, 10 mois maximum au total.", pour: "Étudiant·es qui partent étudier ou faire un stage à l'étranger.", tags: ["etudiant"], mots: ["erasmus", "ami", "mobilité", "étranger"], guide: "etudier-etranger", lien: { label: "Étudiant.gouv.fr", url: "https://www.etudiant.gouv.fr/fr/bourses-erasmus-et-aide-la-mobilite-internationale-ami-67" } }
  ]);

  /* ——— Lettres */
  ajoute("LETTRES", [
    {
      id: "contestation-hausse-loyer", titre: "Contester une hausse de loyer", quand: "Ton propriétaire t'annonce une augmentation que tu penses non autorisée.", guide: "loyer-hausse",
      champs: [
        { id: "proprio", label: "Nom du propriétaire ou de l'agence", ex: "Agence Dupont Immobilier" },
        { id: "adresseproprio", label: "Adresse du propriétaire ou de l'agence", ex: "5 place de la Mairie, 69001 Lyon" },
        { id: "logement", label: "Adresse du logement", ex: "12 rue des Lilas, 69003 Lyon" },
        { id: "dateavis", label: "Date du courrier d'augmentation", ex: "3 septembre 2026" },
        { id: "ancien", label: "Loyer actuel hors charges", ex: "650 €" },
        { id: "nouveau", label: "Loyer annoncé", ex: "700 €" }
      ],
      destinataire: v => [v.proprio, v.adresseproprio],
      objet: v => `Contestation de l'augmentation de loyer, logement ${v.logement}`,
      corps: v => `Madame, Monsieur,\n\nPar courrier du ${v.dateavis}, vous m'annoncez que le loyer du logement situé ${v.logement} passerait de ${v.ancien} à ${v.nouveau}.\n\nJe conteste cette augmentation, qui ne me paraît pas conforme aux règles applicables à la révision du loyer. Je vous demande de bien vouloir m'indiquer la clause de mon bail et l'indice de référence des loyers sur lesquels vous vous fondez, ainsi que le calcul détaillé.\n\nDans l'attente, je continue de régler le loyer actuellement dû.\n\nJe vous prie d'agréer, Madame, Monsieur, mes salutations distinguées.`,
      conseils: ["Envoie ce courrier en **recommandé avec accusé de réception**.", "Vérifie la **clause de révision** de ton bail et l'**IRL** (indice de référence des loyers).", "Continue de payer le loyer actuel et garde tes justificatifs.", "En cas de doute, l'**ADIL** de ton département donne un conseil gratuit."]
    },
    {
      id: "mise-en-demeure-proprietaire", titre: "Mettre en demeure son propriétaire (logement indécent ou travaux)", quand: "Un problème grave persiste dans ton logement après une première demande.", guide: "logement-indecent",
      champs: [
        { id: "proprio", label: "Nom du propriétaire ou de l'agence", ex: "Mme Durand" },
        { id: "adresseproprio", label: "Adresse du propriétaire ou de l'agence", ex: "8 rue Victor Hugo, 69002 Lyon" },
        { id: "logement", label: "Adresse du logement", ex: "12 rue des Lilas, 69003 Lyon" },
        { id: "probleme", label: "Problème constaté", ex: "le chauffage n'atteint pas 18 °C dans la chambre et le séjour" },
        { id: "datepremiere", label: "Date de ta première demande", ex: "10 octobre 2026" },
        { id: "delai", label: "Délai que tu laisses", ex: "15 jours" }
      ],
      destinataire: v => [v.proprio, v.adresseproprio],
      objet: v => `Mise en demeure, logement ${v.logement}`,
      corps: v => `Madame, Monsieur,\n\nJe vous ai signalé le ${v.datepremiere} le problème suivant dans le logement situé ${v.logement} : ${v.probleme}.\n\nCette situation persiste. Je vous mets donc en demeure de faire cesser ce désordre dans un délai de ${v.delai} à compter de la réception de ce courrier.\n\nÀ défaut, je me réserve la possibilité de saisir les organismes compétents et le juge des contentieux de la protection.\n\nJe vous prie d'agréer, Madame, Monsieur, mes salutations distinguées.`,
      conseils: ["Envoie ce courrier en **recommandé avec accusé de réception**.", "Joins des **photos**, relevés de température et copies de tes premiers messages.", "Continue de payer ton loyer tant qu'une décision de justice n'a pas été rendue.", "Contacte l'**ADIL** ou un point d'accès au droit avant de saisir le juge."]
    },
    {
      id: "courrier-voisinage", titre: "Écrire à un voisin ou à son propriétaire (bruit répété)", quand: "Le dialogue n'a pas suffi et la gêne continue.", guide: "troubles-voisinage",
      champs: [
        { id: "destinataire", label: "Nom du voisin ou du propriétaire", ex: "M. Martin" },
        { id: "adressedest", label: "Adresse", ex: "12 rue des Lilas, 69003 Lyon (4ᵉ étage gauche)" },
        { id: "faits", label: "Ce que tu as constaté", ex: "de la musique forte après 23 h, les 3, 7 et 12 octobre" },
        { id: "delai", label: "Délai que tu laisses", ex: "8 jours" }
      ],
      destinataire: v => [v.destinataire, v.adressedest],
      objet: () => "Nuisances sonores répétées",
      corps: v => `Madame, Monsieur,\n\nJe me permets de vous écrire car j'ai constaté plusieurs fois les nuisances suivantes : ${v.faits}.\n\nJe vous demande de bien vouloir y mettre fin dans un délai de ${v.delai}. Je reste disponible pour en discuter.\n\nÀ défaut, je serai amené·e à saisir un conciliateur de justice ou les autorités compétentes.\n\nJe vous prie d'agréer, Madame, Monsieur, mes salutations distinguées.`,
      conseils: ["Envoie ce courrier en **recommandé avec accusé de réception**.", "Garde un **journal daté** des nuisances et, si possible, des témoignages.", "Un **conciliateur de justice** peut t'aider gratuitement avant toute procédure."]
    }
  ]);

  /* ——— Calendrier */
  const mois = n => (P.CALENDRIER.find(m => m.mois === n) || (P.CALENDRIER.push({ mois: n, items: [] }), P.CALENDRIER[P.CALENDRIER.length - 1]));
  mois(1).items.push({ t: "Récapitulatif annuel de tes plateformes (Vinted, Airbnb…)", note: "Les plateformes mettent à disposition le montant brut de tes transactions de l'année passée.", guide: "location-saisonniere" });
  mois(3).items.push({ t: "Relevé de carrière retraite : année précédente mise à jour", note: "Les périodes travaillées sont reportées au plus tard le 31 mars de l'année suivante : vérifie les tiennes.", guide: "retraite-jeunes" });
  mois(9).items.push({ t: "Départ à l'étranger pour l'année universitaire", note: "Convention, assurance, aides à la mobilité : commence plusieurs mois avant.", guide: "etudier-etranger" });
  P.CALENDRIER.sort((a, b) => a.mois - b.mois);

  /* ——— Vrai / faux */
  ajoute("VRAIFAUX", [
    { q: "Pour aller au Royaume-Uni après le Brexit, ma carte d'identité suffit toujours.", vrai: false, expl: "Un **passeport valide** est demandé : la carte d'identité n'est acceptée que pour certains résidents (« settled » ou « pre-settled status »). Une **ETA** (20 £) est aussi exigée pour un séjour touristique.", guide: "royaume-uni" },
    { q: "Dans l'Union européenne, je peux travailler sans permis de travail.", vrai: true, expl: "Les citoyens de l'UE peuvent **accepter un emploi ou en chercher un** dans un autre pays de l'UE, sans visa ni permis de travail. Déclare ta présence si le pays l'exige.", guide: "travailler-europe" },
    { q: "Je garde mon chômage quand je pars chercher un emploi en Europe, sans rien demander.", vrai: false, expl: "Il faut **prévenir France Travail avant de partir** et demander le document **U2**. Le maintien dure jusqu'à **3 mois**.", guide: "chomage-etranger" },
    { q: "Un PVT est réservé aux moins de 30 ans partout.", vrai: false, expl: "La limite est de **30 ans** en général, mais elle monte à **35 ans** pour l'**Australie**, le **Canada** et l'**Argentine**.", guide: "pvt" },
    { q: "Bloctel me protège toujours du démarchage téléphonique.", vrai: false, expl: "Le service **Bloctel a pris fin le 11 août 2026** : le démarchage repose désormais sur le **consentement préalable**. Tu peux signaler les spams au **33 700**.", guide: "demarchage-telephonique" },
    { q: "Après une rupture conventionnelle signée, je ne peux plus changer d'avis.", vrai: false, expl: "Chacun a **15 jours calendaires** pour se rétracter après la signature.", guide: "rupture-conventionnelle" },
    { q: "Mon employeur doit payer au moins la moitié de mon abonnement de transport en commun.", vrai: true, expl: "La prise en charge est d'**au moins 50 %** pour les abonnements de transport public, sur justificatif.", guide: "transports-employeur" },
    { q: "Je peux faire un rattrapage du vaccin HPV après 15 ans.", vrai: true, expl: "Le rattrapage est recommandé **de 15 à 26 ans** (3 doses). Parle-en à ton médecin.", guide: "vaccins-jeunes" },
    { q: "Si mon propriétaire augmente le loyer, je dois forcément payer.", vrai: false, expl: "En cours de bail, la hausse est **encadrée** : la révision annuelle est limitée par l'**IRL**. Tu peux la contester par écrit.", guide: "loyer-hausse" },
    { q: "Je peux refuser un relevé d'identité fait par la police municipale.", vrai: true, expl: "Les agents de police judiciaire adjoints peuvent faire un **relevé d'identité** que tu **peux refuser** ; la contrainte est réservée aux officiers de police judiciaire.", guide: "controle-identite" }
  ]);

  /* ——— Glossaire */
  const termes = [
    ["eta", "ETA", "Autorisation électronique de voyage pour le Royaume-Uni : 20 £, valable 2 ans, pour des séjours de 6 mois maximum chacun."],
    ["esta", "ESTA", "Autorisation électronique pour voyager aux États-Unis sans visa dans le cadre du programme d'exemption. Elle n'autorise pas à travailler et n'assure pas l'entrée."],
    ["pvt", "PVT", "Programme Vacances-Travail : séjour d'un an maximum dans un pays partenaire, avec droit de travailler, pour les 18-30 ans (jusqu'à 35 ans pour l'Australie, le Canada et l'Argentine)."],
    ["u2", "Formulaire U2", "Document de France Travail qui atteste que tu gardes ton allocation chômage pendant 3 mois en cherchant un emploi dans un autre État européen."],
    ["s1", "Formulaire S1", "Document remis aux travailleurs frontaliers pour être couverts par l'assurance maladie de leur pays de résidence."],
    ["a1", "Formulaire A1", "Document qui prouve que tu restes affilié·e à la sécurité sociale française lors d'un détachement à l'étranger."],
    ["frontalier", "Travailleur frontalier", "Personne qui habite dans un pays et travaille dans un autre, en rentrant chez elle chaque jour ou chaque semaine."],
    ["brexit", "Brexit", "Sortie du Royaume-Uni de l'Union européenne, effective le 31 janvier 2020. Les règles de voyage, de travail et de séjour ne sont plus celles de l'UE."],
    ["puma", "Puma", "Protection universelle maladie : elle garantit une prise en charge des frais de santé aux personnes qui résident en France de manière stable et régulière."],
    ["irl", "IRL", "Indice de référence des loyers : il limite la révision annuelle du loyer d'un logement."],
    ["imei", "IMEI", "Numéro de 15 chiffres propre à chaque téléphone mobile, visible en tapant *#06# : il sert à bloquer un appareil volé."],
    ["mdph", "MDPH", "Maison départementale des personnes handicapées : elle instruit les demandes de reconnaissance du handicap (RQTH, AAH…)."],
    ["rqth", "RQTH", "Reconnaissance de la qualité de travailleur handicapé : elle ouvre des aides et des aménagements pour l'emploi."],
    ["hlm", "HLM", "Habitation à loyer modéré : logement social attribué sous conditions de ressources, après une demande."],
    ["rupture-conventionnelle", "Rupture conventionnelle", "Fin d'un CDI décidée d'un commun accord entre employeur et salarié, avec un délai de rétractation de 15 jours calendaires et une homologation."]
  ];
  ajoute("GLOSSAIRE", termes.filter(t => !(P.GLOSSAIRE || []).some(g => g.id === t[0])).map(t => ({ id: t[0], terme: t[1], def: t[2] })));
})();
