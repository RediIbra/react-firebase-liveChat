// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQPVcx777jl7LMkDMduRaUwVQHLbAPtO0",
  authDomain: "live-chat-10d3a.firebaseapp.com",
  projectId: "live-chat-10d3a",
  storageBucket: "live-chat-10d3a.appspot.com",
  messagingSenderId: "735354343932",
  appId: "1:735354343932:web:d85e184e39d85f091ce279",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
