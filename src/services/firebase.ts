import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getDatabase } from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyABYRa7xFud1woHbHCTlpVe1tNog3KZhqA",
    authDomain: "form-signature-9174b.firebaseapp.com",
    databaseURL: "https://form-signature-9174b-default-rtdb.firebaseio.com",
    projectId: "form-signature-9174b",
  };
  
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);

  export const database = getDatabase();

