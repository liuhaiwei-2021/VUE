<template>
  <div class="mt-5 p-5 border rounded text-center">
      
      <h3>Week Dishes</h3>
      <ul class="list-group list-group-flush">
          <WeekDish  v-for="(weekdish, index) in weekDishes" :key="index" :weekdish="weekdish"/>    
     </ul>

</div>   

</template>

<script>
import WeekDish from './WeekDish'
import { mapGetters } from 'vuex'



export default {
    name: 'WeekDishesList',
    components: {
      WeekDish
    },
    computed:{
      ...mapGetters(['weekDishes'])
    }
    
}
</script>
<style>

</style>