importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "colourhunt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/add-swatch.2a7fe76aabc928d8de0d.js",
    "revision": "c951094d4115f55437c774d129aa485b"
  },
  {
    "url": "/_nuxt/app.0b6ed3f0d7b325a4ef47.js",
    "revision": "0751ec74f38c946fcb0bf1859b32f307"
  },
  {
    "url": "/_nuxt/code-preview.4509bf823744e31c74e7.js",
    "revision": "57e739b69f789c211dcb1876caed2f6b"
  },
  {
    "url": "/_nuxt/color-palette.a42ed126ebff7264b13b.js",
    "revision": "986a9c0a186920062d79f7ebabfc57a6"
  },
  {
    "url": "/_nuxt/color-preview.9acaa028d0b320f7b153.js",
    "revision": "55d3cc98f4433dad96c33157481ccecc"
  },
  {
    "url": "/_nuxt/layouts/default.e9024fba1fdb64b0525d.js",
    "revision": "8378507aff1dc159a5f333fbb90f7c41"
  },
  {
    "url": "/_nuxt/manifest.f913387daae716e3249a.js",
    "revision": "40884d4a2fe1d6d609383f6e48887bfc"
  },
  {
    "url": "/_nuxt/pages/create.b77ff94724830d429b79.js",
    "revision": "8b13de4a5cb4268347d89ff9e9d88906"
  },
  {
    "url": "/_nuxt/pages/index.d3c49b7bbbbab48adf26.js",
    "revision": "88dd6258aa21bd9058216ac5bf830855"
  },
  {
    "url": "/_nuxt/pages/login.cf5a6f6a969da3c19e7a.js",
    "revision": "32d86d95ce319e525a69ab1bcea0db9d"
  },
  {
    "url": "/_nuxt/pages/palette/_id.5c7aa37ddc9360031803.js",
    "revision": "8d16677f6222e397d96a5c831217b9d7"
  },
  {
    "url": "/_nuxt/spinner.c6ad8c2189b0b742401b.js",
    "revision": "64a4613e0ba541b5ef609af6076839c5"
  },
  {
    "url": "/_nuxt/swatch.380c85da93d4ef49e1e0.js",
    "revision": "64bcf75530ab4cff8cb5f53350aef90a"
  },
  {
    "url": "/_nuxt/vendor.ebfa135e1d9aa1368725.js",
    "revision": "2a95876d789d2dae019600f346a6ac10"
  },
  {
    "url": "/_nuxt/vue-password.3166fa962fc3f1821909.js",
    "revision": "62d8554b7acc87857b10033f94cc5f59"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

