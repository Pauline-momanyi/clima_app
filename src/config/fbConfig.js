// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //create connection
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV81W9n3lCKmPDkUy6M4BsBkvaRd3UT9A",
  authDomain: "mq-phase2.firebaseapp.com",
  projectId: "mq-phase2",
  storageBucket: "mq-phase2.appspot.com",
  messagingSenderId: "965840908174",
  appId: "1:965840908174:web:ba6042091118984a017edf"};

const app = initializeApp(firebaseConfig); //initialize connection
export const auth = getAuth(app)

export const db = getFirestore(app)