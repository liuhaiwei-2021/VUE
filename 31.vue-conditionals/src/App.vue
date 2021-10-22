<template>
  <div id="app container">
    <Navbar  title ='Vue conditionals' :signedIn='checkRole'/>

  </div>
</template>

<script>

import Navbar from './components/Navbar'

export default {
  name: 'App',
  data(){
    return{
         signedIn: true,
         isAdmin:false
    }
  },
  components: {
    Navbar
  },
  computed:{
    checkRole(){
      if(this.isAdmin&&this.signedIn)
        return true
      else
        return false
    }
  }
}
</script>

<style>

</style>
