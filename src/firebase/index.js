import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBWlZN9dcSUVMYdsHVQwpyg9MDc7rmXN3A",
  authDomain: "products-446cb.firebaseapp.com",
  projectId: "products-446cb",
  storageBucket: "products-446cb.appspot.com",
  messagingSenderId: "998080024708",
  appId: "1:998080024708:web:45569cc1043227fbe4b2d1",
  measurementId: "G-TYCWT4Y15E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage()