self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('qa-cache').then(cache => cache.addAll([
      './shortcut.html',          // use relative paths
      './manifest.json',
      './icons/icon-192.png',
      './icons/icon-512.png'
    ]))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
