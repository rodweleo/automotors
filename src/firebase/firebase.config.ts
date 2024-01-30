// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqidpyzzhck_-Zo7niUDzwaDoijR-lWFw",
  authDomain: "automotors-44702.firebaseapp.com",
  projectId: "automotors-44702",
  storageBucket: "automotors-44702.appspot.com",
  messagingSenderId: "680460702180",
  appId: "1:680460702180:web:09fd6747f362b29f31b7f1",
  measurementId: "G-WPH04GEZNL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);