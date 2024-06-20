import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDsuqflR1hgSdIDrVhAlWZf0ua1Aey7D6k",
  authDomain: "fe-rolling-5team.firebaseapp.com",
  projectId: "fe-rolling-5team",
  storageBucket: "fe-rolling-5team.appspot.com",
  messagingSenderId: "158165641619",
  appId: "1:158165641619:web:2638806039db571492a066",
  measurementId: "G-9Q45360WLL",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
