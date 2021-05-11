<template>
  <form class="border p-5">
      <h4 class="text-center">Rigister</h4>
  <!-- 2 column grid layout with text inputs for the first and last names -->
  <div class="row mb-4">
    <div class="col">
      <div class="">
        <label class="form-label" for="firstname">First name</label>
        <input type="text" id="firstname" class="form-control" />        
      </div>
    </div>
    <div class="col">
      <div class="">       
        <label class="form-label" for="lastname">Last name</label>
        <input type="text" id="lastname" class="form-control" />
      </div>
    </div>
  </div>

  <!-- Email input -->
  <div class="mb-4">
    <label class="form-label" for="email">Email address</label>
    <input type="email" id="email" class="form-control" />    
  </div>

  <!-- Password input -->
  <div class="mb-4">
    <label class="form-label" for="password">Password</label>
    <input type="password" id="password" class="form-control" />   
  </div>

  <!-- Checkbox -->
  <div class="form-check d-flex justify-content-center mb-4">
    <input
      class="form-check-input me-2"
      type="checkbox"
      value=""
      id="form2Example3"
      checked
    />
    <label class="form-check-label" for="form2Example3">
      Subscribe to our newsletter
    </label>
  </div>

  <!-- Submit button -->
  <button type="submit" class="btn btn-primary btn-block mb-4">Sign up</button>

  <!-- Register buttons -->
  <div class="text-center">
    <p>or sign up with:</p>
    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div>
</form>
</template>

<script>
export default {

}
</script>

<style>

</style>