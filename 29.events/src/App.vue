<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col-6 border py-5 m-5">
          <SignIn />

        </div>

      </div>
 

    </div>
    
  </div>
</template>

<script>
 import Navbar from './components/Navbar.vue'
 import SignIn from './components/SignIn.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    SignIn
    
  }
}
</script>

<style>

</style>
