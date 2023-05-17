// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPILZ-9PvKGuhEd-vaH5tbLkRh7AR_QwU",
    authDomain: "auth-context-tailwind-a16b6.firebaseapp.com",
    projectId: "auth-context-tailwind-a16b6",
    storageBucket: "auth-context-tailwind-a16b6.appspot.com",
    messagingSenderId: "9641968636",
    appId: "1:9641968636:web:a4d0783941ff4c7b9d6879"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app