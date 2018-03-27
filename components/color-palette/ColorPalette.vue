<template>
<transition name="slide-fade">
  <div class="Color-palette">
    <router-link
      :to="`/palette/${colorpalette.id}`"
      class="Color__link">
      <div class="Color-palette__colors">
        <color-preview :colors="colorpalette.colors" />
      </div>
      <div class="Color-palette__content">
        <div class="Color-palette__title">
          {{ colorpalette.title }}
        </div>
      </div>
    </router-link>
    <div class="Color-palette__meta">
      <upvote-button
        :id="colorpalette.id"
        :votes="colorpalette.votes"
      />
    </div>
  </div>
  </transition>
</template>

<script>
  import ColorPreview from './ColorPreview'
  import UpvoteButton from './Upvote'

  export default {
    components: { ColorPreview, UpvoteButton },
    props: {
      colorpalette: {
        type: Object,
        default: function () {
          return { title: '', colors: [], upvotes: 0 }
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "~assets/scss/includes.scss";

  .Color-palette {
    display: flex;
    flex-direction: column;
    background: color(background-light);
    border-radius: $base-border-radius;
    border: 1px solid color(border-color);
    margin: rem(10);
    flex: 1 1 100%;
    cursor: pointer;
    position: relative;
    transition: box-shadow .2s ease-out;

    @include hover-active-states() {
      box-shadow: 0px rem(10) rem(40) rem(-10) rgba(128, 0, 111, 0.2);
    }

    @include media($sm-up) {
      flex: 0 1 calc(25% - 22px);
    }

    @include has(colors) {
      color: color(text-color);
    }

    @include has(content) {
      padding: rem(20);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    @include has(title) {
      font-size: rem(11);
      font-weight: 600;
      color: color(text-color);
    }

    @include has(meta) {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: rem(15);
    }

    @include has(upvotes) {
    }
  }

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: scale3d(0, 0, 0);
  opacity: 0;
}
</style>
