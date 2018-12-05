import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Anum: 0,
    Bnum: 0,
    Cnum: 0,
    Dnum: 0,
    A_1num: 0,
    B_1num: 0,
    C_1num: 0,
    D_1num: 0,
    res:{}
  },
  mutations: {
    result(state) {
      state.res.red = state.Anum + state.D_1num
      state.res.blue = state.Bnum + state.C_1num
      state.res.yellow = state.Cnum + state.B_1num
      state.res.green = state.Dnum + state.A_1num
    }
  },
  actions: {

  }
})
