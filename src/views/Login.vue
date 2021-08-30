<template>
<main class="auth">
    <form>
        <p>
            Don't have an account?
            <router-link :to="{name: 'Register'}">Register ></router-link>
        </p>

        <h2>Jon Blogs Login</h2>
        
        <fieldset>
            <img src="@/assets/icons/envelope-regular.svg">
            <input type="email" placeholder="Email" v-model="email" spellcheck="false">
        </fieldset>

        <fieldset>
            <img src="@/assets/icons/lock-alt-solid.svg">
            <input type="password" placeholder="Password" v-model="password" spellcheck="false">
        </fieldset>

        <router-link :to="{name: 'ResetPassword'}">Reset Password ></router-link>

        <button>Log In ></button>
    </form>
</main>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            email: null,
            password: null
        }
    }
}
</script>

<style>
main.auth {
    background-image: url('../assets/background.png');
    background-size: cover;
    grid-template-columns: minmax(max-content, 0.6fr) 1fr;
    height: 100vh;
    overflow: hidden;
}

form {
    align-content: center;
    justify-items: center;
    background-color: white;
    gap: 1rem;
    padding: 5rem;
    position: relative;
}

form > p, form a {
    font-size: 0.8rem;
}

form a {
    font-weight: 600;
    justify-self: center;
}

form > p {
    justify-self: center;
    gap: 0.5rem;
    grid-template-columns: max-content max-content;
}

fieldset {
    gap: 1rem;
    position: relative;
}

fieldset > img {
    top: 0.65rem;
    left: 0.5rem;
    height: 1rem;
    width: 1rem;
    position: absolute;
}

fieldset > input {
    background-color: rgb(223, 223, 223);
    padding: 0.5rem 0.75rem 0.5rem 2rem;
}

form > h2 {
    font-size: 2rem;
    max-width: 10rem;
    text-align: center;
}

button {
    background-color: var(--colorGray);
    border-radius: 20px;
    cursor: pointer;
    color: white;
    padding: 0.5rem 1.5rem;
    justify-self: center;
    transition: var(--transition) background, var(--transition) color;
}

button:hover, button:focus {
    background-color: gray;
    color: black !important;
    text-decoration: none;
}

form::after {
    content: '';
    position: absolute;
    background-color: white;
    transform: rotate(3deg);
    width: 60px;
    height: 110%;
    top: -25px;
    right: -25px;
}

@media (max-width: 700px) {
    main.auth {grid-template-columns: auto}

    form {padding: 1rem 1rem; gap: 0.5rem}

    form > h2 {font-size: 1.75rem}

    form::after {display: none}
}
</style>