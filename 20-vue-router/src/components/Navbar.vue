<template>
  <nav>
      <h1>LOGO</h1>
      <ul>
           <li><router-link class="link" to="/">Home</router-link> </li>
           <li><router-link class="link" to="/about">About</router-link> </li>
      </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav{
    background-color:darkslategray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    

}
ul {
    display: flex;
    
}
li {
    list-style:none;
}
.link {
    text-decoration: none;
    padding:1rem;
    color:white;
    display: inline-block;
}


</style>