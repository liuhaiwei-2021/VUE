  
<template>
  <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <!-- Container wrapper -->
      <div class="container">
        <!-- Toggle button -->
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Navbar brand -->
          <router-link class="navbar-brand mt-2 mt-lg-0" :to="{ name: 'Home'}">
           <i class="fab fa-shopware me-1"></i> shopware.se
          </router-link>
          <!-- Left links -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Products' }">Products</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'About' }">About Us</router-link>
            </li>

          </ul>
          <!-- Left links -->

          <ul class="navbar-nav d-flex align-items-center">
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-shopping-cart"></i>
                <span v-if="cartItemCount > 0" class="badge rounded-pill badge-notification bg-danger">{{ cartItemCount }}</span>
              </a>
              <div class="dropdown-menu dropdown-menu-end shopping-cart" aria-labelledby="navbarDropdownMenuLink">
                <ShoppingCart />
              </div>
            </li>


            <li class="nav-item dropdown">
              <a
                class="nav-link d-flex align-items-center"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                class="rounded-circle"
                height="22"
                alt=""
                loading="lazy"
              />
              </a>
              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                User settings
              </div>
            </li>


          </ul>



        </div>
        <!-- Collapsible wrapper -->
      </div>
      <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
</template>

<script>
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import { mapGetters } from 'vuex'
export default {
  components: {ShoppingCart},
  computed: { ...mapGetters(['cartItemCount']) }
}
</script>

<style scoped>
  .shopping-cart {
    min-width: 450px;
  }
</style>