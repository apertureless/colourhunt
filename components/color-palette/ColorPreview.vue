<template>
  <div
    :style="{height: height + 'px'}"
    class="Colorpreview"
  >
    <span
      v-for="(color, index) in colors"
      :key="index"
      v-bind:style="{backgroundColor: color}"
      class="Color"
      @click="copied"
      :data-clipboard-text="color"
    >
      <span class="hex">
        {{ color }}
      </span>
    </span>
  </div>
</template>

<script>
  import * as ClipboardJS from 'clipboard'

  export default {
    name: 'ColorPreview',
    clipboard: null,
    props: {
      colors: {
        type: Array,
        default: () => []
      },
      height: {
        type: Number,
        default: 50
      }
    },
    created () {
      this.$options.clipboard = new ClipboardJS('.Color')
    },
    beforeDestroy () {
      this.$options.clipboard.destroy()
    }
  }
</script>

<style lang="scss">
  @import "~assets/scss/includes.scss";

  .Colorpreview {
    display: flex;
    flex-flow: row nowrap;
    overflow: hidden;
    border-top-left-radius: $base-border-radius;
    border-top-right-radius: $base-border-radius;
  }

  .hex {
    opacity: 0;
    padding: rem(5);
    font-size: rem(13);
    background: rgba(0, 0, 0, .2);
    color: color(background-light);
    transform: translateY(20px);
    width: 0;
  }

  .Color {
    flex: 1;
    display: flex;
    align-items: flex-end;
    transition: all .2s ease-in;
    cursor: url('~/assets/images/clipboard-cursor.png'), auto;

    &:hover {
      flex: 3;

      .hex {
        opacity: 1;
        transform: translateY(0px);
        width: inherit;
        transition: transform .1s ease-in-out, opacity .2s ease-in;
      }
    }

  }
</style>
