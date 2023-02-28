import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";
import { getAuth} from 'firebase/auth'
import 'firebase/auth';


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


export const auth = getAuth(app)
export const db = getFirestore(app);
export default app