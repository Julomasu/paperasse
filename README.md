# Paperasse

L'administration française expliquée aux jeunes : première déclaration d'impôts, création d'entreprise, logement, CAF, santé, papiers d'identité.
Site statique (HTML, CSS, JavaScript sans dépendance), gratuit, sans compte, sans traceur. Même famille visuelle qu'[Aiguillage](https://julomasu.github.io/aiguillage/).

## Lancer le site

```bash
python3 -m http.server 8000   # puis ouvrir http://localhost:8000
```

## Organisation

| Dossier | Contenu |
|---|---|
| `js/data/guides-*.js` | Les guides, un fichier par thème (impôts, entreprise, logement, papiers) |
| `js/data/glossaire.js` | Le glossaire |
| `js/app.js` | État (localStorage), routeur, recherche, mini-markdown |
| `js/pages.js` | Accueil, thèmes, fiche guide, suivi, glossaire, à propos |
| `js/outils.js` | Calculateurs et **toutes les valeurs chiffrées 2026** (`P.TAUX`, `P.SEUILS_JOB`, `P.ACRE_REDUCTION`) |

## Ajouter ou corriger un guide

Un guide est un objet : `id`, `theme`, `titre`, `accroche`, `temps`, `cout`, `enBref[]`, `etapes[{t, d, lien?}]`, `pieges[]`, `liens[{label, url}]`, `sources[]`, `verifie`, `voir[]`, `outil?`.
Dans les textes : `**gras**`, `[texte](https://…)`, `[texte](#guide-autre-id)`, `[[terme|texte]]` (lien vers le glossaire), listes avec `- `, paragraphes séparés par une ligne vide.

## Règle d'or : chaque chiffre a une source

Aucun montant, plafond ou taux ne doit être écrit sans être vérifié sur une page officielle (Service-Public, impots.gouv.fr, Urssaf, Caf, ANTS…), citée dans `sources` avec la date `verifie`.
**Une fois par an** (janvier, après la loi de finances, et juillet) : revoir `P.TAUX`, `P.SEUILS_JOB`, le barème de la fiche « Première déclaration », l'Acre, le passeport, la prime d'activité.

## Publier

Chaque `push` sur `main` publie le site sur GitHub Pages (`.github/workflows/pages.yml`).
`python3 outils/apercu.py` génère `apercu.html` pour une prévisualisation sur claude.ai.

## Limites

Les fiches décrivent le cas général. Aucun conseil juridique, fiscal ou comptable personnalisé.
