import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCimrRIC4nrEUNKYQyA13eTe_HnRI3CwUc",
  authDomain: "mytshirtapp-2ecab.firebaseapp.com",
  databaseURL: "https://mytshirtapp-2ecab.firebaseio.com",
  projectId: "mytshirtapp-2ecab",
  storageBucket: "mytshirtapp-2ecab.appspot.com",
  messagingSenderId: "113426795427",
  appId: "1:113426795427:web:4f775fea483720cf6e6816",
  measurementId: "G-T1C899ZXRW"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
  storage, firebase as default
}