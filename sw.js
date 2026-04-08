/**
 * Service Worker — Taiwan Travel Itinerary
 * Strategy: Cache-first for the HTML page, network-first for everything else.
 */
const CACHE_NAME = 'taiwan-travel-v1';
const PRECACHE = [
  './taipei-itinerary-v13.html'
];

/* Install: pre-cache the main page */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});

/* Activate: clean up old caches */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

/* Fetch: cache-first for the main HTML, network-first for external requests */
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  /* Only handle same-origin requests */
  if (url.origin !== location.origin) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200) return response;
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      });
    })
  );
});
