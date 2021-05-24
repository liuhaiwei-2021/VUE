import axios from 'axios'

export default {
  state: {
    products: [],
    product:{}
   
  },
  getters:{
      products: state => state.products,
      product: state => state.product   

  },
  mutations: {
      SET_PRODUCTS:  (state,products) => state.products = products,
      SET_PRODUCT:   (state, product) => state.product = product,
      CLEAR_PRODUCT: (state, product) => state.product = product
  },
  actions: {
      getProducts:   async ({commit,getters}) =>{
        console.log('getting products...')
        const res = await axios.get(`${getters.apiUrl}/products`)
        if(res.status === 200){
            commit('SET_PRODUCTS',res.data)
        }
      },

      // CRUD Create(post) read(get) Update(put) Delete(delete)

      postProduct:     async({commit, getters}, product) =>{
        console.log('posting product')
        const res = await axios.post(`${getters.apiUrl}/products`,product)
        if(res.status===201){
         commit('SET_PRODUCTS',res.data)
        }
      },
      getProduct:    async({ commit, getters }, id) => {
           console.log(`getting product with id: ${id}...`); 
           const res = await axios.get(`${getters.apiUrl}/products/${id}`); 
           if(res.status === 200) {
                commit('SET_PRODUCT', res.data);}},
      putProduct:    async({ dispatch, getters}) =>{
          console.log(`updating product...${getters.product.id}`)
          console.log(getters.product)
          const res = await axios.put(`${getters.apiUrl}/products/${getters.product.id}`, getters.product);
          if(res.status === 200){
            dispatch('getProduct', getters.product.id)
            window.history.go(-1)
          }     
      },
      deleteProduct:  async ({dispatch,getters}, id) => {
        console.log('delete a product by id') 
        const res = await axios.delete(`${getters.apiUrl}/products/${id}`) 
        if(res.status === 200){
            dispatch('getProducts', getters.product.id); 
            window.history.go(-1)
          }
    },
      clearProduct: ({commit}) => { console.log('cleaning product data'); commit('CLEAR_PRODUCT', {})} 
  }
}
