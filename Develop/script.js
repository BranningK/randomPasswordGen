//Links generate password button to the generateBtn variable so we can add event listener
var generateBtn = document.querySelector("#generate");

//generates the password to display to the user
function generatePassword(){
//Password length prompts
    var passwordLength = prompt("How long would you like the password to be?", "Enter a number from 8 to 128.");
    if(passwordLength < 8){
        alert('Password length must be at least 8 characters')
        return null;
    }
    if(passwordLength > 128){
        alert('Password length must less than 129 characters')
        return null;
    }
//Character Type Prompts
    var upperChars = confirm("Would you like uppercase letters in your password?");
    var lowerChars = confirm("Would you like lowercase letters in your password?");
    var nums = confirm("Would you like numbers in your password?");
    var specialChars = confirm("Would you like special characters in your password?");
    
//If no character types are selected
    if (!upperChars && !lowerChars && !nums && !specialChars) {
        alert("You must choose at least one character type");
        console.log("You must choose at least one character type");
        return;
    }

//Character types to pull from
    var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var specialCharacters = '!@#$%^&*()';
//Character types defined by user
    var passwordCharacterList = '';
    var potientialPassword = '';
    var password = '';

//Adds character types to potentialPassword string
    if(upperChars == true){
        potientialPassword += uppercaseLetters
    }
    if(lowerChars == true){
        potientialPassword += lowercaseLetters
    }
    if(nums == true){
        potientialPassword += numbers
    }
    if(specialChars == true){
        potientialPassword += specialCharacters
    }
    console.log(potientialPassword)
//Randomizes password
    for(let i=0; i< Number(passwordLength); i++ ){
        var randomNum = Math.floor(Math.random() * potientialPassword.length);
        console.log(randomNum);
        var randomChar = potientialPassword[randomNum];
        console.log(randomChar);
        passwordCharacterList = passwordCharacterList + randomChar;
        console.log(passwordCharacterList);

        password = passwordCharacterList
    }

return password
}

//initiates the generate password function
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);