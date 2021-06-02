<template>
  <div>
    <div class="p-2 d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <img :src="item.product.image" class="img-fluid image-width" alt="">
        <div>
          <div><strong>{{ item.product.name }}</strong></div>
          <div><small>{{ item.quantity }} x {{ item.product.price }}</small></div>
        </div>
      </div>

      <div>
        <div class="btn-group btn-group-sm me-2">
          <button class="btn btn-dark" @click.stop="decrement(item)">-</button>
          <button class="btn btn-dark" @click.stop="increment(item)">+</button>
        </div>
        <button class="btn btn-sm btn-danger" @click.stop="deleteProductFromCart(item.product.id)"><i class="fas fa-trash"></i></button>
      </div>

    </div>
    <div class="dropdown-divider"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['item'],
  methods: {
    ...mapActions(['deleteProductFromCart', 'increment', 'decrement'])
  }
}
</script>

<style scoped>
  .image-width {
    width: 90px;
  }
</style>