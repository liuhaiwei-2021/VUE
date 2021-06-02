import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import About from '../views/About.vue'
import ProductDetails from '../views/ProductDetails.vue'
import ShoppingCart from '../components/ShoppingCart/ShoppingCart'
import CheckOut from '../views/CheckOut'
import Thanks from '../views/Thanks'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/products/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true
  } ,
  {
    path: '/shoppingcart',
    name: 'ShoppingCart',
    component: ShoppingCart,

  },
  {
    path: '/checkout',
    name: 'CheckOut',
    component: CheckOut
  },
  {
    path: '/thanks',
    name: 'Thanks',
    component: Thanks
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
