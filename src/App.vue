<template>
<Navigation/>
<router-view/>
</template>

<script>
import Navigation from './components/Navigation'

export default {
    name: 'app',
    components: {Navigation}
}
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

html {font-size: 16px}

:root {
    --colorWhite: rgb(230, 230, 230);
    --colorGray: rgb(115, 115, 115);
    --colorBlack: rgb(25, 25, 25);

    --colorPrimary: rgb(0, 192, 102);
    --colorSecondary: rgb(0, 73, 39);

    --cursorPointer: pointer;

    --fontFamilyText: 'Quicksand', sans-serif;

    --fontSizeRegular: 1rem;
    --fontSizeTitle: 1.5rem;

    --transition: 0.15s;
}

* {
    background-color: transparent;
    border: none;
    border-radius: 0;
    box-shadow: none;
    box-sizing: border-box;
    color: var(--colorBlack);
    font-family: var(--fontFamilyText);
    font-size: var(--fontSizeRegular);
    margin: 0;
    outline: none;
    padding: 0;
    text-shadow: none;
    text-decoration: none;
}

#app {
    height: 100vh;
    overflow: hidden;
    widows: 100vw;
}

#app, #app * {display: grid}
</style>