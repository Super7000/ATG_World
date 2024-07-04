// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnVzR20IsJikIq_3UHghsRqqe3DhnVKKk",
    authDomain: "post-management-16801.firebaseapp.com",
    databaseURL: "https://post-management-16801-default-rtdb.firebaseio.com",
    projectId: "post-management-16801",
    storageBucket: "post-management-16801.appspot.com",
    messagingSenderId: "677238336820",
    appId: "1:677238336820:web:979142453b8b18a36d4961",
    measurementId: "G-M34B21W5P2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);