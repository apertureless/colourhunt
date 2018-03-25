<template>
  <div class="card center-small">
    <form
      class="login-form"
      @submit.prevent="submit()">
      <fieldset>
        <legend>{{canLogin ? 'Login' : 'Create Account'}}</legend>
        <Spinner
          v-if="loading"
          :margin="0"
        />
        <label for="email">E-Mail</label>
        <input
          id="email"
          v-model="email"
          type="email"
          required
          placeholder="Your email address">
        <label for="password">Password</label>
        <input
          v-if="canLogin"
          id="password"
          v-model="password"
          type="password"
          autocomplete="current-password"
          required
          placeholder="Your password">
        <Password
          v-else
          placeholder="Please choose a secure password"
          v-model="password"
        />
        <ul
          v-if="authErrors"
          class="alert is-error"
        >
          <li
            v-for="(error, index) in authErrors"
            :key="index"
            class="alert-item">
              🚫 {{ error }}
            </li>
        </ul>
        <button
          class='button'
          type="submit"
        >
          {{canLogin ? 'login' : 'create account'}}
        </button>
        <button
          class="button-clean"
          @click.prevent="canLogin = !canLogin">
          {{canLogin ? 'Need to create an account?' : 'Already have an account?'}}
        </button>
      </fieldset>
    </form>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  const Password = () =>  import(/* webpackChunkName: 'vue-password' */'vue-password-strength-meter')
  const Spinner = () => import(/* webpackChunkName: 'spinner' */'~/components/shared/Spinner')

  export default {
    name: 'Login',
    components: { Password, Spinner },
    data: () => ({
      canLogin: true,
      email: '',
      password: '',
      loading: false
    }),
    computed: mapGetters(['authErrors']),
    methods: {
      ...mapActions(['login', 'signup']),
      async submit () {
        const { email, password } = this.$data
        this.loading = true
        if (this.canLogin) {
          try {
            await this.login({email, password})
            this.loading = false
            this.$router.push({path: '/'})
          } catch (err) {
            this.loading = false
          }
        } else {
          try {
            await this.signup({email, password})
            this.loading = false
            this.$router.push({path: '/'})
          } catch (err) {
            this.loading = false
          }
        }
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
  bottom: rem(48) !important;
}
</style>
