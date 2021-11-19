<template>
  <div class="container mt-4 border">
      <button class="btn btn-primary">  sign in </button>
      <button class="btn btn-outline-primary"> sign up </button>
      <SignIn />
      <SignUp />


  </div>
</template>


<script>
import SignIn from './SignIn'
import SignUp from './SignUp'

export default {
    components:{
        SignIn,
        SignUp
    }

}
</script>

<style>

</style>