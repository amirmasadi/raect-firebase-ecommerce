import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAHLvBVjzAVDSSjbcdZJu3Jkn7BhehkFCI",
  authDomain: "new-co-3d5d7.firebaseapp.com",
  databaseURL: "gs://new-co-3d5d7.appspot.com/",
  projectId: "new-co-3d5d7",
  storageBucket: "new-co-3d5d7.appspot.com",
  messagingSenderId: "49152111095",
  appId:"1:49152111095:web:8f9c3cf95203a05abd3ef2",
  measurementId: "G-MMTYWSV7FC"
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
