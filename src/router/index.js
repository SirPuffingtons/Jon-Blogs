import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Posts from '@/views/Posts.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import ResetPassword from '@/views/ResetPassword.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
        title: 'Home'
    }
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts,
    meta: {
        title: 'Posts'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
        title: 'Login'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
        title: 'Register'
    }
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword,
    meta: {
        title: 'Reset Password'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | Jon Blogs`
    next()
})

export default router