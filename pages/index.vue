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
  import ColorPalette from '~/components/color-palette/ColorPalette'
  import Spinner from '~/components/shared/Spinner'
  import ALL_PALETTES from '~/apollo/queries/AllPalettes'

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
