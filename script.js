// 1- upper case 
// 2- lower case 
// 3- numbers
// 4- special characters
// 5- the user choice
// 6- the input for the password
// 7- generate the password using loop x count
// 8- final, showing the password to the page

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVUXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let spcialCharacters = "!@#$%^&*()_-+=[]{}|?<>~"
let numbers = "1234567890"
let charsCount = 8;
let choice = "";

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var Password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = Password;

}

function generatePassword () {
  // Here is to generate the password using loop
  for (let i = 0; i < charsCount; i++) {
    choice = Math.floor(Math.random () * choice.length);
  }
} 
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);