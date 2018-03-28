<template>
  <header class="Header">
    <div class="Header__content">
      <router-link to="/">
        <h1 class="Header__logo">Colour Hunt<span>Alpha</span></h1>
      </router-link>
      <div class="Header__nav">
        <router-link
          to="/create"
          class="button">Create</router-link>
        <router-link
          v-if="!isLoggedIn"
          to="/login"
          class="button">Login</router-link>
          <button
            v-else
            class="button"
            @click="logoutUser()"
          >Logout</button>
      </div>
    </div>
  </header>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Banner',
    computed: mapGetters(['isLoggedIn']),
    methods: {
      ...mapActions(['logout']),
      logoutUser () {
        this.logout()
        this.$router.push({path: '/login'})
      }
    }
  }
</script>

<style lang="scss">
  @import "~assets/scss/includes.scss";

  .Header {
    background-color: color(background-light);
    border-bottom: 1px solid color(border-color);
    height: rem(70);

    @include has(content) {
      @include container();
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      height: 100%;
    }

    @include has(logo) {
      color: color(highlight);
      font-size: rem(18);

      span {
        font-size: rem(11);
        margin-left: rem(8);
      }
    }
  }
</style>
