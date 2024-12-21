
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCQcgoJpSoZtWRNfQ8sku7PPyL7-gogT_I",
  authDomain: "busandchat-356a9.firebaseapp.com",
  projectId: "busandchat-356a9",
  storageBucket: "busandchat-356a9.firebasestorage.app",
  messagingSenderId: "37859560988",
  appId: "1:37859560988:web:829db67cfcdc7572c219d9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)