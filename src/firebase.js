import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDED50oGakMNdtc-2HdJPlVWg23kHJ1Jec",
  authDomain: "hci-lab-39506.firebaseapp.com",
  projectId: "hci-lab-39506",
  storageBucket: "hci-lab-39506.appspot.com",
  messagingSenderId: "32998229200",
  appId: "1:32998229200:web:6a61311444a5dd7dea8ad5",
  measurementId: "G-2RZTWCSTH5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
