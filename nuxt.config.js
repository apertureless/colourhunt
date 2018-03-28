const { createApolloFetch } = require('apollo-fetch')

module.exports = {
  mode: 'spa',
  extractCSS: true,
  css: [
    'node_modules/modern-normalize/modern-normalize.css',
    '~/assets/scss/global.scss'
  ],
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', {
      id: 'UA-92766713-3'
    }]
  ],
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js'
    }
  },
  plugins: [
    { src: '~plugins/drift.js', ssr: false }
  ],
  generate: {
    async routes () {
      const uri = 'https://api.graph.cool/simple/v1/cj23bdhqjezf401017zjz3w27'
      const apolloFetch = createApolloFetch({ uri })
      const query = `
      query allPalettes {
        allPalettes {
          id
        }
      }
      `
      const staticRoutes = [
        '/login',
        '/create',
      ]

      try {
        const { data } = await apolloFetch({ query })
        const dynamicRoutes = data.allPalettes.map(palette => `/palette/${palette.id}`)
        return staticRoutes.concat(dynamicRoutes)
      } catch (err) {
        console.error('🔥 Error:', err)
      }
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Colour Hunt | Beautiful color palettes for your next project!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '🎨 Colour Hunt is a community driven color palette collection. Grab beautiful color palettes for your next project.' },
      { name: 'msapplication-TileColor', content: '#fc136d'},
      { name: 'msapplication-TileImage', content: '/mstile-144x144.png'},
      { name: 'theme-color', content: '#fc136d'}
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', color: '#fc136d', href: '/safari-pinned-tab.svg' }
    ]
  },
  meta: {
    name: '🎨 Colour Hunt | Community driven color palettes',
    ogHost: 'https://www.colourhunt.com',
    ogImage: {
      path: '/images/colourhunt-twitter.png'
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#FC136D' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
