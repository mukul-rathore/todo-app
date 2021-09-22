import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


// Initialize Firebase
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCa9LDJKRrbsT5iYCZnNU-1QUlll3L6FCA",
  authDomain: "todo-app-7d10c.firebaseapp.com",
  projectId: "todo-app-7d10c",
  storageBucket: "todo-app-7d10c.appspot.com",
  messagingSenderId: "1037129043134",
  appId: "1:1037129043134:web:49abd8262c6716389a62ef",
  measurementId: "G-DHQF3P7KTS"
});


const db = firebaseApp.firestore();

export default db;