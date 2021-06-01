import axios from 'axios'

export default {
  state: {
      product: [],
      loading: false,
      error: undefined,
  },
  getters: {
      product: state => state.product,
      product_loading: state => state.loading,
      product_error: state => state.error
    },
  mutations: {
      GET_PRODUCT: state => {
          state.loading = true
      },
      GET_PRODUCT_SUCCESS: (state, product) => {
        state.loading = false
        state.product = product
        console.log (state.loading)
    },
     GET_PRODUCT_FAILURE: (state, error) => {
        state.loading = false
        state.error = error
     }

  },
  actions: {
      getProduct:({commit,dispatch},id) => {
          commit('GET_PRODUCT')
          axios.get('http://localhost:3000/products/' + id)
            .then(res =>{
                setTimeout(() => {
                    dispatch('getProductSuccess', res.data)

                }, 1000)

            })
            .catch(error => {
                dispatch('getProductFailure'), error.message

            })
      },
      getProductSuccess:({commit}, product) =>{
           commit('GET_PRODUCT_SUCCESS', product)
      },
      getProductFailure:({commit}, error) =>{
        commit('GET_PRODUCT_FAILURE', error)
   }
  }
}