import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyDJYP-PICaQqIoNr1wsZinGATzbnK83kLk',
  authDomain: 'list-c215f.firebaseapp.com',
  databaseURL: 'https://list-c215f.firebaseio.com',
  projectId: 'list-c215f',
  storageBucket: 'list-c215f.appspot.com',
  messagingSenderId: '28982525051',
  appId: '1:28982525051:web:1ea12b6973ce91d19bf6de',
};
// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
