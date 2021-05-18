<template>
  
    <div>
        <div  v-if="posts.length">
             <post-card v-for="post in posts" :key="post.id" :post="post" />
       </div>
       <div v-else>
           <h2>No data found</h2>
       </div>
    </div>
</template>

<script>

import PostCard from './PostCard'
export default {
    components: {
        PostCard
    },
    props: ['posts']       

}
</script>

<style>

</style>