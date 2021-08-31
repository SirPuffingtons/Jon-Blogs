<template>
    <aside>
        <header>
            Posts
            <label>
                Edit Mode
                <input type="checkbox" v-model="editPosts">
            </label>
        </header>

        <main>
            <BlogCard :post="post" v-for="(post, i) in sampleBlogCard" :key="i" />
        </main>
    </aside>
</template>

<script>
import BlogCard from '@/components/BlogCard'

export default {
    name: 'Posts',
    components: {BlogCard},
    computed: {
        sampleBlogCard() {return this.$store.state.sampleBlogCard},
        editPosts: {
            get() {return this.$store.state.editPosts},
            set(payload) {this.$store.commit('toggleEditPosts', payload)}
        }
    }
}
</script>

<style scoped>
    header {grid-template-columns: auto max-content}
    aside {align-content: flex-start}

    label {
        align-items: center;
        cursor: pointer;
        gap: 0.5rem;
        grid-template-columns: max-content max-content;
        font-weight: 400;
    }

    input {
        appearance: none;
        background-color: gray;
        border-radius: 15px;
        width: 3rem;
        height: 1.5rem;
        position: relative;
        pointer-events: none;
    }

    input::before {
        border-radius: 15px;
        content: '';
        position: absolute;
        height: 1.5rem;
        width: 1.5rem;
        background-color: black;
        transform: scale(1.1);
        transition: 0.5s all;
    }

    input:checked::before {
        background-color: greenyellow;
        box-shadow: 0 0 6px 0 rgb(116, 116, 116);
        transform: translateX(100%);
    }
</style>