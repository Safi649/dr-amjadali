// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDZB_7cRwRYX6rdEnv__wlwqkGKJoQ7HRU",
  authDomain: "dr-amjidali.firebaseapp.com",
  projectId: "dr-amjidali",
  storageBucket: "dr-amjidali.firebasestorage.app",
  messagingSenderId: "1089235060027",
  appId: "1:1089235060027:web:605df46c45a58b14e9631e",
  measurementId: "G-YWM7B021KH"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
