// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIegHM8jBnMJ8Nuc9f0MYmsgzzLL0_wwE",
  authDomain: "netlfix-ed19c.firebaseapp.com",
  projectId: "netlfix-ed19c",
  storageBucket: "netlfix-ed19c.appspot.com",
  messagingSenderId: "238407778019",
  appId: "1:238407778019:web:5c88f498f0ce92ff2f4fd6"
};


 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)