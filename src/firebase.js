// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz1jisDMaDPJhmIBKvNc6S8CN5nMrLZ8M",
  authDomain: "authentication-app-89a64.firebaseapp.com",
  projectId: "authentication-app-89a64",
  storageBucket: "authentication-app-89a64.appspot.com",
  messagingSenderId: "410580209066",
  appId: "1:410580209066:web:c46296d99ae194140eefd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export {auth};