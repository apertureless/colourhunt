<template>
  <div
    :class="{'is-active': voted}"
    class="Color-palette__upvotes button button--small"
    @click="upvote()"
  >
    {{ upvotes }}
  </div>
</template>

<script>
  export default {
    name: 'Upvote',
    props: {
      upvotes: {
        type: Number,
        default: 0
      },
      id: {
        type: String
      }
    },
    data () {
      return {
        voted: false
      }
    },
    methods: {
      upvote () {
        this.voted = true
      }
    }
  }
</script>
