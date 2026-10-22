/* Service worker : rend le site installable et utilisable hors ligne.
   Réseau d'abord (pour recevoir les mises à jour des guides), cache en secours. */
const CACHE = "paperasse-v3";
const ESSENTIEL = [
  "./", "index.html", "manifest.webmanifest", "css/style.css",
  "js/data/guides-impots.js", "js/data/guides-entreprise.js", "js/data/guides-travail.js", "js/data/guides-logement.js", "js/data/guides-sante.js", "js/data/guides-argent.js", "js/data/guides-papiers.js", "js/data/guides-droits.js", "js/data/guides-complements.js", "js/data/meta-guides.js", "js/data/glossaire.js", "js/data/glossaire-plus.js", "js/data/evenements.js", "js/data/documents.js", "js/data/contacts.js", "js/data/lettres.js", "js/data/aides.js", "js/data/calendrier.js", "js/data/vraifaux.js", "js/data/numeros.js", "js/data/todo.js",
  "js/app.js", "js/audience.js", "js/pages-legal.js", "css/fonts.css", "fonts/barlow-latin-400-normal.woff2", "fonts/barlow-latin-500-normal.woff2", "fonts/barlow-latin-600-normal.woff2", "fonts/barlow-latin-700-normal.woff2", "fonts/barlow-condensed-latin-700-normal.woff2", "fonts/barlow-condensed-latin-800-normal.woff2", "js/pages.js", "js/pages-parcours.js", "js/pages-ressources.js", "js/outils.js", "icones/icone-192.png"
];

self.addEventListener("install", ev => {
  ev.waitUntil(caches.open(CACHE).then(c => c.addAll(ESSENTIEL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", ev => {
  ev.waitUntil(caches.keys()
    .then(cles => Promise.all(cles.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", ev => {
  const url = new URL(ev.request.url);
  if (ev.request.method !== "GET" || url.origin !== location.origin) return;
  ev.respondWith(fetch(ev.request)
    .then(r => { if (r.ok) { const copie = r.clone(); caches.open(CACHE).then(c => c.put(ev.request, copie)); } return r; })
    .catch(() => caches.match(ev.request).then(r => r || caches.match("index.html"))));
});
