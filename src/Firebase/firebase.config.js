// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8ZZbfQ-TGwtvskLAuieg0kuAXBt2RqDM",
  authDomain: "dragon-news-73888.firebaseapp.com",
  projectId: "dragon-news-73888",
  storageBucket: "dragon-news-73888.appspot.com",
  messagingSenderId: "913284682288",
  appId: "1:913284682288:web:e1c6805130c1efcabf53f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
