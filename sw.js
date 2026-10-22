/* Service worker : rend le site installable et utilisable hors ligne.
   Réseau d'abord (pour recevoir les mises à jour des guides), cache en secours. */
const CACHE = "paperasse-v1";
const ESSENTIEL = [
  "./", "index.html", "manifest.webmanifest", "css/style.css",
  "js/data/guides-impots.js", "js/data/guides-entreprise.js", "js/data/guides-logement.js", "js/data/guides-papiers.js", "js/data/glossaire.js",
  "js/app.js", "js/pages.js", "js/outils.js", "icones/icone-192.png"
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
