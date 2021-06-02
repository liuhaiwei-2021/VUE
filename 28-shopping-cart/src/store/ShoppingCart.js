
export default{
  state: {
      cart:[]
  },
  getters: {
    shoppingCart: state => state.cart,
    cartItemCount: state => {
      let items = 0
      state.cart.forEach(item => {
        items += item.quantity
      })
      return items
    },
    shoppingCartTotal: state => {
      let total = 0
      if(state.cart.length){
        state.cart.forEach(item => {
          total += item.product.price * item.quantity
        })
      }
      return total
    }
  },
  mutations: {
    ADD_TO_CART: (state, { product, quantity }) => {
      let exists = state.cart.find(item => item.product.id === product.id)
      if(exists) {
        exists.quantity += quantity
        return
      }
      state.cart.push({product, quantity})
    },
    DELETE_FROM_CART: (state,id) => {
      state.cart= state.cart.filter(item => item.product.id !==id)
    },
    INCREMENT: (state,item) => {
      item.quantity += 1
    },
    DECREMENT:(state, item) =>{
      item.quantity -=1
    },
    CLEAR_CART: (state) =>{
      state.cart = []

    }    
  },
  actions: {
    addToCart:({commit},{product, quantity}) => {
      let item = {
        product,
        quantity: Number(quantity)
      }
      commit('ADD_TO_CART', item)
    },
    deleteProductFromCart:({commit},id) =>{
      commit('DELETE_FROM_CART',id)
    },
    increment: ({commit},item) => {
      commit('INCREMENT',item)
    },
    decrement: ({commit}, item) =>{
      if(item.quantity <= 1) {
        commit('DELETE_FROM_CART', item.product.id)
      }
       commit ('DECREMENT',item)
    },
    clearCart:({commit}) => {
      commit('CLEAR_CART')

    }
  }
 
}
