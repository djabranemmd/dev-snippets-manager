import { initializeApp } from "firebase/app";

import {
  getAuth,
} from "firebase/auth";

import {
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLhKv16PjGsl45pJDKvrP-AKhynUF-P8o",

  authDomain:
    "dev-snippets-manager.firebaseapp.com",

  projectId:
    "dev-snippets-manager",

  storageBucket:
    "dev-snippets-manager.firebasestorage.app",

  messagingSenderId:
    "445019202822",

  appId:
    "1:445019202822:web:84d3b72260d9a486a82a87",
};

const app =
  initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);