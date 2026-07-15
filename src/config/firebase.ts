import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAlYylZOBgzw7I-UUcBXZmq21kQZY-FJX0",
  authDomain: "u-aga-project.firebaseapp.com",
  projectId: "u-aga-project",
  storageBucket: "u-aga-project.firebasestorage.app",
  messagingSenderId: "763823046318",
  appId: "1:763823046318:web:8254b01b8a41323964f73f"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
export const storage = getStorage(app);
