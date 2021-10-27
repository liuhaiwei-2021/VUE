<template>
  <div class="col">
    <div class="card">
        <div class="card-header bg-primary text-center text-white">
            Name:{{name}}
        </div>
       <div class="card-body text-center">
            <h5 class="card-title">Age: {{age}}</h5>
            <p class="card-text">Email: {{email}}</p>
       </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['name','age','email']

}
</script>

<style>

</style>