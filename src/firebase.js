import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDG7qXe5NdVqWLKWVMPza5hexZx4Oa7Ses",
  authDomain: "konkosa-a4372.firebaseapp.com",
  projectId: "konkosa-a4372",
  storageBucket: "konkosa-a4372.appspot.com",
  messagingSenderId: "1069550995438",
  appId: "1:1069550995438:web:a409939578ab6f89ef70ff"
}).auth()
