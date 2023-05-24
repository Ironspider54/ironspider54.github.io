"serviceWorker"in navigator&&navigator.serviceWorker.register("sw.js").then(e=>console.log("service worker registered",e)).catch(e=>console.log("service worker not registered",e));
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