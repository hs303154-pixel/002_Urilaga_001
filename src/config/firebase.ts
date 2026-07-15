import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDbQjWcBT0nKPfLyKHMAv2m2utPLusEAm4",
  authDomain: "gen-lang-client-0212533924.firebaseapp.com",
  projectId: "gen-lang-client-0212533924",
  storageBucket: "gen-lang-client-0212533924.firebasestorage.app",
  messagingSenderId: "744515670940",
  appId: "1:744515670940:web:ce90e2a26c10842a7aae59"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
export const storage = getStorage(app);
