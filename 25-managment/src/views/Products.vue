<template>
  <div>
      Products
      <div v-for="product in products" :key="product.id"> 
        <div><router-link :to="'/products/'+ product.id">{{ product.name }}</router-link></div>
      </div>
  </div>
</template>

<script>

import { mapActions,mapGetters } from 'vuex'


export default {
  name: 'Products',
  computed: {
    ...mapGetters(['products'])
  },
  methods:{
    ...mapActions(['getProducts'])
  },
  created () {
    this.getProducts()
  }

}
</script>

<style>

</style>