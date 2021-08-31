import { createApp } from 'vue'
import VueEditor from 'vue2-editor'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import {auth} from '@/firebase'
import {onAuthStateChanged} from 'firebase/auth'

let app

onAuthStateChanged(auth, user => {
    if(!app)
        createApp(App)
        .use(VueEditor)
        .use(store)
        .use(router)
        .mount('#app')
})