import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCXaP8GvDOa0tIeZCRBaSzWjkwio6qqBhc",
  authDomain: "netflix-clone-oso-wells.firebaseapp.com",
  projectId: "netflix-clone-oso-wells",
  storageBucket: "netflix-clone-oso-wells.firebasestorage.app",
  messagingSenderId: "448172980185",
  appId: "1:448172980185:web:c57a4ad24bd87641780bc8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const logout = (email, password) => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
