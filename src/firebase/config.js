
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeTuwCize2XMOu4ApWjfsl5ujo6sbuUsw",
  authDomain: "react-gallery-24656.firebaseapp.com",
  projectId: "react-gallery-24656",
  storageBucket: "react-gallery-24656.appspot.com",
  messagingSenderId: "687534019575",
  appId: "1:687534019575:web:581f5d84f7e3f8cbe514f2"
};

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const projectStorage = firebase.storage();
 const projectFirestore = firebase.firestore();

 export {projectStorage,projectFirestore};