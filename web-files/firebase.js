import * as firebase from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import "firebase/storage";
import { getStorage } from "firebase/storage";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCILKzvuDT33Wiw74x3BJNHFKotirEu6eM",
    authDomain: "selab2022-f6ec0.firebaseapp.com",
    databaseURL: "https://selab2022-f6ec0-default-rtdb.firebaseio.com",
    projectId: "selab2022-f6ec0",
    storageBucket: "selab2022-f6ec0.appspot.com",
    messagingSenderId: "559938006018",
    appId: "1:559938006018:web:f447e89a5560fe15468b1b",
    measurementId: "G-D2CSK3DMYC"
  });

///Make references to the firestore, storage and auth
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);

  const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  const logout = () => {
    signOut(auth);
  };
  export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
  };

//  db.settings({ timestampsInSnapshots: true});