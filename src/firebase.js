import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwGBmNG4TbHi_bb4pWgEaC6FqPrTgJWZw",
    authDomain: "reactchatapp-4c544.firebaseapp.com",
    projectId: "reactchatapp-4c544",
    storageBucket: "reactchatapp-4c544.appspot.com",
    messagingSenderId: "50811898320",
    appId: "1:50811898320:web:0e1306ca2c92b32e2b11d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);