'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "65243d31ee3c98f6e9995a24a64b4999",
"version.json": "26c0ecd84d3b32f306a9388807d8da66",
"index.html": "e2b56d319409643854e08bae793582a6",
"/": "e2b56d319409643854e08bae793582a6",
"main.dart.js": "a2ea3f9ab4a5da1d72c886ea7004b559",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8e5d49bafb2232a26ff621eba8e8f661",
"assets/AssetManifest.json": "05b14dc080b3207bcad1316bf3d14012",
"assets/NOTICES": "75c8ed55790871fe9b14020c42c3404e",
"assets/FontManifest.json": "2b9e232ad921711b11c6c31146546459",
"assets/AssetManifest.bin.json": "c7966b4aaeb0af65dee54a3f217744fd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6823f07cd5639b96432695748bef44e9",
"assets/fonts/MaterialIcons-Regular.otf": "f8173ffd8e647a4d22501a863e85a3cc",
"assets/Assets/images/scan_image.png": "eae30ead8141f2b5b85d693407a9933a",
"assets/Assets/images/Avatar_2.png": "1ec9347d28079a5abf87f25311711d66",
"assets/Assets/images/image_8.png": "d46155bf8d04843ffe331ee0f22495b3",
"assets/Assets/images/avatar_1.png": "b304d2863bbd69833877321cb36cc823",
"assets/Assets/images/image_9.png": "8aba845fa51ea456987b4b26b7979c8a",
"assets/Assets/images/ic_profile.png": "8ef1da0b1800eac42b990838fcaf7618",
"assets/Assets/images/zone_1.png": "d45b8af0b330c0c1cc4d779b283a8cac",
"assets/Assets/images/image_2.png": "dd7834c45595c2d04906800bd55248b1",
"assets/Assets/images/image_3.png": "1d156aea6df67f727b761a7229416aa2",
"assets/Assets/images/image_1.png": "961957b59687becc172319711496612f",
"assets/Assets/images/bg_design.png": "3d93109ea1a15525f616de3c9406af36",
"assets/Assets/images/image_4.png": "451f2fdbeee51136e99bba9b5c054c58",
"assets/Assets/images/green_logo.png": "7aa2f1a91ebcf0214c22c77b5a910632",
"assets/Assets/images/image_5.png": "d45056ef2aa78b69277032ebf08f5007",
"assets/Assets/images/image_7.png": "d2bcf6916350868913293b5f66f4dfbe",
"assets/Assets/images/image_6.png": "cd59748ca4160e7c1810141a50a3f16e",
"assets/Assets/images/fujitsu_logo.png": "fe7a2e55d3e34df8c6aca7825a177996",
"assets/Assets/images/no_data.png": "759fbf3ae34c7e01c2ef4e199caa8144",
"assets/Assets/images/big_avatar.png": "8278d6ef5a39de40d414a7612d909c67",
"assets/Assets/images/Image.png": "c073a644da0759875e6bcee6031b2847",
"assets/Assets/images/splash_bg.png": "d7324acec6a5cac3677ad717ad9a79ea",
"assets/Assets/icons/ic_file.png": "39ee41cfee6d1200f0f5d1372ababe8a",
"assets/Assets/icons/ic_add_people.png": "08ade7b6cb3c83031da048ca63b989e5",
"assets/Assets/icons/ic_calendar.png": "47134908b9f36f383484d6d96a3347c6",
"assets/Assets/icons/login_bg.png": "c197f6316dd64de58542ed84221e4820",
"assets/Assets/icons/ic_grid.png": "d33f749991d8867e6170a07600f28594",
"assets/Assets/icons/ic_list.png": "53648784b1a30baa138b3cd619a787ae",
"assets/Assets/icons/ic_linkedin.png": "f342a1b4f4904287f0cc310a27359f3d",
"assets/Assets/icons/ic_eyeoff.png": "6bf45e2eb93fcb454032ebc37793d540",
"assets/Assets/icons/ic_message.png": "e713bd171350fa3a876256cee3d90fab",
"assets/Assets/icons/ic_setting.png": "aba7437397a8784dacb986d250ad8e66",
"assets/Assets/icons/ic_user.png": "8a25ef2008c4cd42752c56854ece1493",
"assets/Assets/icons/ic_home.png": "c24aeb3375a69800ffa9531e8b6065a0",
"assets/Assets/icons/ic_upload.png": "4128ddd331dbd4cf7ea1238308803229",
"assets/Assets/icons/ic_zone_dot.png": "08b7badbb7bf583690e7fa631f16083a",
"assets/Assets/icons/ic_checkbox.png": "be3b5d97a3b6c585d9ae1e2cd5d4903a",
"assets/Assets/icons/ic_block.png": "35907872265ade1d3faaf635abab8edb",
"assets/Assets/icons/ic_products.png": "1fd45504526c76c86f8bdf9e60bfe42e",
"assets/Assets/icons/ic_add.png": "61ec6e7a0682b8adad131769c1872fd2",
"assets/Assets/icons/ic_folder.png": "4cf6b5cf1f51494151004cd38e1b0336",
"assets/Assets/icons/ic_x.png": "f351011b09ea07b52cde95a50469b89c",
"assets/Assets/icons/ic_lock.png": "afc15654599395339a152adc4bdd6e2f",
"assets/Assets/icons/ic_delete.png": "ac81710758661f841a22cbbd51fe6fbd",
"assets/Assets/icons/product_rows.png": "bf6c52175961ef969a28c08c2aa5fc91",
"assets/Assets/icons/ic_green_add.png": "9076a811da4def44f1281652baca8605",
"assets/Assets/icons/ic_mail.png": "5b2d97e3c10ed4ae7793cac9adb7d6d6",
"assets/Assets/icons/ic_reverse.png": "9539392e2dbaf83341afd6d906a6f23e",
"assets/Assets/icons/ic_filter.png": "c6266c7864e9736f62992de66c4c6dd8",
"assets/Assets/icons/ic_share.png": "573c0f32bf02a4fc66e088f77a261fbe",
"assets/Assets/icons/ic_key.png": "fdf3ab43691a2a3cd1688d7feb6bf28e",
"assets/Assets/icons/ic_wheel.png": "63aede9295dea428c5907d7c7a90e932",
"assets/Assets/icons/ic_logout.png": "e8e9a2d811a8e57628c750e75244f2f4",
"assets/Assets/icons/ic_github.png": "20eccc2ed1af201be011f759dc310506",
"assets/Assets/icons/ic_cancel.png": "56493ea04bb359e1af55dce56860682c",
"assets/Assets/icons/ic_pdf.png": "614875a6dbdf391ad2893041f5ed2381",
"assets/Assets/icons/ic_edit.png": "dd2bdf03f0c4eeff6bab7ed872d63852",
"assets/Assets/icons/ic_address.png": "4b34796a1187f764df3da76b7429b6e5",
"assets/Assets/icons/ic_zone.png": "fef7bb5b453c222ddb126c563ff5b24e",
"assets/Assets/icons/ic_boll.png": "edf41c305d048ad265409d6b09735028",
"assets/Assets/icons/logo.png": "37291f1cfd1d96f588a4c521c4656779",
"assets/Assets/icons/ic_search.png": "cc30ac8fdcc1d174763887982f971247",
"assets/Assets/icons/ic_arrow.png": "01ecda6bb34c5b3e2e469b407c88e66f",
"assets/Assets/icons/ic_projects.png": "e8403058d4c7f42f60687983685e6673",
"assets/Assets/icons/ic_copy.png": "89cbec16134debc5a6310d1154b6c0be",
"assets/Assets/icons/ic_save.png": "ba93b8dfcef37ffd1b429c5360bc3d97",
"assets/Assets/icons/ic_add_user.png": "7885c6c584060ccc28cb4ae59c1618ec",
"assets/Assets/icons/ic_notes.png": "9d5132160ad866149d1f9255a24f9be9",
"assets/Assets/icons/ic_figma.png": "aed9b6f5428ffee7e6329f40bb9027eb",
"assets/Assets/icons/ic_notes_new.png": "23b6ac21896b0f2f66d0697db8fedf5e",
"assets/Assets/icons/ic_verified.png": "8dc916fd8b7be06e48e7620ab5760a81",
"assets/Assets/icons/ic_help.png": "146410cde829afdb2affa03dcffa2347",
"assets/Assets/icons/ic_au.png": "111e9de0785f776d93b761d768dd1511",
"assets/Assets/icons/ic_check.png": "41eed284343af0f097e8aa1ce468820f",
"assets/Assets/icons/ic_delete_big.png": "823e75683b10ee38c05bd5f77054cc2d",
"assets/Assets/icons/ic_user_person.png": "d2af2c9a8b84ac987ce387f5cd1d08a8",
"assets/Assets/icons/ic_alert_green.png": "ecce5a2f32f60ff9450bb00d4e230c79",
"assets/Assets/icons/ic_small_check.png": "744813ad028f56c09922aa224ff19718",
"assets/Assets/icons/ic_users_project.png": "a7f69e97b5103f86ac3768891007d870",
"assets/Assets/icons/no_data.png": "759fbf3ae34c7e01c2ef4e199caa8144",
"assets/Assets/icons/ic_call.png": "dd45dd9a6c5d665570dff7aa71c239ad",
"assets/Assets/icons/ic_alert_red.png": "3141f1a68d437793e1819293f23efea7",
"assets/Assets/icons/ic_checkbox_fill.png": "307f2c623b54c7a8da5c039878516083",
"assets/Assets/icons/ic_edit_new.png": "d265f51c55cb7c43049cf6059f2953e8",
"assets/Assets/icons/register_bg.png": "b63e89fe32d18235990ef6759d57f5d4",
"assets/Assets/fonts/SegoeUI-SemiBold.ttf": "a761b4729db027f2204334a55621157a",
"assets/Assets/fonts/SegoeUI-Light.ttf": "ec0d28685c3f824a6229676557cef8a5",
"assets/Assets/fonts/SegoeUI-Bold.ttf": "f799a572592ea726e4498b7f919f474a",
"assets/Assets/fonts/SegoeUI.ttf": "61bb848e77fd1ad14c8fbe4853a198fd",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
