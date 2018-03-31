<template>
  <section class="footer">
    <div class="Content">
      <div class="footer-nav">
        <div class="footer-nav-column">
          <h3>Colour Hunt</h3>
          <p>High quality color palettes.<br>Get inspiration for your next project.</p>
          <ul class="social-links">
            <li><a href="https://twitter.com/apertureless" target="_blank">Twitter</a></li>
            <li><a href="https://dribbble.com/apertureless" target="_blank">Dribble</a></li>
            <li><a href="https://github.com/apertureless" target="_blank">GitHub</a></li>
            <li><a href="https://jakubjuszczak.de/" target="_blank">Jakub Juszczak</a></li>
          </ul>
        </div>
        <div class="footer-nav-column">
          <h3>Information</h3>
          <ul>
            <li><router-link to="/about">About</router-link></li>
            <!-- <li><router-link to="/legal">Legal Notice</router-link></li>
            <li><router-link to="/donate">Donate</router-link></li> -->
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
    padding: rem(16);

    ul {
      padding: 0;
      margin: 0;
      list-style: none;
    }

    li > a {
      text-decoration: none;
      color: lighten(color(text-color), 5%);
      @include hover-active-states () {
        color: color(highlight);
      }
    }
  }

  .footer-nav {
    display: grid;
    grid-gap: rem(16);
    grid-template-columns: 1fr;

    @include media($sm-up) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .social-links {
    display: flex;
    flex-direction: row;
    li {
      margin-right: rem(8);
    }
  }

</style>
