<template>
  <div class="text-center">
      <h1>My POSTS</h1>
      <div class="container mb-3 p-3">         
            <post  v-for="post in posts" :key="post.id" :post="post"/>
    
      </div>
  </div>
</template>

<script>
import Post from '../components/Posts/Post'
import {   mapGetters,mapActions } from 'vuex'

export default {
  name: 'Posts',
  computed: {
    ...mapGetters(['posts'])
    },
  components: {
    Post
    },
    methods: {
       ...mapActions(['getPosts'])
    },
    created () {
      this.getPosts()
    }

}
</script>

<style>

</style>