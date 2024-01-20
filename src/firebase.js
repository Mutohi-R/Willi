// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUCH9f3rnQcbVC-yg1ciITX3waODao02g",
  authDomain: "willi-c651a.firebaseapp.com",
  projectId: "willi-c651a",
  storageBucket: "willi-c651a.appspot.com",
  messagingSenderId: "574617685991",
  appId: "1:574617685991:web:3e56ceb640810ade5eb742"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
