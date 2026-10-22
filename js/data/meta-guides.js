/* Métadonnées des guides écrits en premier (profil, moment, place dans la to-do) et reclassement par thème.
   Les guides plus récents portent ces champs directement. Ce fichier doit être chargé après tous les guides. */
(function () {
  const META = {
    /* Impôts */
    "premiere-declaration": { pour: ["lyceen", "etudiant", "alternant", "salarie"], quand: "Chaque printemps, dès que tu as perçu des revenus ou que tu veux déclarer séparément de tes parents.", todo: { si: ["a18", "r-job", "r-salaire", "r-stage"], prio: 1, pourquoi: "À partir de 18 ans, tu dois déclarer tes revenus, même modestes." } },
    "rattachement": { pour: ["etudiant", "alternant"], quand: "Au moment de la déclaration, si tu as moins de 21 ans (ou moins de 25 ans et étudiant·e).", todo: { si: ["etudiant", "a18"], sauf: ["salarie"], prio: 2, pourquoi: "Rattaché·e ou non, le choix change l'impôt de la famille et tes aides." } },
    "job-etudiant-impots": { pour: ["lyceen", "etudiant", "alternant"], quand: "Au moment de la déclaration, pour un job d'été, un stage ou un job à l'année.", todo: { si: ["r-job", "r-stage"], prio: 2, pourquoi: "Un job étudiant est souvent non imposable : vérifie avant de payer ou de te tromper." } },
    "apprenti-impots": { pour: ["alternant"], quand: "Au moment de la déclaration, si tu as un contrat d'apprentissage.", todo: { si: ["alternant"], prio: 2, pourquoi: "Le salaire d'apprenti est exonéré jusqu'à un plafond : il faut quand même le déclarer." } },
    "prelevement-source": { pour: ["alternant", "salarie", "independant"], quand: "À ton premier salaire, puis à chaque changement de situation.", todo: { si: ["r-salaire", "salarie", "alternant"], prio: 2, pourquoi: "Ton taux de prélèvement peut être trop haut ou trop bas." } },
    "avis-imposition": { pour: ["etudiant", "alternant", "salarie"], quand: "En été, après ta déclaration.", todo: { si: ["a18", "cherche-logement", "b-bourse"], prio: 2, pourquoi: "On te le demande pour le logement, la bourse et les aides." } },
    "corriger-declaration": { pour: ["etudiant", "alternant", "salarie", "independant"], quand: "Dès que tu constates une erreur ou un oubli." },

    /* Entreprise */
    "choisir-statut": { pour: ["etudiant", "independant"], quand: "Avant de créer quoi que ce soit.", todo: { si: ["p-entreprise"], prio: 1, pourquoi: "Le statut décide de tes impôts, de tes cotisations et de ta protection." } },
    "creer-micro": { pour: ["etudiant", "independant", "chomeur"], quand: "Quand tu veux facturer ton premier client.", todo: { si: ["p-entreprise", "independant"], prio: 1, pourquoi: "Créer une micro-entreprise est gratuit et se fait en ligne." } },
    "cotisations-micro": { pour: ["independant", "etudiant"], quand: "Avant ta première facture, pour savoir combien il te restera.", todo: { si: ["p-entreprise", "independant"], prio: 2, pourquoi: "Tes cotisations dépendent de ton activité et de ta date de création." } },
    "acre-2026": { pour: ["independant", "chomeur", "etudiant"], quand: "À la création de ton entreprise, ou avant.", todo: { si: ["p-entreprise"], prio: 2, pourquoi: "L'Acre a changé en 2026 : vérifie ton taux avant de créer." } },
    "tva-micro": { pour: ["independant"], quand: "Avant ta première facture, puis chaque année.", todo: { si: ["independant"], prio: 2, pourquoi: "La TVA peut devenir obligatoire si tu dépasses les seuils." } },
    "impots-micro": { pour: ["independant"], quand: "Chaque printemps.", todo: { si: ["independant"], prio: 1, pourquoi: "Ton chiffre d'affaires doit aussi apparaître dans ta déclaration de revenus." } },
    "creer-societe": { pour: ["independant", "etudiant"], quand: "Quand la micro-entreprise ne suffit plus, ou avant de lever des fonds.", todo: { si: ["p-entreprise"], prio: 3, pourquoi: "Pour un projet plus ambitieux, une société protège mieux ton patrimoine." } },
    "pieges-entrepreneur": { pour: ["independant", "etudiant"], quand: "Le premier mois d'activité.", todo: { si: ["p-entreprise", "independant"], prio: 2, pourquoi: "Les erreurs du premier mois sont les plus fréquentes." } },

    /* Logement */
    "trouver-logement": { pour: ["lyceen", "etudiant", "alternant", "salarie"], quand: "Dès que tu sais où tu étudies ou travailles : 3 à 5 mois avant.", todo: { si: ["cherche-logement"], prio: 1, pourquoi: "Les meilleures offres partent tôt, surtout avant la rentrée." } },
    "apl-etudiant": { pour: ["etudiant", "alternant", "salarie"], quand: "Dès la signature de ton bail.", todo: { si: ["locataire", "cherche-logement"], prio: 1, pourquoi: "L'APL peut réduire ton loyer de plusieurs dizaines d'euros par mois." } },
    "bail-etat-lieux": { pour: ["etudiant", "alternant", "salarie"], quand: "Avant de signer et le jour de l'entrée dans les lieux.", todo: { si: ["locataire", "cherche-logement"], prio: 2, pourquoi: "Un bon état des lieux protège ton dépôt de garantie." } },

    /* Santé (reclassés) */
    "secu-18-ans": { theme: "sante", pour: ["lyceen", "etudiant", "etranger"], quand: "À 18 ans, ou à ton arrivée en France.", todo: { si: ["a18", "etranger"], prio: 1, pourquoi: "À 18 ans, tu es rattaché·e à ta propre carte Vitale." } },
    "mutuelle-c2s": { theme: "sante", pour: ["etudiant", "alternant", "salarie", "chomeur"], quand: "À la rentrée, ou quand tes ressources changent.", todo: { si: ["a18", "etudiant"], prio: 2, pourquoi: "Une mutuelle ou la C2S évite de payer les soins de ta poche." } },

    /* Argent / travail (reclassés) */
    "prime-activite": { theme: "argent", pour: ["etudiant", "alternant", "salarie"], quand: "Dès que ton revenu d'activité dépasse un certain seuil.", todo: { si: ["r-job", "r-salaire", "alternant"], prio: 2, pourquoi: "Si tu travailles avec un petit revenu, la Caf peut te verser un complément." } },
    "cej": { theme: "travail", pour: ["chomeur", "etudiant"], quand: "Si tu as entre 16 et 25 ans, sans emploi ni formation.", todo: { si: ["nini", "chomeur"], prio: 2, pourquoi: "Le contrat d'engagement jeune comprend un accompagnement et une allocation sous conditions." } },

    /* Papiers */
    "carte-identite-passeport": { pour: ["lyceen", "etudiant"], quand: "Plusieurs mois avant un examen ou un voyage.", todo: { si: ["a16", "a18", "p-etranger"], prio: 2, pourquoi: "Les délais en mairie peuvent atteindre plusieurs semaines." } },
    "recensement-jdc-vote": { pour: ["lyceen", "mineur"], quand: "Dès 16 ans, puis à 18 ans.", todo: { si: ["a15", "a16", "a18"], prio: 1, pourquoi: "Le recensement à 16 ans déclenche la JDC et l'inscription d'office sur les listes électorales." } },
    "permis": { pour: ["lyceen", "etudiant"], quand: "Dès 15 ans pour la conduite accompagnée, sinon à 17-18 ans.", todo: { si: ["p-permis"], prio: 2, pourquoi: "Le financement du permis se prépare : il existe des aides." } },
    "changement-adresse": { pour: ["etudiant", "alternant", "salarie"], quand: "Dans le mois qui suit ton déménagement.", todo: { si: ["locataire", "cherche-logement"], prio: 2, pourquoi: "Plusieurs organismes doivent connaître ta nouvelle adresse." } },
    "arnaques": { pour: ["lyceen", "etudiant", "alternant", "salarie"], quand: "Avant d'être démarché·e, et dès un doute.", todo: { si: ["tous"], prio: 3, pourquoi: "Savoir les repérer te protège de la plupart des arnaques." } },
    "comptes-a-creer": { pour: ["lyceen", "etudiant"], quand: "À 18 ans, ou avant ta première démarche en ligne.", todo: { si: ["a18"], prio: 2, pourquoi: "Ameli, impots.gouv, Caf, France Travail : les comptes à ouvrir une fois pour toutes." } }
  };

  (P.GUIDES || []).forEach(g => { const m = META[g.id]; if (m) Object.assign(g, m); });
})();
