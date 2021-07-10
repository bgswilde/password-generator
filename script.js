// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password criteria variables
var passwordChars = '';
var lowerChars = 'abcdefghijklmnopqrstuvwxyz';
var upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0987654321';
var symbols = '`~!@#$%^&*()+[];:<>?=-{}|,.';

// Functions for generatePassword function

// Function to determine whether or not to add Lowercase letters, then combine the strings for new password character string.
var includeLowers = function() {
  var promptLowers = window.prompt("Would you like to include LOWERCASE LETTERS in your password? Type 'y' to inlcude lowercase letters or 'n' to exclude lowercase letters.");
  promptLowers = promptLowers.toLowerCase();

  if (promptLowers === "y" || promptLowers ==="yes") {
    window.alert("Your password will include lowercase letters.");
    passwordChars = passwordChars.concat(lowerChars);
    console.log(passwordChars);
    return passwordChars;
  }

  if (promptLowers === "n" || promptLowers ==="no") {
    window.alert("Your password will not include lowercase letters.");
    console.log(passwordChars);
    return passwordChars;
  }

  else {
    window.alert("You must make a valid selection!");
    return includeLowers();
  };
}

// Function to determine whether or not to add Uppercase letters, then combine the strings for new password character string.
var includeUppers = function() {
  var promptUppers = window.prompt("Would you like to include UPPERCASE LETTERS in your password? Type 'y' to inlcude uppercase letters or 'n' to exclude uppercase letters.");
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

// Function to determine whether or not to add Numbers,  and if so combine the numbers string to the passwordChars string which includes lower and possibly uppercase letters.
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

// Function to determine whether or not to add symbols, and if so combine the symbols string to the passwordChars string which includes lowercase and possibly uppercase letters and numbers.
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

// Function for passwordLength. Get input from user as an integer to get determine password length between 8-128
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
    console.log(passwordLength);
    return passwordLength;
  };
}


// generatePassword function, which runs the previously defined functions for password criteria
var generatePassword = function() {
  // resets the password criteria before prompts
  passwordChars = "";
  // password criteria prompt functions
  includeLowers();
  includeUppers();
  includeNumbers();
  includeSymbols();
  // validates that at least one selection was made, returning back to the prompts if no selections were made.
  if (passwordChars === "") {
    window.alert("Your password is blank! Please go back and select some characters to include in your password.")
    return generatePassword();
  }
  
  // for loop to pick out random characters from the passwordChars string at the length determined by the lengthPrompt
  var passwordLength = lengthPrompt();
  var pickedChars = "";
    for (var i = 0; i < passwordLength; i++) {
      pickedChars = pickedChars + passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));
    }
  console.log(pickedChars);
  return pickedChars;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);