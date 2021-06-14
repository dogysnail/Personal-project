

function pageRedirect(page_url) {
  window.location.replace(page_url)
}

function testing(){
  var idField = document.getElementById("IDField");
  var proof = idField.type
  alert(proof)
  
}


function signUp() {

  var db = firebase.firestore();
  var idField = document.getElementById("IDField").value;
  var userField = document.getElementById("userField").value;
  var emailField = document.getElementById('email_field').value;
  var passField = document.getElementById('password_field').value;
  var passRepeat = document.getElementById('password_repeat').value;

  if (passField == passRepeat, idField.length != 0, userField.length != 0){


    
    

  firebase.auth().createUserWithEmailAndPassword(emailField, passField)
  .then((userCredential) => {
    // Signed in
    alert("sign up Successfull!")


    // Database Entry
    db.collection("users").doc(idField).set({
      Email: emailField,
      Name: userField,
      ID: idField,
      TimeRegistered: Date()

  })
  .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });



  // Waits and then redirects you
  setTimeout(() => {  pageRedirect("./index.html"); }, 500);





    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..

    alert("Error :" + errorMessage + "\r\n" + "Error code: " + errorCode)

    // error message here

  });
  }

  else {
    alert("Error :" + "\r\n" + "Either your passwords do not match, You didnt insert a valid ID or you didnt fill in all the fields")
  }



}

var clickCount = 0;
function passwordShow(){


    var passwordButton = document.getElementById("password_button")
    var passField = document.getElementById('password_field')
    var passRepeat = document.getElementById('password_repeat')

    clickCount++;
    if (clickCount % 2 === 0){
      passField.type="password"
      passRepeat.type="password"
    }

    else{
      passField.type="text"
      passRepeat.type="text"
    }

}

