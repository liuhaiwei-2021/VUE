import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {id: 1, name: 'Product 1', price: 200},
      {id: 2, name: 'Product 2', price: 299},
      {id: 3, name: 'Product 3', price: 300},
      {id: 4, name: 'Product 4', price: 400},
      {id: 5, name: 'Product 5', price: 500},
      {id: 6, name: 'Product 6', price: 600},
      {id: 7, name: 'Product 7', price: 700},
      {id: 8, name: 'Product 8', price: 800},
      {id: 9, name: 'Product 9', price: 900},
      {id: 10, name: 'Product 10', price: 234},
      {id: 11, name: 'Product 11', price: 277}
    ]
  },
  getters: {
    taxedProducts: state => {
      let taxedProducts = state.products.map(product => {
        return {
          ...product,
          price: Math.round(product.price + product.price * 0.2)
        }
      })
      return taxedProducts
    },
    products: state => state.products
  },
  mutations: {
    ADD: (state) => {
      state.products.forEach(product => {
        product.price += 10
      })
    },
    // SUB: (state, amount) => {
    //   setTimeout(() => {
    //     state.products.forEach(product => {
    //       product.price -= amount
    //     })
    //   }, 4000)
    // }
    SUB: (state, amount) => {
        state.products.forEach(product => {
          product.price -= amount
        })
    }
  },
  actions: {
    subAsync: (context, amount) => {
      setTimeout(() => {
        context.commit('SUB', amount)
      }, 2000)
    },
    addToPrice: ({commit}) => {
      commit('ADD')
    }
  },
  modules: {
  }
})