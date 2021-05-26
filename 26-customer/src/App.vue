<template>
  <div id="app">
    <div id="nav">
      <Navbar />
  
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navgation/Navbar'
import { mapActions }  from 'vuex'
export default {
  components: {
    Navbar,
  },
  methods: {
    ...mapActions(['checkUsers'])
    },
  created() {
    this.checkUsers()
  }
  
}
</script>
