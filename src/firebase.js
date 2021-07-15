import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/firestore";
import "firebase/storage";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCNDIh5d77dP-2Y9UwX_o7ltKeHZ9G8jBw",
    authDomain: "expense-tracker-app-ec118.firebaseapp.com",
    projectId: "expense-tracker-app-ec118",
    storageBucket: "expense-tracker-app-ec118.appspot.com",
    messagingSenderId: "604340393066",
    appId: "1:604340393066:web:07045e3bcb59de5ee62613"
  });

  const firestore = app.firestore();

  export const auth = app.auth();
  export default app;