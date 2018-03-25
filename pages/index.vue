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
    props: {},
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
