import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "<------------------------>",
  authDomain: "<------------------------>",
  projectId: "<------------------------>",
  storageBucket: "<------------------------>",
  messagingSenderId: "<------------------------>",
  appId: "<------------------------>",
  measurementId: "<------------------------>"
};

 const app = getApps.length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
console.log(db)

export {db};