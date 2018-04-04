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
    "url": "/_nuxt/app.32026a9ec1b8a16afd46.js",
    "revision": "04ec4c3360c6eb1daea556b15d50b364"
  },
  {
    "url": "/_nuxt/code-preview.97f392f073809e21d5ef.js",
    "revision": "5a87b01f19dd30f24f9ea5fd2e6e6e25"
  },
  {
    "url": "/_nuxt/color-palette.552d37fe3523e5bd135d.js",
    "revision": "457e1b5e2798f0e8ee74ad128e4b4eea"
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
    "url": "/_nuxt/layouts/default.b5a2739398d1dd12bdce.js",
    "revision": "63e6f0e1f3fb9d469ae9dece1163b8ff"
  },
  {
    "url": "/_nuxt/manifest.b6ea59756f1b30d800cf.js",
    "revision": "88cd971a69fa7cdb6b5eabf625aee2bc"
  },
  {
    "url": "/_nuxt/pages/about.7e70fc695b57adc96eb9.js",
    "revision": "b91077bcff67d01a84b7e1f068bb76af"
  },
  {
    "url": "/_nuxt/pages/create.aacddc2488b06369732b.js",
    "revision": "35b358a5a1c5f62419da02183d41860d"
  },
  {
    "url": "/_nuxt/pages/image/_id.15a6b7860b0970caa0c4.js",
    "revision": "ee699a09c65ec15ed25330ef3adf77f5"
  },
  {
    "url": "/_nuxt/pages/index.7df7b4450c072ebdbab6.js",
    "revision": "893d7c35c62230ec3462a222ab86f88d"
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
    "url": "/_nuxt/pages/palette/_id.34221f95bb785f258137.js",
    "revision": "8df4cab9acb049c878cd37fcbf67ec5e"
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
    "url": "/_nuxt/vendor.61ad983598342cc64e00.js",
    "revision": "4b158ab90a405dbc9881b610e71b581f"
  },
  {
    "url": "/_nuxt/vue-password.f5becf067202f0a6f514.js",
    "revision": "9969dc001777f2203514a8f839a715d1"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

