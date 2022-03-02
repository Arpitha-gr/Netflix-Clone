import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCSX22KARVcPf74l2IgyiKLZNzSoZluVVw",
    authDomain: "netflix-clone-23c04.firebaseapp.com",
    projectId: "netflix-clone-23c04",
    storageBucket: "netflix-clone-23c04.appspot.com",
    messagingSenderId: "650280305715",
    appId: "1:650280305715:web:93a5b5a2ccf010c2d30f46"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore();
  const auth = getAuth();

  export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword }
  export default db;