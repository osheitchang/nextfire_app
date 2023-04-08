import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBbh5ZhizAXCauWJO0WpcgDaVTlouRmJRY",
    authDomain: "nextfire-20640.firebaseapp.com",
    projectId: "nextfire-20640",
    storageBucket: "nextfire-20640.appspot.com",
    messagingSenderId: "919785408527",
    appId: "1:919785408527:web:5b07e22ff8ec1a25d07b7a",
    measurementId: "G-T1DX5VMQ74"
  };

if(firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

  // Initialize Firebase


  // const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);