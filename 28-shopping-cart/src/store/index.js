import Vue from 'vue'
import Vuex from 'vuex'
import ProductsModule from './ProductsModule'
import ProductModule from './ProductModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ProductsModule,
    ProductModule
  }
})
