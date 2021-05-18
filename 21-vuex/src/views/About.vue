<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ $store.state.counter }}</p>
    <button class="btn btn-success" @click="add">+</button>
    <button class="btn btn-success" @click="sub">-</button>
    <button class="btn btn-success" @click="addCount(5)">+5</button>  

  </div>
</template>
<script>
export default {
  methods: {
    add(){
      this.$store.commit('increment')
    },
     sub(){
      this.$store.commit('decrement')
    },
    addCount(count){
      this.$store.commit('incrementCount',count)
    }
  }
}
</script>
