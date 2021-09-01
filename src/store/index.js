import { createStore } from 'vuex'
import {auth, db} from '@/firebase'
import {doc, getDoc, updateDoc} from 'firebase/firestore'

export default createStore({
    state: {
        sampleBlogCard: [
            {
                title: 'Blog Card #1 The Best Way',
                blogCoverPhoto: 'stock-1',
                blogDate: 'August 20, 2021'
            },
            {
                title: 'Blog Card #2',
                blogCoverPhoto: 'stock-2',
                blogDate: 'August 20, 2021'
            },
            {
                title: 'Blog Card #3',
                blogCoverPhoto: 'stock-3',
                blogDate: 'August 20, 2021'
            },
            {
                title: 'Blog Card #4',
                blogCoverPhoto: 'stock-4',
                blogDate: 'August 20, 2021'
            },
        ],
        editPosts: null,
        user: null,
        email: null,
        firstName: null,
        lastName: null,
        username: null,
        uid: null,
        initials: null
    },
    mutations: {
        toggleEditPosts(state, payload) {state.editPosts = payload},

        setProfile(state, payload) {
            state.uid = payload.id
            state.email = payload.data().email
            state.firstName = payload.data().firstName
            state.lastName = payload.data().lastName
            state.username = payload.data().username
            state.initials = payload.data().firstName[0] + payload.data().lastName[0]
        },

        setProfileInitials(state, payload) {state.initials = payload.firstName[0] + payload.lastName[0]},

        updateUser(state, payload) {state.user = payload},

        changeFirstName(state, payload) {state.firstName = payload},
        changeLastName(state, payload) {state.lastName = payload},
        changeUsername(state, payload) {state.username = payload}
    },
    actions: {
        getCurrentUser({commit}) {
            getDoc(doc(db, 'users', auth.currentUser.uid))
            .then(res => commit('setProfile', res))
        },
        updateUserSettings({commit, state}) {
            updateDoc(doc(db, 'users', auth.currentUser.uid), {
                firstName: state.firstName,
                lastName: state.lastName,
                username: state.username,
            })
            .then(() => commit('setProfileInitials', {firstName: state.firstName, lastName: state.lastName}))
        }
    },
    modules: {
    }
})