<template>
  <div class="nav">
      <router-link class="logo" to="/" exact>LOGO</router-link>
          <ul>
              <li>
                  <router-link class="link" to="/" exact>Home</router-link>
                  <router-link class="link" to="/about" exact>About</router-link>
                  <router-link class="link" to="/products" exact>Products</router-link>
              </li>
          </ul>

      </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.logo {
    text-decoration: none;
    color: #fff;
    font-size: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  }
 .nav{
     background-color:darkslategrey;
     color: antiquewhite;
     display: flex;
     justify-content: space-between;
     padding: 0 1rem;
 }
 li{
     list-style: none
 }
 .link{
     text-decoration: none;
     color:antiquewhite;
     padding: 1.5rem 1rem;  
     display: inline-block;
     position: relative;
 }
 .link:hover{
     color: #fff
 }
 .link.router-link-active::after {
    content: '';
    position: absolute;
    border-bottom: 2px solid #00fdfd;
    left: 1rem;
    right: 1.7rem;
    bottom: 1.2rem;
  }

</style>