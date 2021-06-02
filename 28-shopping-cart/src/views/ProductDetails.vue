<template>
  <div >
    <Loader v-if="product_loading"/>     
      
    <section class="text-center rounded shadow p-5" v-if="product">
        <h3>Product Details</h3>
        <div class="row">
            <div class="col-lg-6 mt-5">
                <img :src="product.image" alt="" srcset="">

            </div>
            <div class="col-lg-6 text-center mt-5">
                <h3>{{ product.name }}</h3>
                <p>{{ product.desc }}</p>
                <div class="d-flex justify-content-between">
                    <h3><span class="text-danger">{{product.price}}</span> SEK</h3>
                <div>
                    <button class="btn btn-primary" @click="onClick">Add To Cart</button>
                    <input type="number" class="form-control" v-model="quantity">
            </div>
            </div>
            
          </div>

        </div>

    </section>
    
   
 
  </div>
</template>

<script>
import Loader from '../components/Loader'

import { mapGetters, mapActions } from 'vuex'

export default {
    name:'ProductDetails',
    data(){
        return {
            quantity: 1

        }
    },
    components:{
        Loader
    },
    props:['id'],

    computed: {
        ...mapGetters(['product','product_loading'])
    },
    methods: {
        ...mapActions(['getProduct','addToCart']),
        onClick(){
            this.addToCart({product: this.product, quantity: this.quantity})
            this.quantity = 1
            }

    },
    created() {
        this.getProduct(this.id)
    }

}
</script>

<style scoped>
  .form-control {
    display: inline-block;
    width: 60px !important;
  }
</style>