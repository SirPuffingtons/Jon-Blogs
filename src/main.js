import { createApp } from 'vue'
import VueEditor from 'vue2-editor'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)
    .use(VueEditor)
    .use(store)
    .use(router)
    .mount('#app')