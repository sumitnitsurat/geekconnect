// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "XXX",
    authDomain: "XXXXXX",
    projectId: "XXX",
    storageBucket: "XXXX",
    messagingSenderId: "XXX",
    appId: "XXXX",
    measurementId: "XXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
