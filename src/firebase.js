import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB8T9lU9mtUfiizd98O-IURr5detgJ7SC8',
  authDomain: 'jm-beer.firebaseapp.com',
  projectId: 'jm-beer',
  storageBucket: 'jm-beer.appspot.com',
  messagingSenderId: '99843864173',
  appId: '1:99843864173:web:670d5e26260baced54f164',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
