// Кэширует оболочку сайта, чтобы он открывался без интернета (например, в магазине).
const CACHE = "nashe-menu-v4";
const SHELL = ["./", "index.html", "firebase-config.js", "manifest.webmanifest", "icons/icon.svg", "icons/icon-192.png", "data/recipes.json"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  // Сначала сеть, чтобы обновления приходили сразу; без сети — из кэша.
  e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; }).catch(() => caches.match(e.request).then(r => r || caches.match("index.html"))));
});
