const CACHE_NAME = 'stj-cert-v1';
const ASSETS = [
  './',
  './index.html',
  './pdf-lib.min.js',
  './download.min.js',
  './gp.pdf',
  './cm.pdf',
  './logo.svg',
  './icon.svg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)));
});