<template>
  <div>
    <Banner/>
    <nuxt/>
    <FeedbackButton />
    <no-ssr>
      <cookie-law/>
    </no-ssr>
  </div>
</template>

<script>
  import Banner from '~/components/shared/Banner'
  import CookieLaw from 'vue-cookie-law'
  const FeedbackButton = () => import('~/components/shared/FeedbackButton')

  export default {
    components: { Banner, FeedbackButton, CookieLaw }
  }
</script>
