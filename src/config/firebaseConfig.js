
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDeDLDR7LUz6AA4R0PivdeDlab9eykoPbQ",
  authDomain: "proyectoreactcoderhouse-14c7a.firebaseapp.com",
  projectId: "proyectoreactcoderhouse-14c7a",
  storageBucket: "proyectoreactcoderhouse-14c7a.appspot.com",
  messagingSenderId: "372945813164",
  appId: "1:372945813164:web:8ed41c4c34266c3b41e909"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);