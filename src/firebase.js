// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnGSUKHTKwh5j2z8LEcAY210PG1a-jFbc",
  authDomain: "mini-saas-dashboard-9306b.firebaseapp.com",
  projectId: "mini-saas-dashboard-9306b",
  storageBucket: "mini-saas-dashboard-9306b.firebasestorage.app",
  messagingSenderId: "27354443640",
  appId: "1:27354443640:web:98cbd592ae1ca1f06e228d",
  measurementId: "G-VGP1HXTLPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();