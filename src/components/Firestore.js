import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDBUPJV4893xIWpdElOqoN_ru7FI-JlQkY",
    authDomain: "smartbin-1be82.firebaseapp.com",
    databaseURL: "https://smartbin-1be82.firebaseio.com",
    projectId: "smartbin-1be82",
    storageBucket: "smartbin-1be82.appspot.com",
    messagingSenderId: "621386552209",
    appId: "1:621386552209:web:3edcf81e6415a8daedc030",
    measurementId: "G-L52HGZWMPW"
  };

firebase.initializeApp(config);
export default firebase;
