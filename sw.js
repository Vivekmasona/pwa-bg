self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('music-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/script.js',
        '/sw.js',
        'https://vfy.netlify.app/img/logo.png',
        'https://aac.saavncdn.com/180/4671f6303734fc7f7cf0569ba5e80873_12.mp4'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
