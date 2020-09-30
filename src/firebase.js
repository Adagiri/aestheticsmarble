import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDA1ppo_QufoGXXA9uUWxp2CFb26nfe1aU",
  authDomain: "aestheticsmarbleworld.firebaseapp.com",
  databaseURL: "https://aestheticsmarbleworld.firebaseio.com",
  projectId: "aestheticsmarbleworld",
  storageBucket: "aestheticsmarbleworld.appspot.com",
  messagingSenderId: "172607549674",
  appId: "1:172607549674:web:030023dfb4caea475b2793",
  measurementId: "G-P21MVLRMMV"
});

  export const db = firebaseApp.firestore();