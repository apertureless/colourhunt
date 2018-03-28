<template>
  <div>
    <Banner/>
    <nuxt/>
    <no-ssr>
      <cookie-law/>
    </no-ssr>
  </div>
</template>

<script>
  import Banner from '~/components/shared/Banner'
  import CookieLaw from 'vue-cookie-law'

  export default {
    components: { Banner, CookieLaw }
  }
</script>
