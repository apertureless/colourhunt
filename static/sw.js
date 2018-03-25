importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "colourhunt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/add-swatch.8150e453036a0f4dc3d3.js",
    "revision": "716d492860be66629f7014be2f40adda"
  },
  {
    "url": "/_nuxt/app.238b6b833ccde2ec204f.js",
    "revision": "d8a245d2b1e2f5b5c3de2e8990f01aef"
  },
  {
    "url": "/_nuxt/color-palette.13e609b1e3c225cc38ce.js",
    "revision": "ad00d3a92f305309f419e2cec6bb71aa"
  },
  {
    "url": "/_nuxt/color-preview.d3a3171d01ff8656bebc.js",
    "revision": "33ab9009b9afb352e67f261aba59ddd5"
  },
  {
    "url": "/_nuxt/layouts/default.d976efacba9d93d32969.js",
    "revision": "472ec170670f1dd64f225dbf7ff493ac"
  },
  {
    "url": "/_nuxt/manifest.75c75e314c08c7dc119d.js",
    "revision": "b49db6cacdf0221ce0da1f9da5d6bcb6"
  },
  {
    "url": "/_nuxt/pages/create.134da01f9f79715c0fcd.js",
    "revision": "8342117a50d9e665ab268b5dd581a8de"
  },
  {
    "url": "/_nuxt/pages/index.1bbc6d51b9ba50dfff50.js",
    "revision": "2df37f819b639eb5453ccfca66b414fb"
  },
  {
    "url": "/_nuxt/pages/login.6409a062307e3d76b403.js",
    "revision": "1b6e9b7857473417eb58992bd70b9352"
  },
  {
    "url": "/_nuxt/pages/palette/_id.e137ba1091fac25ec365.js",
    "revision": "0f9841495b2bb311fbc3bf190764ec57"
  },
  {
    "url": "/_nuxt/spinner.c6ad8c2189b0b742401b.js",
    "revision": "64a4613e0ba541b5ef609af6076839c5"
  },
  {
    "url": "/_nuxt/swatch.838df1b8b05578bc0979.js",
    "revision": "00730678402a1134662771587d3daeb8"
  },
  {
    "url": "/_nuxt/vendor.ebfa135e1d9aa1368725.js",
    "revision": "2a95876d789d2dae019600f346a6ac10"
  },
  {
    "url": "/_nuxt/vue-password.488f19fefb166e5d5e66.js",
    "revision": "2ed39f5e6667dbd2bc8052aa6af093c5"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

