import firebase from "firebase";

const firebaseApp = firebase({
    apiKey: "AIzaSyDA1ppo_QufoGXXA9uUWxp2CFb26nfe1aU",
    authDomain: "aestheticsmarbleworld.firebaseapp.com",
    databaseURL: "https://aestheticsmarbleworld.firebaseio.com",
    projectId: "aestheticsmarbleworld",
    storageBucket: "aestheticsmarbleworld.appspot.com",
    messagingSenderId: "172607549674",
    appId: "1:172607549674:web:1c54a3ba183934155b2793",
    measurementId: "G-HB8JE2631T"
  });

  export const db = firebaseApp.firestore();