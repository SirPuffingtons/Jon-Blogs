<template>
<Modal v-if="modalActive" v-on:closeModal="closeModal" />
<Loading v-if="loading" />
<main class="auth">
    <form>
        <h2>Reset Password</h2>
        
        <fieldset>
            <img src="@/assets/icons/envelope-regular.svg">
            <input type="email" placeholder="Email" v-model="email" spellcheck="false">
        </fieldset>

        <button>Reset ></button>
    </form>
</main>
</template>

<script>
import Modal from '@/components/Modal'
import Loading from '@/components/Loading'

export default {
    name: 'resetPassword',
    components: {
        Modal,
        Loading
    },
    data() {
        return {
            email: null,
            modalActive: null,
            modalMessage: '',
            loading: null
        }
    },
    methods: {
        closeModal() {
            this.modalActive = !this.modalActive
            this.email = ''
        }
    }
}
</script>

<style scoped>

</style>