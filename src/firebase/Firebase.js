// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqfYdbMnvlUQlAwm7krlQDmQLm_9o9EcY",
  authDomain: "ourblog-88d6e.firebaseapp.com",
  projectId: "ourblog-88d6e",
  storageBucket: "ourblog-88d6e.appspot.com",
  messagingSenderId: "859960767300",
  appId: "1:859960767300:web:853d2b97f5ffa999fb5d11",
  measurementId: "G-MGM2V361C2",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const storage = getStorage();
