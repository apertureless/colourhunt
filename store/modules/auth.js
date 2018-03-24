import * as types from '../types'

import CREATE_USER from '~/apollo/mutations/CreateUser.gql'
import LOGIN_USER from '~/apollo/mutations/LoginUser.gql'

import { GC_USER_ID, GC_AUTH_TOKEN } from '~/constants/settings'

const state = {
  isLoggedIn: !!localStorage.getItem(GC_USER_ID),
  userId: localStorage.getItem(GC_USER_ID),
  pending: false,
  error: null
}

const actions = {
  async login ({commit}, credentials) {
    const { email, password } = credentials
    const client = this.app.apolloProvider.defaultClient
    commit(types.LOGIN)
    try {
      const res = await client.mutate({
        mutation: LOGIN_USER,
        variables: {
          email,
          password
        }
      })

      const { id, token } = res.data.authenticateUser

      localStorage.setItem(GC_USER_ID, id)
      localStorage.setItem(GC_AUTH_TOKEN, token)
      commit(types.LOGIN_SUCCESS, id)
    } catch (err) {
      console.error(err)
      commit(types.LOGIN_FAILED, err)
    }
  },
  async signup ({commit}, credentials) {
    const { email, password, name } = credentials
    const client = this.app.apolloProvider.defaultClient
    commit(types.SIGNUP)
    try {
      const res = await client.mutate({
        mutation: CREATE_USER,
        variables: {
          name,
          email,
          password
        }
      })

      const id = res.data.authenticateUser.id
      const token = res.data.authenticateUser.token

      localStorage.setItem(GC_USER_ID, id)
      localStorage.setItem(GC_AUTH_TOKEN, token)
      commit(types.SIGNUP_SUCCESS, id)
    } catch (err) {
      console.error(err)
      commit(types.SIGNUP_FAILED, err)
    }

  },
  logout ({commit}) {
    localStorage.removeItem(GC_USER_ID)
    localStorage.removeItem(GC_AUTH_TOKEN)
    commit(types.LOGOUT)
  }
}

const mutations = {
  [types.LOGIN] (state) {
    state.pending = true
    state.error = null
  },
  [types.LOGIN_SUCCESS] (state, id) {
    state.isLoggedIn = true
    state.pending = false
    state.userId = id
  },
  [types.LOGIN_FAILED] (state, error) {
    state.error = error
    state.pending = false
  },
  [types.LOGOUT] (state) {
    state.isLoggedIn = false
  },
  [types.SIGNUP] (state) {
    state.pending = true
    state.error = null
  },
  [types.SIGNUP_SUCCESS] (state, id) {
    state.isLoggedIn = true
    state.pending = false
    state.userId = id
  },
  [types.SIGNUP_FAILED] (state, error) {
    state.error = error
    state.pending = false
  }
}

export default {
  state,
  actions,
  mutations
}
