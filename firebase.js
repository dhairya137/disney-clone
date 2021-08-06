import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB6czOW9OlqarH-58Uqff53pJV-3qYg_ws",
  authDomain: "disney-clone-4228e.firebaseapp.com",
  projectId: "disney-clone-4228e",
  storageBucket: "disney-clone-4228e.appspot.com",
  messagingSenderId: "481157214452",
  appId: "1:481157214452:web:250abbd497779df48a6ea1",
  measurementId: "G-HB06K3QHSM",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
