// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsuBxsXhyhah8ect5ITFgCSmc-V5yMitE",
  authDomain: "twelvvyeshop.firebaseapp.com",
  projectId: "twelvvyeshop",
  storageBucket: "twelvvyeshop.appspot.com",
  messagingSenderId: "550376784140",
  appId: "1:550376784140:web:e785060c9bffd735ba0929",
  measurementId: "G-XM7XBLKR7L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig
