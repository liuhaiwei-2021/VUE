<template>
  <div class="p-3 mt-1">
    <ShoppingCartProduct v-for="(item,index) in shoppingCart" :key="index" :item="item"/>
    

    <div v-if="shoppingCart.length < 1">
      <div>
        your cart is empty.        
      </div>
    </div>
  
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <strong>Total: </strong>{{ shoppingCartTotal }} SEK
      </div>
      
      <button v-if="!order" class="btn btn-primary" @click="handleClick">Check Out</button>
      <button v-if="order" class="btn btn-primary" @click="completePurchase">Complete Purchase</button>
    </div>
      <!-- <small class="text-muted">inc. vat </small> -->   
  </div>
</template>

<script>
import ShoppingCartProduct from './ShoppingCartProduct'
import { mapGetters,mapActions } from 'vuex'
export default {
    props:['order'],
    components: {
        ShoppingCartProduct
    },
    computed: {
      ...mapGetters(['shoppingCart', 'shoppingCartTotal'])
        },
    methods:{
      ...mapActions(['addOrder','clearCart']),
      handleClick() {
        this.$router.push({name:'CheckOut'})
      },
      completePurchase() {
        if(this.shoppingCart.length){
          let cart = {
            shoppingCart: this.shoppingCart,
            total: this.shoppingCartTotal
          }
          this.addOrder(cart)
          this.clearCart()
        }else{
          alert('your shoppingcart is empty')
        }
        
      }
    }

}
</script>

<style>

</style>