import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import News from  '../components/News.vue'

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    chidren:[
      {
        path:'',
        redirect:'news'

      },
      {
        path:'news',
        name:'News',
        component: () => import( '../components/News.vue')
        // component:News
      },
      {
        path:'message',
        name:'Message',
        component: () => import('../components/Message.vue')  
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user/:userID',
    name: 'User',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:routes,
  linkActiveClass:'Active'
})

export default router
