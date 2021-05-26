<template>
  <div id="post">
       <router-link :to="`/postDetails/${post.id}`">
            <div class="border rounded mb-3 p-3 hover-shadow text-dark ">
                <h2>{{ post.title }}</h2>
                <p>{{ post.body | shorten}}</p>
            </div>
        </router-link> 
  </div>
</template>

<script>
export default {
    name: 'Post',
    props: ['post'],
    filters:{
        shorten(val){
            return val.slice(0,75) + '....'
        }
    }
}
</script>

<style>
#post {
    text-decoration: none;

}

</style>