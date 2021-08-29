<template>
<header>
    <router-link :to="{name: 'Home'}">Jon Blogs</router-link>
    <nav>
        <router-link to="#">Home</router-link>
        <router-link to="#">Blogs</router-link>
        <router-link to="#">Create Post</router-link>
        <router-link to="#">Login/Register</router-link>
    </nav>

    <img src="@/assets/icons/bars-regular.svg" alt="menu">
    <transition name="mobile-nav">
        <nav>
            <router-link to="#">Home</router-link>
            <router-link to="#">Blogs</router-link>
            <router-link to="#">Create Post</router-link>
            <router-link to="#">Login/Register</router-link>
        </nav>
    </transition>
</header>
</template>

<script>
export default {
    name: 'navigation',
    components: {}
}
</script>

<style>

</style>