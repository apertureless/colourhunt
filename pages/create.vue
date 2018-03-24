<template>
  <div class="Content">
    <div class="Color-create">
      <h2>Create new Palette</h2>
      <hr>
      <label for="create">Palette Name</label>
      <input
        id="create"
        v-model="title"
        type="text"
        placeholder="Name your palette"
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
      <button
        class="button"
        @click="create()">Create Palette</button>
    </div>
  </div>
</template>

<script>
import CREATE_PALETTE from '~/apollo/mutations/CreatePalette'
import ALL_PALETTES from '~/apollo/queries/AllPalettes'
import { Chrome as ChromePicker } from 'vue-color'
import { mixin as clickaway } from 'vue-clickaway'
import Swatch from '~/components/swatch/ColorSwatch'
import AddSwatch from '~/components/swatch/AddSwatch'

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
  components: { Swatch, AddSwatch, ChromePicker },
  data () {
    return {
      title: '',
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
    }
  },
  watch: {
    'pickerColors': function (val) {
      this.swatches[this.currentIndex].color = val.hex
    }
  },
  methods: {
    create () {
      const title = this.title
      const colors = this.colorArray

      this.$apollo
        .mutate({
          mutation: CREATE_PALETTE,
          variables: {
            title,
            colors
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
