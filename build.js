// Builds dist/: a stand-alone, installable, offline copy of Pasado for any static host
// (GitHub Pages, Netlify, Cloudflare Pages). Run: node build.js
const fs = require('fs');
const path = require('path');

const root = __dirname;
const out = path.join(root, 'dist');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

const page = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const cut = page.indexOf('</style>') + '</style>'.length;
const head = page.slice(0, cut);
const body = page.slice(cut);
const version = 'pasado-' + Date.now().toString(36);

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#13223a">
<meta name="description" content="Offline reviewer for the 2027 Philippine Civil Service Exam: mock exams, drills, and no-calculator math lessons.">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" type="image/png" href="icons/icon-192.png">
<link rel="apple-touch-icon" href="icons/icon-180.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Pasado">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}</style>
${head}
</head>
<body>
${body}
<script>if ('serviceWorker' in navigator) addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));</script>
</body>
</html>
`;
fs.writeFileSync(path.join(out, 'index.html'), html);

for (const f of ['bank.js', 'bank2.js', 'lessons.js', 'game.js', 'hacks.js']) fs.copyFileSync(path.join(root, f), path.join(out, f));
fs.mkdirSync(path.join(out, 'vendor'));
for (const f of ['gsap.min.js', 'swiper-bundle.min.js']) fs.copyFileSync(path.join(root, 'vendor', f), path.join(out, 'vendor', f));
fs.mkdirSync(path.join(out, 'icons'));
for (const f of fs.readdirSync(path.join(root, 'icons'))) fs.copyFileSync(path.join(root, 'icons', f), path.join(out, 'icons', f));

fs.writeFileSync(path.join(out, 'manifest.webmanifest'), JSON.stringify({
  name: 'Pasado CSE Reviewer',
  short_name: 'Pasado',
  description: 'Reviewer for the 2027 Philippine Civil Service Exam',
  start_url: './',
  scope: './',
  display: 'standalone',
  orientation: 'portrait',
  background_color: '#e8eeeb',
  theme_color: '#13223a',
  icons: [
    { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
    { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    { src: 'icons/maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
  ]
}, null, 2));

fs.writeFileSync(path.join(out, 'sw.js'), `// Offline cache for Pasado. The version changes on every build so phones pick up updates.
const V = '${version}';
const FONTS = 'pasado-fonts';
const ASSETS = ['./', 'index.html', 'bank.js', 'bank2.js', 'lessons.js', 'game.js', 'hacks.js', 'vendor/gsap.min.js', 'vendor/swiper-bundle.min.js', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-180.png', 'icons/maskable-512.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(V).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V && k !== FONTS).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const u = new URL(e.request.url);
  if (u.origin === location.origin) {
    // Network first so updates arrive, cache as the offline fallback.
    e.respondWith(fetch(e.request).then(res => { const cp = res.clone(); caches.open(V).then(c => c.put(e.request, cp)); return res; })
      .catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match('index.html'))));
  } else if (/fonts\\.(googleapis|gstatic)\\.com$/.test(u.host)) {
    e.respondWith(caches.open(FONTS).then(c => c.match(e.request).then(hit => hit || fetch(e.request).then(res => { c.put(e.request, res.clone()); return res; }))));
  }
});
`);

console.log('Built', out, version);
