import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAy0Ui5Fv-PYr2LvUZ3wN7ROTgIhCsDSY",
  authDomain: "axonflow-d1082.firebaseapp.com",
  projectId: "axonflow-d1082",
  storageBucket: "axonflow-d1082.firebasestorage.app",
  messagingSenderId: "101353903876",
  appId: "1:101353903876:web:7cff0f1c32a9f9a74d8e9d",
  measurementId: "G-GEXYRC26LT"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);