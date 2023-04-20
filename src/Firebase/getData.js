import firebase_app from "../lib/firebase/index";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
} from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function getDocument(name, id) {
  const result = [];

  const q = query(collection(db, name), where("id", "==", `${id}`));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    result.push({
      id: doc.data().id,
      ad: doc.data().ad,
      link: doc.data().link,
    });
  });

  return result;
}
