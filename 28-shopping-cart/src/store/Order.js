import axios from 'axios'
import router from '../router/index'

export default {
  state: {
    loading: false,
    error: undefined

  },
  getters: {
      orderLoading: state => state.loading ,
      orderError: state => state.error  
  },
  mutations: {
      ADD_ORDER: state => {
          state.loading = true
      },
      ADD_ORDER_SUCCESS: state => {
          state.loading = false
          console.log(state.loading + 'hhhhh')
          router.push({ name: 'Thanks' })
      },
      ADD_ORDER_FAILURE: (state,err) => {
          state.error = err.message
          state.loading = false
      }
  },
  actions: {
      addOrder:({commit,dispatch}, cart) => {
        commit('ADD_ORDER')
        let order = {
            shoppingCart: cart.shoppingCart,
            total: cart.total,
            status: 'pending',
            created: Date.now()
        }
        console.log(order)
        axios.post('http://localhost:3000/orders', order)
        .then(res => {
           setTimeout(() => {
            if(res.status === 201) {         
                dispatch('addOrderSuccess')                           
               }
           }, 300)           
       })
       .catch(err => {
           dispatch('addOrderFailure', err)
       })
      },
      addOrderSuccess:({commit}) => {
          commit('ADD_ORDER_SUCCESS')

      },
      addOrderFailure:({commit}, err) => {
        commit('ADD_ORDER_FAILURE', err)
      }
  }

}
