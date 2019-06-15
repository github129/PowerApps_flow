const le = false;
if (le) console.log('Service Worker Start');

if (le) console.log('import workbox');
importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js");

/**
 *
 * @param {string} string
 * @return {*}
 */
function escapeRegExp(string) {
    return string.replace(/[.*+?^=!:${}()|[\]\/\\]/g, '\\$&');
}

var cacheId = 'imguma';
var rOrigin = new RegExp('^' + escapeRegExp(location.origin) + '(?:/[^.]+)(?:\\?.*)?$');
var rOriginStatic = new RegExp('^' + escapeRegExp(location.origin) + '(?:/static/.+)(?:\\?.*)?$');
var rCdnStatic = new RegExp('^' + escapeRegExp('https://storage.googleapis.com/xxxx.appspot.com/static/') + '.*');
var rGoogleFonts = new RegExp('^(?:' + ([
    escapeRegExp('https://fonts.googleapis.com/') + '.*',
    escapeRegExp('https://fonts.gstatic.com/') + '.*',
].join('|')) + ')$');

// workbox.navigationPreload.enable();
workbox.core.setCacheNameDetails({prefix: cacheId});

if (le) console.log('skipWaiting');
workbox.core.skipWaiting();

if (le) console.log('clientsClaim');
workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = (self.__precacheManifest || []).concat([
    {
        "url": "/",
        "revision": "22e0323b1442c8a76a45bc1180eb5d7f",
    },
    {
        "url": "/static/bundle.css?hash=aaff28c36147f34058261e0847ea0c1d",
    },
    {
        "url": "/static/bundle.js?hash=a5cbbb8a6763bed83b7d7f0a08bc9e12",
    },
]);
if (le) console.log('precache manifest', self.__precacheManifest);

if (le) console.log('precacheAndRoute');
workbox.precaching.precacheAndRoute(self.__precacheManifest, {
    directoryIndex: '/',
    cleanUrls: false,
    ignoreURLParametersMatching: [/^utm_/],
});

if (le) console.log('cleanupOutdatedCaches');
workbox.precaching.cleanupOutdatedCaches();
//workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/"));

if (le) console.log('registerRoute');
workbox.routing.registerRoute(
    rOrigin,
    new workbox.strategies.NetworkFirst({
        cacheName: cacheId + "-origin",
        plugins: []
    }),
    'GET'
);
workbox.routing.registerRoute(
    rOriginStatic,
    new workbox.strategies.CacheFirst({
        cacheName: cacheId + "-origin-static",
        plugins: []
    }),
    'GET'
);
workbox.routing.registerRoute(
    rCdnStatic,
    new workbox.strategies.CacheFirst({
        cacheName: cacheId + "-cdn-static",
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 255,
                purgeOnQuotaError: false
            }),
            new workbox.cacheableResponse.Plugin({
                statuses: [ 0, 200 ]
            })
        ]
    }),
    'GET'
);
workbox.routing.registerRoute(
    rGoogleFonts,
    new workbox.strategies.CacheFirst({
        cacheName: cacheId + "-google-fonts",
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 255,
                purgeOnQuotaError: false
            }),
            new workbox.cacheableResponse.Plugin({
                statuses: [ 0, 200 ]
            })
        ]
    }),
    'GET'
);

if (le) console.log('googleAnalytics.initialize');
workbox.googleAnalytics.initialize({});

self.addEventListener('install', function(event) {
    if (le) console.log('Service Worker Install', event);
});

self.addEventListener('activate', function(event) {
    if (le) console.log('Service Worker Activate', event);
});

if (le) console.log('Service Worker End');