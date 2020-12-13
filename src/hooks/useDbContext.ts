import { createContext, useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

interface DbContextType {
  user: firebase.firestore.CollectionReference;
  church: firebase.firestore.CollectionReference;
  place: firebase.firestore.CollectionReference;
}

const firebaseConfig = {
  apiKey: 'AIzaSyCKEaTB72dlAoPoEE67UKj5xV4e6FpoYhY',
  authDomain: 'registro-idmji-suiza.firebaseapp.com',
  databaseURL:
    'https://registro-idmji-suiza-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'registro-idmji-suiza',
  storageBucket: 'registro-idmji-suiza.appspot.com',
  messagingSenderId: '23848046985',
  appId: '1:23848046985:web:0acc56b1f8cc4d8c545158',
  measurementId: 'G-W1SXK3J9LB',
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export const database = {
  user: db.collection('user'),
  church: db.collection('church'),
  place: db.collection('place'),
};
export const DbContext = createContext<DbContextType>(database);
export const useDbContext = () => useContext(DbContext);
