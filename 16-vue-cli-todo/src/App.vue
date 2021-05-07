<template>
  <div id="app">    
    <Navbar />
    <AddTodo @create-todo="createTodo"/>
    <TodoList :todos="todos"  @update-todo="updateTodo"  @delete-todo="deleteTodo"/>

  </div>
</template>

<script>
 import axios from 'axios'
 import Navbar from './components/NavBar.vue'
 import TodoList from './components/TodoList'
 import AddTodo from './components/AddTodo'
 


export default {
  name: 'App',
  components: {
    Navbar,
    TodoList,
    AddTodo 
  },
  data(){
    return {
      todos:[],
      apiUrl: 'https://vue-todolist.azurewebsites.net/api/todos'
      
    }

  },
  methods: {
    //  createTodo(todo) {
    //   // fetch(this.apiUrl,{ method: 'post', body: JSON.stringify(todo) }).catch(() => {})
    //   axios.post(this.apiUrl, todo)
    //   this.todos.unshift(todo)
    // },
    async createTodo(todo) {
      // fetch(this.apiUrl,{ method: 'post', body: JSON.stringify(todo) }).catch(() => {})
        try {
          const res = await axios.post(this.apiUrl, todo) 
          if(res.status === 200)  {
            this.todos.unshift(todo)
            console.log(this.todos)
            this.readTodos() 
          }
        }
        catch {console.log('error')}
    },
    async readTodos() {
      // fetch(this.apiUrl).then(res => res.json()).then(data => { this.todos = data}).catch(() => {})     
      //axios.get(this.apiUrl).then(data => { this.todos = data }).catch(() => {})
      try{

        const res = await axios.get(this.apiUrl)
        this.todos = res.data
      }
      catch{console.log('error')}
      
      //console.log(this.todos)
    },
    updateTodo(todo) {
      // fetch(`${this.apiUrl}/${todo.id}`, { method: 'put', body: JSON.stringify(todo) }).catch(() => {})
      axios.put(`${this.apiUrl}?id=${todo.id}`, todo)
      
    },
    async deleteTodo(id) {
      // fetch(`${this.apiUrl}/${id}`,{ method: 'delete'}).then(res => res.json()).then(() => { this.readTodos() }).catch(() => {})
      // axios.delete(`${this.apiUrl}/${id}`).then(() => { this.readTodos() }).catch(() => {})
      await axios.delete(`${this.apiUrl}?id=${id}`)
      this.todos =  this.todos.filter(todo => todo.id !== id)
    }
  },
  created() {
    this.readTodos()
  }
}
</script>

<style>

</style>
