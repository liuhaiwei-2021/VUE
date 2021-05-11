<template>
<div class="container">
    <form class="border p-5" @submit.prevent="create">
        <p class="h4 text-center">Create a post</p>
        <!-- Titile -->
        <div class="mb-3">
            <label for="title">Title</label>
            <input type="text" id="title" class="form-control" v-model="blog.title">
            <p class="invalid-feedback">Please enter a title</p> 
        </div>

        <div class="mb-3">
            <label for="content">Content</label>
            <textarea id="content" class="form-control" v-model="blog.content"></textarea>
            <p class="invalid-feedback">Please enter content</p> 
        </div>

        <p>Categories</p>
        <div class="mb-3">
            <div class="form-check form-check-inline ms-1">
            <input class="form-check-input" type="checkbox" id="travel" value="travel" v-model="blog.categories"/>
            <label class="form-check-label" for="travel">Travel</label>
            </div>

            <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="food" value="food" v-model="blog.categories"/>
            <label class="form-check-label" for="food">Food</label>
            </div>

            <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="computers" value="computers" v-model="blog.categories"/>
            <label class="form-check-label" for="computers">Computers</label>
            </div>

            <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="frontend" value="frontend" v-model="blog.categories"/>
            <label class="form-check-label" for="frontend">Frontend</label>
            </div>
            <p class="text-danger sm" v-if="catErr">Please choose a category</p>
        </div>
        <div class="mb-3">
            <label for="author">Author</label>
            <select  id="author" class="form-select" v-model="blog.author">
               <option value="" disabled selected></option>
               <option v-for="(au,index) in authors" :key="index">{{ au }}</option>
            </select>
            <p class="invalid-feedback">Please choose an author</p>
        </div>
        <button class="btn btn-primary btn-block mt-5">Create a post</button>
    </form>
        
        
    <div class="card mt-5">
        <h1 class="text-center">Preview</h1>
    <div class="card-header bg-primary text-white text-center">{{ blog.title }}</div>
    <div class="card-body">
        <p>Content:</p>
        <p>{{ blog.content }}</p>
        <p>Categories:</p>
        <ul class="list-group list-group-horizontal">
            <li v-for="(cat,index) in blog.categories" :key="index">{{ cat }}</li>
        </ul>
        <p>Author:</p>  
        <p>{{ blog.author }}</p>      
        
    </div>

    </div>


</div>  
</template>

<script>
export default {
    data(){
        return{
            blog:{
                title: '',
                content:'',
                categories:[],
                author:''
            },
            authors: ['Joakim','Molly','Mia'],
            catErr: false
        }
    },
    methods:{
        create(e){
            if(this.blog.title !== '' && this.blog.content !== '' && this.blog.author !== '' && this.blog.categories.length > 0){
               this.$emit('new-post',this.blog)
               e.target.forEach(t => t.classList.remove('is-invalid'))
               this.catErr = false
               this.blog= {
                   title: '',
                   content:'',
                   categories:[],
                   author:''
               }
            }
            else{
               e.target.forEach(t=>{
                   if(t.type == 'checkbox'){
                       if(this.blog.categories.length>0){
                           t.classList.remove('is-invalid')
                           this.catErr = false
                       }else{
                           t.classList.add('is-invalid')
                           this.catErr = true
                       }
                   }
                   else{
                       if(t.value == ''){
                          t.classList.add('is-invalid')
                       }else{
                           t.classList.remove('is-invalid')
                       }
                      
                   }
               })
            }

        }
    }

}
</script>

<style>

li {
    list-style: none;
    padding: 0 0.5rem 0 0;
}

</style>