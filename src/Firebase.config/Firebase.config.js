// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9IBWXUSGar2As-GwXceiBrqDGOZHjA78",
    authDomain: "tourist-site-db61e.firebaseapp.com",
    projectId: "tourist-site-db61e",
    storageBucket: "tourist-site-db61e.appspot.com",
    messagingSenderId: "248806008833",
    appId: "1:248806008833:web:e0d397567a990e932cf800"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app