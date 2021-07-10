// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordChars = 'abcdefghijklmnopqrstuvwxyz';
var upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0987654321';
var symbols = '`~!@#$%^&*()+[];:<>?=-{}|,.';

// declare arrays: upperChars, lowerChars, numbers, symbols

// generatePassword function (all of this)

// passwordLength function:
/* window.prompt to ask the user how long would you like to make password? (choose a number between 8-128)
alert to show what they said about lenght "Your password will be + passwordLength + characters long" */
var lengthPrompt = function() {
  var passwordLength = window.prompt("How long would you like your password to be? (choose a number between 8-128)"); //how to I make sure they type a number? Ex. 11` can pass through...

  if (passwordLength < 8) {
    window.alert("Please pick a number between 8-128");
    return lengthPrompt();
  }

  if (passwordLength > 128) {
    window.alert("Please pick a number between 8-128");
    return lengthPrompt();
  }

  else {
    window.alert("Your password will be " + passwordLength + " characters long.");
  };
  
  console.log(passwordLength);
}


// includeUppers function:
/* window.prompt to ask the user if they'd like to inlcude uppercase letters. Type Y or N.
if Y or y, then alert "your password will include some uppercase letters"
upperChars is true.
if N or n, then alert "your password will not include uppercase letters"
upperChars is false.
else, then alert "please choose a valid option" and return to upperChars() */

var includeUppers = function() {
  var promptUppers = window.prompt("Would you like to include UPPERCASE LETTERS? Type 'y' to inlcude uppercase letters or 'n' to exclude uppercase letters.");
  promptUppers = promptUppers.toLowerCase();

  if (promptUppers === "y" || promptUppers ==="yes") {
    window.alert("Your password will include uppercase letters.");
    passwordChars = passwordChars.concat(upperChars);
    console.log(passwordChars);
    return passwordChars;
  }

  if (promptUppers === "n" || promptUppers ==="no") {
    window.alert("Your password will not include uppercase letters.");
    console.log(passwordChars);
    return passwordChars;
  }

  else {
    window.alert("You must make a valid selection!");
    return includeUppers();
  };
}


// includeNumbers function:
/* window.prompt to ask the user if they'd like to inlcude numbers. Type Y or N.
if Y or y, then alert "your password will include some numbers"
numbers is true.
if N or n, then alert "your password will not include numbers"
numbers is false.
else, then alert "please choose a valid option" and return to numbers() */

var includeNumbers = function() {
  var promptNumbers = window.prompt("Would you like to include NUMBERS? Type 'y' to inlcude numbers or 'n' to exclude numbers.");
  promptNumbers = promptNumbers.toLowerCase();

  if (promptNumbers === "y" || promptNumbers === "yes") {
    window.alert("Your password will include numbers.");
    passwordChars = passwordChars.concat(numbers);
    console.log(passwordChars);
    return passwordChars;
  }

  if (promptNumbers === "n" || promptNumbers === "no") {
    window.alert("Your password will not include numbers.");
    console.log(passwordChars);
    return passwordChars;
  }

  else {
    window.alert("You must make a valid selection!");
    return includeNumbers();
  };
}

// includeSymbols function:
/* window.prompt to ask the user if they'd like to inlcude numbers. Type Y or N.
if Y or y, then alert "your password will include some symbols"
symbols is true.
if N or n, then alert "your password will not include symbols"
symbols is false.
else, then alert "please choose a valid option" and return to symbols() */

var includeSymbols = function() {
  var promptSymbols = window.prompt("Would you like to include SYMBOLS? Type 'y' to inlcude numbers or 'n' to exclude numbers.");
  promptSymbols = promptSymbols.toLowerCase();

  if (promptSymbols === "y" || promptSymbols === "yes") {
    window.alert("Your password will include symbols.");
    passwordChars = passwordChars.concat(symbols);
    console.log(passwordChars);
    return passwordChars;
  }


  if (promptSymbols === "n" || promptSymbols === "no") {
    window.alert("Your password will not include symbols.");
    console.log(passwordChars);
    return passwordChars;
  }

  else {
    window.alert("You must make a valid selection!");
    return includeSymbols();
  }
}


//get characters from each choice.
//when user clicks generate password, prompts show up.
//after prompts cycle through, math.random with prompt input generated array (or string?) finds as many characters as the length of passwordLength variable.
//how do I make sure it uses at least one of each?
//value of function to create the password goes into the field in the middle.

/* To look into:
When do i need to use preventdefault?

*/
var generatePassword = function() {
  lengthPrompt();
  includeUppers();
  includeNumbers();
  includeSymbols();
  
/*  var randomized = "";
  for (var i = 0; i < lengthPrompt; i++) {
    randomized = randomized + passwordChars.charAt(Math.floor(math.random() * passwordChars.length));
  }
  return randomized;
    // for loop for (i = 0, i < lengthPrompt, i++)
} */

// get something out of the array. varfirstItem = array
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//random thoughts
//passwordLength(Math.random)