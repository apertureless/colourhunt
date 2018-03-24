<template>
  <div class="Content">
    <div class="Color-detail">
      <div class="Color-detail__header">
        <color-preview
          :colors="Palette.colors"
          :height="200"/>
      </div>
      <div class="Color-detail__content">
        <span v-if="loading > 0">
          <spinner />
        </span>
        <h1 class="Color-detail__title">{{Palette.title}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
  import PALETTE from '~/apollo/queries/Palette'
  import ColorPreview from '~/components/color-palette/ColorPreview'
  import Spinner from '~/components/shared/Spinner'


  export default {
    components: { ColorPreview, Spinner },
    data () {
      return {
        Palette: {},
        loading: 0
      }
    },
    apollo: {
      Palette: {
        query: PALETTE,
        loadingKey: 'loading',
        variables () {
          return {
            id: this.$route.params.id
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "~assets/scss/includes.scss";

  .Color-detail {
    background: color(background-light);
    border-radius: $base-border-radius;
    border: 1px solid color(border-color);
    margin: rem(10);
    margin-top: rem(50);

    @include has(header) {

    }

    @include has(title) {
      color: color(text-color);
      font-size: rem(20);
    }

    @include has(content) {
      padding: rem(30);
    }
  }
</style>
