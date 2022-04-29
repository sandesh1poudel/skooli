import { createRouter, createWebHistory } from 'vue-router'

// Website front-end
import HomePage from '../views/website/HomePage.vue';
import Register from '../views/website/Register.vue';
import Features from '../views/website/Features.vue';
import AboutUs from '../views/website/AboutUs.vue';

// Dashboard back-end
import Home from '../views/dashboard/Home.vue';
import Parrent from '../views/dashboard/Parrent.vue';
import Staff from '../views/dashboard/Staff.vue';
import Student from '../views/dashboard/Student.vue';
import Teacher from '../views/dashboard/Teacher.vue';



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
    },

    {
      path: '/dashboard/',
      name: 'dashboard',
      component: Home
    },

    {
      path: '/teacher/',
      name: 'teacher',
      component: Teacher
    },

    {
      path: '/student/',
      name: 'student',
      component: Student
    },

    {
      path: '/staff/',
      name: 'staff',
      component: Staff
    },

    {
      path: '/parrent/',
      name: 'parrent',
      component: Parrent
    }
    
  ]
})

export default router
