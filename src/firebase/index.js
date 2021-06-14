import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDjkAdbAV9A31PAV87EHTabpBTTmcslRdg",
    authDomain: "react-shop-db-7a24f.firebaseapp.com",
    projectId: "react-shop-db-7a24f",
    storageBucket: "react-shop-db-7a24f.appspot.com",
    messagingSenderId: "361115953523",
    appId: "1:361115953523:web:4a1a550c8eeafe2515bd06",
    measurementId: "G-GK1RW0NV8C"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;