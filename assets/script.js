

//Choice objects
var lowercase: "abcdefghijklmnopqrstuvwxyz";
var uppercase: "ABCDEFGHIJKLMNOPQRSTUWXYZ";
var special characters: "!@#$%^&*()<>?~*";
var number: "0123456789";


//Asking how long the password is
var passwordLengthCheck = function() {
    var passwordLength = window.prompt("Chose characters to specify between 8 and 128 for password length.");
    if (passwordLength === "" || passwordLength === null) {
      window.alert("Fields left empty. Please try again.");
      passwordLengthCheck()
    }
  
    passwordLength = parseInt(passwordLength);
    console.log(passwordLength);
  
    // mAKE SURE THE PASSWORD IS BETWEEN 8-128 CHARACRTERS
    if (passwordLength >= 8 && passwordLength <= 128) {
      passwordInfo.lengthNumber = passwordLength;
    } else {
      window.alert("Please enter characters between 8 and 128. Try again!");
      passwordLengthCheck();
    }
  };
