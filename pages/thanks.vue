<template>
  <div class="card center-small">
    <h2 class="center">🎊 🙏🏻 Thank you for your feedback!</h2>
    <div class="center">
      <router-link
        to="/"
        class="button">
        Back
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
@import "~assets/scss/includes.scss";
.center-small {
  max-width: rem(400);
  margin: rem(20) auto;
  box-shadow: 0px rem(10) rem(40) rem(-10) rgba(128, 0, 111, 0.2);
}

.center {
  text-align: center;
  .button {
    display: inline-block;
  }
}
</style>
