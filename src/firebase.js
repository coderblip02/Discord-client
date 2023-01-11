// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:"AIzaSyA5Adht84YoOlm6VmNgutE6oYkl77vtak4",
  authDomain: "discord-clone-264ec.firebaseapp.com",
  projectId: "discord-clone-264ec",
  storageBucket: "discord-clone-264ec.appspot.com",
  messagingSenderId: "254796431436",
  appId: "1:254796431436:web:45858b65b485430883f4e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default getFirestore(app);

//process.env.REACT_APP_FIREBASE_API_KEY

//
