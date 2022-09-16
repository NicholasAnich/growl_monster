import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDIaAqMgssHBSitW0Lyzq7sKPw8CFBh3NM",
  authDomain: "growlmonsterchat.firebaseapp.com",
  projectId: "growlmonsterchat",
  storageBucket: "growlmonsterchat.appspot.com",
  messagingSenderId: "886482564508",
  appId: "1:886482564508:web:a5e4a4fe93a2d1ac568459",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
