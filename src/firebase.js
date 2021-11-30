import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDYFPX5DelKEKGwBbZ7XecFNTJ_jW-OAvQ",
  authDomain: "disney-plus-clone-f9848.firebaseapp.com",
  projectId: "disney-plus-clone-f9848",
  storageBucket: "disney-plus-clone-f9848.appspot.com",
  messagingSenderId: "1001166113308",
  appId: "1:1001166113308:web:1eb7fafebc818e82dc2dd9",
  measurementId: "G-KZ0NVK8FCK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
