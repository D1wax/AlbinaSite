import Vue from 'vue'
import VueRouter from 'vue-router'
import Purecss from 'purecss'

Vue.use(VueRouter)

const routes = [
{
  path: '/login',
  component: () => import('@/views/Login.vue')
},
{
  path: '/covid',
  component: () => import('@/views/Covid.vue')
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
