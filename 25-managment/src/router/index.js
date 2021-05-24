import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products'
import Product from '../views/Product'
import Manage from '../views/manage/Manage'
import ManageProducts from '../views/manage/ManageProducts'
import ManageProduct from '../views/manage/ManageProduct'

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
    path: '/products/:id',
    name: 'Product',
    props: true,
    component: Product
  },
  {
    path: '/manage',
    name: 'Manage',
    component: Manage
  },
  {
    path: '/manage/products',
    name: 'ManageProducts',
    component: ManageProducts
  },
  {
    path: '/manage/products/:id',
    name: 'ManageProduct',
    props: true,
    component: ManageProduct
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
