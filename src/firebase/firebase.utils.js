import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyC6hVsFYqjaQ6fUm8dQcJwhtmFNs6P2TSc',
    authDomain: 'ecommerce-db-370df.firebaseapp.com',
    databaseURL: 'https://ecommerce-db-370df.firebaseio.com',
    projectId: 'ecommerce-db-370df',
    storageBucket: '',
    messagingSenderId: '434037869761',
    appId: '1:434037869761:web:6d73e71fcbf10c2bbd5840'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
