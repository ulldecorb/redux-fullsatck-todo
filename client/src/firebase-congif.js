import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDQEzCZpQh_g6-Ew80dKmWdILiu5buag10',
  authDomain: 'fir-react-auth-97d79.firebaseapp.com',
  databaseURL: 'https://fir-react-auth-97d79-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'fir-react-auth-97d79',
  storageBucket: 'fir-react-auth-97d79.appspot.com',
  messagingSenderId: '1527259339',
  appId: '1:1527259339:web:58f6cd85fbe8cdfcd73b4e',
  measurementId: 'G-YJYWQCDMZZ'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
