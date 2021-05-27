<template>
  <form class="row mt-5" @submit.prevent="onSubmit">
      <div class="col-6">
          <input type="name" class="form-control" id="name" placeholder="Please enter a name..." v-model="dish.name">
      </div>
      <div class="col-3">
            <select class="form-select form-control" id="theme"  v-model="dish.theme">
                <option disabled value="">Select</option>
                <option value="Sverige">Sverige</option>
                <option value="Thai">Thai</option>
                <option value="Kinesiska">Kinesiska</option>
            </select>
      </div>
      <div class="col-3">
          <button class="btn btn-primary" @submit="onSubmit">Add a Dish</button>
      </div>
  </form>
</template>

<script>
import {  mapActions } from 'vuex'

export default {
    name:'AddDishesForm',
    data(){
        return{
            dish:{
                 name: '',
                theme: '' 
            }                  
        }
    },

    methods: {
        ...mapActions(['addDish']),
        onSubmit(){
            this.addDish(this.dish)      
            }
    }
    
}
</script>

<style>

</style>