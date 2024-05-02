// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGbu0xu5C65iWGEmgnzWEXx8RCKHLlrSM",
  authDomain: "car-doctor-project-d153d.firebaseapp.com",
  projectId: "car-doctor-project-d153d",
  storageBucket: "car-doctor-project-d153d.appspot.com",
  messagingSenderId: "633191550938",
  appId: "1:633191550938:web:562daccf31439c5f52fae3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth