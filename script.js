// Assignment code here

function generatePassword() {

    var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
    
    var randomLength = "";
    var infoSpecial;
    var infoNumber;
    var infoUpper;
    var infoLower;
    
    // Initial prompt should start here
        var randomLength = (prompt("How many characters would you like your password to contain?"));
    
    // Must select within the range or will be asked the same question again 
        while(randomLength <= 7 || randomLength >= 129) {
            alert("Password length must be between 8-128 characters");
            var randomLength = (prompt("How many characters would you like your password to contain?"));
            } 
            alert(`Your password will have ${randomLength} characters`);
      
    // Determine the criteria 
          var infoSpecial = confirm("Click OK to confirm if you would like to include special characters");
          var infoNumber = confirm("Click OK to confirm if you would like to include numbers");    
          var infoLower = confirm("Click OK to confirm if you would like to include lowercase characters");
          var infoUpper = confirm("Click OK to confirm if you would like to include uppercase characters");
            // Loop if the answers is outside the criteria 
            while(infoUpper === false && infoLower === false && infoSpecial === false && infoNumber === false) {
              alert("You must choose at least one parameter");
              var special = confirm("Click OK to confirm if you would like to include infoSpecial characters");
              var infoNumber = confirm("Click OK to confirm if you would like to include numbers");    
              var lower = confirm("Click OK to confirm if you would like to include lowercase characters");
              var upper = confirm("Click OK to confirm if you would like to include uppercase characters");   
          } 
      
          
    // Linked my confirmation options to my initial values
    var randomChar = []
    
    if (infoLower) {randomChar = randomChar.concat(lower)}
    if (infoUpper) {randomChar = randomChar.concat(upper)}
    if (infoNumber) {randomChar = randomChar.concat(number)}
    if (infoSpecial) {randomChar = randomChar.concat(special)}
      
    // Final password generation after combining my strings
        var finalPassword = ""
    
        for (var i = 0; i < randomLength; i++) {
          let rng =[Math.floor(Math.random() * randomChar.length)];
          finalPassword = finalPassword + randomChar[rng]};
        return finalPassword}
    
    // Get references to the #generate element
    var generateBtn = document.querySelector("#generate");
    
    // Write password to the #password input
    function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    }
    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);