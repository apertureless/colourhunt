<template>
  <div class="Content">
    <div class="Text">
      <h1 class="highlight">About <span>Colour Hunt</span></h1>
      <p>Colour Hunt is a <strong>free</strong> community driven website, where designers can post their favorite color palettes.</p>
      <p>As a developer you can choose a palette and get the generated css code or use it as an inspiration for you next web or print project.</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'About'
  }
</script>
<style lang="scss" scoped>
@import "~assets/scss/includes.scss";

.highlight {
  span {
    color: color(highlight);
  }
}

.Text {
  min-height: 60vh;
  p {
    font-size: rem(18);
  }
}
</style>
