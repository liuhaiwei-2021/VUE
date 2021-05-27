<template>  
    <tr>
      <th scope="row">{{ id }}</th>
       <td>{{ dish.name }}</td>
       <td>{{ dish.theme }}</td>
      <td class="d-flex justify-content-end">
          <button class="btn btn-sm btn-dark me-2" @click="addWeekDishes(dish)" >Add to Menu</button>
          <button class="btn btn-sm btn-danger" @click="deleteDish(dish)" ><i class="fas fa-trash-alt  me-1"></i>DELETE</button>
      </td>
    </tr>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name:'Dish',
    props: ['dish', 'id'],
    methods: {
      ...mapActions(['deleteDish','addWeekDishes'])
    }
   
}
</script>

<style scoped>
  .inactive{
      color: #dcdcdc
  }


</style>