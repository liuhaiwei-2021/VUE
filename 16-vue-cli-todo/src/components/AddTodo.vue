<template>
  <form  @submit.prevent="createTodo">
      <div class="input-group mb-3 container">
           <input type="text" class="form-control" placeholder="New todo" v-model="todo.title">
           <button type="submit" class="btn btn-success">Add a new todo</button>
      </div>
   
</form>


</template>

<script>
export default {
    name:'addTodo',
    data(){
      return{
          todo:{title:'',completed:false}
      }
    },
    methods:{
        createTodo(){
            if(this.todo.title!==''){
                this.$emit('create-todo', this.todo)
                // this.todo.title = ''
            }
                
        }
    }

}
</script>

<style>

</style>