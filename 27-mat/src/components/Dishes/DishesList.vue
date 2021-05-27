<template>
  <div class="mt-5 p-5">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Theme</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>

            <Dish v-for="(dish, index) in dishes" :key="index" :dish="dish" :id="index" />      
      
        </tbody>
      </table>
      <button class="btn btn-light mt-3" @click="addRndomDish"> Select a random week dish</button>
</div>
</template>

<script>
import Dish from './Dish'
import { mapGetters, mapActions } from 'vuex'



export default {
    name: 'DishesList',
    components: {
      Dish
    },
    computed:{
      ...mapGetters(['dishes'])
    },
    methods:{
      ...mapActions(['addRndomDish'])
    }
    
}
</script>
<style>

</style>