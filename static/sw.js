importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "colorhunt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/18.d50a5e15ae8d099f6c34.js",
    "revision": "be2c13a9a65f7f136c7c6bfc6e7c1afb"
  },
  {
    "url": "/_nuxt/add-swatch.9f888e4a684cc74b1d07.js",
    "revision": "d20ca38b37807221c93e72146c4febfd"
  },
  {
    "url": "/_nuxt/app.f3cedfc61ff95328f0f3.js",
    "revision": "06509a3d806c0bf9e232b1e973245603"
  },
  {
    "url": "/_nuxt/code-preview.97f392f073809e21d5ef.js",
    "revision": "5a87b01f19dd30f24f9ea5fd2e6e6e25"
  },
  {
    "url": "/_nuxt/color-palette.faf646f17d454ae9aa01.js",
    "revision": "a84829ace67ee3f86e0c23a3be0d78a8"
  },
  {
    "url": "/_nuxt/color-preview.515d228f902ab96c87dd.js",
    "revision": "10a67d7689ceec5f8a70e42fcee7387a"
  },
  {
    "url": "/_nuxt/layouts/clean.3b9bf43ab5385ffab0e2.js",
    "revision": "d7a512b8d0749e2cff14f1bdd4cd1b7b"
  },
  {
    "url": "/_nuxt/layouts/default.62137ee1b9ee1075a18d.js",
    "revision": "2d01dbdaa58b6b10929bdd1d39e4511f"
  },
  {
    "url": "/_nuxt/manifest.86a0a13f7abe2f88cf99.js",
    "revision": "227b45a57c5c4fbb1d6ec9ba15a7d18f"
  },
  {
    "url": "/_nuxt/pages/about.7e70fc695b57adc96eb9.js",
    "revision": "b91077bcff67d01a84b7e1f068bb76af"
  },
  {
    "url": "/_nuxt/pages/create.bcd412f3e2ac9c36182b.js",
    "revision": "c82852846386cc92fc6fad450f88f015"
  },
  {
    "url": "/_nuxt/pages/image/_id.6f0b12d1989288bb6601.js",
    "revision": "e84efa29990be0520877335bf1003a24"
  },
  {
    "url": "/_nuxt/pages/index.1e23c4359b980269cb80.js",
    "revision": "9d1c8e46c939d94a17107b0f9127187b"
  },
  {
    "url": "/_nuxt/pages/legal.165724b3bc43f58a358d.js",
    "revision": "5a5e9a06babbdec8a9de9ed55358fd28"
  },
  {
    "url": "/_nuxt/pages/login.8405b5b7e5de692d83ec.js",
    "revision": "b11b4e76eaae105d3efd152a120fa3c0"
  },
  {
    "url": "/_nuxt/pages/palette/_id.80735f3b4ddb881be260.js",
    "revision": "83145b1f4d41bd5d433731749227a13e"
  },
  {
    "url": "/_nuxt/spinner.4189c29c1486227319b6.js",
    "revision": "b349e1ed7d3e52eb3094902598e9aae0"
  },
  {
    "url": "/_nuxt/swatch.3aa36e9551c424b6560d.js",
    "revision": "8336a6d4dd821a944500effbccd96b0b"
  },
  {
    "url": "/_nuxt/vendor.4b235c050ab0188f8fb8.js",
    "revision": "2a467872c70e23f9afa9ba55088c8834"
  },
  {
    "url": "/_nuxt/vue-password.f5becf067202f0a6f514.js",
    "revision": "9969dc001777f2203514a8f839a715d1"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

