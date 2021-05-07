import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import News from  '../components/News.vue'
// import Profile from '../components/Profile.vue'

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      { path: 'news', component: News },
    ],
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
    component: () => import('../views/User.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../components/Profile.vue')
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:routes,
  linkActiveClass:'Active'
})

export default router
