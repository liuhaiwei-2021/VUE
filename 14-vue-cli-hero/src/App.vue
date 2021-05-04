<template>
  <div id="app" >
    <NavBar v-bind:title="title"/>
    <Hero @change="change"/>
    <foot />
    
  </div>
</template>

<script>
 import NavBar from './components/NavBar.vue'
 import Hero from './components/Hero.vue'
 import foot from './components/foot.vue'

export default {
  name: 'App',
  data() {
    return{
      title:'Hero Page'
    }
  },
  components: {
    NavBar,
    Hero,
    foot
  },
  methods: {
    change(){
      this.title = 'Hero page change'
    }
  }
}
</script>

<style>

</style>
