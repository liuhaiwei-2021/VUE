<template>  
    <tr :class="activeClass">
      <th scope="row">{{ id }}</th>
       <td>{{ customer.name }}</td>
      <td>{{ isActiveText }}</td>
      <td class="d-flex justify-content-end">
          <button class="btn btn-sm btn-dark me-2" @click="toggleActive(customer)">{{ activeStateText }}</button>
          <button class="btn btn-sm btn-danger" @click="removeCustomer(customer)"><i class="fas fa-trash-alt  me-1"></i>DELETE</button>
      </td>
    </tr>
</template>

<script>

import {  mapActions } from 'vuex'

export default {
    name:'Customer',
    props: ['customer','id'],
    methods:{
      ...mapActions(['removeCustomer', 'toggleActive','setStorage'])
      
   },               
    computed: {
        isActiveText (){
            if(this.customer.active)
               return 'Active'
            else
               return 'Inactive'
        },
        activeStateText(){
            if(this.customer.active)
               return 'Inactive'
            else
               return  'Active'
               

        },
        activeClass(){
            if(!this.customer.active)
              return 'inactive'
            else
              return ''
        }    
    },
    updated(){
      this.setStorage()
    }

}
</script>

<style scoped>
  .inactive{
      color: #dcdcdc
  }


</style>