import Vue from 'vue'
import Vuex from 'vuex'
// import { fetchHook } from "../hooks/FetchHook";
import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions
})
