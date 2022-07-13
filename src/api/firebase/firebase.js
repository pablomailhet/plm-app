import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIvcuZMy-O-qH_vjAtOGulsFQfqOZZmgo",
  authDomain: "plm-app-299a7.firebaseapp.com",
  projectId: "plm-app-299a7",
  storageBucket: "plm-app-299a7.appspot.com",
  messagingSenderId: "28599259856",
  appId: "1:28599259856:web:b65e2a02127ac483ad04d5"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const collectionProducts = collection(db,"products");

export const collectionOrders = collection(db,"orders");



