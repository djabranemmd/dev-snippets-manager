import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";

import { db } from "./firebase";

const COLLECTION_NAME = "snippets";

export async function getUserSnippets(userId) {
  const q = query(
    collection(db, COLLECTION_NAME),
    where("userId", "==", userId),
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function createSnippet(snippet) {
  const docRef = await addDoc(collection(db, COLLECTION_NAME), snippet);

  return docRef.id;
}

export async function removeSnippet(id) {
  await deleteDoc(doc(db, COLLECTION_NAME, id));
}

export async function editSnippet(id, updatedSnippet) {
  await updateDoc(doc(db, COLLECTION_NAME, id), updatedSnippet);
}
