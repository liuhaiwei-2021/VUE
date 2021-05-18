import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import News from  '../components/News.vue'
// import Profile from '../components/Profile.vue'

const routes = [
  {
    path:'',
    meta:{
      title:'Home',
      keepAlive:true
    },
    redirect:'/home'
  },
  {
    path: '/home',
    meta:{
      title:'Home',
      keepAlive:true
    },
    name: 'Home',
    component: Home,
    children: [
      { path: 'news', meta:{keepAlive:true}, component: News },
    ],
  },
  {
    path: '/about',
    meta:{
      title:'About',
      keepAlive:true
    },
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user/:userID',
    meta:{
      title:'User'
    },
    name: 'User',
    component: () => import('../views/User.vue')
  },
  {
    path: '/profile',
    meta:{
      title:'Profile'
    },
    name: 'Profile',
    component: () => import('../components/Profile.vue')
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:routes,
  linkActiveClass:'Active'
})
router.beforeEach((to,from,next) =>{
  document.title = to.meta.title
  next()

})

export default router
