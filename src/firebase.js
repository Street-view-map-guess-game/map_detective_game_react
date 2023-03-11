// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyAUUQhmFIkEHQtO1eDyZh_IWaQobEKlFwc",
  authDomain: "map-detective.firebaseapp.com",
  projectId: "map-detective",
  storageBucket: "map-detective.appspot.com",
  messagingSenderId: "126963459018",
  appId: "1:126963459018:web:b524717571dad365196533",
  measurementId: "G-SYC7CTH26T"
    
   
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
