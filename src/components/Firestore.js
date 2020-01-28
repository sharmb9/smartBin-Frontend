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
const db = firebase.firestore()


// db.collection("items")
// .where("item_tag", "==", "Plastic bottle")
// .get()
// .then(querySnapshot => {
//   const data = querySnapshot.docs.map(doc => doc.data());
//   console.log(data[0].item_cat + " " + data[0].item_tag); // array of cities objects
// });

// db.collection('items').get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       console.log(doc.id, '=>', doc.data());
//     });
//   })
//   .catch((err) => {
//     console.log('Error getting documents', err);
//   });

// get the whole collection
// db.collection("items")
// .get()
// .then(querySnapshot => {
//   const data = querySnapshot.docs.map(doc => doc.data());
//   const obj = JSON.parse(JSON.stringify(data));
//   console.log((data[0].item_cat)); // array of cities objects
// });


// db.collection('items').get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       console.log(doc.id, '=>', doc.data());
//     });
//   })
//   .catch((err) => {
//     console.log('Error getting documents', err);
//   });

// db.collection("items")
// .doc('LA')
// .get()
// .then(doc => {
//   const data = doc.data();
//   console.log(data); // LA city object with key-value pair
// });
//prev was export firebase
export default db;
