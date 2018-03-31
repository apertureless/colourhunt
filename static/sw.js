importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "colorhunt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/16.d94b3e0d9fdfa6677c7a.js",
    "revision": "f6cd4e590538e305d34dde33184e528f"
  },
  {
    "url": "/_nuxt/add-swatch.36432ed278e90194f033.js",
    "revision": "da6b8930075c3e56c9ea9ef073e96968"
  },
  {
    "url": "/_nuxt/app.61cc80bd67310b294147.js",
    "revision": "0fb7754bf17831dc024e6f776db3e411"
  },
  {
    "url": "/_nuxt/code-preview.b5c711826556c5c3522f.js",
    "revision": "ea91c75b395e3cb2158a7d07b9787a75"
  },
  {
    "url": "/_nuxt/color-palette.c801d08722d0cfc71903.js",
    "revision": "35be680a688410ffe650a1d0487638e4"
  },
  {
    "url": "/_nuxt/color-preview.a1a04aeee86337c94156.js",
    "revision": "4cee441f0ea2fc239d146e351e7e270d"
  },
  {
    "url": "/_nuxt/layouts/default.eb57e15bd9d954c6495d.js",
    "revision": "c19c971a8767e985d19f2623e530dfab"
  },
  {
    "url": "/_nuxt/manifest.794dc59d734efd0f7ed9.js",
    "revision": "d36b3bd38383c959e29ac7ee976a44f5"
  },
  {
    "url": "/_nuxt/pages/about.7f85e72927610ea21a11.js",
    "revision": "c55fd7cfb23bd9ca0455fdb3339ccff6"
  },
  {
    "url": "/_nuxt/pages/create.1b6fa92f0d306c2935d0.js",
    "revision": "22232c9ada7c754754515104591dda49"
  },
  {
    "url": "/_nuxt/pages/index.d432407ee2954c98bcde.js",
    "revision": "517c8626e1e714c11bc812dea3b9a4d8"
  },
  {
    "url": "/_nuxt/pages/legal.9bfa9f14145ce23eed68.js",
    "revision": "bd01e38593dd908cdfb057a8d6771453"
  },
  {
    "url": "/_nuxt/pages/login.3cc306735b2cc6b625db.js",
    "revision": "87c7d2776af22a418e0d1357b2e73c76"
  },
  {
    "url": "/_nuxt/pages/palette/_id.2cd155aa86c8cee452b0.js",
    "revision": "fea2647100620260936e15aebeebd0f0"
  },
  {
    "url": "/_nuxt/spinner.e84ee0dcc44ffb6cf710.js",
    "revision": "6243fad93dcf70c067b2995dd1efc759"
  },
  {
    "url": "/_nuxt/swatch.d6e43282c1c111ca8e56.js",
    "revision": "d1954b32f9d945abd21036b63c128abc"
  },
  {
    "url": "/_nuxt/vendor.223be2b9b2a07495493a.js",
    "revision": "a407ab949ffed76655cf5bd2704d17a9"
  },
  {
    "url": "/_nuxt/vue-password.cdf92c7127a0a330b291.js",
    "revision": "b625f122ee56dfb021f35022bafa10d5"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

