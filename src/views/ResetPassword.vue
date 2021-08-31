<template>
<Modal v-if="modal" :message="modal" v-on:closeModal="closeModal" />
<Loading v-if="loading" />
<main class="auth">
    <form>
        <router-link :to="{name: 'Login'}">◄ back to Login</router-link>

        <h2>Reset Password</h2>
        
        <fieldset>
            <img src="@/assets/icons/envelope-regular.svg">
            <input type="email" placeholder="Email" v-model="email" spellcheck="false">
        </fieldset>

        <button @click.prevent="resetPassword">Reset ></button>
    </form>
</main>
</template>

<script>
import Modal from '@/components/Modal'
import Loading from '@/components/Loading'
import {auth} from '@/firebase'
import {sendPasswordResetEmail} from 'firebase/auth'

export default {
    name: 'ResetPassword',
    components: {
        Modal,
        Loading
    },
    data() {
        return {
            email: '',
            modal: '',
            loading: false
        }
    },
    methods: {
        closeModal() {
            this.modal = !this.modal
            this.email = ''
        },
        resetPassword() {
            this.loading = true

            sendPasswordResetEmail(auth, this.email)

            .then(() => {
                this.modal = 'If the account exists, you will receive an email.'
                this.loading = false
            })

            .catch(() => {
                this.modal = 'An error occurred.'
                this.loading = false
            })
        }
    }
}
</script>

<style scoped>

</style>