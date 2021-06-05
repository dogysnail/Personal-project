

function pageRedirect(page_url) {
  window.location.replace(page_url)
}







function login() {


  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  
  
  
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
  .then((userCredential) => {
  // Signed in
  alert("you have been logged in!")

  pageRedirect("./index.html")
  var user = userCredential.user;
  // ...

  })
  .catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  
  alert("Error :" + errorMessage + "\r\n" + "Error code: " + errorCode)

 
});
}






