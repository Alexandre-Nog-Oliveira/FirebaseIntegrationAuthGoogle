import { initializeApp } from "firebase/app";
import {  getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCtwGeVxy1cHIvglywdJ73E-zqBk0NCuzg",
  authDomain: "fir-auth-b8de2.firebaseapp.com",
  projectId: "fir-auth-b8de2",
  storageBucket: "fir-auth-b8de2.appspot.com",
  messagingSenderId: "313431540737",
  appId: "1:313431540737:web:183f3e64fead8ad6b3ac00"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);