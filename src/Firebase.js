import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCznN9rymxwTFwFMrOJKNuPkrOt3YWdm0Q",
  authDomain: "byte-crunchers.firebaseapp.com",
  projectId: "byte-crunchers",
  storageBucket: "byte-crunchers.appspot.com",
  messagingSenderId: "800885378911",
  appId: "1:800885378911:web:72f1e168efb0fd62fef0ea",
};
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
