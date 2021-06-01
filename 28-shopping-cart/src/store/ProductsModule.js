import axios from 'axios'

export default {
  state: {
      products: [],
      loading: false,
      error: undefined,
  },
  getters: {
      products: state => state.products,
      loading: state => state.loading,
      error: state => state.error
    },
  mutations: {
      GET_PRODUCTS: state => {
          state.loading = true
      },
      GET_PRODUCTS_SUCCESS: (state, products) => {
        state.loading = false
        state.products = products
    },
     GET_PRODUCTS_FAILURE: (state, error) => {
        state.loading = false
        state.error = error
     }

  },
  actions: {
      getProducts:({commit,dispatch}) => {
          commit('GET_PRODUCTS')
          axios.get('http://localhost:3000/products')
            .then(res =>{
                setTimeout(() => {
                    dispatch('getProductSuccess', res.data)

                }, 400)

            })
            .catch(error => {
                dispatch('getProductFailure'), error.message

            })
      },
      getProductSuccess:({commit}, products) =>{
           commit('GET_PRODUCTS_SUCCESS', products)
      },
      getProductFailure:({commit}, error) =>{
        commit('GET_PRODUCTS_FAILURE', error)
   }
  }
}