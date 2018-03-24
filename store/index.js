import Vuex from 'vuex'
import * as getters from './getters'
import modules from './modules'

const debug = process.env.NODE_ENV !== 'production'

const createStore = () => {
  return new Vuex.Store({
    getters,
    modules,
    strict: debug,
    plugins: []
  })
}

export default createStore
