

<script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js"></script>


import "firebase/auth";

function pageRedirect(page_url) {
  window.location.replace(page_url)
}



firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.

      pageRedirect(index.html)


    } else {
      // No user is signed in.
    }
  });




  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCVcsHTzEW83f_N4BvoLvHY_NlwY1HQpIg",
    authDomain: "ish-dashboard.firebaseapp.com",
    projectId: "ish-dashboard",
    storageBucket: "ish-dashboard.appspot.com",
    messagingSenderId: "859576605594",
    appId: "1:859576605594:web:188da4f917d45ae2f5b823"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




function login() {


  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  
  
  
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
  .then((userCredential) => {
  // Signed in
  var user = userCredential.user;
  // ...
  })
  .catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  
  console.log("Error :" + error.errorMessage)

 
});
}






