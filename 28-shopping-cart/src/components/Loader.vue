<template>
  <div class="wrapper">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .wrapper {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.493);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
  }
  .spinner {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    border: 12px solid transparent;
    border-bottom: 12px solid blue;
    border-top: 12px solid blue;
    animation: spinner 1s linear infinite;
  }
  @keyframes spinner {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>