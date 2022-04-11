// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk1XUKNpt2-wyhs7XIyFXYBqz45H81Jao",
  authDomain: "ema-john-simple-994b1.firebaseapp.com",
  projectId: "ema-john-simple-994b1",
  storageBucket: "ema-john-simple-994b1.appspot.com",
  messagingSenderId: "352708148441",
  appId: "1:352708148441:web:4c122a6da7c3d9fe8052c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default (auth)