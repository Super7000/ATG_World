import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

import { firebaseConfig } from "./firebaseInitializer.js";
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Sign up function
const signUp = (email, password) => {
    createUserWithEmailAndPassword(getAuth(app), email, password)
        .then((userCredential) => {
            // User signed up successfully
            const user = userCredential.user;
            console.log('User signed up:', user);
        })
        .catch((error) => {
            // Handle sign up errors
            console.error('Sign up error:', error);
        });
};

// Sign in function
const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('User signed in:', user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error Code:', errorCode);
            console.error('Error Message:', errorMessage);
        });
};

// Sign up without email and password function (using google account directly)
const signUpWithoutCredentials = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // Signed in
            const user = result.user;
            console.log('User signed in with Google:', user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error Code:', errorCode);
            console.error('Error Message:', errorMessage);
        });
};

const signOutUsingGoogle = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('User signed out');
    }).catch((error) => {
        // An error happened.
        console.error('Error signing out:', error);
    });
}


function customOnAuthStateChanged(signInFunc = () => { }, signOutFunc = () => { }) {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            //Sign in state
            signInFunc(user)
        } else {
            //Sign out state
            signOutFunc()
        }
    });
}


export { signIn, signOutUsingGoogle, signUp, signUpWithoutCredentials, customOnAuthStateChanged }