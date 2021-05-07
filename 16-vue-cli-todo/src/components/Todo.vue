<template>
    <div>
       <li class="list-group-item d-flex justify-content-between ">
           <div >
               <input :id="todo.id"  class="form-check-input me-1" type="checkbox" :checked="todo.completed" @click="updateTodo">
               <label :for="todo.id" :class="[{completed:todo.completed},'select-pointer']"> {{ todo.title }}</label>

           </div>        
        
        <i class="fas fa-trash select-pointer" @click="deleteTodo"></i>
      </li>
    </div>  
</template>

<script>
export default {
    name:"Todo",
    // props: ['todo'],
    props:{
        todo:Object
    },
    data(){
        return{}
    },
    methods:{
        updateTodo(){
            this.todo.completed = !this.todo.completed
            this.$emit('update-todo', this.todo)
        },
        deleteTodo(){
              this.$emit('delete-todo', this.todo.id)
        }

    }
    
}
</script>

<style>
.completed{
    text-decoration: line-through;
    color:#cecece;
}
.select-pointer{
    cursor:pointer;
}

</style>