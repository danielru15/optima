// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMkfimPRscIOqEEkg6fz-oR8sm4T38TBI",
    authDomain: "maestrooptima.firebaseapp.com",
    projectId: "maestrooptima",
    storageBucket: "maestrooptima.appspot.com",
    messagingSenderId: "210148821713",
    appId: "1:210148821713:web:720928cb4540c72aa453f0"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth()

export {app,db, auth}