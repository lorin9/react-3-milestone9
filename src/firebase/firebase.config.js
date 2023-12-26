// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHUqJvdhpzRxd8S7PtbNnRMMTCbUsU0ok",
  authDomain: "ract-3-milestone9.firebaseapp.com",
  projectId: "ract-3-milestone9",
  storageBucket: "ract-3-milestone9.appspot.com",
  messagingSenderId: "811513507080",
  appId: "1:811513507080:web:e25f486d830dc7277210bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth