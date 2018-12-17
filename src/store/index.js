import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    credential: ''
  },
  getters: {
    getCredential (state) {
      return state.credential
    }
  },
  mutations: {
    setCredential (state, data) {
      state.credential = data
    }
  }
})

export default store
