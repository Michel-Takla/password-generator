// 1- upper case 
// 2- lower case 
// 3- numbers
// 4- special characters
// 6- the input for the password
// 7- generate the password using loop x count
// 8- get prompt-- the user choice
// 9- final, showing the password to the page

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVUXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let spcialCharacters = "!@#$%^&*()_-+=[]{}|?<>~";
let numbers = "1234567890";
let charsCount = 8;
let choice = "";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let Prompts = getPrompt();

  if (Prompts) {
      let Password = generatePassword();
      let passwordText = document.querySelector("#password");
      
      passwordText.value = Password;
  }
}

function generatePassword () {
  // Here is to generate the password using loop x count "random number"
  let password = "";
  for(let i = 0; i < charsCount; i++) {
      let randomNumber = Math.floor(Math.random () * choice.length);
      password = password + choice[randomNumber];
  }
  return password;
} 

function getPrompt() { //==> this is for user  choice "prompt"--choice custom based on the user
  choice = "";

  charsCount = prompt("hi, how many charactes for your password would you like to choose ?");

  if(isNaN(charsCount) || charsCount < 8 || charsCount > 128) {
    alert("hi, please choose two digits number between 8 - 128");
    return false;
  }

  if(confirm("Would you like to choose Upper Case for your password sir ?")) {
    choice = choice.concat(upperCase);
  }

  if(confirm("Would you like to choose lower Case for your password sir ?")) {
    choice = choice.concat(lowerCase);
  }

  if(confirm("Would you like to choose spcial characters for your password sir ?")) {
    choice = choice.concat(spcialCharacters);
  }

  if(confirm("Would you like to choose a numbers for your password sir ?")) {
    choice = choice.concat(numbers);
  }
  return true;

}
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);