import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Message from '../views/Message.vue'
import Talking from '../views/Talking.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
  {
    path: '/talking',
    name: 'Talking',
    component: Talking
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
