<template>
  <div class="card center-small">
    <form
      class="login-form"
      @submit.prevent="submit()">
      <fieldset>
        <legend>{{canLogin ? 'Login' : 'Sign Up'}}</legend>
        <label for="email">E-Mail</label>
        <input
          id="email"
          v-model="email"
          type="text"
          required
          placeholder="Your email address">
        <label for="password">Password</label>
        <input
          v-if="canLogin"
          id="password"
          v-model="password"
          type="password"
          required
          placeholder="Your password">
        <Password
          v-else
          v-model="password" />
        <button
          class='button'
          type="submit"
        >
          {{canLogin ? 'login' : 'create account'}}
        </button>
        <button
          class="button-clean"
          @click.prevent="canLogin = !canLogin">
          {{canLogin ? 'need to create an account?' : 'already have an account?'}}
        </button>
      </fieldset>
    </form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import Password from 'vue-password-strength-meter'

  export default {
    name: 'Login',
    components: { Password },
    data: () => ({
      canLogin: true,
      email: '',
      password: ''
    }),
    methods: {
      ...mapActions(['login', 'signup']),
      async submit () {
        const { email, password } = this.$data
        if (this.canLogin) {
          try {
            await this.login({email, password})
          } catch (err) {
            console.error(err)
          }
        } else {
          try {
            await this.signup({email, password})
          } catch (err) {
            console.error(err)
          }
        }
        this.$router.push({path: '/'})
      }
    }
  }
</script>

<style lang="scss">
@import "~assets/scss/includes.scss";

.center-small {
  max-width: rem(400);
  margin: rem(20) auto;
  box-shadow: 0px rem(10) rem(40) rem(-10) rgba(128, 0, 111, 0.2);
}

.Password__badge {
  bottom: rem(48);
}
</style>
