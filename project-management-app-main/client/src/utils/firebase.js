// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "projectmanager-fs.firebaseapp.com",
  projectId: "projectmanager-fs",
  storageBucket: "projectmanager-fs.appspot.com",
  messagingSenderId: "797283560553",
  appId: "1:797283560553:web:6ff1c28b7885917d0906f8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
