import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAnUsfvzc6h4F_fG0q4MZWzy2amT0sUYjk",
  authDomain: "crwn-db-cc3d3.firebaseapp.com",
  projectId: "crwn-db-cc3d3",
  storageBucket: "crwn-db-cc3d3.appspot.com",
  messagingSenderId: "465080751966",
  appId: "1:465080751966:web:af5d4ab7ea66581f6f21cf",
  measurementId: "G-DS5RMBZPB0"
};

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;