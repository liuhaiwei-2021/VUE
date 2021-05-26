<template>
  <form class="row mt-5" @submit.prevent="onSubmit">
      <div class="col-10">
          <input type="name" class="form-control" id="name" placeholder="Please enter a name..." v-model="customerName">
      </div>
      <div class="col-2">
          <button class="btn btn-primary" @submit="onSubmit">Add a customer</button>
      </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:'AddCustomerForm',
    data() {
        return{
            customerName:''
        }
    
    },
    methods:{
        ...mapActions(['addCustomer']),
        onSubmit(){
            this.addCustomer(this.customerName)
            this.customerName = ''
        }

    }
}
</script>

<style>

</style>