import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJC_mDXp87bdhxoQV5hbyIAbI3wxTHi94",
  authDomain: "house-marketplace-rutkowsm.firebaseapp.com",
  projectId: "house-marketplace-rutkowsm",
  storageBucket: "house-marketplace-rutkowsm.appspot.com",
  messagingSenderId: "515990727134",
  appId: "1:515990727134:web:ec479558725f9ece38154f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()