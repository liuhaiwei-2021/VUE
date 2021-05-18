<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        <img slot="icon-img" src="./assets/img/tabbar/cart.svg" alt="">
        <div slot="icon-text">Home</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="icon-img" src="./assets/img/tabbar/cart.svg" alt="">
        <div slot="icon-text">Shopingcart</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="icon-img" src="./assets/img/tabbar/cart.svg" alt="">
        <div slot="icon-text">Mine</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="icon-img" src="./assets/img/tabbar/cart.svg" alt="">
        <div slot="icon-text">Home</div>
      </tab-bar-item>
    </tab-bar>    
  </div>
</template>

<script>
import TabBar from './components/tabbar/tabbar'
import TabBarItem from './components/tabbar/tabbarItem'

export default {
  name: 'App',
  components: {
     TabBar,
     TabBarItem
      
  }
}
</script>

<style>
 
 


</style>
