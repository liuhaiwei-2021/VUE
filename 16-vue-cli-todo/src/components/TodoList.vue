<template>
<div class="container mt-5">

    <Todo :todo="todo" v-for="todo in todos" :key="todo.id" @update-todo="$emit('update-todo', todo)"  @delete-todo="$emit('delete-todo',todo.id)"/>

</div>
</template>

<script>

import Todo from './Todo'

export default {
 name: "TodoList",
 props: ['todos'],
 components: {
   Todo
 },
 methods: {
    updateTodo(){
      this.$emit('updateTodo',this.todos.todo);
    }
  }

}
</script>

<style>

</style>