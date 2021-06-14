
//----------------------------------------------------------------------------------

// settings menu

var clickCount = 0
function settings() {
  var settingsDiv = document.getElementById("settings_div")


  clickCount++;
    if (clickCount % 2 === 0){
      settingsDiv.style.display="block"
      
    document.getElementById("user_div").style.display = "none";
  



    }

    else{
      settingsDiv.style.display="none"
      document.getElementById("user_div").style.display = "block";
 

      

    }
}
settings()





function pageRedirect(page_url) {
  window.location.replace(page_url)
}

//----------------------------------------------------------------------------------

// checking if user is logged in


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    

    var user = firebase.auth().currentUser;
    document.getElementById("username-text").innerHTML= "Welcome User: " + user.email;
    document.getElementById("body-element").style.backgroundImage = "none"

    if(user != null){

      var email_id = user.email;
      



    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    document.body.style.backgroundImage = "url('https://www.tripsavvy.com/thmb/KPnYhtdWif5p4tMi81q9J5tnd4A=/3936x2214/smart/filters:no_upscale()/dubai-skyline-1070127800-852cfa4a466b45bca771797b32ed4bd6.jpg')"

  }
});


//----------------------------------------------------------------------------------

// allows you to log in

function login() {


  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  
  
  
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
  .then((userCredential) => {
  // Signed in
  alert("you have been logged in!")
  setTimeout(function(){

}, 200);
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


//----------------------------------------------------------------------------------


// log out function


function logout(){
  firebase.auth().signOut();
}



