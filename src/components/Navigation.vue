<template>
<header>
    <router-link :to="{name: 'Home'}">Jon Blogs</router-link>

    <nav v-show="!isMobile">
        <router-link :to="{name: 'Home'}">Home</router-link>
        <router-link :to="{name: 'Posts'}">Posts</router-link>
        <router-link to="#">Create Post</router-link>
        <router-link :to="{name: 'Login'}">Login/Register</router-link>
    </nav>

    <img @click="toggleMobileNav" src="@/assets/icons/menuBtn.svg" alt="menu" class="menuBtn" v-show="isMobile">

    <transition name="mobile-nav" class="mobile-nav" v-show="mobileNavIsVisible">
        <nav>
            <router-link :to="{name: 'Home'}">Home</router-link>
            <router-link :to="{name: 'Posts'}">Posts</router-link>
            <router-link to="#">Create Post</router-link>
            <router-link :to="{name: 'Login'}">Login/Register</router-link>
        </nav>
    </transition>
</header>
</template>

<script>
export default {
    name: 'navigation',
    components: {},
    data() {
        return {
            isMobile: null,
            mobileNavIsVisible: null,
            windowWidth: null
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
        toggleMobileNav() {this.mobileNavIsVisible = !this.mobileNavIsVisible}
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
}

header > a {
    font-size: var(--fontSizeTitle);
    font-weight: 900;
}

header > nav:first-of-type {
    justify-self: right;
    gap: 2rem;
    grid-template-columns: repeat(4, max-content);
}

header > nav > a {font-weight: 500}

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