import firebase from "firebase";

const firebaseApp = firebase.initializeApp(
  {
    apiKey: "AIzaSyCM47uCC8xaIhEs7fDrxbBHTsoS0pzDAMk",
    authDomain: "clone-cf039.firebaseapp.com",
    databaseURL: "https://clone-cf039.firebaseio.com",
    projectId: "clone-cf039",
    storageBucket: "clone-cf039.appspot.com",
    messagingSenderId: "995338664939",
    appId: "1:995338664939:web:993bad762f4e06dbfb77ae",
    measurementId: "G-K9L8NCC9GT"
  }
);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};