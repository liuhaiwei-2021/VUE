<template>
  <div class="customer container">
    <AddCustomerForm />
    <CustomerList />
  </div>
</template>

<script>
import AddCustomerForm from '../components/Customers/AddCustomerForm'
import CustomerList from '../components/Customers/CustomerList'

export default {
  name:'Customer',
  components:{
    AddCustomerForm,
    CustomerList
  }
  
}
</script>