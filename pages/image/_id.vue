<template>
  <div class="Seo_card">
    <div class="Color__background">
      <div
        v-for="(color, index) in Palette.colors"
        :key="index"
        v-bind:style="{backgroundColor: color}"
        class="Color__item" />
    </div>
    <div class="Seo_card__content">
      <div class="top-left">
        <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500">
          <g fill="none">
            <circle cx="250" cy="250" r="250" fill="#FFF"/>
            <path fill="#FC136D" d="M262.1 350.6c-61.5 0-108.3-42-108.3-103.5 0-61.8 46.8-103.5 108.3-103.5 48.3 0 74.1 27.3 87.3 53.7l-44.4 21c-6.6-15.9-23.7-29.1-42.9-29.1-32.7 0-55.8 25.2-55.8 57.9s23.1 57.9 55.8 57.9c19.2 0 36.3-13.2 42.9-29.1l44.4 21c-12.9 25.8-39 53.7-87.3 53.7z"/></g>
        </svg>
      </div>
      <div class="Seo_title">
        <h1>{{ Palette.title }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
  import PALETTE from '~/apollo/queries/Palette'

  export default {
    layout: 'clean',
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

<style lang="scss" scoped>
  @import "~assets/scss/includes.scss";

  .Seo_card {
    width: 100vw;
    height: 100vh;
    position: relative;
    position:fixed;
    overflow: hidden;
  }

  .Color__background {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }

  .Color__item {
    flex: 1;
  }

  .Seo_card__content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    h1 {
      display: block;
      color: #fff;
      font-size: rem(120);
      background: rgba(0, 0, 0, .4);
      width: 100%;
      text-align: center;
    }
  }

  .Seo_title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .top-left {
    position: absolute;
    top: 0;
    left: 0;
    margin: rem(32);
    svg {
      width: rem(150);
      height: rem(150);
    }
  }

</style>
