<template>
<section>
    <main>
        <h2 v-if="post.isWelcomeScreen">{{post.title}}</h2>
        <h2 v-else>{{post.title}}</h2>

        <p v-if="post.isWelcomeScreen">{{post.blogPost}}</p>
        <p v-else class="blogPreview">{{post.blogHTML}}</p>

        <router-link v-if="post.isWelcomeScreen" to="#">Login/Register ></router-link>
        <router-link v-else to="#">View Post ></router-link>
    </main>

    <img v-if="post.isWelcomeScreen" :src="require(`@/assets/blogPhotos/${post.photo}.jpg`)" alt="">
    <img v-else :src="require(`@/assets/blogPhotos/${post.blogCoverPhoto}.jpg`)" alt="">
</section>
</template>

<script>
export default {
    name: 'blogPost',
    props: ['post']
}
</script>

<style scoped>
    a {
        align-items: center;
        gap: 0.25rem;
        grid-template-columns: max-content max-content;
        width: max-content;
    }

    section {grid-template-columns: 0.66fr 1fr}

    section:first-of-type > main {background-color: var(--colorGray)}
    section:first-of-type > main * {color: var(--colorWhite)}

    section:nth-of-type(even) {grid-template-columns: 1fr 0.66fr}

    section:nth-of-type(even) > main {
        grid-column: 2;
        grid-row: 1/3;
    }

    img {width: 100%}

    main {
        place-content: center;
        gap: 1.5rem;
        padding: 2rem;
    }

    p {
        font-size: 0.9rem;
        font-weight: 300;
        line-height: 1.4rem;
        max-width: 18rem;
    }

    h2 {
        font-size: 2.3rem;
        font-weight: 300;
        max-width: 18rem;
        text-transform: uppercase;
    }

    @media (max-width: 750px) {
        section {grid-template-columns: auto}
        main {padding: 4rem 3rem}
        p {max-width: max-content}
        img {grid-row: 1}

        section:nth-of-type(even) {grid-template-columns: auto}
        section:nth-of-type(even) > main {
            grid-column: auto;
            grid-row: auto;
        }
    }
</style>