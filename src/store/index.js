import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bands: []
  },
  mutations: {
    setBands(state, payload) {
      state.bands = payload
    }
  },
  actions: {
    bandAction({ commit }, bands) {
      commit("setBands", bands)
    }
  },
  modules: {
  }
})
