import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARh6nLLhkI5jqGHIgxn-xLl_T4cIc3WtE",
  authDomain: "test-alternova-lego.firebaseapp.com",
  projectId: "test-alternova-lego",
  storageBucket: "test-alternova-lego.appspot.com",
  messagingSenderId: "347453846029",
  appId: "1:347453846029:web:794b18b58fc475cb035b44",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
