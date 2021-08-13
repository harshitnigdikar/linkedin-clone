import firebase from "firebase";

const firebaseConfig = {
    apiKey: "abcd",
    authDomain: "abcd",
    projectId: "abcd",
    storageBucket: "abcd",
    messagingSenderId: "abcd",
    appId: "abcd"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
