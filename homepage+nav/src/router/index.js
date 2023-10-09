import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Technology from '../views/Technology.vue'
import Crew from '../views/Crew.vue'
import Destination from '../views/Destination.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Technology',
    name: 'Technology',
    component: Technology
  },
  {
    path: '/Crew',
    name: 'Crew',
    component: Crew
  },
  {
    path: '/Destination',
    name: 'Destination',
    component: Destination
  }
]

const router = new VueRouter({
  routes
})

export default router
