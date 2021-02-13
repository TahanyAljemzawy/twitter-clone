import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNzTk1ma8VvBX71L_GS2Fq8hMX5BMEfbk",
    authDomain: "twitter-clone-2c802.firebaseapp.com",
    databaseURL: "https://twitter-clone-2c802-default-rtdb.firebaseio.com",
    projectId: "twitter-clone-2c802",
    storageBucket: "twitter-clone-2c802.appspot.com",
    messagingSenderId: "750147684801",
    appId: "1:750147684801:web:ebe8ff1f15648280d70740",
    measurementId: "G-HGJBH1B2WL"
  };


  // Initialize Firebase to connect the firebase with the app
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;