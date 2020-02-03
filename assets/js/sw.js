const cacheName = 'tram-v1'
const staticAssets = [
  './'
];
self.addEventListener('install', async e {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});
self.addEventListener('activate', e {
  self.clients.claim();
});
