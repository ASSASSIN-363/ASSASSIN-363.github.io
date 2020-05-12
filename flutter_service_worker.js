'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "bb9db141c0bfe4a1f44b75df2f34c568",
"assets/assets/images/ASSASSIN-363.github.io.jpg": "3482c4c2fb6746993f0ddd01d07426bf",
"assets/assets/images/DigiSpark-Keylogger-Payload.jpg": "37cc7c667c3d992417fe9d1f226d3ce0",
"assets/assets/images/Flutter-Animated-Login-UI.jpg": "f4e7d75d5c1fe7ec069c49fd2aa08dbe",
"assets/assets/images/me.jpeg": "7f2c6abaa04574bdd9c2272096315829",
"assets/assets/images/Projects.jpg": "f449941b1ca2f4e5c6c56bb60e7015be",
"assets/assets/images/QuietDesk.webp": "f5216af07f45425caae26e73f0eeeb9d",
"assets/assets/images/SriRam.jpg": "062a62f4cca90acd29a65aff5cad2cf7",
"assets/FontManifest.json": "80499304902ca67192bcf7897c25593a",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/MyFlutterApp.ttf": "b9c8f7bc4b758333b15bd0cf86e4e858",
"assets/LICENSE": "25af11a3c4f9a71d4e89eb42c699f73b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "e7dec9c5e1bd830c084f2d2fb94fa1e7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c57130514756b120d9af02ebb2cd3cb6",
"/": "c57130514756b120d9af02ebb2cd3cb6",
"main.dart.js": "6aa683ff51c8fdfefd3d4b6990ce658c",
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
