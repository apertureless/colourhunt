<template>
  <div class="Content">
    <div class="Color-create">
      <h2>Create new Palette</h2>
      <hr>
      <label for="create">Palette name</label>
      <input
        id="create"
        v-model="title"
        type="text"
        maxlength="30"
        placeholder="Give your 🎨 a fancy name!"
        name="title"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
      >
      <div class="Color__list">
        <swatch
          v-for="(swatch, index) in swatches"
          :key="index"
          :color="swatch.color"
          @remove="removeColor(index)"
          @picker="openPicker(index, $event)"
        />

        <add-swatch
          v-if="addable"
          @increment="addColor()"
        />

        <chrome-picker
          v-if="showPicker"
          v-model="pickerColors"
          v-on-clickaway="closePicker"
          :style="{ left: swatchOffset.left + 'px', top: swatchOffset.top + 'px' }"
          class="Color__picker"
        />
      </div>
      <ul
          v-if="errors"
          class="alert is-error"
        >
          <li
            v-for="(error, index) in errors"
            :key="index"
            class="alert-item">
              🚫 {{ error }}
            </li>
        </ul>
      <button
        class="button"
        @click="create()">Create Palette</button>
    </div>
  </div>
</template>

<script>
import { Chrome as ChromePicker } from 'vue-color'
import { mixin as clickaway } from 'vue-clickaway'

import CREATE_PALETTE from '~/apollo/mutations/CreatePalette'
import ALL_PALETTES from '~/apollo/queries/AllPalettes'

import { mapGetters } from 'vuex'
const Swatch = () => import(/* webpackChunkName: 'swatch' */'~/components/swatch/ColorSwatch')
const AddSwatch = ()  => import(/* webpackChunkName: 'add-swatch' */'~/components/swatch/AddSwatch')

let defaultProps = {
  hex: '#194d33',
  hsl: {
    h: 150,
    s: 0.5,
    l: 0.2,
    a: 1
  },
  hsv: {
    h: 150,
    s: 0.66,
    v: 0.30,
    a: 1
  },
  rgba: {
    r: 25,
    g: 77,
    b: 51,
    a: 1
  },
  a: 1
}

export default {
  mixins: [clickaway],
  middleware: 'auth',
  components: { Swatch, AddSwatch, ChromePicker },
  data () {
    return {
      title: '',
      errors: [],
      currentIndex: 0,
      colorCount: 4,
      showPicker: false,
      pickerColors: defaultProps,
      swatchOffset: {
        left: 0,
        top: 0
      },
      swatches: [{
        color: '#f1f1f1'
      }]
    }
  },
  computed: {
    colorArray () {
      return this.colors
    },
    colors () {
      return this.swatches.map(color => color.color)
    },
    addable () {
      return (this.swatches.length <= this.colorCount)
    },
    ...mapGetters(['userId'])
  },
  watch: {
    'pickerColors': function (val) {
      this.swatches[this.currentIndex].color = val.hex
    }
  },
  methods: {
    validate () {
      if (this.title === '') {
        this.errors.push('📝 Please add a title')
      }
      if (this.colorArray.length <= 1) {
        this.errors.push('🎨 Please add at least two colors')
      }
    },
    create () {
      this.errors = []
      const title = this.title
      const colors = this.colorArray
      const userId = this.userId
      this.validate()

      if (this.errors.length === 0) {
        this.$apollo
          .mutate({
            mutation: CREATE_PALETTE,
            variables: {
              title,
              colors,
              userId
            },
            update: (store, { data: { createPalette } }) => {
              const data = store.readQuery({
                query: ALL_PALETTES
              })
              data.allPalettes.push(createPalette)
              store.writeQuery({
                query: ALL_PALETTES,
                data
              })
            }
          })
          .then(data => {
            this.$router.push({path: '/'})
          })
          .catch(error => {
            console.error(error)
          })
      }
    },
    addColor () {
      this.swatches.push({color: '#f1f1f1'})
    },
    removeColor (index) {
      this.swatches.splice(index, 1)
    },
    openPicker (index, pos, event) {
      this.currentIndex = index
      this.showPicker = true
      this.swatchOffset = {
        left: pos.left,
        top: pos.top
      }
    },
    closePicker () {
      this.showPicker = false
    }
  }

}
</script>

<style lang="scss">
  @import "~assets/scss/includes.scss";

  .Color-create {
    background: color(background-light);
    border-radius: $base-border-radius;
    border: 1px solid color(border-color);
    margin: rem(10);
    margin-top: rem(50);
    padding: rem(30);
  }

  .Color__list {
    display: flex;
    flex-flow: row wrap;
    margin: 0 rem(-20);
    position: relative;
    overflow: visible;
    > * {
      margin: rem(20);
    }
  }

  .Color__picker {
    position: absolute;
    top: 0;
  }

</style>
