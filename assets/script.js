//Choice objects
var letters: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUWXYZ";
var special characters: "!@#$%^&*()<>?~*";
var numbers: "0123456789";

var letters
var symbols
var numbers

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