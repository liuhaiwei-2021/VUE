<template>
  <div id="nav">
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <!-- <router-link to="/user">User</router-link> -->
     <router-link v-bind:to="'/user/'+userID">User</router-link> |
     <router-link :to="{path:'/profile',query:{name:'Molly',age:4}}">Profile</router-link> 
     <div>
        <button @click="profileclick">profileclick</button>
     </div>
     
     <!-- <router-view></router-view> -->

     <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"  v-if="$route.meta.keepAlive"/>
      </keep-alive>
      <component :is="Component"  v-if="!$route.meta.keepAlive"/>
    </router-view> 

  </div>   
</template>

<script>
export default {
  data () {
    return{
      userID:'firstuser'
    }
  },
  methods:{
    profileclick(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'Molly',
          age:4
        }
      })
    }
  },
 activated(){
    console.log(this.path)
    this.$router.push(this.path)

  },  
  beforeRouteLeave(to, from, next) {
    console.log(this.$route.path)
    this.path = this.$route.path
    next()
  }
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

button:hover{
  color:  #42b983;
  }
</style>
