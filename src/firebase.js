import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDXGD4rsjxc6RsOCUVxunxCGmt3MjghlAE",
    authDomain: "spotify-clone-b99a8.firebaseapp.com",
    projectId: "spotify-clone-b99a8",
    storageBucket: "spotify-clone-b99a8.appspot.com",
    messagingSenderId: "956306648448",
    appId: "1:956306648448:web:26e33eb6e7742545a86565"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
export default firebase
