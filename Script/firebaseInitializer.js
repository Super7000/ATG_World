// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4q3zu1a7be2-uYV5EYhmbLQfXBFUFV3U",
    authDomain: "hotel-management-bd585.firebaseapp.com",
    databaseURL: "https://hotel-management-bd585-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "hotel-management-bd585",
    storageBucket: "hotel-management-bd585.appspot.com",
    messagingSenderId: "847871108243",
    appId: "1:847871108243:web:3c175fcd0b4d54fe97d966",
    measurementId: "G-6WMG38P9VB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);