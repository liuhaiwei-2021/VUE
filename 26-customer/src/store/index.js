import Vue from 'vue'
import Vuex from 'vuex'
import postsModule from './modules/postsModule'
import customerModule from './modules/customerModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    postsModule,
    customerModule
  }
})
