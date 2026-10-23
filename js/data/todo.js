/* Questionnaire de la to-do admin. Chaque option ajoute des étiquettes (tags) ; les guides qui portent un champ « todo » s'affichent
   quand l'une de leurs étiquettes « si » correspond (et qu'aucune étiquette « sauf » ne correspond). Tout reste sur l'appareil. */
P.TODO_QUESTIONS = [
  {
    id: "statut", titre: "Tu es plutôt…", aide: "Choisis ta situation principale en ce moment.", multi: false,
    options: [
      { id: "lyceen", label: "Lycéen·ne", sous: "Seconde, première, terminale ou lycée pro", tags: ["lyceen"] },
      { id: "etudiant", label: "Étudiant·e", sous: "Supérieur, à temps plein", tags: ["etudiant"] },
      { id: "alternant", label: "Alternant·e", sous: "Apprentissage ou contrat de professionnalisation", tags: ["alternant", "salarie"] },
      { id: "salarie", label: "Salarié·e", sous: "CDI, CDD, intérim", tags: ["salarie"] },
      { id: "chomeur", label: "En recherche d'emploi", sous: "Inscrit·e ou non à France Travail", tags: ["chomeur", "p-emploi"] },
      { id: "independant", label: "Indépendant·e ou freelance", sous: "Micro-entrepreneur ou société", tags: ["independant"] },
      { id: "nini", label: "Ni en études ni en emploi", sous: "Pour le moment, sans activité", tags: ["nini", "chomeur", "p-emploi"] }
    ]
  },
  {
    id: "age", titre: "Quel âge as-tu ?", aide: "Certaines démarches dépendent de ton âge.", multi: false,
    options: [
      { id: "moins16", label: "Moins de 16 ans", tags: ["a15", "mineur"] },
      { id: "16-17", label: "16 ou 17 ans", tags: ["a16", "mineur"] },
      { id: "18-20", label: "18 à 20 ans", tags: ["a18"] },
      { id: "21-25", label: "21 à 25 ans", tags: ["a18", "a21"] },
      { id: "26plus", label: "26 ans ou plus", tags: ["a18", "a21", "a26"] }
    ]
  },
  {
    id: "logement", titre: "Où habites-tu ?", aide: "Ton logement change les aides et les démarches.", multi: false,
    options: [
      { id: "parents", label: "Chez mes parents", tags: ["parents"] },
      { id: "locataire", label: "Dans un logement dont je suis locataire", sous: "Seul·e ou en couple", tags: ["locataire"] },
      { id: "coloc", label: "En colocation", tags: ["coloc", "locataire"] },
      { id: "crous", label: "En résidence étudiante ou Crous", tags: ["locataire"] },
      { id: "cherche", label: "Je cherche un logement", tags: ["cherche-logement"] }
    ]
  },
  {
    id: "revenus", titre: "D'où vient ton argent ?", aide: "Coche tout ce qui te concerne.", multi: true,
    options: [
      { id: "job", label: "Un job étudiant ou d'été", tags: ["r-job"] },
      { id: "stage", label: "Un stage gratifié", tags: ["r-stage"] },
      { id: "salaire", label: "Un salaire", tags: ["r-salaire"] },
      { id: "indep", label: "Mon activité indépendante", tags: ["r-indep", "independant"] },
      { id: "plateformes", label: "Vente ou location sur des plateformes", sous: "Vinted, Leboncoin, Airbnb…", tags: ["r-plateforme"] },
      { id: "bourse", label: "Une bourse", tags: ["b-bourse"] },
      { id: "aucun", label: "Pas de revenu pour le moment", tags: ["r-aucun"] }
    ]
  },
  {
    id: "projets", titre: "Qu'est-ce que tu prépares ?", aide: "Choisis tes projets des prochains mois.", multi: true,
    options: [
      { id: "logement", label: "Trouver un logement", tags: ["cherche-logement"] },
      { id: "emploi", label: "Trouver un emploi ou un stage", tags: ["p-emploi"] },
      { id: "entreprise", label: "Créer mon entreprise", tags: ["p-entreprise"] },
      { id: "permis", label: "Passer le permis de conduire", tags: ["p-permis"] },
      { id: "voiture", label: "Acheter un véhicule", tags: ["p-voiture", "p-permis"] },
      { id: "etranger", label: "Partir à l'étranger", sous: "Études, stage, travail, vacances-travail : on précise juste après", tags: ["p-etranger"] },
      { id: "retour", label: "Rentrer en France après un séjour à l'étranger", tags: ["p-retour"] },
      { id: "frontalier", label: "Travailler de l'autre côté de la frontière", sous: "Suisse, Luxembourg, Belgique, Allemagne…", tags: ["p-frontalier"] },
      { id: "couple", label: "Me pacser ou me marier", tags: ["p-couple"] },
      { id: "enfant", label: "Attendre ou accueillir un enfant", tags: ["p-enfant"] },
      { id: "asso", label: "Lancer une association", tags: ["p-asso"] },
      { id: "rien", label: "Rien de précis", tags: [] }
    ]
  },
  {
    id: "situation", titre: "Une situation particulière ?", aide: "Facultatif : cela ajoute des démarches utiles à ton cas. Rien n'est envoyé.", multi: true,
    options: [
      { id: "etranger", label: "Étudiant·e étranger·ère en France", tags: ["etranger"] },
      { id: "sante", label: "Besoin d'un soutien pour ma santé", sous: "Santé mentale ou physique", tags: ["p-sante"] },
      { id: "victime", label: "Je suis victime de harcèlement, de violences ou d'une arnaque", tags: ["p-victime"] },
      { id: "dette", label: "J'ai des difficultés d'argent ou des dettes", tags: ["p-dette"] },
      { id: "handicap", label: "Je suis en situation de handicap ou j'ai une maladie chronique", tags: ["handicap"] },
      { id: "aucune", label: "Aucune de ces situations", tags: [] }
    ]
  },
  {
    id: "destination", titre: "Si tu pars à l'étranger, c'est pour quoi et où ?", aide: "Facultatif : passe cette question si tu ne pars pas. Cela affiche les guides propres à ton projet.", multi: true,
    options: [
      { id: "ue", label: "Travailler ou chercher un emploi dans l'UE", sous: "Allemagne, Espagne, Belgique, Italie…", tags: ["p-etranger", "p-ue"] },
      { id: "uk", label: "Royaume-Uni", sous: "Depuis le Brexit : ETA, visa", tags: ["p-etranger", "p-uk"] },
      { id: "us", label: "États-Unis", tags: ["p-etranger", "p-us"] },
      { id: "ca", label: "Canada", tags: ["p-etranger", "p-ca"] },
      { id: "pvt", label: "Un an en vacances-travail (PVT)", sous: "Australie, Nouvelle-Zélande, Japon, Canada…", tags: ["p-etranger", "p-pvt"] },
      { id: "etudes", label: "Études, échange ou stage à l'étranger", sous: "Erasmus+, aides à la mobilité", tags: ["p-etranger", "p-etudes-etranger"] },
      { id: "monde", label: "Un autre pays", tags: ["p-etranger"] },
      { id: "non", label: "Je ne pars pas à l'étranger", tags: [] }
    ]
  }
];
