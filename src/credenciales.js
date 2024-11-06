// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHaLgDgeAKp3rfpmPInwPOr6FrY6golUA",
  authDomain: "dash-pass-f5146.firebaseapp.com",
  projectId: "dash-pass-f5146",
  storageBucket: "dash-pass-f5146.appspot.com",
  messagingSenderId: "912405318840",
  appId: "1:912405318840:web:4cb7074ac6346be55f784d"
};

// Initialize Firebase      
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;