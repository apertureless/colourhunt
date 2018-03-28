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
        <tabs :options="{ useUrlFragment: false }">
          <tab name="SCSS" >
            <CodePreview
              lang="scss"
              :colors="Palette.colors"/>
          </tab>
          <tab name="Sass" >
            <CodePreview
              lang="sass"
              :colors="Palette.colors"/>
          </tab>
          <tab name="Less" >
            <CodePreview
              lang="less"
              :colors="Palette.colors"/>
          </tab>
          <tab name="CSS" >
            <CodePreview
              lang="css"
              :colors="Palette.colors"/>
          </tab>
          <tab
            name="Sketch"
            :is-disabled="true"
            prefix="🔜"
          >
            Coming Soon
          </tab>

        </tabs>
      </div>
    </div>
  </div>
</template>

<script>
  import PALETTE from '~/apollo/queries/Palette'
  import { Tabs, Tab } from 'vue-tabs-component'

  const ColorPreview = () => import(/* webpackChunkName: 'color-preview' */'~/components/color-palette/ColorPreview')
  const Spinner = () => import(/* webpackChunkName: 'spinner' */'~/components/shared/Spinner')
  const CodePreview = () => import(/* webpackChunkName: 'code-preview' */'~/components/color-palette/CodePreview')


  export default {
    components: {
      ColorPreview,
      Spinner,
      CodePreview,
      Tabs,
      Tab
    },
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

  .tabs-component {
    margin: 4em 0;
    position: relative;
  }

  .tabs-component-tabs {
    border: solid 1px color(border-color);
    border-radius: 6px;
    margin-bottom: 5px;
  }

  @media (min-width: 700px) {
    .tabs-component-tabs {
      border: 0;
      align-items: stretch;
      display: flex;
      justify-content: flex-start;
      margin-bottom: -1px;
    }
  }

  .tabs-component-tab {
    color: #999;
    font-size: 14px;
    font-weight: 600;
    margin-right: 0;
    list-style: none;
  }

  .tabs-component-tab:not(:last-child) {
    border-bottom: dotted 1px color(border-color);
  }

  .tabs-component-tab:hover {
    color: #666;
  }

  .tabs-component-tab.is-active {
    color: #000;
  }

  .tabs-component-tab.is-disabled * {
    color: #cdcdcd;
    cursor: not-allowed !important;
  }

  @media (min-width: 700px) {
    .tabs-component-tab {
      background-color: #fff;
      border: solid 1px color(border-color);
      border-radius: 3px 3px 0 0;
      margin-right: .5em;
      transform: translateY(2px);
      transition: transform .3s ease;
    }

    .tabs-component-tab.is-active {
      border-bottom: solid 1px #fff;
      z-index: 2;
      transform: translateY(0);
    }
  }

  .tabs-component-tab-a {
    align-items: center;
    color: inherit;
    display: flex;
    padding: .75em 1em;
    text-decoration: none;
  }

  .tabs-component-panels {
    padding: rem(16) 0;
    position: relative;
  }

  @media (min-width: 700px) {
    .tabs-component-panels {
      border-top-left-radius: 0;
      background-color: #fff;
      border: solid 1px color(border-color);
      border-radius: 0 6px 6px 6px;
      box-shadow: 0px rem(10) rem(40) rem(-10) rgba(128, 0, 111, 0.2);
      padding: rem(16) rem(8);
    }
  }

  :not(pre) > code[class*="language-"], pre[class*="language-"] {
    background: #fff !important;
  }
</style>
