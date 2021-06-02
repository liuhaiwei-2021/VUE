<template>
  <div class="col-lg-4">
    <div class="card h-100">
        <!-- <router-link :to="{name: 'ProductDetails', params: { id: product.id }}"> -->
            <img
            :src= "product.image" 
            class="card-img-top img-fluid "
            alt="..."     @click="onClick"   />

        <!-- </router-link> -->
        
        <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title">{{ product.name}}</h5>
            <p class="card-text">{{ product.short }}            </p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'ProductCard',
    props:['product'],
    methods:{
        onClick(){
            this.$router.push({
                name: 'ProductDetails',
                params: {
                    id: this.product.id
                }
            })

        }
    }
}
</script>

<style>

</style>