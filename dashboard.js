

function pageRedirect(page_url) {
  window.location.replace(page_url)
}

//----------------------------------------------------------------------------------

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;
    document.getElementById("username-text").innerHTML = "Welcome User : " + email_id;

    if(user != null){

      var email_id = user.email;
 

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});


//----------------------------------------------------------------------------------


function login() {


  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  
  
  
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
  .then((userCredential) => {
  // Signed in
  alert("you have been logged in!")


  var user = userCredential.user;
  // ...

  })
  .catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  
  alert("Error :" + errorMessage + "\r\n" + "Error code: " + errorCode)

 
});
}


//----------------------------------------------------------------------------------




function logout(){
  firebase.auth().signOut();
}