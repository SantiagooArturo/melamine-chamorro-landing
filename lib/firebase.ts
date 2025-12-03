import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwwdtrPvtj-jNuk3Xi2GXYXqnn_qdU4sk",
  authDomain: "melamine-chamorro.firebaseapp.com",
  projectId: "melamine-chamorro",
  storageBucket: "melamine-chamorro.firebasestorage.app",
  messagingSenderId: "51430789234",
  appId: "1:51430789234:web:25c03a555ad6b5d835f2eb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

