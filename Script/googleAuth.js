import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

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
            if (JSON.stringify(error).indexOf("auth/email-already-in-use") != -1)
                alert("Email already in use.")
            else if (JSON.stringify(error).indexOf("auth/weak-password") != -1)
                alert("Password should be atleast 8 characters long.")
            else
                alert("Something went wrong. Please try again.")
            console.log('Sign up error:', error);
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
            alert("You entered wrong email or passward.")
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('Error Code:', errorCode);
            console.log('Error Message:', errorMessage);
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
            alert("Something went wrong. Please try again.")
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('Error Code:', errorCode);
            console.log('Error Message:', errorMessage);
        });
};

const signOutUsingGoogle = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('User signed out');
    }).catch((error) => {
        // An error happened.
        alert("Something went wrong. Please try again.")
        console.log('Error signing out:', error);
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