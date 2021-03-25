import { createStore } from 'Vuex'

const store = createStore({
  state() {
    return {
      count: 0,
      demoNames: [],
    }
  },
  getters: {
    demoNames(state) {
      return state.demoNames;
    }
  },
  mutations: {
    demoNames(state, demoNames) {
      state.demoNames = demoNames;
    },
    increment(state) {
      state.count++
    }
  }
})
export default store;