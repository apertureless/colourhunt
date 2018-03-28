importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "colorhunt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/16.d4c7aff7dd6c2d267a8e.js",
    "revision": "61ff384b97a2f815bb745843ef933458"
  },
  {
    "url": "/_nuxt/add-swatch.36432ed278e90194f033.js",
    "revision": "da6b8930075c3e56c9ea9ef073e96968"
  },
  {
    "url": "/_nuxt/app.c12e9d1b2e35c703e5ae.js",
    "revision": "4fc8b3fd924afb9e7df614f79e8130cb"
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
    "url": "/_nuxt/layouts/default.60d17708be2b3cc2ffc1.js",
    "revision": "f2744dc9df3b57392822062b8092b424"
  },
  {
    "url": "/_nuxt/manifest.621da79c9fbd3eef7555.js",
    "revision": "1bb112186c796120eb590b1874adcc60"
  },
  {
    "url": "/_nuxt/pages/create.1b6fa92f0d306c2935d0.js",
    "revision": "22232c9ada7c754754515104591dda49"
  },
  {
    "url": "/_nuxt/pages/feedback.5b61fb6e37c835e13a37.js",
    "revision": "ef04880c02a2b17b2f9a7042a87750be"
  },
  {
    "url": "/_nuxt/pages/index.c04cdbac6dcb17b0e4df.js",
    "revision": "6c579a9018b5b5b43c5c20326b6e78b3"
  },
  {
    "url": "/_nuxt/pages/login.dee6e95cc82769345bc6.js",
    "revision": "f7b56ce1844283fc21cc3bfb6b8fcad2"
  },
  {
    "url": "/_nuxt/pages/palette/_id.2cd155aa86c8cee452b0.js",
    "revision": "fea2647100620260936e15aebeebd0f0"
  },
  {
    "url": "/_nuxt/pages/thanks.02d146cc811a301eb3f2.js",
    "revision": "04af8b07e3a7c62acde0009bfd81d01a"
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

