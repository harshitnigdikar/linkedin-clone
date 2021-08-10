import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBi41SWPVDv0JYXSvuaD4jonds1K5geFUM",
    authDomain: "linkedin-clone-ddeac.firebaseapp.com",
    projectId: "linkedin-clone-ddeac",
    storageBucket: "linkedin-clone-ddeac.appspot.com",
    messagingSenderId: "687083415734",
    appId: "1:687083415734:web:d5d57b1bde0590cba69e17"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };