import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCNkFRavxf7Ert-edOzmyOFqhn9H-rRJh4",
  authDomain: "login-practice-d24c4.firebaseapp.com",
  projectId: "login-practice-d24c4",
  storageBucket: "login-practice-d24c4.appspot.com",
  messagingSenderId: "511572271869",
  appId: "1:511572271869:web:1477dffe3dd58a9563d494",
  measurementId: "G-3BS3HFZMJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);