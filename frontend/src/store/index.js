import { createStore } from 'vuex'

export default createStore({
  state: {
    test: "testing vuex",
    tripBase: {
      id: -1,
      duration: 1,
      area: "area",
    },
  },
  mutations: {
    updateId(state, newId) {
      state.tripBase.id = newId
    }

  },
  actions: {
    updateId({commit}, newId) {
      commit('updateId', newId)
    }

  },
  modules: {

  },

})