<template>
  <div id="signin">
      <button @click="signIn">Logga in</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex' 
export default {
    name: 'SignIn',
    methods: {
      ...mapActions(['signIn'])
    }
}
</script>

<style>
</style>