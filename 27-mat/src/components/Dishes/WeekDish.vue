<template> 
    <li class="list-group-item">{{ weekdish.name}} <i class="fas fa-minus-circle" @click="deleteWeekDish(weekdish)"></i></li> 
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name:'WeekDish',
    props: ['weekdish'],
    methods: {
        ...mapActions(['deleteWeekDish','setStorage'])
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