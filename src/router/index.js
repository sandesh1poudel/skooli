import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue';
import Register from '../views/Register.vue';
import Features from '../views/Features.vue';
import AboutUs from '../views/AboutUs.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },

    {
      path: '/signup/',
      name: 'signup',
      component: Register
    },

    {
      path: '/features/',
      name: 'features',
      component: Features
    },

    {
      path: '/about-us/',
      name: 'aboutus',
      component: AboutUs
    }
    
  ]
})

export default router
