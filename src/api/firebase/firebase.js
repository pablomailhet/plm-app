// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIvcuZMy-O-qH_vjAtOGulsFQfqOZZmgo",
  authDomain: "plm-app-299a7.firebaseapp.com",
  projectId: "plm-app-299a7",
  storageBucket: "plm-app-299a7.appspot.com",
  messagingSenderId: "28599259856",
  appId: "1:28599259856:web:b65e2a02127ac483ad04d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

