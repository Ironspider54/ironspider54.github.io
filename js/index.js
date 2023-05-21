const express = require("express");
const redirect = require("www-redirect");
const app = express();

// app.use(redirect(option)); // option = 'www' or option = 'non-www'
// 'www' option for redirecting non-www to www and 'non-www'option for redirecting www to non-www

app.use(redirect("non-www")); 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNkHPGuCjpwNHeIY7VLGk71TOQ0yc5VOI",
  authDomain: "portfolio-9eacb.firebaseapp.com",
  projectId: "portfolio-9eacb",
  storageBucket: "portfolio-9eacb.appspot.com",
  messagingSenderId: "781181728546",
  appId: "1:781181728546:web:60d5879142e4f0966d577b",
  measurementId: "G-M17KW8FK23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);