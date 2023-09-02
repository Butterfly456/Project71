import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZPT9iNH1yuJB1vQhLB5O6AYWcuYhvE9U",
    authDomain: "project-71-f5e2f.firebaseapp.com",
    projectId: "project-71-f5e2f",
    storageBucket: "project-71-f5e2f.appspot.com",
    messagingSenderId: "468578682639",
    appId: "1:468578682639:web:9907f642194b4c62f6a07a",
    measurementId: "G-ELDZK97PMY"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
