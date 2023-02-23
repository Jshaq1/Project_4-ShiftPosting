import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import 'firebase/auth';

console.log(process.env.REACT_APP_FIREBASE_KEY)

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    projectId: "sei-project-4",
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: "1:692605074559:web:9b3a9b94d9a2709930134a",
    measurementId: "G-41D7V7BNBY"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = app.auth()
export default app