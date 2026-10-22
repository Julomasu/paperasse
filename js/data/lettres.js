/* Lettres types. Chaque modèle est un point de départ : à adapter. Rien n'est envoyé ni enregistré par le site. */
P.LETTRES = [
  {
    id: "preavis-logement", titre: "Donner congé de son logement (préavis)", quand: "Tu quittes ton logement et tu dois prévenir ton propriétaire.", guide: "preavis-logement",
    champs: [
      { id: "proprio", label: "Nom du propriétaire ou de l'agence", ex: "Agence Dupont Immobilier" },
      { id: "adresseproprio", label: "Adresse du propriétaire ou de l'agence", ex: "5 place de la Mairie, 69001 Lyon" },
      { id: "logement", label: "Adresse du logement quitté", ex: "12 rue des Lilas, 69003 Lyon" },
      { id: "duree", label: "Durée du préavis", ex: "1 mois (logement meublé ou zone tendue) ou 3 mois" },
      { id: "date", label: "Date prévue de ton départ", ex: "30 novembre 2026", type: "text" }
    ],
    destinataire: v => [v.proprio, v.adresseproprio],
    objet: v => `Congé du logement situé ${v.logement}`,
    corps: v => `Madame, Monsieur,\n\nPar la présente, je vous informe de ma décision de quitter le logement situé ${v.logement}, que je loue en vertu du bail en cours.\n\nConformément à la réglementation, mon préavis est de ${v.duree}. Il prendra effet à la date de réception de ce courrier et mon départ est prévu le ${v.date}.\n\nJe vous propose de convenir d'une date pour l'état des lieux de sortie, et vous remercie de bien vouloir me restituer mon dépôt de garantie dans les délais légaux, à l'adresse de ma nouvelle résidence que je vous communiquerai.\n\nJe vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.`,
    conseils: ["Envoie ce courrier en **recommandé avec accusé de réception**.", "Si tu bénéficies d'un préavis réduit (zone tendue, premier emploi…), **joins le justificatif** et précise le motif.", "Garde une copie du courrier et de l'accusé de réception."]
  },
  {
    id: "restitution-depot", titre: "Réclamer la restitution de son dépôt de garantie", quand: "Le délai légal est écoulé et ton dépôt de garantie n'a pas été rendu.", guide: "preavis-logement",
    champs: [
      { id: "proprio", label: "Nom du propriétaire ou de l'agence", ex: "Mme Durand" },
      { id: "adresseproprio", label: "Adresse du propriétaire ou de l'agence", ex: "8 rue Victor Hugo, 69002 Lyon" },
      { id: "logement", label: "Adresse du logement quitté", ex: "12 rue des Lilas, 69003 Lyon" },
      { id: "dateremise", label: "Date de remise des clés", ex: "15 juillet 2026" },
      { id: "montant", label: "Montant du dépôt de garantie", ex: "650 €" },
      { id: "rib", label: "Ton IBAN pour le virement", ex: "FR76 …" }
    ],
    destinataire: v => [v.proprio, v.adresseproprio],
    objet: v => `Restitution du dépôt de garantie, logement ${v.logement}`,
    corps: v => `Madame, Monsieur,\n\nJ'ai quitté le logement situé ${v.logement} et vous ai remis les clés le ${v.dateremise}. Mon dépôt de garantie s'élève à ${v.montant}.\n\nÀ ce jour, ce dépôt ne m'a pas été restitué alors que le délai prévu par la loi est écoulé. Je vous demande donc de bien vouloir me le restituer sans délai, par virement sur le compte suivant : ${v.rib}.\n\nÀ défaut de restitution, je me réserve le droit de saisir la commission départementale de conciliation ou la juridiction compétente.\n\nJe vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.`,
    conseils: ["Envoie ce courrier en **recommandé avec accusé de réception**.", "Joins la copie de l'**état des lieux de sortie**.", "Vérifie le délai applicable à ta situation (il dépend de l'état des lieux de sortie)."]
  },
  {
    id: "resiliation-abonnement", titre: "Résilier un abonnement", quand: "Tu veux arrêter un abonnement (téléphone, salle de sport, streaming…).", guide: "abonnements",
    champs: [
      { id: "societe", label: "Nom de l'entreprise", ex: "FitClub" },
      { id: "adressesoc", label: "Adresse de l'entreprise", ex: "10 avenue de la Gare, 75010 Paris" },
      { id: "numero", label: "Numéro de client ou de contrat", ex: "123456" },
      { id: "date", label: "Date souhaitée de fin de contrat", ex: "31 décembre 2026" }
    ],
    destinataire: v => [v.societe, v.adressesoc],
    objet: v => `Résiliation de l'abonnement n° ${v.numero}`,
    corps: v => `Madame, Monsieur,\n\nJe vous informe de ma décision de résilier l'abonnement n° ${v.numero} souscrit auprès de votre société.\n\nConformément aux conditions du contrat, cette résiliation prendra effet le ${v.date}. Je vous demande de bien vouloir m'en confirmer la prise en compte par écrit et de cesser tout prélèvement à compter de cette date.\n\nJe vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.`,
    conseils: ["Si le site propose un **bouton de résiliation en ligne**, utilise-le et garde la capture d'écran de confirmation.", "Vérifie le **préavis** prévu par ton contrat.", "En cas de prélèvement après résiliation, contacte ta banque."]
  },
  {
    id: "retractation-achat", titre: "Se rétracter d'un achat en ligne (14 jours)", quand: "Tu veux renoncer à un achat fait à distance dans les 14 jours.", guide: "achat-ligne",
    champs: [
      { id: "societe", label: "Nom du vendeur", ex: "Boutique Exemple" },
      { id: "adressesoc", label: "Adresse du vendeur", ex: "1 rue du Commerce, 33000 Bordeaux" },
      { id: "commande", label: "Numéro de commande", ex: "CMD-2026-1234" },
      { id: "datecommande", label: "Date de la commande ou de la livraison", ex: "10 octobre 2026" },
      { id: "produit", label: "Produit ou service concerné", ex: "Casque audio" }
    ],
    destinataire: v => [v.societe, v.adressesoc],
    objet: v => `Rétractation de la commande n° ${v.commande}`,
    corps: v => `Madame, Monsieur,\n\nJe vous informe par la présente de ma décision de me rétracter de la commande n° ${v.commande} passée le ${v.datecommande} et portant sur : ${v.produit}.\n\nJe vous demande de bien vouloir m'indiquer les modalités de retour du produit et de me rembourser l'intégralité des sommes versées, y compris les frais de livraison initiaux, dans les délais prévus par la loi.\n\nJe vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.`,
    conseils: ["Envoie-la **dans les 14 jours**. Un mail avec accusé de réception ou un recommandé donne une preuve.", "Certains produits sont exclus du droit de rétractation (produits personnalisés, denrées périssables…).", "Garde la **preuve d'envoi** du retour."]
  },
  {
    id: "reclamation-garantie", titre: "Réclamation : produit défectueux (garantie légale)", quand: "Un produit acheté est défectueux ou non conforme.", guide: "litige-conso",
    champs: [
      { id: "societe", label: "Nom du vendeur", ex: "Boutique Exemple" },
      { id: "adressesoc", label: "Adresse du vendeur", ex: "1 rue du Commerce, 33000 Bordeaux" },
      { id: "produit", label: "Produit concerné", ex: "Ordinateur portable" },
      { id: "dateachat", label: "Date d'achat", ex: "5 septembre 2026" },
      { id: "probleme", label: "Description du problème", ex: "L'écran ne s'allume plus", type: "textarea" },
      { id: "demande", label: "Ce que tu demandes", ex: "Réparation, remplacement ou remboursement" }
    ],
    destinataire: v => [v.societe, v.adressesoc],
    objet: v => `Réclamation : produit non conforme (${v.produit})`,
    corps: v => `Madame, Monsieur,\n\nJ'ai acheté auprès de votre société le ${v.dateachat} le produit suivant : ${v.produit}.\n\nCe produit présente le défaut suivant : ${v.probleme}.\n\nEn application de la garantie légale de conformité, je vous demande ${v.demande}. Je vous remercie de me répondre dans un délai raisonnable.\n\nÀ défaut de réponse satisfaisante, je saisirai le médiateur de la consommation et me réserve la possibilité d'engager d'autres démarches.\n\nJe vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.`,
    conseils: ["Joins la **facture** et des **photos** du défaut.", "Envoie le courrier en **recommandé** ou par un moyen qui laisse une trace.", "Si le vendeur ne répond pas, saisis le **médiateur de la consommation** (gratuit)."]
  },
  {
    id: "contestation-operation", titre: "Contester un paiement non autorisé auprès de sa banque", quand: "Un paiement par carte ou un prélèvement que tu n'as pas autorisé apparaît sur ton compte.", guide: "fraude-carte",
    champs: [
      { id: "banque", label: "Nom de ta banque", ex: "Ma Banque" },
      { id: "adressebanque", label: "Adresse de ton agence ou de ta banque", ex: "20 rue de la République, 69001 Lyon" },
      { id: "compte", label: "Numéro de compte (IBAN)", ex: "FR76 …" },
      { id: "operations", label: "Opérations contestées (date, montant, commerçant)", ex: "12/10/2026 : 49,90 € - SiteExemple.com", type: "textarea" }
    ],
    destinataire: v => [v.banque, v.adressebanque],
    objet: v => `Contestation d'opérations non autorisées, compte ${v.compte}`,
    corps: v => `Madame, Monsieur,\n\nJe constate sur mon compte ${v.compte} les opérations suivantes, que je n'ai pas autorisées :\n\n${v.operations}\n\nJ'ai fait opposition à ma carte bancaire dès que j'en ai eu connaissance. Je vous demande de bien vouloir me rembourser sans délai les sommes correspondantes, conformément aux dispositions applicables aux opérations de paiement non autorisées.\n\nJe reste à votre disposition pour tout complément d'information et vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.`,
    conseils: ["Fais **opposition à ta carte** avant tout, et signale la fraude dans ton application bancaire.", "Tu peux contester jusqu'à **13 mois** après le débit.", "Dépose plainte si tu as été victime d'une escroquerie ou d'un vol, et joins le récépissé."]
  },
  {
    id: "demission", titre: "Lettre de démission", quand: "Tu quittes ton emploi (CDI) et tu veux le notifier à ton employeur.", guide: "demission-fin-contrat",
    champs: [
      { id: "employeur", label: "Nom de l'employeur", ex: "Société Exemple" },
      { id: "adresseemp", label: "Adresse de l'employeur", ex: "15 rue de l'Industrie, 31000 Toulouse" },
      { id: "poste", label: "Ton poste", ex: "Assistant·e commercial·e" },
      { id: "preavis", label: "Durée de préavis", ex: "1 mois" },
      { id: "datefin", label: "Date de fin de contrat (fin du préavis)", ex: "30 novembre 2026" }
    ],
    destinataire: v => [v.employeur, v.adresseemp],
    objet: v => "Démission",
    corps: v => `Madame, Monsieur,\n\nPar la présente, je vous informe de ma décision de démissionner du poste de ${v.poste} que j'occupe au sein de votre société.\n\nMon contrat prendra fin à l'issue du préavis de ${v.preavis} prévu par mon contrat de travail ou ma convention collective, soit le ${v.datefin}.\n\nJe vous remercie de bien vouloir me remettre, à la fin de mon contrat, mon certificat de travail, mon solde de tout compte et l'attestation destinée à France Travail.\n\nJe vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.`,
    conseils: ["Remets-la **en main propre contre signature** ou envoie-la en **recommandé**.", "Vérifie ton **préavis** dans ton contrat ou ta convention collective.", "Avant de démissionner, vérifie l'effet sur tes droits au chômage."]
  },
  {
    id: "demande-documents-fin-contrat", titre: "Demander ses documents de fin de contrat", quand: "Ton contrat est terminé et ton employeur ne t'a pas remis tous tes documents.", guide: "demission-fin-contrat",
    champs: [
      { id: "employeur", label: "Nom de l'employeur", ex: "Société Exemple" },
      { id: "adresseemp", label: "Adresse de l'employeur", ex: "15 rue de l'Industrie, 31000 Toulouse" },
      { id: "datefin", label: "Date de fin de contrat", ex: "31 octobre 2026" }
    ],
    destinataire: v => [v.employeur, v.adresseemp],
    objet: v => "Demande de documents de fin de contrat",
    corps: v => `Madame, Monsieur,\n\nMon contrat de travail s'est terminé le ${v.datefin}. À ce jour, je n'ai pas reçu l'ensemble des documents qui doivent m'être remis à la fin de mon contrat.\n\nJe vous demande de bien vouloir m'adresser sans délai :\n- mon certificat de travail ;\n- l'attestation destinée à France Travail ;\n- mon solde de tout compte et mon dernier bulletin de paie.\n\nCes documents me sont nécessaires pour faire valoir mes droits.\n\nJe vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.`,
    conseils: ["Envoie-la en **recommandé** si l'employeur ne répond pas.", "Sans l'attestation, ton dossier France Travail est **bloqué** : insiste.", "Si l'employeur refuse, contacte l'inspection du travail."]
  },
  {
    id: "delai-paiement-impot", titre: "Demander un délai de paiement de son impôt", quand: "Tu ne peux pas payer ton impôt à la date limite.", guide: "paiement-impot",
    champs: [
      { id: "service", label: "Service des impôts (nom ou ville)", ex: "Service des impôts des particuliers de Lyon 3e" },
      { id: "adresseservice", label: "Adresse du service", ex: "Adresse indiquée sur ton avis" },
      { id: "numfiscal", label: "Numéro fiscal", ex: "13 chiffres" },
      { id: "montant", label: "Montant à payer", ex: "320 €" },
      { id: "proposition", label: "Ta proposition de paiement", ex: "Paiement en 6 mensualités de 55 €", type: "textarea" },
      { id: "motif", label: "Raison de ta difficulté", ex: "Perte d'emploi depuis septembre", type: "textarea" }
    ],
    destinataire: v => [v.service, v.adresseservice],
    objet: v => `Demande de délai de paiement, numéro fiscal ${v.numfiscal}`,
    corps: v => `Madame, Monsieur,\n\nJe vous écris au sujet de mon impôt de ${v.montant}. Je rencontre actuellement des difficultés financières : ${v.motif}.\n\nCes difficultés ne me permettent pas de régler la totalité de cette somme à la date limite. Je vous demande donc de bien vouloir m'accorder un délai de paiement et vous propose l'échéancier suivant : ${v.proposition}.\n\nJe joins à ce courrier les justificatifs de ma situation et reste à votre disposition pour tout complément.\n\nJe vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.`,
    conseils: ["Fais la demande **avant la date limite**, par la messagerie de ton espace particulier si possible.", "Joins des **justificatifs** (ressources, charges, courrier de France Travail…).", "En cas de difficulté grave, demande aussi une **remise gracieuse**."]
  },
  {
    id: "demande-donnees-cnil", titre: "Demander l'accès ou l'effacement de ses données personnelles", quand: "Tu veux savoir ce qu'un site sait de toi ou demander la suppression de tes données.", guide: "donnees-perso",
    champs: [
      { id: "organisme", label: "Nom du site ou de l'organisme", ex: "Site Exemple" },
      { id: "adresseorg", label: "Adresse ou mail du délégué à la protection des données", ex: "dpo@siteexemple.fr" },
      { id: "compte", label: "Identifiant ou mail du compte concerné", ex: "camille.martin@exemple.fr" },
      { id: "droit", label: "Ce que tu demandes", ex: "L'effacement de mes données et de mon compte", type: "textarea" }
    ],
    destinataire: v => [v.organisme, v.adresseorg],
    objet: v => "Exercice de mes droits sur mes données personnelles",
    corps: v => `Madame, Monsieur,\n\nEn application du règlement général sur la protection des données (RGPD) et de la loi Informatique et Libertés, je vous demande : ${v.droit}.\n\nLe compte concerné est associé à l'identifiant suivant : ${v.compte}.\n\nJe vous remercie de me confirmer par écrit la prise en compte de ma demande dans le délai légal d'un mois. À défaut de réponse satisfaisante, je saisirai la CNIL.\n\nJe vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.`,
    conseils: ["Joins un **justificatif d'identité** si l'organisme en demande un.", "Envoie ta demande à l'adresse du **délégué à la protection des données** indiquée dans la politique de confidentialité.", "Sans réponse sous un mois, tu peux **saisir la CNIL**."]
  }
];
