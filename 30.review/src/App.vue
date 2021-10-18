<template>
  <div id="app">
    <nav-bar />
    <hero />

  </div>
</template>

<script>

import navbar from './components/navbar.vue'
import Hero from './components/Hero.vue'

export default {
  name: 'App',
  components: {
    navBar:navbar,
    hero:Hero
    
  }
}
</script>

<style>
</style>
