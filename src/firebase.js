import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAgFTIaAbQyIZyCxJJ4rDTtEErTKCeg-hQ",
  authDomain: "challenge-9cf31.firebaseapp.com",
  projectId: "challenge-9cf31",
  storageBucket: "challenge-9cf31.appspot.com",
  messagingSenderId: "484964238431",
  appId: "1:484964238431:web:c2d3c9a6626ea8a3e6c7ea",
  measurementId: "G-T78VN7SPHW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };