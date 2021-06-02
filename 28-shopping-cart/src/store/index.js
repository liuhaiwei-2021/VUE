import Vue from 'vue'
import Vuex from 'vuex'
import ProductsModule from './ProductsModule'
import ProductModule from './ProductModule'
import ShoppingCart from './ShoppingCart'
import Order from './Order'

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
    ProductModule,
    ShoppingCart,
    Order
  }
})
