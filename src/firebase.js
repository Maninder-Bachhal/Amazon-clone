// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import firebase from "firebase";
// import  firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCrIKT_iC5DdPkZRXkDsoAcvAF3BvtjjGQ",
  authDomain: "challenge-7a130.firebaseapp.com",
  projectId: "challenge-7a130",
  storageBucket: "challenge-7a130.appspot.com",
  messagingSenderId: "995337498719",
  appId: "1:995337498719:web:c72ac782dd872fff02abea",
  measurementId: "G-HF1LC3BLLR"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };