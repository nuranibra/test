// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAup00gH0sZPZKkJr3SUiu9smP8ftmknJ8",
  authDomain: "testinsta-56170.firebaseapp.com",
  projectId: "testinsta-56170",
  storageBucket: "testinsta-56170.appspot.com",
  messagingSenderId: "831391993960",
  appId: "1:831391993960:web:6c0226a787f5ec0c79ebdd",
  measurementId: "G-TBFB79HMES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);