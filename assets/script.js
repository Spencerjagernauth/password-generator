///The choice objects 
var letters
var symbols
var numbers

var lowercase = "abcdefghijklmnopqrstuvwxyz"; 
var uppercase = "ABCDEFGHIJKLMNOPQRSTUWXYZ";
var specialSym = "!@#$%^&*()<>?~*";
var numbers = "0123456789";


//Asking how long the password is
var generatePasswordLength = function () {
    var passwordLength = window.prompt("Please choose characters between 8 and 128");
    if (passwordLength === "" || passwordLength === null) {
        window.alert("Fields left empty. Please try again.");
        passwordLengthCheck()
    }

    passwordLength = parseInt(passwordLength);
    console.log(passwordLength);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var resetBtn = document.querySelector("#reset");

//Generating password and combining choice objects
function generatePassword() {
    var passwordOptions = questions();
    var possibleCombo = [];
    var finalPassword = "";
  
  
  
    if (passwordOptions.askNumbers) {
      for (var i of numbers)
        possibleCombo.push(i);
    }
    if (passwordOptions.askLowerCase) {
      for (var i of lowerCase)
        possibleCombo.push(i);
    }
    if (passwordOptions.askUpperCase) {
      for (var i of upperCase)
        possibleCombo.push(i);
    }
    if (passwordOptions.askSpecial) {
      for (var i of special)
        possibleCombo.push(i);
    }
  
  
    console.log(possibleCombo);
  
  
    for (var i = 0; i < passwordOptions.length; i++) {
      finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
      
    }
    console.log(finalPassword);
  
    return finalPassword;
  }
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }




// Write password to the #password input
function writePassword() {

  password.length = document.getElementById("allowed-length").value;
  password.letters = document.getElementById("allowed-letters").value;
  password.numbers = document.getElementById("allowed-numbers").value;
  password.special = document.getElementById("allowed-special").value;

  var passwordText = document.querySelector("#password");

  passwordText.value = password.generate();

}

var advancedForm = document.getElementById("advancedForm");
advancedForm.onsubmit = function(e) { e.preventDefault(); }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
resetBtn.addEventListener("click", resetAdvancedFields);