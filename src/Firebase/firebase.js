import firebase from 'firebase/app';
import 'firebase/storage';

// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAwu5NF3uoa0Z6kZdTBZxGqllNIfPGUsS0',
  authDomain: 'immo-5160e.firebaseapp.com',
  projectId: 'immo-5160e',
  storageBucket: 'immo-5160e.appspot.com',
  messagingSenderId: '631385392121',
  appId: '1:631385392121:web:06daf6a8e99f476644b328',
  measurementId: 'G-PMJWJELPDB',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = firebase.storage();

export {storage, firebase as default};
