<template >
<div class="tab-bar-item">
    <slot name="icon-img"></slot>
    <slot name="icon-text"></slot>  
</div>
  
</template>

<script>
export default {
  name:'TarbarItem'

}
</script>

<style>
.tab-bar-item {
    flex:1;
    align-items: center;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img{
    width:24px;
    height:auto;
    margin-top:3px;
  }

</style>