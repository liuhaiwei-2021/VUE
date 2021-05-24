<template>
  <div id="product">      
      <div>
        <p>{{ product.name }}</p>
        <p>this is product</p>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Product',
  props:['id'],
  computed:{
    ...mapGetters(['product'])

  },
  methods: {
    ...mapActions(['getProduct'])

  },
  created(){
    this.getProduct(this.id)
    }

}
</script>

<style>

</style>