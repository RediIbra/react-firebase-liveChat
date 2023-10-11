// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "your api key",
  authDomain: "live-chat-10d3a.firebaseapp.com",
  projectId: "live-chat-10d3a",
  storageBucket: "live-chat-10d3a.appspot.com",
  messagingSenderId: "735354343932",
  appId: "your app id",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
