<template>
  <section class="footer">
    <div class="Content">
      <div class="footer-nav">
        <div class="footer-nav-column">
          <h3>Colour Hunt</h3>
          <p>High quality color palettes. Get inspiration for your next project.</p>
          <ul class="social-links">
            <li><a href="">Twitter</a></li>
            <li><a href="">Dribble</a></li>
            <li><a href="">GitHub</a></li>
            <li><a href="">Jakub Juszczak</a></li>
          </ul>
        </div>
        <div class="footer-nav-column">
          <h3>Information</h3>
          <ul>
            <li><a href="">About</a></li>
            <li><a href="">Legal Notice</a></li>
            <li><a href="">Donate</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'FooterNav'
  }
</script>

<style lang="scss">
  @import "~assets/scss/includes.scss";
  .footer {
    background: #fff;
    border-top: 1px solid color(border-color);
    padding: rem(8);
  }
  .footer-nav {
    display: grid;
  }
</style>
