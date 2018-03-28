<template>
  <div class="card center-small">
    <form
      name="feedback"
      @submit.prevent="submit()"
    >
      <fieldset>
        <legend>Feedback</legend>
        <label for="email">E-Mail</label>
        <input
          id="email"
          type="email"
          required
          v-model="form.email"
          placeholder="Your email address">
          <label for="name">Name</label>
          <input
            id="name"
            type="text"
            v-model="form.name"
            placeholder="Your name (optional)"
          >
          <label for="message">Feedback / Feature Request / Bug Report</label>
          <textarea
            name="message"
            v-model="form.message"
            id="message"
            cols="30"
            rows="10"></textarea>

          <button
            class='button'
            type="submit">
           Submit Feedback!
          </button>
      </fieldset>
    </form>
  </div>
</template>

<script>
  export default {
    data: () => ({
      form: {
        name: '',
        email: '',
        message: ''
      }
    }),
    methods: {
      submit () {
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: this.encode({ 'form-name': 'feedback', ...this.form }),
        })
        .then(() => this.$router.push({path: '/thanks'}))
        .catch(error => console.error(error))
      },
      encode(data) {
        return Object.keys(data)
          .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
          .join('&')
      },
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
.hidden {
  display: none;
}
</style>
