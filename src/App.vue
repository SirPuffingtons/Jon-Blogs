<template>
<Navigation v-if="navigation" />
<router-view/>
<Footer v-if="navigation" />
</template>

<script>
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import {auth} from '@/firebase'
import {onAuthStateChanged} from 'firebase/auth'

export default {
    name: 'App',
    components: {Navigation, Footer},
    data() {
        return {
            navigation: true
        }
    },
    created() {
        onAuthStateChanged(auth, user => {
            this.$store.commit('updateUser', user)
            if(user) {
                this.$store.dispatch('getCurrentUser')
                console.log(this.$store.state.email)
            }
        })

        this.checkRoute()
    },
    methods: {
        checkRoute() {
            this.$route.name === 'Login'
            || this.$route.name === 'Register'
            || this.$route.name === 'ResetPassword'
                ? this.navigation = false
                : this.navigation = true
        }
    },
    watch: {
        $route() {this.checkRoute()}
    }
}
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

html {font-size: 17px}

:root {
    --colorWhite: rgb(255, 255, 255);
    --colorGray: rgb(48, 48, 48);
    --colorBlack: rgb(25, 25, 25);

    --colorPrimary: rgb(0, 192, 102);
    --colorSecondary: rgb(0, 65, 34);

    --cursorPointer: pointer;

    --fontFamilyText: 'Quicksand', sans-serif;

    --fontSizeRegular: 1rem;
    --fontSizeTitle: 1.5rem;

    --transition: 0.15s;
}

* {
    background-color: transparent;
    border: none;
    border-radius: 0;
    box-shadow: none;
    box-sizing: border-box;
    color: var(--colorBlack);
    font-family: var(--fontFamilyText);
    font-size: var(--fontSizeRegular);
    font-style: normal;
    margin: 0;
    outline: none;
    padding: 0;
    text-shadow: none;
    text-decoration: none;
}

#app, #app * {display: grid}

#app {
    grid-template-rows: max-content auto max-content;
    min-height: 100vh;
}

a {transition: var(--transition) color}
a:hover {color: var(--colorPrimary) !important}

a:focus{
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 0.25rem;
}

aside {
    background-color: rgb(230, 230, 230);
    position: relative;
    padding: 2rem 2rem 3rem 2rem;
    gap: 2rem;
}

aside > header {
    font-weight: 300;
    font-size: 1.8rem;
    gap: 2rem;
}

aside > main {
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.error {
    color: red;
    text-align: center;
}
</style>