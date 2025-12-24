// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 import { getFirestore } from "firebase/firestore"; // ✅ This line is 100% correct
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2uqTGe-LbLKmKo2FnHd-sJ04hki4TxaI",
  authDomain: "apprestaurant-88fbb.firebaseapp.com",
  projectId: "apprestaurant-88fbb",
  storageBucket: "apprestaurant-88fbb.firebasestorage.app",
  messagingSenderId: "1060304832850",
  appId: "1:1060304832850:web:a9dcd70586a48df8f2128b",
  measurementId: "G-XD1DB32292"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const  db = getFirestore(app);
const storage = getStorage(app);

export { app, auth,db, storage };
export default app;
