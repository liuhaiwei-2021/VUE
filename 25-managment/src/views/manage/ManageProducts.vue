<template>
  <div id="manage-products">
      Manage Products
      <form @submit.prevent="submitProduct">
          <input type="text" v-model="product.name">
          <button type="submit">Add a product</button>
      </form>
     
      
      <div v-for="product in products" :key="product.id"> 
        <div><router-link :to="'/manage/products/'+ product.id">{{ product.name }}</router-link></div>
      </div>
  </div>
</template>

<script>

import { mapActions,mapGetters } from 'vuex'


export default {
  name: 'Products',
  data () {
    return {
      product: {}
    }
  },
  computed: {
    ...mapGetters(['products'])
  },
  methods:{
    ...mapActions(['getProducts', 'postProduct']),
     submitProduct() {
        this.postProduct(this.product)
        this.product = {}
        this.getProducts()
      }
  },
  created () {
    this.getProducts()
  }

}
</script>

<style>

</style>