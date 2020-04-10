import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDfAY7Bdn-F5lSdVcg0ppercK6uoen_zxg",
        authDomain: "online-clothing-store-db.firebaseapp.com",
            databaseURL: "https://online-clothing-store-db.firebaseio.com",
                projectId: "online-clothing-store-db",
                    storageBucket: "online-clothing-store-db.appspot.com",
                        messagingSenderId: "616333673995",
                            appId: "1:616333673995:web:b4db6bb044bb0cae79a90e",
                                measurementId: "G-RM5T6JJNKY"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const store = firebase.store;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})

const signInWithGoogle =()=> auth.signInWithPopup(provider);

export default signInWithGoogle;
