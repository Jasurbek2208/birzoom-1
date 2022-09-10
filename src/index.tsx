import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc73J0MY1vxPdzgO6WPb9Oaq-RJ6tI1M4",
  authDomain: "birzoom-937a2.firebaseapp.com",
  projectId: "birzoom-937a2",
  storageBucket: "birzoom-937a2.appspot.com",
  messagingSenderId: "904168997719",
  appId: "1:904168997719:web:bbc7b3fa58917dd2b97412",
  measurementId: "G-ZJH0Q50E4S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
