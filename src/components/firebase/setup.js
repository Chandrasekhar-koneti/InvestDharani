import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwai6vvpNM3B8p3AXSJNTjudPj1ByITSo",
  authDomain: "investdharani-8b3af.firebaseapp.com",
  projectId: "investdharani-8b3af",
  storageBucket: "investdharani-8b3af.appspot.com",
  messagingSenderId: "660059035476",
  appId: "1:660059035476:web:bdd3eb66bb91f26ad21ac1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
