<template>
  <div class="card center-small">
    <form
      name="feedback"
      action="/thanks"
      method="post"
      netlify-honeypot="bot-field"
      netlify>
      <fieldset>
        <legend>Feedback</legend>
        <label for="email">E-Mail</label>
        <input
          id="email"
          type="email"
          required
          placeholder="Your email address">
          <label for="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Your name (optional)"
          >
          <label for="userfeedback">Feedback / Feature Request / Bug Report</label>
          <textarea
            name="userfeedback"
            id="userfeedback"
            cols="30"
            rows="10"></textarea>
          <input type="hidden" name="form-name" value="feedback" />
          <p class="hidden">
            <label>Don’t fill this out: <input name="bot-field"></label>
          </p>
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
