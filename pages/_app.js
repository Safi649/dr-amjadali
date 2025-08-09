// pages/_app.js
import "@/styles/globals.css"; // Tailwind global styles
import { useEffect } from "react";
import { analytics } from "@/firebase"; // Import analytics instance

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Runs only in the browser
    if (analytics) {
      console.log("Firebase Analytics initialized ✅");
    }
  }, []);

  return <Component {...pageProps} />;
}
