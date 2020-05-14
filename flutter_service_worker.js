'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
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
"assets/images/ASSASSIN-363.github.io.jpg": "3482c4c2fb6746993f0ddd01d07426bf",
"assets/images/DigiSpark-Keylogger-Payload.jpg": "37cc7c667c3d992417fe9d1f226d3ce0",
"assets/images/Flutter-Animated-Login-UI.jpg": "f4e7d75d5c1fe7ec069c49fd2aa08dbe",
"assets/images/me.jpeg": "7f2c6abaa04574bdd9c2272096315829",
"assets/images/Projects.jpg": "f449941b1ca2f4e5c6c56bb60e7015be",
"assets/images/QuietDesk.webp": "f5216af07f45425caae26e73f0eeeb9d",
"assets/images/SriRam.jpg": "062a62f4cca90acd29a65aff5cad2cf7",
"assets/LICENSE": "5e7c4d1e1a35c88657d7de4fed2fc2f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "e7dec9c5e1bd830c084f2d2fb94fa1e7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "55ddabd0032f127686f1c283964677ca",
"/": "55ddabd0032f127686f1c283964677ca",
"main.dart.js": "b7619793497134ed365f38213f4f0d44",
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
