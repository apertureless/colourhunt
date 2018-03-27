<template>
  <div class="Content">
    <div class="Content__list">
      <template v-if="loading > 0">
        <spinner />
      </template>
      <template v-else>
        <color-palette
          v-for="palette in allPalettes"
          :key="palette.id"
          :colorpalette='palette'
        />
      </template>
    </div>
  </div>
</template>

<script>
  import ALL_PALETTES from '~/apollo/queries/AllPalettes'
  const ColorPalette = () => import(/* webpackChunkName: 'color-palette' */'~/components/color-palette/ColorPalette')
  const Spinner = () => import(/* webpackChunkName: 'spinner' */'~/components/shared/Spinner')

  export default {
    components: { ColorPalette, Spinner },
    head () {
      return {
        meta: [
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:site', content: '@apertureless' },
          { name: 'twitter:title', content: '🎨 Colour Hunt | Community driven color palettes' },
          { name: 'twitter:description', content: '🎨 Colour Hunt is a community driven color palette collection. Grab beautiful color palettes for your next project.' },
          { name: 'twitter:image', content: '/images/colourhunt-twitter.png' },
          { name: 'twitter:image:alt', content: 'colourhunt.com' },
          { name: 'description', content: '🎨 Colour Hunt is a community driven color palette collection. Grab beautiful color palettes for your next project.'},
          {
            hid: `og:title`,
            property: 'og:title',
            content: `🎨 Colour Hunt | Community driven color palettes`
          },
          {
            hid: `og:image`,
            property: 'og:image',
            content: '/images/colourhunt-twitter.png'
          }
        ]
      }
    },
    data () {
      return {
        allPalettes: {},
        loading: 0
      }
    },
    apollo: {
      allPalettes: {
        query: ALL_PALETTES,
        loadingKey: 'loading'
      }
    }
  }
</script>
