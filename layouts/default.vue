<template>
  <div>
    <Banner/>
    <nuxt/>
    <FooterNav/>
  </div>
</template>

<script>
  import Banner from '~/components/shared/Banner'
  const FooterNav = () => import('~/components/FooterNav')

  export default {
    components: { Banner, FooterNav }
  }
</script>
