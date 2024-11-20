import { firebase } from '@react-native-firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAX6PBwWNrMmaDaGrKZ5yNzMpkduuL8c_g",
    authDomain: "todolist-78fe2.firebaseapp.com",
    projectId: "todolist-78fe2",
    storageBucket: "todolist-78fe2.firebasestorage.app",
    messagingSenderId: "264047122632",
    appId: "1:264047122632:web:8e0e2cdff3753ada2c2dfd",
    measurementId: "G-X7PFY56F1F"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
