<template>
   <prism language="scss">{{ code }}</prism>
</template>

<script>
  import 'prismjs'
  import 'prismjs/themes/prism.css'
  import 'prismjs/components/prism-scss'
  import 'prismjs/components/prism-sass'
  import Prism from 'vue-prism-component'
  import { colorCode } from '~/utils'

  const supportedLangs = ['scss', 'sass', 'css', 'less']

  export default {
    name: 'CodePreview',
    components: { Prism },
    props: {
      colors: {
        type: Array,
        default: () => []
      },
      lang: {
        type: String,
        default: 'scss',
        validator: (value) => supportedLangs.some((lang) => lang === value)
      }
    },
    computed: {
      code () {
        return colorCode({ type: this.lang, colors: this.colors })
      }
    }
  }
</script>

