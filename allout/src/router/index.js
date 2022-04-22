import { createRouter, createWebHashHistory } from 'vue-router'
import header from '../components/header.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: header
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
