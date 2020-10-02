import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/app'

var firebaseConfig = {
    apiKey: "AIzaSyDDWe94gDL7GihdZHwPTsLBJWEwdbgRV48",
    authDomain: "web-site-1f994.firebaseapp.com",
    databaseURL: "https://web-site-1f994.firebaseio.com",
    projectId: "web-site-1f994",
    storageBucket: "web-site-1f994.appspot.com",
    messagingSenderId: "197009031676",
    appId: "1:197009031676:web:c5d5d7c3111f80e862b279"
  };


const fire = firebase.initializeApp(firebaseConfig);

export default fire;
