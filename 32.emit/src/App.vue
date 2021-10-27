<template>
  <div id="app" class="container mt-2">
    <div class="row row-cols-2 g-4">  
      <Display :name="name" :age="age" :email="email"/>
      <Update  :name="name" :age="age" :email="email"/>
    </div>  
  
  </div>
</template>

<script>

import Display from './components/Display.vue'
import Update from './components/Update.vue'

export default {
  name:'App',
  data(){
    return{
      name: 'Joakim',
      age: 34,
      email:'joakim@gmai.com'

    }
  },
  components: {
    Display,
    Update    
  }
}
</script>

<style>

</style>
