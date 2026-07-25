/* MDreieck Campo · Service Worker
   Guarda la app en el teléfono para que abra sin internet.

   ESTRATEGIA:
   - Archivos propios (html, js, css): primero la red, caché de respaldo.
     Así, con señal SIEMPRE se usa la versión más reciente y no hay que
     borrar caché a mano. Sin señal, se usa lo guardado.
   - Iconos y jsPDF: primero la caché (no cambian).                    */

const CACHE = 'mdk-campo-v19';

const ARCHIVOS = [
  './',
  './index.html',
  './sitio.html',
  './evidencias.html',
  './app.js',
  './estilos.css',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'
];

self.addEventListener('install', ev => {
  ev.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await Promise.all(ARCHIVOS.map(url =>
      cache.add(new Request(url, { cache: 'reload' })).catch(() => {})
    ));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', ev => {
  ev.waitUntil((async () => {
    const claves = await caches.keys();
    await Promise.all(claves.map(k => k === CACHE ? null : caches.delete(k)));
    await self.clients.claim();
  })());
});

/* ¿es un archivo nuestro que puede cambiar? */
function esPropioActualizable(req) {
  if (new URL(req.url).origin !== self.location.origin) return false;
  return /\.(html|js|css|json)$/i.test(new URL(req.url).pathname) ||
         req.mode === 'navigate';
}

self.addEventListener('fetch', ev => {
  const req = ev.request;
  if (req.method !== 'GET') return;
  if (req.url.indexOf('script.google.com') !== -1) return;   // nunca cachear el backend

  /* Red primero: garantiza que los cambios se vean al abrir con señal */
  if (esPropioActualizable(req)) {
    ev.respondWith((async () => {
      try {
        const res = await fetch(req, { cache: 'no-cache' });
        if (res && res.ok) {
          const cache = await caches.open(CACHE);
          cache.put(req, res.clone());
        }
        return res;
      } catch (e) {
        return (await caches.match(req)) ||
               (await caches.match('./index.html')) ||
               new Response('Sin conexión', { status: 503 });
      }
    })());
    return;
  }

  /* Caché primero: imágenes, fuentes, jsPDF */
  ev.respondWith((async () => {
    const hit = await caches.match(req);
    if (hit) return hit;
    try {
      const res = await fetch(req);
      if (res && (res.ok || res.type === 'opaque')) {
        const cache = await caches.open(CACHE);
        cache.put(req, res.clone());
      }
      return res;
    } catch (e) {
      return new Response('', { status: 504 });
    }
  })());
});
