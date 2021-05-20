<template>
  <div class="products">
    <aside>
      <div class="buttons">
        <button><i class="fas fa-th-large"></i></button>
        <button><i class="fas fa-list"></i></button>
      </div>
      <br>
      <form>
        <div>
          <input type="text" placeholder="search...">
        </div>
      </form>
    </aside>
    <div class="content">
      <button @click="addToPrice">ADD</button>
      <button @click="subAsync(5)">SUB</button>
      <ProductCard v-for="product in taxedProducts" :key="product.id" :product="product" class="card" />
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    ProductCard
  },
  methods: {
    ...mapActions(['subAsync', 'addToPrice'])
  },
  computed: {
    ...mapGetters(['taxedProducts'])
  }

}
</script>

<style scoped>
  .products {
    display: flex;
  }
  aside {
    flex: 2;
    background: #424242;
    min-height: calc(100vh - 66.29px);
    padding: 2rem;
  }
  .content {
    flex: 10;
  }
  a {
    color: #fff;
  }
  .buttons button {
    padding: 0.2rem;
    margin-right: .5rem;
    cursor: pointer;
  }
  .card {
    margin: 1rem;
    background: #424242;
    color: #fff;
    display: flex;
    justify-content: space-between;
  }
</style>