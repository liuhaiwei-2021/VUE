<template>
  <div class="home">
    <h1>This is an home page</h1>
    <router-link to="/home/news">News</router-link>
    
    
 
<!-- 
  <router-view v-slot="{ Component }">
      <keep-alive include="Home,About">
        <component class="view" :is="Component" />
      </keep-alive>
    </router-view> -->
  

  </div>
</template>

<script>

export default {
  name: 'Home',
  created () {
    console.log('home created')

  },
  destoryed(){
    console.log('home destoryed')

  }
 
}


</script>
