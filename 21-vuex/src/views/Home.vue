<template>
  <div class="home">
    <h1>Home</h1>

    <p>{{ $store.state.counter }}</p>

    <h2>Student</h2>
    <ul>
      <li v-for="student in $store.state.students" :key="student.id">{{ student.name }}</li>
    </ul>

    <h1>age is more than 4</h1>
    {{ $store.getters.more4}}


     <h1>age is more than 4 length</h1>
    {{ $store.getters.more4length }}


    <h2>age is more than 4</h2>
    {{$store.getters.morethanAge(3)}}

    <button class="btn btn-success" @click="addStudent">ADD  a student</button>
  </div>

</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  },
  methods: {
    addStudent(){
      const student4 = {id:4, name: 'Andy', age:5}
      this.$store.commit('addStudent', student4)
    }
    
    }
}
</script>
