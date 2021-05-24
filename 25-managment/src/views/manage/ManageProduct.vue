<template>
  <div id="manage-product">      
        <form @submit.prevent="putProduct">
          <input type="text" v-model="product.name">
          <div>
            <button type="submit">Save</button>
            <button type="button" @click="deleteProduct(product.id)">Delete</button>
          </div>
        </form>
        <p>this is  manage product</p>      
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ManageProduct',
  props:['id'],
  computed:{
    ...mapGetters(['product'])

  },
  methods: {
    ...mapActions(['getProduct','putProduct','clearProduct','deleteProduct'])
      },
  created(){
    this.getProduct(this.id) 
    },
  destroyed(){
     this.clearProduct()
  }

}
</script>

<style>

</style>