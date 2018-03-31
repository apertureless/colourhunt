<template>
  <div>
    <Banner/>
    <nuxt/>
    <FooterNav/>

    <no-ssr>
      <cookie-law/>
    </no-ssr>
  </div>
</template>

<script>
  import Banner from '~/components/shared/Banner'
  import CookieLaw from 'vue-cookie-law'
  const FooterNav = () => import('~/components/FooterNav')

  export default {
    components: { Banner, FooterNav, CookieLaw }
  }
</script>
