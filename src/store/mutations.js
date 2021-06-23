// import LOAD_FAVS from './mutation-types'
import * as types from './mutation-types'

export default {
  [types.LOAD_FAVS](state, payload) {
    state.favs = payload
  }
}