<template>
  <div class="home">
    <h1>This is an home page</h1>
    <router-link to="/home/news">News</router-link>
    <router-view></router-view>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import News from '@/components/News.vue'
// import Message from '@/components/Message.vue'

export default {
  name: 'Home'
}

</script>
