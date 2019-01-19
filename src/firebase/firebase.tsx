import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCvwpIvgFnYhwhYhR5hGBz1Cr61mIC8hD8',
    authDomain: 'hijrnewlab.firebaseapp.com',
    databaseURL: 'https://hijrnewlab.firebaseio.com',
    projectId: 'hijrnewlab',
    storageBucket: 'hijrnewlab.appspot.com',
    messagingSenderId: '4175149713',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();
const storage = firebase.storage();
const authEmailProvider = firebase.auth.EmailAuthProvider;

export {
  db,
  auth,
  storage,
  authEmailProvider,
};
