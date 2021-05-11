<template>
    <div>
        <div class="card mt-5" v-for="(blog,index) in posts" :key="index">
            <div class="card-header bg-primary text-white text-center">{{ blog.title }}</div>
            <div class="card-body">
                <div class="d-flex justify-content-between">                    
                    <ul class="list-group list-group-horizontal">
                        <li v-for="(cat,index) in blog.categories" :key="index">{{ cat }}</li>
                    </ul>
                    <p>Author: {{ blog.author }}</p>  
                </div>

                <p>{{ blog.content }}</p>      
            
            </div>

        </div>

        
    </div>
  
</template>

<script>
export default {
    props:['posts']

}
</script>

<style>

</style>