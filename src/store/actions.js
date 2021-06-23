// import LOAD_FAVS from './mutation-types'
import * as types from './mutation-types'

export default {
  favsLoadAction({ commit }) {
    async function fetchFavs() {
      const favsCall = await fetch(`http://localhost:3000/favs`);
      const parsedFavs = await favsCall.json();
      commit(types.LOAD_FAVS, parsedFavs);
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
}