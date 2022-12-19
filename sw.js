;const staticCacheName = 'site-static';
const assets = [
  '/index.htm',
  '/js/app.js',
  '/css/style.css',
  'https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600&display=swap',
  'images/pic.jpg',
  'images/scroll-top-img.png',

];

// install event
self.addEventListener('install', evt => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  //console.log('service worker activated');
});

// fetch event
self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});
