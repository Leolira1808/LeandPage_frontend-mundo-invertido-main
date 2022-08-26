import app from "./App.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";

export async function subscribeToHellFareClube(subscription) {
  const db = getFirestore(app);
  const hellfireClubeCollecton = collection(db, "hellfire - clube");
  const docRef = await addDoc(hellfireClubeCollecton, subscription);
  return docRef.id;
}
