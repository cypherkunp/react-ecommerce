import firebase, { firestore } from 'firebase/app';
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

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const fireStore = firestore();
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = fireStore.doc(`users/${userAuth.uid}`);
    const userSnapshot = userRef.get();

    console.log('userSnapshot:', userSnapshot);
    console.log('userAuth:', userAuth);

    if (!userSnapshot.exists) {
        const { email } = userAuth;
        const createdOn = new Date();

        try {
            await userRef.set({
                email,
                createdOn,
                ...additionalData
            });
        } catch (error) {
            console.log(`Error creating user: ${error.message}`);
        }
    }

    return userRef;
};

export default firebase;
