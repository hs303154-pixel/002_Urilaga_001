import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlYylZOBgzw7I-UUcBXZmq21kQZY-FJX0",
  projectId: "u-aga-project",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function check() {
  const snapshot = await getDocs(collection(db, "pets"));
  console.log("Number of pets in Firestore:", snapshot.size);
  snapshot.forEach(doc => console.log(doc.id, doc.data().name));
  process.exit(0);
}
check();
