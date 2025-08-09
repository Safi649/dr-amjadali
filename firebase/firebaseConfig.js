// firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDZB_7cRwRYX6rdEnv__wlwqkGKJoQ7HRU",
  authDomain: "dr-amjidali.firebaseapp.com",
  projectId: "dr-amjidali",
  storageBucket: "dr-amjidali.firebasestorage.app",
  messagingSenderId: "1089235060027",
  appId: "1:1089235060027:web:605df46c45a58b14e9631e",
  measurementId: "G-YWM7B021KH"
};

// Initialize Firebase (avoid re-initializing)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Auth & Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);

// Analytics (only in browser)
export let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export default app;
