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
  snapshot.forEach(doc => {
    const data = doc.data();
    if (data.image) data.image = "<base64_string>";
    console.log("ID:", doc.id);
    console.log("Data:", data);
  });
  process.exit(0);
}
check();
