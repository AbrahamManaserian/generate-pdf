// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE7X2Dr3_wsoMJXDiRXLnNaLhXKLMAwQg",
  authDomain: "testproject-621fc.firebaseapp.com",
  databaseURL: "https://testproject-621fc-default-rtdb.firebaseio.com",
  projectId: "testproject-621fc",
  storageBucket: "testproject-621fc.appspot.com",
  messagingSenderId: "208889056095",
  appId: "1:208889056095:web:1b9a1dcc5efab7a52984ea",
  measurementId: "G-QQJJWNFKCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

