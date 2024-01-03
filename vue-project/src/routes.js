// route.js
import { createWebHistory,createRouter } from 'vue-router';

// Import your components
import Home from './components/home.vue'
import Login from './components/login.vue'
import Profile from './components/profile.vue'
import PageNotFound from './components/pageNotFound.vue'
import Register from './components/register.vue'
// Define your routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'pageNotFound',
    component: PageNotFound
  }
];

// Create the router instance
const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;
