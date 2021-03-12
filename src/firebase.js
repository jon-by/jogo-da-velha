import firebase from 'firebase'
 
 var firebaseConfig = {
    apiKey: "AIzaSyAEZUK_usE2ahz__2GIBy2bJmxtY7VQtm8",
    authDomain: "tic-tac-toe-57d3d.firebaseapp.com",
    projectId: "tic-tac-toe-57d3d",
    storageBucket: "tic-tac-toe-57d3d.appspot.com",
    messagingSenderId: "571513673036",
    appId: "1:571513673036:web:ca201f5aac9d2d1451abe9"
  };
  
  export const firebaseImplementation = firebase.initializeApp(firebaseConfig);
  export const firebaseDatabase = firebase.database();


  