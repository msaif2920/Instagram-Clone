import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyASQCHtd3lhs_9J92vMzDrBAti_MyrfWZg",
  authDomain: "instagram-clone-c333d.firebaseapp.com",
  databaseURL: "https://instagram-clone-c333d-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-c333d",
  storageBucket: "instagram-clone-c333d.appspot.com",
  messagingSenderId: "1007313112503",
  appId: "1:1007313112503:web:f21cd7d6448f90642fec32",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
