<template>
  <div class="Content mh">
    <div class="Content__list">
      <color-palette
        v-for="(palette, index) in allPalettes"
        :key="index"
        :colorpalette='palette'
      />
    </div>
    <div class="Content__footer">
      <spinner
        v-if="loading > 0"
        :margin="0"
      />
      <button
        v-if="morePalettes"
        class="button"
        @click="loadMore()">
        {{ loading ? 'Loading ...' : 'Show more'}}
      </button>
    </div>
  </div>
</template>

<script>
  import ALL_PALETTES from '~/apollo/queries/AllPalettes'
  import { PALETTES_PER_PAGE } from '~/constants/settings'
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
        totalCount: {
          count: 0
        },
        loading: 0
      }
    },
    computed: {
      morePalettes () {
        return this.allPalettes.length < this.totalCount.count
      }
    },
    apollo: {
      allPalettes: {
        query: ALL_PALETTES,
        variables: {
          skip: 0,
          first: PALETTES_PER_PAGE,
          orderBy: 'createdAt_DESC'
        },
        loadingKey: 'loading',
        result ({data}) {
          this.totalCount = data.totalCount
        }
      }
    },

    methods: {
      loadMore () {
        this.$apollo.queries.allPalettes.fetchMore({
          variables: {
            skip: this.allPalettes.length
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
              return previousResult
            }
            return Object.assign({}, previousResult, {
              // Append the new posts results to the old one
              allPalettes: [...previousResult.allPalettes, ...fetchMoreResult.allPalettes]
            })
          }
        })
      }
    }
  }
</script>

<style>
.mh {
  min-height: 60vh;
}
</style>
