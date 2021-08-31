<template>
<article>
    <span></span>
</article>
</template>

<script>
export default {
    name: 'Loading'
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

@keyframes spin {to {transform: rotate(360deg)}}

span {
    animation: spin ease 1s infinite;
    border: 3px solid white;
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-radius: 50%;
    padding: 2rem;
}
</style>