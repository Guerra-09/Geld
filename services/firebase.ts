import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "firebase.config.ts",
  authDomain: "firebase.config.ts",
  projectId: "firebase.config.ts",
  storageBucket: "firebase.config.ts",
  messagingSenderId: "firebase.config.ts",
  appId: "firebase.config.ts"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
