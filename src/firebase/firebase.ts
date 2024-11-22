import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzCNQuiZVunJ1Yxi_A7N3LsXmVrHaWvNc",
  authDomain: "what-in-kitchen-d10c8.firebaseapp.com",
  projectId: "what-in-kitchen-d10c8",
  storageBucket: "what-in-kitchen-d10c8.firebasestorage.app",
  messagingSenderId: "198555867458",
  appId: "1:198555867458:web:cb68f25caae3cf345610db",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
