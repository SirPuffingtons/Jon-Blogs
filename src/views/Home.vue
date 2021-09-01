<template>
    <main class="home">
        <BlogPost :post="welcomeScreen" v-if="!user" />
        <BlogPost :post="post" v-for="(post, i) in sampleBlogPost" :key="i" />

        <aside>
            <header>Recent Posts</header>

            <main>
                <BlogCard :post="post" v-for="(post, i) in sampleBlogCard" :key="i" />
            </main>
        </aside>

        <article v-if="!user">
            <h2>Never miss a post. Create your free account today!</h2>
            <router-link :to="{name: 'Register'}">Register Now ></router-link>
        </article>
    </main>
</template>

<script>
import BlogPost from '@/components/BlogPost'
import BlogCard from '@/components/BlogCard'

export default {
    name: 'Home',
    components: {BlogPost, BlogCard},
    data() {
        return {
            welcomeScreen: {
                title: 'Welcome',
                blogPost: "Jon Blogs exists to share tips and tricks regarding web development. Register and never miss a post!",
                isWelcomeScreen: true,
                photo: 'coding'
            },
            sampleBlogPost: [
                {
                  title: 'This is a filler title!',
                  blogHTML: 'This is a filler blog post title!',
                  blogCoverPhoto: 'beautiful-stories'
                },
                {
                  title: 'This is a filler title2!',
                  blogHTML: 'This is a filler blog post title!',
                  blogCoverPhoto: 'designed-for-everyone'
                }
            ]
        }
    },
    computed: {
        sampleBlogCard() {return this.$store.state.sampleBlogCard},
        user() {return this.$store.state.user}
    }
}
</script>

<style scoped>
article {
    gap: 2rem;
    justify-items: center;
    padding: 3rem;
    text-align: center;
}

h2 {
    font-size: 2rem;
    font-weight: 400;
}

a {
    background-color: var(--colorGray);
    border-radius: 20px;
    color: white;
    padding: 0.5rem 1rem;
}

a:hover, a:focus {
    background-color: gray;
    color: black !important;
    text-decoration: none;
}
</style>