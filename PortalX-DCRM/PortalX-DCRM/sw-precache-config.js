/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/assets/global/css/components-md.min.css","28cd4ad0b9e63fdcb0bc360ee63d3fef"],["/assets/global/css/plugins-md.min.css","c1e00a4f9a6403b96577ed7d343636ef"],["/assets/global/img/social/Thumbs.db","426988c383776573546d5e997ff7f66f"],["/assets/global/img/social/aboutme.png","44d424c5346d445e84f3d0b26584effc"],["/assets/global/img/social/amazon.png","8ebe1db7e525fa3283ab0c96ff530383"],["/assets/global/img/social/behance.png","14f7f68ae6a659d7a6b929156857963d"],["/assets/global/img/social/blogger.png","31c3b355952bd07bf520cfe00025713f"],["/assets/global/img/social/deviantart.png","4ef6f74c3c83b62f1fb4908aae3ca87b"],["/assets/global/img/social/dribbble.png","9681f72ed9ffee1969745c0df9f5d760"],["/assets/global/img/social/dropbox.png","35b086b15423fe31a6eae3bfa5c8a3c3"],["/assets/global/img/social/evernote.png","f9cf33f5885725dfcb5914d79651be1f"],["/assets/global/img/social/facebook.png","f9ccb1c160910aaf629233ffe8c286eb"],["/assets/global/img/social/flickr.png","b1d39a111aa8a16aeaa5660df3afdb08"],["/assets/global/img/social/forrst.png","c6c57bcad28296638bd068782d0e2c25"],["/assets/global/img/social/foursquare.png","b8d7fe0e898f23c2cdaf2eb85e54d47d"],["/assets/global/img/social/github.png","d614513441a0aa1f1e6d84ee52a257d8"],["/assets/global/img/social/googleplus.png","266b8769fe2763b873560949761bc449"],["/assets/global/img/social/gravatar.png","cd014e02a290a8fe881a593c99508f42"],["/assets/global/img/social/instagram.png","86e7da6dc314bd74fb801edc3c32d521"],["/assets/global/img/social/jolicloud.png","978331279029140ae2b00b385b89a716"],["/assets/global/img/social/klout.png","dbe68795e0ffce7e8a273d4bf6dc425f"],["/assets/global/img/social/last-fm.png","69a265c3ff34490869fac83fd2269225"],["/assets/global/img/social/linkedin.png","60645dc5735c9301e50ffa1a3ddde82c"],["/assets/global/img/social/myspace.png","50d61ed15c8dfe8ce5dd6b3d5572d0c1"],["/assets/global/img/social/picasa.png","01dcb613cc0a49949ab08c84685d5ba0"],["/assets/global/img/social/pintrest.png","2296d345738ec554490c4f04690a2335"],["/assets/global/img/social/quora.png","952d5e0cf56883bd5606d241f0f5ecf8"],["/assets/global/img/social/reddit.png","92286995ca9ba80e78e1954d695d5ee4"],["/assets/global/img/social/rss.png","b60288d5a75748f90067b0542db550bf"],["/assets/global/img/social/skype.png","b76f476cb57b49150aea0ffe1ada0ed8"],["/assets/global/img/social/spotify.png","be561547fbe034ff8c74c86198a9d12e"],["/assets/global/img/social/stumbleupon.png","3ce857b902c7cedda1886e678890ded7"],["/assets/global/img/social/tumblr.png","9c9518da5777c48973ae780c3a9afa5f"],["/assets/global/img/social/twitter.png","e9782d40024e13e9530067d93353b8e9"],["/assets/global/img/social/vimeo.png","eb1e1f5ae10e1a7028a1cf01dcf4ccf7"],["/assets/global/img/social/vk.png","96b92e9954445beae2b52753e190584c"],["/assets/global/img/social/wordpress.png","11c3ef71a6c8b8304f6b67a5f145aa36"],["/assets/global/img/social/xing.png","e5d536f9bef53ebfd3cbb9d4e3dae654"],["/assets/global/img/social/yahoo.png","0163d55bf90f9d1487e340bc2146b3df"],["/assets/global/img/social/youtube.png","3ce194ec10f055b0932d87217a0d305a"],["/assets/global/plugins/bootstrap/css/bootstrap.min.css","4080e551dd4cb53219d90f33bda12485"],["/assets/global/plugins/bootstrap/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/assets/global/plugins/bootstrap/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/assets/global/plugins/bootstrap/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/assets/global/plugins/bootstrap/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/assets/global/plugins/bootstrap/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/assets/global/plugins/bootstrap/js/bootstrap.min.js","c5b5b2fa19bd66ff23211d9f844e0131"],["/assets/global/plugins/font-awesome/css/font-awesome.min.css","0831cba6a670e405168b84aa20798347"],["/assets/global/plugins/font-awesome/fonts/FontAwesome.otf","668743fe7258676f8ef8f9b47d2a623e"],["/assets/global/plugins/font-awesome/fonts/fontawesome-webfont.eot","45c73723862c6fc5eb3d6961db2d71fb"],["/assets/global/plugins/font-awesome/fonts/fontawesome-webfont.svg","76a4f23c6be74fd309e0d0fd2c27a5de"],["/assets/global/plugins/font-awesome/fonts/fontawesome-webfont.ttf","7c87870ab40d63cfb8870c1f183f9939"],["/assets/global/plugins/font-awesome/fonts/fontawesome-webfont.woff","dfb02f8f6d0cedc009ee5887cc68f1f3"],["/assets/global/plugins/font-awesome/fonts/fontawesome-webfont.woff2","4b5a84aaf1c9485e060c503a0ff8cadb"],["/assets/global/plugins/jquery.min.js","89d81a6feab9e297adfa04d816c6ce77"],["/assets/global/plugins/jquery.min.map","7761e30c5da1bf6d7cebc61bf612cd0e"],["/assets/global/scripts/app.min.js","4a4544061cf4e7b1bced07a11fd7328c"],["/assets/layouts/layout3/css/custom.min.css","d41d8cd98f00b204e9800998ecf8427e"],["/assets/layouts/layout3/css/layout.min.css","67b8608be55a91400cdd0e3dbbf0f5c5"],["/assets/layouts/layout3/css/themes/default.min.css","f79b7ff8e6df5b327be60edebacf08df"],["/assets/layouts/layout3/img/avatar9.jpg","f948f7a232c10b5f3eb6743b657d2e48"],["/assets/layouts/layout3/img/logo-default.jpg","a3b5c18bbddb4cb4543caec90a038822"],["/assets/layouts/layout3/img/menu-toggler.png","a48415f787e46356ddfe9ef97dc45bad"],["/assets/layouts/layout3/scripts/demo.min.js","bac36cbf333287c2aa825c11b6450348"],["/assets/layouts/layout3/scripts/layout.min.js","e7e881e32a4bf4c52f5fd5b9d32df6bb"],["/assets/pages/css/login.min.css","505eb75819cb7c194fb4ec9840dc255d"],["/assets/pages/img/bg-opacity.png","4aa38660f1c7df2c84130ff3f91d27a2"],["/assets/pages/img/bg-white-lock.png","5ef8fc480e39e5ab8df832c475ff0f31"],["/assets/pages/img/bg-white.png","a635c0c6185bd39cf96ea9f7e151db79"],["/assets/pages/img/logo-big-white.png","db3dc71a532aa81a82e9b3c3fabfc7b2"],["/assets/pages/img/logo.png","fc18eb12158aa7133e1a5599ed827277"],["/assets/pages/media/email/logo.png","fc18eb12158aa7133e1a5599ed827277"],["/assets/pages/media/email/social_facebook.png","290223f343731ed1902d5a6bfe9839b2"],["/assets/pages/media/email/social_googleplus.png","4b803ecbe89b920f212a22aab1942f12"],["/assets/pages/media/email/social_linkedin.png","68d3fd4cdbb97c97512fb11ad5580d97"],["/assets/pages/media/email/social_rss.png","c6ec77e816016171398900272e163234"],["/assets/pages/media/email/social_twitter.png","ae76bf13c6b730e41a47c6af8bf2410b"],["/assets/pages/media/profile/profile_user.jpg","e2862a26a227b907764c094f3dd8202e"],["/bundle.js","f94d8f78ad99faa2a70cee8f2f887159"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




