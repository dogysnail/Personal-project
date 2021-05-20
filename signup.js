

import "firebase/auth";

function pageRedirect(page_url) {
  window.location.replace(page_url)
}

var emailField = document.getElementById('userEmail').value;
var passField = document.getElementById('userPass').value;


function signUp() {

    firebase.auth().createUserWithEmailAndPassword(emailField, passField)
  .then((userCredential) => {
    // Signed in 

    pageRedirect("./index.html")

    alert("signed in user: " + emailField)
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

}
