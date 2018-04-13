<template>
  <div
    class="Swatch"
    :style="{backgroundColor: color}"
    @click.self="openPicker">
    <span
      class="close"
      @click.self="remove()">✖</span>
  </div>
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        default: '#f1f1f1'
      }
    },

    methods: {
      remove () {
        this.$emit('remove')
      },
      openPicker (event) {
        this.$emit('picker', {
          left: this.$el.offsetLeft + this.$el.offsetWidth,
          top: this.$el.offsetTop
        }, event)
      }
    }
  }
</script>

<style lang="scss">
  @import "~assets/scss/includes.scss";

  .Swatch {
    height: rem(80);
    width: rem(80);
    border-radius: rem(5);
    cursor: pointer;

    &:hover {
      .close {
        display: flex;
      }
    }

    .close {
      margin: rem(8) rem(8) auto auto;
      display: none;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      background: #fff;
      width: rem(23);
      height: rem(23);
      font-size: rem(12);
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);

      &:hover {
        color: black;
      }
    }
  }
</style>
