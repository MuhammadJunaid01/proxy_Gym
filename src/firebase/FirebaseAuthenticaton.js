import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfig";

const FirebaseAuthentiCation = () => {
  initializeApp(firebaseConfig);
};

export default FirebaseAuthentiCation;
