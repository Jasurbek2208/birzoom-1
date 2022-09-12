import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDc73J0MY1vxPdzgO6WPb9Oaq-RJ6tI1M4",
  authDomain: "birzoom-937a2.firebaseapp.com",
  projectId: "birzoom-937a2",
  storageBucket: "birzoom-937a2.appspot.com",
  messagingSenderId: "904168997719",
  appId: "1:904168997719:web:bbc7b3fa58917dd2b97412",
  measurementId: "G-ZJH0Q50E4S",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
