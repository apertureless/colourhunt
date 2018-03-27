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
    <button
      v-if="morePalettes"
      class="button">
      {{ loading ? 'Loading ...' : 'Show more'}}
    </button>
  </div>
</template>

<script>
  import ALL_PALETTES from '~/apollo/queries/AllPalettes'
  const ColorPalette = () => import(/* webpackChunkName: 'color-palette' */'~/components/color-palette/ColorPalette')
  const Spinner = () => import(/* webpackChunkName: 'spinner' */'~/components/shared/Spinner')

  const PALETTES_PER_PAGE = 5

  export default {
    components: { ColorPalette, Spinner },
    props: {},
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
          first: PALETTES_PER_PAGE
        },
        loadingKey: 'loading',
        result ({data}) {
          this.totalCount = data.totalCount
        }
      }
    }
  }
</script>
