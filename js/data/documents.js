/* Où trouver chaque papier : lieu officiel, délai, coût. Délais indicatifs : ils varient selon la période et le lieu. */
P.DOCUMENTS = [
  /* Identité */
  { id: "cni", cat: "Identité", nom: "Carte nationale d'identité", quoi: "Ta pièce d'identité principale, valable 10 ans pour un majeur.", pour: "Banque, logement, examens, voyages en Europe, emploi.",
    ou: [{ label: "ANTS : pré-demande en ligne", url: "https://passeport.ants.gouv.fr" }], delai: "Rendez-vous en mairie, puis quelques semaines", cout: "Gratuit (25 € de timbre en cas de perte ou de vol)", guide: "carte-identite-passeport", mots: ["identité", "carte d'identité", "cni"] },
  { id: "passeport", cat: "Identité", nom: "Passeport", quoi: "Pièce d'identité pour voyager hors de l'Union européenne, valable 10 ans pour un majeur.", pour: "Voyages, études ou stages à l'étranger.",
    ou: [{ label: "ANTS : passeport", url: "https://passeport.ants.gouv.fr" }], delai: "Rendez-vous en mairie, puis quelques semaines", cout: "86 € (majeur) de timbre fiscal", guide: "carte-identite-passeport", mots: ["passeport", "voyage"] },
  { id: "acte-naissance", cat: "Identité", nom: "Acte de naissance (copie intégrale ou extrait)", quoi: "Document d'état civil qui prouve ton identité et ta filiation.", pour: "Passeport, mariage, inscriptions, certaines aides.",
    ou: [{ label: "Service-Public : acte de naissance", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1427" }], delai: "Quelques jours (en ligne) à quelques semaines", cout: "Gratuit", guide: "etat-civil", mots: ["naissance", "état civil", "extrait"] },
  { id: "livret-famille", cat: "Identité", nom: "Livret de famille", quoi: "Document qui regroupe les actes d'état civil de ta famille.", pour: "Recensement, bourse, certaines démarches de filiation.",
    ou: [{ label: "Service-Public : livret de famille", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/N31784" }], delai: "Variable", cout: "Gratuit (duplicata en cas de perte)", guide: "etat-civil", mots: ["livret de famille", "famille"] },
  { id: "titre-sejour", cat: "Identité", nom: "Titre de séjour étudiant (ou VLS-TS validé)", quoi: "Document qui prouve ton droit au séjour en France pour tes études.", pour: "Banque, logement, Sécu, travail pendant tes études.",
    ou: [{ label: "Administration étrangers en France", url: "https://administration-etrangers-en-france.interieur.gouv.fr" }], delai: "Variable selon la préfecture", cout: "Variable (taxe selon ton titre)", guide: "titre-sejour-etudiant", mots: ["séjour", "visa", "étranger", "vls-ts"] },
  { id: "photo", cat: "Identité", nom: "Photo d'identité conforme", quoi: "Photo aux normes, avec code e-photo si tu passes par une cabine agréée.", pour: "Carte d'identité, passeport, permis.",
    ou: [{ label: "Service-Public : trouver un photographe habilité ou une cabine agréée", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/R62705" }], delai: "Immédiat", cout: "Quelques euros", guide: "carte-identite-passeport", mots: ["photo", "e-photo"] },
  { id: "justificatif-domicile", cat: "Identité", nom: "Justificatif de domicile", quoi: "Facture ou document récent à ton nom (moins de 3 mois) ou attestation d'hébergement.", pour: "Banque, carte d'identité, bail, inscriptions.",
    ou: [{ label: "Service-Public : justificatif de domicile", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F14807" }], delai: "Immédiat s'il est disponible en ligne", cout: "Gratuit", guide: "changement-adresse", mots: ["domicile", "facture", "hébergement"] },
  { id: "attestation-recensement", cat: "Identité", nom: "Attestation de recensement et certificat de JDC", quoi: "Prouve que tu as fait ton recensement (16 ans) et ta journée défense et citoyenneté.", pour: "Permis, examens, inscription sur les listes électorales.",
    ou: [{ label: "Majdc.fr (journée défense et citoyenneté)", url: "https://majdc.fr" }, { label: "Service-Public : recensement", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F870" }], delai: "Variable", cout: "Gratuit", guide: "recensement-jdc-vote", mots: ["recensement", "jdc", "défense"] },
  { id: "casier-judiciaire", cat: "Identité", nom: "Extrait de casier judiciaire (bulletin n° 3)", quoi: "Document qui atteste l'absence de condamnation inscrite à ton casier.", pour: "Certains emplois, concours, démarches de nationalité.",
    ou: [{ label: "Casier judiciaire en ligne", url: "https://casier-judiciaire.justice.gouv.fr" }], delai: "Quelques jours", cout: "Gratuit", guide: null, mots: ["casier", "judiciaire", "bulletin n°3"] },

  /* Impôts & revenus */
  { id: "avis-imposition", cat: "Impôts & revenus", nom: "Avis d'imposition", quoi: "Document qui indique ton revenu fiscal de référence et l'impôt dû.", pour: "Bail, bourse, aides, prêt, demande de logement étudiant.",
    ou: [{ label: "impots.gouv.fr : espace particulier", url: "https://www.impots.gouv.fr" }], delai: "Immédiat en ligne (une fois ta déclaration traitée)", cout: "Gratuit", guide: "avis-imposition", mots: ["avis d'impôt", "revenu fiscal de référence", "rfr"] },
  { id: "fiche-paie", cat: "Impôts & revenus", nom: "Fiche de paie (bulletin de salaire)", quoi: "Détail de ta rémunération, de tes cotisations et de ton net à payer.", pour: "Logement, prêt, Caf, prime d'activité.",
    ou: [{ label: "Ton employeur (espace de bulletins dématérialisés)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F559" }], delai: "Chaque mois", cout: "Gratuit", guide: "fiche-de-paie", mots: ["bulletin", "salaire", "paie"] },
  { id: "attestation-caf", cat: "Impôts & revenus", nom: "Attestation de paiement de la Caf", quoi: "Document qui prouve les aides que tu perçois (APL, prime d'activité…).", pour: "Banque, logement, démarches administratives.",
    ou: [{ label: "caf.fr : espace allocataire", url: "https://www.caf.fr" }], delai: "Immédiat en ligne", cout: "Gratuit", guide: "caf-compte", mots: ["caf", "attestation", "apl", "allocataire"] },

  /* Santé */
  { id: "carte-vitale", cat: "Santé", nom: "Carte Vitale et attestation de droits", quoi: "Prouve ton affiliation à la Sécurité sociale ; l'attestation se télécharge en ligne.", pour: "Soins, pharmacie, mutuelle, inscription étudiante.",
    ou: [{ label: "ameli.fr : compte assuré", url: "https://www.ameli.fr" }], delai: "Attestation immédiate ; carte sous quelques semaines", cout: "Gratuit", guide: "secu-18-ans", mots: ["vitale", "sécurité sociale", "attestation de droits", "ameli"] },
  { id: "ceam", cat: "Santé", nom: "Carte européenne d'assurance maladie (CEAM)", quoi: "Te permet d'être soigné·e dans l'Union européenne aux conditions locales.", pour: "Voyage, stage ou études en Europe.",
    ou: [{ label: "ameli.fr : CEAM", url: "https://www.ameli.fr/assure/droits-demarches/europe-international/protection-sociale-etranger/vacances-etranger" }], delai: "Quelques jours à quelques semaines", cout: "Gratuit", guide: "soins-etranger", mots: ["ceam", "europe", "santé", "voyage"] },
  { id: "attestation-mutuelle", cat: "Santé", nom: "Attestation de mutuelle", quoi: "Prouve que tu es couvert·e par une complémentaire santé.", pour: "Employeur, inscription étudiante, certaines démarches.",
    ou: [{ label: "Espace client de ta mutuelle" }], delai: "Immédiat en ligne", cout: "Gratuit", guide: "mutuelle-c2s", mots: ["mutuelle", "complémentaire"] },

  /* Études */
  { id: "certificat-scolarite", cat: "Études", nom: "Certificat de scolarité", quoi: "Prouve que tu es inscrit·e dans un établissement.", pour: "Bourse, logement, Visale, transports, titre de séjour.",
    ou: [{ label: "Espace numérique de ton établissement", url: "https://www.etudiant.gouv.fr" }], delai: "Immédiat après inscription", cout: "Gratuit", guide: "bourse-crous", mots: ["scolarité", "inscription", "étudiant"] },
  { id: "attestation-cvec", cat: "Études", nom: "Attestation CVEC", quoi: "Prouve que tu as payé la CVEC ou que tu en es exonéré·e.", pour: "Inscription dans un établissement du supérieur.",
    ou: [{ label: "cvec.etudiant.gouv.fr", url: "https://cvec.etudiant.gouv.fr" }], delai: "Immédiat après paiement", cout: "105 € (gratuit pour les boursiers)", guide: "cvec", mots: ["cvec", "contribution", "étudiant"] },
  { id: "convention-stage", cat: "Études", nom: "Convention de stage", quoi: "Contrat tripartite signé avant le stage par toi, l'entreprise et ton établissement.", pour: "Réaliser un stage, être couvert·e en cas d'accident.",
    ou: [{ label: "Service-Public : stage", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F32131" }], delai: "À faire avant le début du stage", cout: "Gratuit", guide: "stage", mots: ["stage", "convention"] },
  { id: "attestation-stage", cat: "Études", nom: "Attestation de stage", quoi: "Prouve ta durée et ton poste ; l'entreprise doit te la remettre.", pour: "Valider ton stage, ton CV, certaines démarches.",
    ou: [{ label: "Ton entreprise d'accueil", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F32131" }], delai: "À la fin du stage", cout: "Gratuit", guide: "stage", mots: ["stage", "attestation"] },

  /* Travail */
  { id: "contrat-travail", cat: "Travail", nom: "Contrat de travail", quoi: "Précise ton poste, ton salaire, ta durée et ta période d'essai.", pour: "Banque, logement, Caf, preuve de tes droits.",
    ou: [{ label: "Ton employeur", url: "https://code.travail.gouv.fr" }], delai: "À la signature", cout: "Gratuit", guide: "premier-emploi", mots: ["contrat", "cdi", "cdd"] },
  { id: "attestation-employeur", cat: "Travail", nom: "Attestation destinée à France Travail", quoi: "Document de fin de contrat nécessaire pour ouvrir tes droits au chômage.", pour: "Inscription et demande d'allocation.",
    ou: [{ label: "Ton employeur", url: "https://www.francetravail.fr" }], delai: "À remettre à la fin du contrat", cout: "Gratuit", guide: "demission-fin-contrat", mots: ["attestation", "chômage", "fin de contrat"] },
  { id: "certificat-travail", cat: "Travail", nom: "Certificat de travail", quoi: "Prouve les dates et le poste occupé.", pour: "Nouvel emploi, démarches.",
    ou: [{ label: "Ton employeur", url: "https://code.travail.gouv.fr" }], delai: "À la fin du contrat", cout: "Gratuit", guide: "demission-fin-contrat", mots: ["certificat", "employeur"] },

  /* Logement */
  { id: "bail", cat: "Logement", nom: "Bail de location", quoi: "Contrat qui fixe loyer, charges, durée et obligations.", pour: "APL, assurance, énergie, démarches.",
    ou: [{ label: "Ton propriétaire ou ton agence", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F920" }], delai: "À la signature", cout: "Gratuit", guide: "bail-etat-lieux", mots: ["bail", "location"] },
  { id: "quittance-loyer", cat: "Logement", nom: "Quittance de loyer", quoi: "Prouve que tu as payé ton loyer.", pour: "Justificatif de domicile, dossier de logement.",
    ou: [{ label: "Ton propriétaire ou ton agence", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F35247" }], delai: "Sur demande", cout: "Gratuit", guide: "bail-etat-lieux", mots: ["quittance", "loyer"] },
  { id: "etat-des-lieux", cat: "Logement", nom: "État des lieux d'entrée et de sortie", quoi: "Décrit l'état du logement à l'arrivée et au départ.", pour: "Récupérer le dépôt de garantie.",
    ou: [{ label: "Service-Public : état des lieux", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F33671" }], delai: "Le jour de l'arrivée et du départ", cout: "Gratuit", guide: "bail-etat-lieux", mots: ["état des lieux", "dépôt de garantie"] },
  { id: "attestation-assurance", cat: "Logement", nom: "Attestation d'assurance", quoi: "Prouve que tu as une assurance habitation ou auto.", pour: "Remise des clés, bailleur, résidence étudiante.",
    ou: [{ label: "Espace client de ton assureur", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F31300" }], delai: "Immédiat après souscription", cout: "Gratuit", guide: "assurance-habitation", mots: ["assurance", "habitation"] },

  /* Banque */
  { id: "rib", cat: "Banque", nom: "RIB (relevé d'identité bancaire)", quoi: "Document qui contient ton IBAN et ton BIC.", pour: "Employeur, Caf, bailleur, abonnements.",
    ou: [{ label: "Application ou espace client de ta banque" }], delai: "Immédiat", cout: "Gratuit", guide: "ouvrir-compte", mots: ["rib", "iban", "banque"] },

  /* Entreprise */
  { id: "avis-situation-insee", cat: "Entreprise", nom: "Avis de situation Insee (SIRET)", quoi: "Prouve que ton entreprise existe et indique ton numéro SIRET.", pour: "Facture, banque, clients.",
    ou: [{ label: "Avis de situation Sirene", url: "https://avis-situation-sirene.insee.fr" }], delai: "Immédiat", cout: "Gratuit", guide: "creer-micro", mots: ["siret", "siren", "insee"] },
  { id: "attestation-vigilance", cat: "Entreprise", nom: "Attestation de vigilance Urssaf", quoi: "Prouve que tu es à jour de tes cotisations.", pour: "Certains clients, appels d'offres.",
    ou: [{ label: "Urssaf : attestations", url: "https://www.autoentrepreneur.urssaf.fr" }], delai: "Immédiat en ligne", cout: "Gratuit", guide: "declarer-urssaf", mots: ["urssaf", "vigilance"] },
  { id: "statuts-asso", cat: "Entreprise", nom: "Statuts d'association et récépissé", quoi: "Les règles de l'association et le récépissé de déclaration en préfecture.", pour: "Ouvrir un compte, demander une subvention.",
    ou: [{ label: "Service-Public : créer une association", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1119" }], delai: "Variable", cout: "Gratuit", guide: "association-creation", mots: ["association", "statuts"] },

  /* Démarches */
  { id: "permis-conduire", cat: "Démarches", nom: "Permis de conduire", quoi: "Autorise la conduite ; le suivi se fait sur l'ANTS.", pour: "Conduire, certains emplois.",
    ou: [{ label: "ANTS : permis de conduire", url: "https://permisdeconduire.ants.gouv.fr" }], delai: "Variable selon l'examen", cout: "Variable", guide: "permis", mots: ["permis", "conduire"] },
  { id: "recepisse-plainte", cat: "Démarches", nom: "Récépissé de plainte ou déclaration de perte", quoi: "Prouve que tu as déclaré un vol ou une perte.", pour: "Banque, assurance, nouveau titre d'identité.",
    ou: [{ label: "Commissariat ou gendarmerie", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1435" }], delai: "Immédiat après le dépôt", cout: "Gratuit", guide: "plainte-depot", mots: ["plainte", "perte", "vol"] }
];
