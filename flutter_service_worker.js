'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a0e353e59f9410ad8731874bda389b0f",
"assets/assets/IMG_20200209_171902.jpg": "dee3e8e08d9cdfe9528541c2b4836857",
"assets/assets/octavian-dan-iY6QMkP66mI-unsplash.jpg": "3590830fbbb96d85a1fd85f584cc4b69",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "1562bfb452e6938b1c4d37e593c67502",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "85ef65f02d6bc1759d1cc50b46166315",
"/": "85ef65f02d6bc1759d1cc50b46166315",
"main.dart.js": "e4695f5d25072896a9bf73f2b580ae8f",
"manifest.json": "ff0f27d6d42da875fbc9009c986efb67",
"style.css": "7de0573287737a186723919ae1abdab4"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
