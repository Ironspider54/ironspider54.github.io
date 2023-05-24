"serviceWorker"in navigator&&navigator.serviceWorker.register("sw.js").then(e=>console.log("service worker registered",e)).catch(e=>console.log("service worker not registered",e));
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMSHrBsoROykIgSdUr_93gAxfkvxE7w18",
  authDomain: "my-portfolio-e244d.firebaseapp.com",
  projectId: "my-portfolio-e244d",
  storageBucket: "my-portfolio-e244d.appspot.com",
  messagingSenderId: "929308683381",
  appId: "1:929308683381:web:d8e20ad9813251b8c35c3c",
  measurementId: "G-FXL8VMB2J9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);