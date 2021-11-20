import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAobjTxJOpFdxLMBvoaJEfTehKY5waI-dU",
    authDomain: "proyecto-react-coder-74914.firebaseapp.com",
    projectId: "proyecto-react-coder-74914",
    storageBucket: "proyecto-react-coder-74914.appspot.com",
    messagingSenderId: "791232758222",
    appId: "1:791232758222:web:650baf59cea7668b142b9f"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
