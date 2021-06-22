import Vue from 'vue'
import Vuex from 'vuex'
// import { fetchHook } from "../hooks/FetchHook";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bands: [],
    favs: []
  },
  mutations: {
    setBands(state, payload) {
      state.bands = payload
    },
    loadFavs(state, payload) {
      state.favs = payload
    }
  },
  actions: {
    bandAction({ commit }, bands) {
      commit('setBands', bands)
    },
    favsLoadAction({ commit }) {
      async function fetchFavs() {
        const favsCall = await fetch(`http://localhost:3000/favs`);
        const parsedFavs = await favsCall.json();
        commit('loadFavs', parsedFavs);
      };
      fetchFavs()
    },

    favDeleteAction({commit, dispatch}, id) {
      async function deleteFav(id) {
        const fetchOpt = {
          method: "DELETE",
        };
        try {
          const favsCall = await fetch(`http://localhost:3000/favs/${id}`, fetchOpt);
          dispatch('favsLoadAction')
        } catch (err) {
          console.log(err);
        }
      }
      deleteFav(id)
    }
  },
  modules: {
  }
})
