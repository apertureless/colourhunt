<template>
  <div
    class="Swatch"
    @click="add()">
    +
  </div>
</template>

<script>
  export default {
    methods: {
      add () {
        this.$emit('increment')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/includes.scss";

  .Swatch {
    height: rem(80);
    width: rem(80);
    border-radius: rem(5);
    border: 4px #f1f1f1 dotted;
    font-size: 65px;
    line-height: 1.1;
    text-align: center;
    color: #f1f1f1;
    cursor: pointer;

    &:hover {
      color: darken(#f1f1f1, 20%);
      border: 4px darken(#f1f1f1, 20%) dotted;
    }
  }
</style>
