const le = true;
if (le) console.log('Service Worker Start');

if (le) console.log('import workbox');
importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js");

if (le) console.log('skipWaiting');
workbox.core.skipWaiting();

if (le) console.log('clientsClaim');
workbox.core.clientsClaim();

self.addEventListener('install', function(event) {
    if (le) console.log('Service Worker Install', event);
});

self.addEventListener('activate', function(event) {
    if (le) console.log('Service Worker Activate', event);
});

if (le) console.log('Service Worker End');