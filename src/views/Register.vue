<template>
<main class="auth">
    <form>
        <p>
            Already have an account?
            <router-link :to="{name: 'Login'}">Login ></router-link>
        </p>

        <h2>Jon Blogs Register</h2>
        
        <fieldset>
            <img src="@/assets/icons/user-alt-light.svg">
            <input type="text" placeholder="First Name" v-model="firstName" spellcheck="false">
        </fieldset>
        
        <fieldset>
            <img src="@/assets/icons/user-alt-light.svg">
            <input type="text" placeholder="Last Name" v-model="lastName" spellcheck="false">
        </fieldset>
        
        <fieldset>
            <img src="@/assets/icons/user-alt-light.svg">
            <input type="text" placeholder="Username" v-model="username" spellcheck="false">
        </fieldset>
        
        <fieldset>
            <img src="@/assets/icons/envelope-regular.svg">
            <input type="email" placeholder="Email" v-model="email" spellcheck="false">
        </fieldset>

        <fieldset>
            <img src="@/assets/icons/lock-alt-solid.svg">
            <input type="password" placeholder="Password" v-model="password" spellcheck="false">
        </fieldset>

        <div class="error" v-show="error">{{this.error}}</div>

        <button @click.prevent="register">Register ></button>
    </form>
</main>
</template>

<script>
import {auth, db} from '@/firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {doc, setDoc} from 'firebase/firestore'

export default {
    name: 'Register',
    data() {
        return {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        async register() {
            if(this.firstName && this.lastName && this.username && this.email && this.password) {

            this.error = ''
            let firebaseError = ''

            const dbUser = {
                firstName: this.firstName,
                lastName: this.lastName,
                username: this.username,
                email: this.email
            }

            const router = this.$router

            await createUserWithEmailAndPassword(auth, this.email, this.password)

            .then(result => {
                setDoc(doc(db, 'users', result.user.uid), dbUser)
                .then(() => router.push({name: 'Home'}))
                .catch(err => firebaseError = err.code)
            })
            
            .catch(err => firebaseError = 'Email already in use.')

            this.error = firebaseError

            return
            }

            this.error = 'Please fill out all fields.'
        }
    }
}
</script>