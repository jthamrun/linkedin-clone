import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCEFuV2_J9hFAX_-ibA3okapZYhtOFR7M",
    authDomain: "linkedin-clone-4c93e.firebaseapp.com",
    projectId: "linkedin-clone-4c93e",
    storageBucket: "linkedin-clone-4c93e.appspot.com",
    messagingSenderId: "62991902948",
    appId: "1:62991902948:web:65d75e0c4e49d64d3864f1",
    measurementId: "G-PBB4LLW5ZD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };