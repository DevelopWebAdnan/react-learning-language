// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ1_CwgGRqVYI8KhWjiCuS0WSA_X5lsy4",
  authDomain: "react-learning-language.firebaseapp.com",
  projectId: "react-learning-language",
  storageBucket: "react-learning-language.firebasestorage.app",
  messagingSenderId: "149210598783",
  appId: "1:149210598783:web:e11398953bcc98f8fd9e4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);