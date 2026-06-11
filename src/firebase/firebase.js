import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCUk52Uc1bmMXyjcb3ABYCuJ5MWgyFJ-0",
  authDomain: "centro-negocios-abancay.firebaseapp.com",
  projectId: "centro-negocios-abancay",
  storageBucket: "centro-negocios-abancay.firebasestorage.app",
  messagingSenderId: "440977677142",
  appId: "1:440977677142:web:f95dda8aefb2a429b514f7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);