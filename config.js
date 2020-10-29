import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyC4CQ0PwA5lINFho1U4JcNO5i4LZzSTtmk",
  authDomain: "bedtime-str.firebaseapp.com",
  databaseURL: "https://bedtime-str.firebaseio.com",
  projectId: "bedtime-str",
  storageBucket: "bedtime-str.appspot.com",
  messagingSenderId: "1036893827136",
  appId: "1:1036893827136:web:b96728c7ffca23ef322fa5"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
