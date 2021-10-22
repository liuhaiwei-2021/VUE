<template>
  <nav class="navbar navbar-light navbar-expand-lg bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="../assets/logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
      {{title}}
    </a>
    
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div v-if="signedIn" class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>

    <div v-else>
      <button class="btn btn-light">  
        Sign In
      </button>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  props:{
    title:String,
    signedIn:Boolean
  }

}
</script>

<style>

</style>