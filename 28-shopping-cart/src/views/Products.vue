<template>
  <div class="container mt-5">
    <Loader v-if="loading" />
    <ProductCardDeck />
      
  </div>
</template>

<script>

import ProductCardDeck from '../components/Products/ProductCardDeck'
import Loader from '../components/Loader'
import { mapActions, mapGetters }  from  'vuex'


export default {
    name:'Products',
    components:{
      ProductCardDeck,
      Loader     
    },
    computed: {
      ...mapGetters(['loading'])
   },
    methods:{
      ...mapActions(['getProducts',])
    },
    created(){
        this.getProducts()
    }


}
</script>

<style>

</style>