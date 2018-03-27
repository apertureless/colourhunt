<template>
  <div
    :style="mouseCursorStyle"
    :class="{'is-active': voted}"
    class="Color-palette__upvotes button button--small"
    @click="upvotePalette()"
  >
    {{ votes.length }}
  </div>
</template>

<script>
  import CREATE_VOTE from '~/apollo/mutations/CreateVote'
  import ALL_PALETTES from '~/apollo/queries/AllPalettes'
  import { PALETTES_PER_PAGE } from '~/constants/settings'
  import { mapGetters } from 'vuex'

  export default {
    name: 'Upvote',
    props: {
      votes: {
        type: Array,
        default: () => []
      },
      id: {
        type: String,
        default: ''
      }
    },
    data: () => ({
      voted: false
    }),
    computed: {
      ...mapGetters(['userId']),
      mouseCursorStyle () {
        return this.userId ? '' : {cursor: 'not-allowed'}
      }
    },
    created () {
      const voterIds = this.votes.map(vote => vote.user.id)
      const userId = this.userId
      if (voterIds.includes(userId)) {
        this.voted = true
      }
    },
    methods: {
      upvotePalette () {
        const voterIds = this.votes.map(vote => vote.user.id)
        const userId = this.userId
        if (!userId) {
          return
        }
        if (voterIds.includes(userId)) {
          this.voted = true
          return
        }

        const paletteId = this.id

        this.$apollo.mutate({
          mutation: CREATE_VOTE,
          variables: {
            userId,
            paletteId
          },
          update: (store, { data: { createVote } }) => {
            this.updateStoreAfterVote(store, createVote, paletteId)
          }
        })
      },
      updateStoreAfterVote (store, createVote, paletteId) {
        const data = store.readQuery({
          query: ALL_PALETTES,
          variables: {
            first: PALETTES_PER_PAGE,
            skip: 0,
            orderBy: 'createdAt_DESC'
          }
        })
        const votedPalette = data.allPalettes.find(palette => palette.id === paletteId)
        votedPalette.votes = createVote.palette.votes
        store.writeQuery({ query: ALL_PALETTES, data })
        this.voted = true
      }
    }
  }
</script>
