// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1VvCgK0iGxlMAQ_qsNXRG1JTK8qt7_r8",
  authDomain: "sowd-2413.firebaseapp.com",
  projectId: "sowd-2413",
  storageBucket: "sowd-2413.firebasestorage.app",
  messagingSenderId: "597015770983",
  appId: "1:597015770983:web:202e25f0f4cb047971e1c2",
  measurementId: "G-1Y68TWTTV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;