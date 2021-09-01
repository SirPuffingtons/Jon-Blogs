<template>
<Modal v-if="modal" :message="modal" v-on:closeModal="closeModal" />
<main>
    <header>
        <img src="@/assets/icons/user-alt-light.svg">
        Profile Settings
    </header>
    <section>
        <p>{{$store.state.initials}}</p>
        <p v-if="admin" class="admin">
            <img src="@/assets/icons/user-crown-dark.svg">
            Admin
        </p>
        <fieldset>
            <p>First Name:</p>
            <input type="text" v-model="firstName" spellcheck="false">
        </fieldset>
        
        <fieldset>
            <p>Last Name:</p>
            <input type="text" v-model="lastName" spellcheck="false">
        </fieldset>
        
        <fieldset>
            <p>Username:</p>
            <input type="text" v-model="username" spellcheck="false">
        </fieldset>
        
        <fieldset>
            <p>Email:</p>
            <input type="email" disabled v-model="email" spellcheck="false">
        </fieldset>
    </section>
    <button @click="saveChanges">Save Changes</button>
</main>
</template>

<script>
import Modal from '@/components/Modal'
// import {auth, db} from '@/firebase'
// import {updateProfile} from 'firebase/auth'

export default {
    components: {
        Modal
    },
    data() {
        return {
            modal: ''
        }
    },
    methods: {
        closeModal() {
            this.modal = !this.modal
        },
        saveChanges() {
            this.$store.dispatch('updateUserSettings')
            this.modal = 'Changes were saved!'
        }
    },
    computed: {
        firstName: {
            get() {return this.$store.state.firstName},
            set(payload) {this.$store.commit('changeFirstName', payload)}
        },
        lastName: {
            get() {return this.$store.state.lastName},
            set(payload) {this.$store.commit('changeLastName', payload)}
        },
        username: {
            get() {return this.$store.state.username},
            set(payload) {this.$store.commit('changeUsername', payload)}
        },
        email() {return this.$store.state.email}}
}
</script>

<style scoped>
    header {
        grid-template-columns: auto max-content;
        justify-content: center;
        gap: 1rem;
        height: max-content;
        font-size: 1.75rem;
        align-items: center;
    }

    header > img {
        width: 1.75rem;
        height: 1.75rem;
    }

    main {
        padding: 4rem 2rem;
        justify-items: center;
        gap: 2rem;
    }

    section {
        padding: 2rem;
        box-shadow: 0 0 3px 0 rgb(196, 196, 196);
        background-color: rgb(238, 238, 238);
        border-radius: 15px;
        gap: 1.5rem;
        min-width: 50%;
    }

    section > p {
        justify-self: center;
        background-color: var(--colorGray);
        font-size: 1.25rem;
        padding: 1.25rem;
        color: white;
        border-radius: 50%;
    }

    section > p.admin {
        grid-template-columns: auto max-content;
        font-size: 0.75rem;
        align-items: center;
        border-radius: 5px;
        padding: 0.4rem 0.5rem;
        gap: 0.25rem;
    }

    section > p > img {
        width: 0.75rem;
        height: 0.75rem;
    }

    fieldset {
        gap: 0.5rem;
    }

    fieldset > p {
        font-size: 0.9rem;
    }

    input {
        padding: 1rem 1rem;
    }
</style>