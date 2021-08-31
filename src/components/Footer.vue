<template>
<footer>
    <router-link :to="{name: 'Home'}">Jon Blogs</router-link>

    <nav>
        <router-link :to="{name: 'Home'}">Home</router-link>
        <router-link :to="{name: 'Posts'}">Posts</router-link>
        <router-link to="#">Create Post</router-link>
        <router-link :to="{name: 'Login'}">Login/Register</router-link>
    </nav>

    <address>
        <a href="https://github.com/SirPuffingtons" target="_blank">
            <img src="@/assets/icons/github.svg" alt="GitHub">
        </a>
        <a href="https://www.linkedin.com/in/dev-jr/" target="_blank">
            <img src="@/assets/icons/linkedin.svg" alt="LinkedIn">
        </a>
        <a href="mailto:me@jonathanrobinson.ca" target="_blank">
            <img src="@/assets/icons/email.svg" alt="Email">
        </a>
    </address>

    <small>Copyright &copy; Jonathan Robinson, 2021. All rights reserved.</small>
</footer>
</template>

<script>
export default {name: 'Footer'}
</script>

<style scoped>
footer {
    align-items: center;
    align-self: flex-end;
    background-color: var(--colorGray);
    gap: 2rem;
    grid-template-columns: 1fr auto 1fr;
    padding: 2rem;
}

footer > * {gap: 1.5rem}

footer * {color: var(--colorWhite)}

footer a {font-weight: 500}

footer > a {
    font-size: var(--fontSizeTitle);
    font-weight: 900;
    justify-self: left;
}

footer > a:hover {color: var(--colorWhite)}

address {justify-self: right; grid-template-columns: repeat(3, max-content)}

nav {
    grid-template-columns: repeat(4, max-content);
    justify-self: center;
}

address > a > img {
    height: 1.65rem;
    width: 1.65rem;
}

small {
    color: rgb(150, 150, 150);
    font-size: 0.8rem;
    grid-column: 1/4;
    text-align: center;
}

@media (max-width: 750px) {
    footer {
        grid-template-columns: auto;
    }

    footer > * {justify-self: center !important}
 
    nav {
        grid-template-columns: auto;
        justify-items: center;
    }

    small {grid-column: auto}
}
</style>