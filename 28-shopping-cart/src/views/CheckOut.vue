<template>
  <div class="mt-5">
      <Loader v-if="orderLoading"/>
      <h1 class="text-center mb-5">Check Out</h1>
      <ShoppingCart :order="true"/>
  </div>
</template>

<script>
import ShoppingCart from '../components/ShoppingCart/ShoppingCart'
import Loader from '../components/Loader'
import { mapGetters } from 'vuex'

export default {
    props: ['order'],
    components: {
        ShoppingCart,
        Loader
    },
    computed: {
        ...mapGetters(['orderLoading'])
    }
}
</script>

<style>

</style>