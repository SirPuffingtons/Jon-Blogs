import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB_6Q9oo46RBYmTOYDHua-5Jd4r2j9QxJw",
    authDomain: "jon-blogs.firebaseapp.com",
    projectId: "jon-blogs",
    storageBucket: "jon-blogs.appspot.com",
    messagingSenderId: "599408740172",
    appId: "1:599408740172:web:40aea884e78a42b16d31e9"
})

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { timestamp }
export default firebaseApp.firestore()