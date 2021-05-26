import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Posts from '../views/Posts'
import Customers from '../views/Customers'
import PostDetails from '../views/PostDetails'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts  
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers
  },
  {
    path: '/postDetails/:id',
    name: 'PostDetails',
    props:true,
    component: PostDetails
  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
