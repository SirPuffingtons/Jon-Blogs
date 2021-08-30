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

        <button>Register ></button>
    </form>
</main>
</template>

<script>
export default {
    name: 'register',
    data() {
        return {
            firstName: null,
            lastName: null,
            username: null,
            email: null,
            password: null
        }
    }
}
</script>

<style>

</style>