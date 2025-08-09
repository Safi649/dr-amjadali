// 📁 firebase/firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZB_7cRwRYX6rdEnv__wlwqkGKJoQ7HRU",
  authDomain: "dr-amjidali.firebaseapp.com",
  projectId: "dr-amjidali",
  storageBucket: "dr-amjidali.firebasestorage.app",
  messagingSenderId: "1089235060027",
  appId: "1:1089235060027:web:605df46c45a58b14e9631e",
  measurementId: "G-YWM7B021KH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };

