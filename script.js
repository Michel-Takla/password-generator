// 1- upper case 
// 2- lower case 
// 3- numbers
// 4- special characters
// 

let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var Password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = Password;

}
  
  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);