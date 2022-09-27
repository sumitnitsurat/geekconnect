// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBD05SZ0JKg6UkFMi2nElsqbnzRP09918E",
    authDomain: "geekconnect-dev.firebaseapp.com",
    projectId: "geekconnect-dev",
    storageBucket: "geekconnect-dev.appspot.com",
    messagingSenderId: "933914484340",
    appId: "1:933914484340:web:682b28e29a277364003b21",
    measurementId: "G-MY8PQ0NR9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
