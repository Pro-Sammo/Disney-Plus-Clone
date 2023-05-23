import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyCaoNuLE_UfQb1Oh-vlOI9plufcOHrLnFw",
  authDomain: "disneyplus-clon-c7db7.firebaseapp.com",
  projectId: "disneyplus-clon-c7db7",
  storageBucket: "disneyplus-clon-c7db7.appspot.com",
  messagingSenderId: "532459704139",
  appId: "1:532459704139:web:f08c0e3c679ec98a3fa2ce",
};




const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

export default db;
