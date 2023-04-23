// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "productivly-43eec.firebaseapp.com",
  projectId: "productivly-43eec",
  storageBucket: "productivly-43eec.appspot.com",
  messagingSenderId: "444362890528",
  appId: "1:444362890528:web:06a5dcedb9674ab120cb45",
  measurementId: "G-BXQ422W5F9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);