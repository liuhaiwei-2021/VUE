<template>
  <div class="container">
    <div class="border mb-3 mt-3 p-3 text-center">
        <h5>{{ post.title }}</h5>
        <p>{{ post.body }}</p> 
    </div>
      
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
    name: 'PostDetails',
    props:['id'],
    computed: {
        ...mapGetters(['post'])
    },
    methods: {

...mapActions(['getPost'])
    },
    created(){
        this.getPost(this.id)
    }

}
</script>

<style>

</style>