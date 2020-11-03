import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyANLeVYImOVKkE8dhSVwZZr9HBq6OT6PPs",
  authDomain: "clone-529aa.firebaseapp.com",
  databaseURL: "https://clone-529aa.firebaseio.com",
  projectId: "clone-529aa",
  storageBucket: "clone-529aa.appspot.com",
  messagingSenderId: "439840960137",
  appId: "1:439840960137:web:1f569d1265d2a7d9b66058",
  measurementId: "G-NZZJTLVYTN"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
