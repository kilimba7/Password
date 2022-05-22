// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min) + min);
  
    return value;
  };
  
  // randomly change turn order
  if (Math.random() > 0.5) {
    isPlayerTurn = false;
  }
console.log(Math)
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);