<template>
  <article>
      <main>
          <p>{{this.message}}</p>
          <button @click="closeModal">Close ></button>
      </main>
  </article>
</template>

<script>
export default {
    name: 'modal',
    props: ['message'],
    methods: {
        closeModal() {this.$emit('closeModal')}
    }
}
</script>

<style scoped>
article {
    position: absolute;
    place-items: center;
    background-color: rgba(0, 0, 0, 0.75);
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
}

main {
    background-color: white;
    gap: 1rem;
    justify-items: center;
    padding: 2rem;
}
</style>