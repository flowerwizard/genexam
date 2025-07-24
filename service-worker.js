self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('math-pwa-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './styles.css',
        './app.js',
        './manifest.json',
        './icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
