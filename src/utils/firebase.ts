// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "my-portfolio-b357b.firebaseapp.com",
  projectId: "my-portfolio-b357b",
  storageBucket: "my-portfolio-b357b.appspot.com",
  messagingSenderId: "1020343075808",
  appId: "1:1020343075808:web:e0712b16219febe0f42185",
  measurementId: "G-LTVK5GM607",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
