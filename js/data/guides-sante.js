/* Thème « Santé & Sécu ». Sources : ameli.fr, Service-Public, santé.gouv.fr, 3114.fr. */
(P.GUIDES = P.GUIDES || []).push(
  {
    id: "medecin-traitant", theme: "sante", titre: "Médecin traitant, parcours de soins et remboursements",
    accroche: "Pourquoi déclarer un médecin traitant, ce que la Sécu rembourse et ce que la mutuelle complète.",
    temps: "15 min", cout: "Gratuit", pour: ["lyceen", "etudiant", "salarie"], quand: "Dès 16 ans, ou dès que tu t'installes dans une nouvelle ville.",
    mots: ["médecin traitant", "parcours de soins", "remboursement", "consultation", "généraliste", "ameli", "ticket modérateur", "tiers payant"],
    todo: { si: ["a16", "a18", "etudiant"], prio: 2, pourquoi: "Sans médecin traitant déclaré, tu es moins bien remboursé·e." },
    enBref: [
      "Tu peux **déclarer un médecin traitant dès 16 ans**, en ligne sur ton compte ameli ou avec ton médecin.",
      "Sans médecin traitant, tu es **moins bien remboursé·e** : c'est le « parcours de soins coordonné ».",
      "La Sécu rembourse une **part** du tarif ; ta **mutuelle** prend le reste (voir [Mutuelle et C2S](#guide-mutuelle-c2s))."
    ],
    etapes: [
      { t: "Choisir ton médecin", d: "N'importe quel généraliste (ou un autre médecin) qui accepte de te suivre. Étudiant·e loin de chez toi : tu peux en choisir un près de ton lieu d'études. Un service de santé universitaire peut aussi t'orienter." },
      { t: "Le déclarer", d: "Sur ton **compte ameli** (rubrique « Mes démarches »), ou avec le formulaire papier remis par le médecin. C'est gratuit et immédiat une fois validé.", lien: { label: "ameli : choisir et déclarer son médecin traitant", url: "https://www.ameli.fr" } },
      { t: "Consulter d'abord ton médecin traitant", d: "Pour un spécialiste (sauf gynécologue, dentiste, ophtalmo, sage-femme et quelques cas), passe par ton médecin traitant : cela garde ton remboursement au meilleur niveau." },
      { t: "Comprendre ce qui reste à payer", d: "La Sécu rembourse un pourcentage du tarif de référence. Le reste peut être pris par ta **mutuelle**, ou par la **C2S** si tes revenus sont faibles. Avec le tiers payant, tu n'avances rien chez certains professionnels." },
      { t: "Garder ta Carte Vitale à jour", d: "Après un changement de situation (adresse, mutuelle, nom), mets-la à jour dans une pharmacie ou une borne." }
    ],
    pieges: [
      "Consulter un spécialiste sans passer par ton médecin traitant, hors cas dispensés : tu es moins bien remboursé·e.",
      "Oublier de changer de médecin traitant après un déménagement.",
      "Ne pas savoir si ton médecin pratique des **dépassements d'honoraires** : demande le tarif avant."
    ],
    liens: [
      { label: "ameli : le rôle du médecin traitant et le parcours de soins coordonnés", url: "https://www.ameli.fr/assure/remboursements/etre-bien-rembourse/medecin-traitant-parcours-soins-coordonnes" },
      { label: "ameli : choisir et déclarer son médecin traitant", url: "https://www.ameli.fr/assure/droits-demarches/principes/choisir-et-declarer-votre-medecin-traitant" }
    ],
    sources: ["ameli.fr, médecin traitant et parcours de soins", "Service-Public, parcours de soins coordonné"],
    voir: ["secu-18-ans", "mutuelle-c2s", "contraception-gratuite"], verifie: "octobre 2026"
  },
  {
    id: "contraception-gratuite", theme: "sante", titre: "Contraception et préservatifs gratuits",
    accroche: "Consultation, pilule, préservatifs : ce qui est pris en charge à 100 % avant 26 ans.",
    temps: "15 min", cout: "Gratuit avant 26 ans", pour: ["lyceen", "etudiant", "mineur"], quand: "À tout moment, dès l'âge de la première relation.",
    mots: ["contraception", "pilule", "préservatif", "gratuit", "moins de 26 ans", "pharmacie", "urgence", "ivg", "planning familial"],
    todo: { si: ["a15", "a16", "a18", "tous"], prio: 3, pourquoi: "C'est gratuit et confidentiel : autant le savoir avant d'en avoir besoin." },
    enBref: [
      "Avant **26 ans**, la **consultation** pour la contraception est **gratuite** et les contraceptifs remboursés sont délivrés **sans avance de frais**.",
      "Les **préservatifs** de certaines marques sont pris en charge à 100 % en pharmacie pour les moins de 26 ans, sans ordonnance.",
      "La démarche est **confidentielle**, y compris pour les mineur·es."
    ],
    etapes: [
      { t: "Choisir où consulter", d: "Médecin généraliste, gynécologue, sage-femme, **centre de santé sexuelle** ou **planning familial**. La consultation de contraception est gratuite avant 26 ans." },
      { t: "Se faire prescrire une contraception", d: "Pilule, implant, stérilet, patch, anneau, etc. Le professionnel t'explique les avantages, les contraintes et les effets possibles. Rien n'est imposé." },
      { t: "La retirer à la pharmacie", d: "Présente ta Carte Vitale (ou celle de tes parents) : le pharmacien délivre le contraceptif remboursé **gratuitement et en toute confidentialité**." },
      { t: "Les préservatifs", d: "En pharmacie, une boîte de préservatifs de marques prises en charge peut être délivrée gratuitement à chaque passage pour les moins de 26 ans." },
      { t: "Contraception d'urgence", d: "Elle est disponible **sans ordonnance** en pharmacie, et gratuite pour les mineures. Plus elle est prise tôt, plus elle est efficace. Parles-en au pharmacien, à l'infirmière scolaire ou à un centre de santé sexuelle." }
    ],
    pieges: [
      "Croire que la démarche sera visible par tes parents : demande la confidentialité à ton médecin ou à ton pharmacien.",
      "Attendre trop longtemps après un rapport non protégé pour la contraception d'urgence.",
      "Utiliser uniquement la contraception sans préservatif : seul le préservatif protège aussi des IST."
    ],
    liens: [
      { label: "ameli : contraception pour les moins de 26 ans", url: "https://www.ameli.fr/assure/remboursements/rembourse/contraception-ivg/contraception" },
      { label: "Fil Santé Jeunes : 0 800 235 236 (gratuit, anonyme)", url: "https://www.filsantejeunes.com" }
    ],
    sources: ["ameli.fr, contraception et remboursements (gratuité des consultations et contraceptifs avant 26 ans)", "ameli.fr, préservatifs pris en charge à 100 % avant 26 ans"],
    voir: ["prevention-depistage", "medecin-traitant", "secu-18-ans"], verifie: "octobre 2026"
  },
  {
    id: "prevention-depistage", theme: "sante", titre: "Dépistage IST et bilan prévention gratuits",
    accroche: "Tests sans ordonnance, dépistages, bilan prévention 18-25 ans : où aller et comment.",
    temps: "15 min", cout: "Gratuit avant 26 ans", pour: ["etudiant", "lyceen"], quand: "Après un rapport à risque, ou régulièrement si tu changes de partenaire.",
    mots: ["ist", "dépistage", "vih", "sida", "chlamydia", "syphilis", "laboratoire", "bilan prévention", "gratuit"],
    todo: { si: ["a18", "etudiant"], prio: 3, pourquoi: "Le dépistage est gratuit et sans ordonnance avant 26 ans." },
    enBref: [
      "Depuis le **1ᵉʳ septembre 2024**, les moins de 26 ans peuvent se faire dépister **gratuitement et sans ordonnance** pour plusieurs IST en laboratoire.",
      "Tu n'as **rien à avancer** : l'Assurance Maladie prend en charge à 100 %.",
      "Le **bilan prévention** est un rendez-vous proposé à certains âges, dont 18-25 ans : demande sur ameli comment y accéder."
    ],
    etapes: [
      { t: "Choisir où te faire dépister", d: "Laboratoire d'analyses (sans ordonnance), **CeGIDD**, centre de santé sexuelle, Planning familial. Certains sites proposent des **kits à domicile**." },
      { t: "Présenter ta Carte Vitale", d: "Le laboratoire facture directement à l'Assurance Maladie pour les moins de 26 ans : pas d'avance de frais." },
      { t: "Récupérer et comprendre le résultat", d: "Les résultats arrivent par mail, courrier ou en laboratoire. Un résultat positif se traite : ton médecin ou un centre de santé sexuelle t'accompagne." },
      { t: "Informer ton ou ta partenaire", d: "Si tu as une IST, préviens tes partenaires récents : c'est la meilleure façon d'éviter la transmission." },
      { t: "Faire le bilan prévention", d: "Il s'agit d'un moment d'échange avec un professionnel de santé sur ton hygiène de vie, tes vaccins et tes dépistages. Les conditions exactes de prise en charge sont sur ameli." }
    ],
    pieges: [
      "Attendre d'avoir des symptômes : beaucoup d'IST n'en donnent pas.",
      "Ne pas vérifier tes vaccins (hépatite B, HPV) : demande-les à ton médecin.",
      "Utiliser un site non officiel pour commander un test : privilégie les laboratoires et les structures publiques."
    ],
    liens: [
      { label: "ameli : dépistage IST, prise en charge avant 26 ans", url: "https://www.ameli.fr/laboratoire-danalyses-medicales/exercice-liberal/prise-charge-patients/depistage-ist/depistage-des-ist-prise-en-charge-pour-les-moins-de-26-ans-et-facturation-de-mon-test-ist" },
      { label: "Où se faire dépister gratuitement (Question Sexualité)", url: "https://www.questionsexualite.fr/s-informer-sur-les-infections-et-les-maladies/les-depistages/ou-se-faire-depister-gratuitement" }
    ],
    sources: ["ameli.fr, dépistage des IST pris en charge à 100 % pour les moins de 26 ans", "Sida Info Service (gratuité depuis le 1ᵉʳ septembre 2024)"],
    voir: ["contraception-gratuite", "medecin-traitant", "psy-sante-mentale"], verifie: "octobre 2026"
  },
  {
    id: "psy-sante-mentale", theme: "sante", titre: "Aide psychologique : où trouver de l'aide",
    accroche: "Séances gratuites pour les étudiant·es, lignes d'écoute et urgence psychique.",
    temps: "10 min", cout: "Gratuit ou pris en charge", pour: ["lyceen", "etudiant", "alternant"], quand: "Dès que tu te sens mal, sans attendre une crise.",
    mots: ["psy", "santé mentale", "psychologue", "anxiété", "dépression", "santé psy étudiant", "3114", "mal-être", "burn-out"],
    todo: { si: ["p-sante", "etudiant", "lyceen"], prio: 2, pourquoi: "Demander de l'aide tôt est la meilleure façon d'aller mieux." },
    enBref: [
      "En cas de détresse ou de pensées suicidaires, appelle le **3114** : gratuit, 24 h/24 et 7 j/7.",
      "Les étudiant·es ont droit à **12 séances gratuites** avec un psychologue partenaire (dispositif Santé Psy Étudiant).",
      "Ton médecin traitant peut aussi t'orienter vers un suivi psychologique pris en charge."
    ],
    etapes: [
      { t: "Si c'est urgent", d: "- **3114** : numéro national de prévention du suicide, gratuit, 24 h/24\n- **15** (SAMU) ou **112** si la vie est en danger\n- **114** par SMS si tu es sourd·e ou malentendant·e", lien: { label: "3114.fr", url: "https://3114.fr" } },
      { t: "Parler à quelqu'un de confiance", d: "Un·e ami·e, un adulte de ta famille, l'infirmier·ère ou l'assistant·e social·e de ton établissement, ton médecin. Tu n'as pas à justifier ton mal-être." },
      { t: "Utiliser le dispositif étudiant", d: "Si tu es étudiant·e, renseigne-toi auprès du **service de santé universitaire (SSU)** de ton établissement : il t'oriente vers un psychologue partenaire. Tu ne paies rien pour les 12 séances." },
      { t: "Voir ton médecin traitant", d: "Il peut évaluer ta situation, t'orienter vers un psychologue ou un psychiatre et, selon les cas, ouvrir un remboursement. Demande-lui les modalités en vigueur." },
      { t: "Aller vers les lignes d'écoute", d: "Fil Santé Jeunes (0 800 235 236, anonyme et gratuit), Nightline (écoute étudiante), ou les structures de ta ville (Maison des adolescents, centre médico-psychologique)." }
    ],
    pieges: [
      "Attendre que ça passe seul·e : plus tôt on en parle, plus vite on va mieux.",
      "Confondre une ligne d'écoute et un numéro d'urgence : en danger immédiat, appelle le 15 ou le 112.",
      "Penser que consulter est « réservé aux cas graves »."
    ],
    liens: [
      { label: "3114 : numéro national de prévention du suicide", url: "https://3114.fr" },
      { label: "Santé Psy Étudiant (etudiant.gouv.fr)", url: "https://santepsy.etudiant.gouv.fr" },
      { label: "Fil Santé Jeunes", url: "https://www.filsantejeunes.com" }
    ],
    sources: ["3114.fr (numéro national de prévention du suicide)", "santepsy.etudiant.gouv.fr (12 séances gratuites pour les étudiants)"],
    voir: ["medecin-traitant", "prevention-depistage", "harcelement-violences"], verifie: "octobre 2026"
  },
  {
    id: "arret-maladie", theme: "sante", titre: "Arrêt maladie : démarches et indemnités",
    accroche: "Les 48 heures, le délai de carence de 3 jours et la condition des 150 heures.",
    temps: "10 min", cout: "Gratuit", pour: ["salarie", "alternant", "etudiant"], quand: "Dès que ton médecin te prescrit un arrêt de travail.",
    mots: ["arrêt maladie", "indemnités journalières", "carence", "48 heures", "150 heures", "arrêt de travail", "ij", "ameli"],
    todo: { si: ["salarie", "alternant"], prio: 3, pourquoi: "Un arrêt non transmis à temps n'est pas indemnisé." },
    enBref: [
      "Envoie ton arrêt à ton employeur **dans les 48 heures** suivant la date de l'arrêt.",
      "Aucune indemnité n'est versée pendant les **3 premiers jours** : c'est le **délai de carence**.",
      "Pour toucher des indemnités, il faut avoir travaillé **au moins 150 heures** sur les 3 mois ou 90 jours précédant l'arrêt (arrêt de moins de 6 mois)."
    ],
    etapes: [
      { t: "Consulter un médecin", d: "Le médecin évalue ta situation et, si nécessaire, établit l'arrêt de travail. Il peut le faire en ligne ou sur papier." },
      { t: "Envoyer l'arrêt dans les 48 heures", d: "Même si le médecin l'a transmis en ligne, tu dois **envoyer l'exemplaire remis à ton employeur** dans les 48 heures (courrier ou mail selon ton employeur). Si l'arrêt est sur papier à trois volets, envoie aussi les volets à l'Assurance Maladie." },
      { t: "Vérifier tes droits aux indemnités", d: "Selon ton contrat, ta convention collective et tes heures travaillées, tu peux recevoir des indemnités journalières après le délai de carence. Ton employeur peut aussi compléter ton salaire." },
      { t: "Respecter les horaires de sortie", d: "Si le médecin a indiqué des heures de présence obligatoires à ton domicile, respecte-les : l'Assurance Maladie peut contrôler." },
      { t: "Reprendre le travail", d: "À la fin de l'arrêt, reprends ton poste. Pour un arrêt long ou répété, parle de ta situation avec la médecine du travail." }
    ],
    pieges: [
      "Envoyer l'arrêt trop tard : au premier retard, tu reçois un courrier d'information, ensuite tu peux perdre des indemnités.",
      "Ne pas comprendre que le délai de carence de 3 jours n'est pas payé par la Sécu.",
      "Ne pas garder de copie de ton arrêt."
    ],
    liens: [
      { label: "ameli : arrêt maladie du salarié, démarches", url: "https://www.ameli.fr/assure/droits-demarches/maladie-accident-hospitalisation/arret-travail-maladie/arret-travail-maladie-salarie" },
      { label: "ameli : indemnités journalières du salarié", url: "https://www.ameli.fr/assure/remboursements/indemnites-journalieres-maladie-maternite-paternite/indemnites-journalieres-pour-maladie/arret-maladie-salarie" },
      { label: "Service-Public : arrêt maladie du salarié", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F3053" }
    ],
    sources: ["ameli.fr, arrêt de travail pour maladie (48 heures, délai de carence de 3 jours, 150 heures sur 3 mois)", "Service-Public F3053"],
    voir: ["droits-au-travail", "medecin-traitant", "fiche-de-paie"], verifie: "octobre 2026"
  },
  {
    id: "soins-etranger", theme: "sante", titre: "Tomber malade à l'étranger : carte européenne et assurance",
    accroche: "Ce qui est couvert en Europe avec la carte européenne d'assurance maladie, et ce qu'il faut ajouter ailleurs.",
    temps: "15 min", cout: "Carte gratuite", pour: ["etudiant", "lyceen", "alternant"], quand: "Avant un voyage, un stage ou un échange à l'étranger.",
    mots: ["ceam", "carte européenne", "assurance voyage", "erasmus", "santé", "étranger", "rapatriement", "voyage"],
    todo: { si: ["p-etranger"], prio: 2, pourquoi: "Une hospitalisation à l'étranger peut coûter très cher sans couverture." },
    enBref: [
      "En **Europe**, la **carte européenne d'assurance maladie (CEAM)** te permet d'être soigné·e aux mêmes conditions que les assurés locaux. Elle est gratuite.",
      "Hors Union européenne, la Sécu **ne couvre pas** ou très peu : prévois une **assurance voyage** avec rapatriement.",
      "Pour un long séjour (études, stage, Erasmus), vérifie les règles de ton pays d'accueil et les assurances de ton établissement."
    ],
    etapes: [
      { t: "Commander ta CEAM", d: "Sur ton compte ameli (rubrique « Mes démarches »), en quelques clics. Elle arrive par courrier. Fais-la bien avant ton départ." },
      { t: "Connaître sa portée", d: "Elle couvre les soins médicalement nécessaires pendant un séjour **temporaire** dans l'UE, l'EEE et la Suisse, aux conditions du pays. Elle ne couvre pas le rapatriement." },
      { t: "Choisir une assurance voyage", d: "Pour hors Europe, ou pour le rapatriement en Europe : compare les garanties (frais médicaux, rapatriement, responsabilité). Certaines cartes bancaires incluent une assurance : lis les conditions." },
      { t: "Prévoir tes ordonnances", d: "Pars avec tes traitements habituels et une ordonnance (en français et si possible en anglais)." },
      { t: "Garder les justificatifs", d: "Si tu avances des frais, conserve factures et ordonnances pour demander un remboursement à ton retour." }
    ],
    pieges: [
      "Partir sans CEAM en croyant que ta Carte Vitale suffit à l'étranger.",
      "Croire que la CEAM couvre un rapatriement sanitaire.",
      "Partir hors Europe sans assurance."
    ],
    liens: [
      { label: "ameli : la carte européenne d'assurance maladie", url: "https://www.ameli.fr/assure/droits-demarches/europe-international/protection-sociale-etranger/vacances-etranger" },
      { label: "Service-Public : soins pendant un séjour dans l'UE", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34441" }
    ],
    sources: ["ameli.fr, CEAM (soins dans l'UE, l'EEE et en Suisse)", "Service-Public, soins pendant un séjour temporaire"],
    voir: ["secu-18-ans", "voyager", "carte-identite-passeport"], verifie: "octobre 2026"
  },
  {
    id: "optique-dentaire", theme: "sante", titre: "Lunettes, dentiste, audition : le 100 % Santé",
    accroche: "Des soins et équipements sans reste à charge avec une mutuelle adaptée.",
    temps: "10 min", cout: "Selon ta mutuelle", pour: ["etudiant", "salarie"], quand: "Avant d'acheter des lunettes ou de faire des soins dentaires importants.",
    mots: ["100 % santé", "lunettes", "dentiste", "prothèse", "audition", "mutuelle", "reste à charge", "optique"],
    todo: { si: ["etudiant", "salarie"], prio: 3, pourquoi: "Avec une mutuelle adaptée, lunettes et couronnes peuvent ne rien coûter." },
    enBref: [
      "Le **100 % Santé** garantit des paniers de lunettes, de soins dentaires (couronnes, bridges) et d'aides auditives **sans reste à charge** avec une mutuelle qui le prend en charge.",
      "Demande toujours un **devis détaillé** avant de signer.",
      "Ta mutuelle ou ta C2S détermine ce que tu peux obtenir : vérifie-la avant."
    ],
    etapes: [
      { t: "Vérifier ta mutuelle", d: "Regarde si ton contrat est « responsable » et couvre le 100 % Santé (la plupart des contrats récents le font). Si tu es à la **C2S**, le 100 % Santé s'applique." },
      { t: "Demander les deux devis", d: "Pour des lunettes ou une prothèse, le professionnel doit te présenter **une offre 100 % Santé** et, si tu veux, une autre offre. Compare." },
      { t: "Choisir selon tes besoins", d: "L'offre 100 % Santé couvre un panier de qualité suffisante. L'offre libre peut coûter plus cher : ta mutuelle rembourse partiellement." },
      { t: "Ne signer qu'après avoir compris", d: "Demande ce qui reste éventuellement à ta charge avant d'accepter. Le devis signé engage." },
      { t: "Garder les factures", d: "Elles servent pour la garantie et les remboursements." }
    ],
    pieges: [
      "Choisir sans connaître ton reste à charge réel.",
      "Ne pas demander l'offre 100 % Santé : le professionnel doit la proposer.",
      "Oublier de vérifier que ton contrat est bien « responsable »."
    ],
    liens: [
      { label: "ameli : soins dentaires, comprendre le 100 % Santé", url: "https://www.ameli.fr/assure/remboursements/rembourse/soins-protheses-dentaires-optique-audition/consultations-soins-protheses-dentaires/soins-dentaires-comprendre-le-100-sante" },
      { label: "ameli : aides auditives et 100 % Santé", url: "https://www.ameli.fr/assure/remboursements/rembourse/soins-protheses-dentaires-optique-audition/protheses-auditives" }
    ],
    sources: ["ameli.fr, 100 % Santé", "Service-Public, 100 % Santé"],
    voir: ["mutuelle-c2s", "medecin-traitant"], verifie: "octobre 2026"
  },
  {
    id: "urgences-sante", theme: "sante", titre: "Urgence : qui appeler, où aller",
    accroche: "15, 112, 18, 114, 3114 et les médecins de garde : à lire avant d'en avoir besoin.",
    temps: "5 min", cout: "Gratuit", pour: ["lyceen", "etudiant", "salarie", "mineur"], quand: "Avant la première urgence, pour savoir quoi faire.",
    mots: ["urgence", "samu", "112", "15", "pompiers", "114", "médecin de garde", "garde", "pharmacie de garde"],
    todo: { si: ["tous"], prio: 3, pourquoi: "Savoir quoi faire en cas d'urgence prend 5 minutes et peut sauver une vie." },
    enBref: [
      "**15** : SAMU, urgence médicale. **18** : pompiers. **17** : police. **112** : numéro d'urgence européen.",
      "**114** : numéro d'urgence par **SMS** pour les personnes sourdes ou malentendantes.",
      "**3114** : prévention du suicide, 24 h/24."
    ],
    etapes: [
      { t: "Savoir quand appeler le 15", d: "Détresse respiratoire, douleur thoracique, perte de connaissance, hémorragie, accident grave : appelle le **15** (ou le 112). Reste en ligne : on te guide jusqu'à l'arrivée des secours." },
      { t: "Donner les bonnes informations", d: "Adresse exacte, ce qui s'est passé, nombre de personnes concernées, état de la victime. Ne raccroche pas avant qu'on te le dise." },
      { t: "Si ce n'est pas vital", d: "Contacte ton médecin. La nuit et le week-end, appelle le **15** : le SAMU t'oriente vers un médecin de garde ou une maison médicale de garde si ton cas ne relève pas des urgences. Évite de saturer les urgences pour un problème qui peut attendre." },
      { t: "Trouver une pharmacie de garde", d: "Demande au commissariat de police ou à la gendarmerie : ils connaissent la pharmacie de garde la plus proche. En cas de doute, demande conseil au SAMU (15)." },
      { t: "Enregistrer les bons contacts", d: "Mets 15, 112, 3114 dans ton téléphone, et indique ton **contact d'urgence** dans la fiche médicale de ton portable." }
    ],
    pieges: [
      "Se rendre aux urgences par ses propres moyens en cas de signe grave : appelle le 15.",
      "Raccrocher avant l'envoi des secours.",
      "Ne pas connaître l'adresse précise (rue, bâtiment, étage) de l'endroit où tu es."
    ],
    liens: [
      { label: "Service-Public : numéros d'urgence", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F33954" },
      { label: "Service-Public : urgence par SMS (114)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F33954" }
    ],
    sources: ["Service-Public, numéros d'urgence (15, 17, 18, 112, 114)", "3114.fr"],
    voir: ["psy-sante-mentale", "harcelement-violences"], verifie: "octobre 2026"
  }
);
