module.exports = {
  mode: 'spa',
  extractCSS: true,
  css: [
    '~/assets/scss/global.scss'
  ],
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/pwa'
  ],
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js'
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Colour Hunt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Colour Hunt is a community driven color palette collection' },
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
