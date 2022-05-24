// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //create connection
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPwNGHlTXyNey-rEIYN8ok-o9PebnTH00",
  authDomain: "phase2-mq.firebaseapp.com",
  projectId: "phase2-mq",
  storageBucket: "phase2-mq.appspot.com",
  messagingSenderId: "983472936187",
  appId: "1:983472936187:web:2cd99c46456165ae034c5e",
  measurementId: "G-6093LY2M5N"
};

const app = initializeApp(firebaseConfig); //initialize connection
export const auth = getAuth(app)

export const db = getFirestore(app)