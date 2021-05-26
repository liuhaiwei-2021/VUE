<template>
  <div class="mt-5 p-5">
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Active</th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>

      <Customer v-for="(customer, index) in filterCustomer" :key="index" :customer="customer" :id="index"/>      
 
  </tbody>
</table>
  </div>
</template>

<script>
import Customer from './Customer'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'CustomerList',
    components: {
      Customer
    },
    computed:{
        ...mapGetters(['customers','filterCustomer'])
    },
    methods:{
         ...mapActions(['setSorage'])

    },
    updated() {
      this.setSorage()

    }
}
</script>

<style>

</style>