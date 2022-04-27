import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBnK6r5fMzwieQ1nH0VFbC9yHnJkYW5COI",
  authDomain: "react-blog-6cf6e.firebaseapp.com",
  projectId: "react-blog-6cf6e",
  storageBucket: "react-blog-6cf6e.appspot.com",
  messagingSenderId: "373020580992",
  appId: "1:373020580992:web:cc0444b76951839ffa9a65"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore()