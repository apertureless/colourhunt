<template>
  <div
    class="Swatch"
    :style="{backgroundColor: color}"
    @click="openPicker">
    <span
      class="close"
      @click="remove()">✖</span>
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
    data () {
      return {

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
      margin: rem(5);
      display: none;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      background: #fff;
      width: rem(30);
      height: rem(30);
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);

      &:hover {
        color: black;
      }
    }
  }
</style>
