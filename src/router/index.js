import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Posts from '@/views/Posts.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import ResetPassword from '@/views/ResetPassword.vue'
// import {auth} from '@/firebase'

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
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
            title: 'Login',
            requiresGuest: true
        }
        },
        {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
            title: 'Register',
            requiresGuest: true
        }
        },
        {
        path: '/reset-password',
        name: 'ResetPassword',
        component: ResetPassword,
        meta: {
            title: 'Reset Password',
            requiresGuest: true
        }
        }
    ]
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | Jon Blogs`

    // if(to.matched.some(record => record.meta.requiresAuth)) {
    //     if(!auth.currentUser) {''}
    //     else next()
    // }

    // else if(to.matched.some(record => record.meta.requiresGuest)) {
    //     if(auth.currentUser) {
    //         next({
    //             path: '/',
    //             query: {
    //                 redirect: to.fullPath
    //             }
    //         })
    //     }
    //     else next()
    // }

    // else next()

    next()
})

export default router