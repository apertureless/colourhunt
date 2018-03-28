<template>
  <div>
    <Banner/>
    <nuxt/>
    <FeedbackButton />
  </div>
</template>

<script>
  import Banner from '~/components/shared/Banner'
  const FeedbackButton = () => import('~/components/shared/FeedbackButton')

  export default {
    components: { Banner, FeedbackButton }
  }
</script>
