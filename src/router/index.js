import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/auten/login.vue'
import registro from '../views/auten/registro.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/registro', 
    name: 'registro',
    component: registro
  }
]

const router = new VueRouter({
  routes
})

export default router
