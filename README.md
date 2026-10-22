# Paperasse

L'administration française expliquée aux jeunes : impôts, travail, logement, santé, argent, papiers d'identité, droits et litiges.
Plus de 80 guides pas à pas, une to-do personnalisée, des lettres types, un annuaire « qui contacter », un calendrier admin et toutes les aides.
Site statique (HTML, CSS, JavaScript sans dépendance), gratuit, sans compte, sans traceur. Même famille visuelle qu'[Aiguillage](https://julomasu.github.io/aiguillage/).

## Lancer le site

```bash
python3 -m http.server 8000   # puis ouvrir http://localhost:8000
```

## Organisation

| Fichier | Contenu |
|---|---|
| `js/data/guides-*.js` | Les guides, un fichier par thème (impôts, entreprise, travail, logement, santé, argent, papiers, droits) et `guides-complements.js` pour les ajouts |
| `js/data/meta-guides.js` | Profil (`pour`), moment (`quand`), place dans la to-do (`todo`) et reclassement des premiers guides |
| `js/data/todo.js` | Questions de la to-do et étiquettes associées |
| `js/data/evenements.js` | Situations de vie (« J'ai 18 ans », « Je cherche un logement »…) |
| `js/data/documents.js`, `contacts.js`, `lettres.js`, `aides.js`, `calendrier.js`, `vraifaux.js`, `numeros.js`, `glossaire*.js` | Les ressources transverses |
| `js/app.js` | État (localStorage), routeur et sous-navigation, recherche, mini-markdown, réglages |
| `js/pages.js` | Accueil, guides, thèmes, fiche guide, suivi, glossaire, à propos |
| `js/pages-parcours.js` | To-do personnalisée et situations de vie |
| `js/pages-ressources.js` | Aides, papiers, organismes, calendrier, numéros, lettres types, vrai ou faux |
| `js/outils.js` | Calculateurs et **toutes les valeurs chiffrées 2026** (`P.TAUX`, `P.SEUILS_JOB`, `P.ACRE_REDUCTION`, `P.calcStage`, `P.calcPreavis`) |

## Ajouter ou corriger un guide

Un guide est un objet : `id`, `theme`, `titre`, `accroche`, `temps`, `cout`, `pour[]`, `quand`, `mots[]`, `todo{si[], sauf?[], prio, pourquoi}`, `enBref[]`, `etapes[{t, d, lien?}]`, `pieges[]`, `liens[{label, url}]`, `sources[]`, `verifie`, `voir[]`, `outil?`.
Dans les textes : `**gras**`, `[texte](https://…)`, `[texte](#guide-autre-id)`, `[texte](#lettre-id)`, `[[terme|texte]]` (lien vers le glossaire), listes avec `- `, paragraphes séparés par une ligne vide.

Les étiquettes de `todo.si` et `todo.sauf` viennent des options du questionnaire (`js/data/todo.js`), plus `tous`.

## Contrôles avant de publier

1. **Intégrité des données** : chaque guide cité dans une situation de vie, une aide, un calendrier, un vrai ou faux, un papier ou une lettre doit exister ; chaque lien interne `#guide-…` ou `#lettre-…` aussi ; chaque étiquette de to-do doit venir du questionnaire.
2. **Liens officiels** : ouvrir chaque lien externe ajouté. Un numéro de fiche Service-Public peut changer ou disparaître : contrôle-le à la main avant de publier.
3. **Parcours** : ouvrir chaque page sur ordinateur et sur mobile, en clair et en sombre.

## Règle d'or : chaque chiffre a une source

Aucun montant, plafond ou taux ne doit être écrit sans être vérifié sur une page officielle (Service-Public, impots.gouv.fr, Urssaf, Caf, ameli, ANTS…), citée dans `sources` avec la date `verifie`.
**Une fois par an** (janvier, après la loi de finances, et juillet) : revoir `P.TAUX`, `P.SEUILS_JOB`, le barème de la fiche « Première déclaration », l'Acre, le passeport, la prime d'activité, la gratification de stage, le Smic, la CVEC, le Livret A, le service civique, le calendrier de la bourse.

## Publier

Chaque `push` sur `main` publie le site sur GitHub Pages (`.github/workflows/pages.yml`).
`python3 outils/apercu.py` génère `apercu.html` pour une prévisualisation sur claude.ai.

## Renseigner l'éditeur et l'audience

Dans `js/app.js` (`P.CONFIG`) : identité de l'éditeur pour les mentions légales et code GoatCounter (mesure d'audience sans cookie). Laissés vides, la page « Mentions légales » affiche un avertissement et aucun script d'audience n'est chargé.

## Limites

Les fiches décrivent le cas général. Aucun conseil juridique, fiscal ou comptable personnalisé.
