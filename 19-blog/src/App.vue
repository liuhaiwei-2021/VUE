<template>
  <div id="app">
    <button class="btn m-0" :class="{'btn-primary': createPost, 'btn-outline-primary': !createPost }" @click="component='CreatePost'">Create</button>
    <button class="btn m-0" :class="{'btn-primary': viewPosts, 'btn-outline-primary': !viewPosts }" @click="component='ViewPosts'">View</button>
   <keep-alive>
     <component :is=component :posts="posts" @new-post="posts.push($event)"></component>
   </keep-alive>   

  </div>
</template>

<script>
import CreatePost from './components/CreatePost'
import ViewPosts from './components/ViewPosts'

export default {
  name: 'App',
  components: {
    CreatePost,
    ViewPosts
  
  },
  data() {
    return{
      posts: [],
      component:'CreatePost',
      createPost: true,
      viewPosts: false
    }
  },
  watch:{
    component(){
      if(this.component==='CreatePost'){
        this.createPost = true
        this.viewPosts = false     
      }else{
         this.createPost = false
         this.viewPosts = true 
      }
    }
  }
}
</script>

<style>

</style>
