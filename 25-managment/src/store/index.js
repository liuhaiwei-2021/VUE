import Vue from 'vue'
import Vuex from 'vuex'
import productsModule from './modules/productsModule'
import usersModule from './modules/usersModule'
import authModule from  './modules/authModule'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: process.env.VUE_APP_API_URL
  },
  getters:{
    apiUrl: state =>state.apiUrl

  },
  mutations: {

  },
  actions: {
  },
  modules: {
    usersModule,
    productsModule,
    authModule
  }
})
