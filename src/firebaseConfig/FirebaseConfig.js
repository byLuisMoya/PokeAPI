// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiHDQJOf2-tyIhf1o3klcRtTR7369cV-w",
  authDomain: "poke-api-63328.firebaseapp.com",
  projectId: "poke-api-63328",
  storageBucket: "poke-api-63328.appspot.com",
  messagingSenderId: "178237256288",
  appId: "1:178237256288:web:391862d58839ef0bbec905",
  measurementId: "G-0KG9B6CZ47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);