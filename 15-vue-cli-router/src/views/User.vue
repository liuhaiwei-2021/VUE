<template>
  <div class="user">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>User</h2>
    <h5>{{ userID }}</h5>
   
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'User',
  components: {
    // HelloWorld
  },
  computed: {
    userID () {
      return this.$route.params.userID      
    }

  }
}
</script>
