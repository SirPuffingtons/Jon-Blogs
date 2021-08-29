<template>
<header>
    <router-link :to="{name: 'Home'}">Jon Blogs</router-link>

    <nav v-show="!isMobile">
        <router-link to="#">Home</router-link>
        <router-link to="#">Posts</router-link>
        <router-link to="#">Create Post</router-link>
        <router-link to="#">Login/Register</router-link>
    </nav>

    <img @click="toggleMobileNav" src="@/assets/icons/bars-regular.svg" alt="menu" class="menuBtn" v-show="isMobile">

    <transition name="mobile-nav" class="mobile-nav" v-show="mobileNavIsVisible">
        <nav>
            <router-link to="#">Home</router-link>
            <router-link to="#">Posts</router-link>
            <router-link to="#">Create Post</router-link>
            <router-link to="#">Login/Register</router-link>
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
    background-color: var(--colorWhite);
    box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.25);
    gap: 1rem;
    grid-template-columns: max-content auto;
    padding: 1rem;
}

header > a {
    font-size: var(--fontSizeTitle);
    font-weight: 900;
}

header > nav:first-of-type {
    justify-self: right;
    gap: 1rem;
    grid-template-columns: repeat(4, max-content);
}

header > nav > a {
    font-weight: 500;
    transition: var(--transition) color;
}

header > nav > a:hover {
    color: var(--colorPrimary);
}

a:focus{
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 0.25rem;
}

.menuBtn {
    cursor: var(--cursorPointer);
    height: var(--fontSizeTitle);
    justify-self: right;
    width: var(--fontSizeTitle);
}

.mobile-nav {
    background-color: var(--colorGray);
    gap: 1rem;
    grid-auto-rows: max-content;
    height: 100%;
    left: 0;
    padding: 1.5rem;
    position: fixed;
    top: 0;
    width: max-content;
}

.mobile-nav a {color: var(--colorWhite)}

@keyframes slideIn {from {transform: translateX(-100%)}}
.mobile-nav-enter-active {animation: slideIn 0.3s}
.mobile-nav-leave-active {animation: slideIn reverse 0.3s}
</style>