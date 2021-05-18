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

        <div class="card" v-for="(item,index) in data1" :key="index">
            <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">
                {{ item.body }}
                </p>
            </div>
        </div>
        <button class="btn btn-primary btn-block mt-5" @click="getalldata">get all data</button>

        
    </div>
  
</template>

<script>
export default {
    props:['posts'],
    data(){
        return {
            data1: [],
            }
    },
    methods:{
        getalldata(){
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {this.data1 = json})
        }
        

    }

}

    

</script>

<style>

</style>