<template>
  <div class="feedback__container">
    <router-link
      to="/feedback"
      class="feedback-button"
    >
      💭 Got feedback?<br/>
      🐞 Found a bug?<br/>
      🚀 Want a feature?
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'FeedbackButton'
  }
</script>

<style lang="scss">
@import "~assets/scss/includes.scss";

.feedback__container {
  position: fixed;
  top: 15%;
  right: 0;
  background: color(highlight);
  color: #fff;
  padding: rem(8);
  border-top-left-radius: $base-border-radius;
  border-bottom-left-radius: $base-border-radius;
  box-shadow: 0px rem(10) rem(40) rem(-10) rgba(128, 0, 111, 0.2);
  will-change: transform;

  &:hover {
    background: lighten(color(highlight), 10%);
  }
}

a.feedback-button {
  color: #fff;
  font-size: rem(14);
}
</style>
