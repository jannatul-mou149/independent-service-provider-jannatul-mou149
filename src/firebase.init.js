// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5NS1n0B2Enx3TlFCTPL-NYYVEoAY2sVk",
    authDomain: "assignment-fe0a5.firebaseapp.com",
    projectId: "assignment-fe0a5",
    storageBucket: "assignment-fe0a5.appspot.com",
    messagingSenderId: "791950044402",
    appId: "1:791950044402:web:195eacd8be740fe741746b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;