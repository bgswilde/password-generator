// Assignment Code
var generateBtn = document.querySelector("#generate");

/*
declare arrays: upperChars, lowerChars, numbers, symbols

generatePassword function (all of this)

passwordLength function:
window.prompt to ask the user how long would you like to make password? (choose a number between 8-128)
alert to show what they said about lenght "Your password will be + passwordLength + characters long"

includeUppers function:
window.prompt to ask the user if they'd like to inlcude uppercase letters. Type Y or N.
if Y or y, then alert "your password will include some uppercase letters"
upperChars is true.
if N or n, then alert "your password will not include uppercase letters"
upperChars is false.
else, then alert "please choose a valid option" and return to upperChars()

includeNumbers function:
window.prompt to ask the user if they'd like to inlcude numbers. Type Y or N.
if Y or y, then alert "your password will include some numbers"
numbers is true.
if N or n, then alert "your password will not include numbers"
numbers is false.
else, then alert "please choose a valid option" and return to numbers()

includeSymbols function:
window.prompt to ask the user if they'd like to inlcude numbers. Type Y or N.
if Y or y, then alert "your password will include some symbols"
symbols is true.
if N or n, then alert "your password will not include symbols"
symbols is false.
else, then alert "please choose a valid option" and return to symbols()

for loop to get characters from each choice.

To look into:
use ascii values for the arrays 
using concat based on true/false - how do you choose which arrays to concat from the functions? Is there an easier way than typing out several boolean statements?
how do I ensure that one of each is selected?

*/

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
