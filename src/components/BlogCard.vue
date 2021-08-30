<template>
    <section>
        <nav v-show="editPosts">
            <div><img src="@/assets/icons/edit-regular.svg" class="edit"></div>
            <div><img src="@/assets/icons/trash-regular.svg" class="delete"></div>
        </nav>

        <img :src="require(`@/assets/blogCards/${post.blogCoverPhoto}.jpg`)">

        <main>
            <h2>
                {{post.title}}
                <span>{{post.blogDate}}</span>
            </h2>
            <router-link to="#">View Post ></router-link>
        </main>
    </section>
</template>

<script>
export default {
    name: 'blogCard',
    props: ['post'],
    computed: {
        editPosts() {return this.$store.state.editPosts}
    },
    beforeUnmount() {this.$store.commit('toggleEditPosts', false)}
}
</script>

<style scoped>
    section {
        border-radius: 15px;
        box-shadow: 0 0 6px 0 rgb(194, 194, 194);
        cursor: var(--cursorPointer);
        grid-template-rows: auto 1fr;
        position: relative;
        transition: var(--transition) transform, var(--transition) box-shadow;
    }

    section:hover {
        box-shadow: 0 0 12px 6px rgb(194, 194, 194);
        transform: rotate(-2deg) scale(1.05);
    }

    nav {
        gap: 0.5rem;
        grid-template-columns: 1fr 1fr;
        position: absolute;
        right: 1rem;
        top: 1rem;
    }

    nav > div {
        background-color: white;
        box-shadow: 0 0 3px 1px var(--colorGray);
        border-radius: 50%;
        padding: 0.5rem;
        transition: var(--transition) background;
    }

    nav > div > img {
        height: 1rem;
        width: 1rem;
    }

    nav > div:hover {background-color: rgb(189, 189, 189)}

    section > img {
        border-radius: 15px 15px 0 0;
        width: 100%;
    }

    main {
        border-radius: 0 0 15px 15px;
        background-color: var(--colorWhite);
        gap: 3rem;
        padding: 1.5rem;
    }

    main > a {
        align-self: flex-end;
    }

    h2 {
        font-size: 1.3rem;
        font-weight: 400;
        gap: 0.5rem;
    }

    span {
        font-size: 0.7rem;
    }
</style>