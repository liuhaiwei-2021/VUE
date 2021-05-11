<template>
  <div class="container">
      <button class="btn btn-sm my-0" :class="loginClasses" @click="change('Login')">Login in</button>
      <button class="btn btn-sm my-0" :class="registerClasses" @click="change('SignUp')">Register</button>
      <!-- <Login />
      <sign-up /> -->
      <keep-alive>
        <component :is="comp"></component>
      </keep-alive>
      

  </div>
</template>

<script>
import  Login from './Login'
import SignUp from './SignUp'

export default {
    components: {
        Login,
        SignUp

    },
    data() {
        return {
            comp: 'Login',
            login: true
            }
    },
    methods: {
        change(val){
            this.comp = val
            if(val === 'Login')
              this.login = true
            else
              this.login = false
        }
    },
    computed: {
        loginClasses() {
            return{
                'btn-primary': this.login,
                'btn-outline-primary': !this.login
            }

        },
        registerClasses() {
            return{
                'btn-primary': !this.login,
                'btn-outline-primary': this.login
            }

        }

    }

}
</script>

<style>

</style>