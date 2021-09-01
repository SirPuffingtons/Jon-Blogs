<template>
<header>
    <router-link :to="{name: 'Home'}">Jon Blogs</router-link>

    <nav v-show="!isMobile">
        <router-link :to="{name: 'Home'}">Home</router-link>
        <router-link :to="{name: 'Posts'}">Posts</router-link>
        <router-link to="#">Create Post</router-link>

        <div class="profileBtn" ref="profileBtn" v-if="user" @click="toggleProfileMenu">
            {{this.$store.state.initials}}

            <div class="profileMenu" v-show="profileMenuIsVisible">
                <p>{{this.$store.state.initials}}</p>
                <p>
                    {{this.$store.state.firstName}} {{this.$store.state.lastName}}
                    <br>
                    @{{this.$store.state.username}}
                    <br>
                    {{this.$store.state.email}}
                </p>

                <hr>

                <router-link to="#">
                    <img src="@/assets/icons/user-alt-dark.svg">
                    Profile
                </router-link>
                <router-link to="#">
                    <img src="@/assets/icons/user-crown-dark.svg">
                    Admin
                </router-link>
                <router-link to="#" @click="logout">
                    <img src="@/assets/icons/sign-out-alt-regular-dark.svg">
                    Log Out
                </router-link>
            </div>
        </div>

        <router-link :to="{name: 'Login'}" v-else>Login/Register</router-link>
    </nav>

    <img @click="toggleMobileNav" src="@/assets/icons/menuBtn.svg" alt="menu" class="menuBtn" v-show="isMobile">

    <transition name="mobile-nav" class="mobile-nav" v-show="mobileNavIsVisible">
        <nav>
            <router-link :to="{name: 'Home'}">Home</router-link>
            <router-link :to="{name: 'Posts'}">Posts</router-link>
            <router-link to="#">Create Post</router-link>
            <router-link :to="{name: 'Login'}" v-if="!user">Login/Register</router-link>
        </nav>
    </transition>
</header>
</template>

<script>
import {auth} from '@/firebase'

export default {
    name: 'Navigation',
    components: {},
    data() {
        return {
            isMobile: null,
            mobileNavIsVisible: null,
            windowWidth: null,
            profileMenuIsVisible: false
        }
    },
    created() {
        window.addEventListener('resize', this.checkScreen)
        this.checkScreen()
    },
    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth

            this.windowWidth <= 750
                ? this.isMobile = true
                : (this.isMobile = false, this.mobileNavIsVisible = false)
        },
        toggleMobileNav() {this.mobileNavIsVisible = !this.mobileNavIsVisible},
        toggleProfileMenu(e) {
            if(e.target === this.$refs.profileBtn)
                this.profileMenuIsVisible = !this.profileMenuIsVisible
        },
        logout() {
            auth.signOut()
        }
    },
    computed: {
        user() {return this.$store.state.user}
    }
}
</script>

<style scoped>
header {
    align-items: center;
    align-self: flex-start;
    background-color: var(--colorWhite);
    box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.25);
    gap: 2rem;
    grid-template-columns: max-content auto;
    padding: 1.8rem;
    position: relative;
}

header > a {
    font-size: var(--fontSizeTitle);
    font-weight: 900;
}

header > nav:first-of-type {
    align-items: center;
    justify-self: right;
    gap: 2rem;
    grid-template-columns: repeat(4, max-content);
}

header > nav > a {font-weight: 500}

.profileBtn {
    background-color: var(--colorGray);
    padding: 0.35rem;
    border-radius: 50%;
    cursor: pointer;
    color: white;
}

.profileMenu {
    background-color: var(--colorGray);
    position: absolute;
    right: 1.5rem;
    top: 5rem;
    z-index: 1;
    padding: 1rem;
    gap: 1rem;
    cursor: default;
}

.profileMenu * {color: white}

.profileMenu > a {
    justify-self: left;
    align-items: center;
    gap: 0.5rem;
    grid-column: 1/3;
    grid-template-columns: 1fr max-content;
}

.profileMenu > a > img {
    width: 1rem;
    height: 1rem;
}

.profileMenu > hr {
    height: 1px;
    background-color: white;
    grid-column: 1/3;
}

.profileMenu > p:first-of-type {
    color: var(--colorGray);
    background-color: white;
    border-radius: 50%;
    height: max-content;
    align-self: center;
    padding: 0.35rem;
}

.profileMenu > p:last-of-type {
    font-size: 0.75rem;
}

.menuBtn {
    cursor: var(--cursorPointer);
    height: var(--fontSizeTitle);
    justify-self: right;
    width: var(--fontSizeTitle);
}

.mobile-nav {
    z-index: 1;
    background-color: var(--colorGray);
    gap: 2rem;
    grid-auto-rows: max-content;
    height: 100%;
    left: 0;
    padding: 1.8rem;
    position: fixed;
    top: 0;
    width: max-content;
}

.mobile-nav a {color: var(--colorWhite)}

@keyframes slideIn {from {transform: translateX(-100%)}}
.mobile-nav-enter-active {animation: slideIn 0.3s}
.mobile-nav-leave-active {animation: slideIn reverse 0.3s}
</style>