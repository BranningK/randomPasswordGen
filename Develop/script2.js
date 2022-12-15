// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = {
    uppercaseLetters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercaseLetters: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    specialCharacters: '!@#$%^&*()'
}
    console.log(characters)
var passwordLength = window.passwordLength;
console.log(passwordLength)
// temp dataset holder
var passwordCharacterList = '';

// var passwordLength = prompt("How long would you like the password to be?", "Enter a number from 8 to 128."); 
// //Validates password length
// if(passwordLength < 8 || passwordLength > 129) {
//     alert("You must choose a valid length for your password")
//     console.log("You must choose a valid length for your password");
//     passwordLength = false
// 89
// }

// //Gets criteria for password
// var upperChars = confirm("Would you like uppercase letters in your password?\nOK=Yes\nCancel=No");
// var lowerChars = confirm("Would you like lowercase letters in your password?\nOK=Yes\nCancel=No");
// var nums = confirm("Would you like numbers in your password?\nOK=Yes\nCancel=No");
// var specialCharacters = confirm("Would you like special characters in your password?\nOK=Yes\nCancel=No");

// if (passwordCharacterList.length < passwordLength){

// }

function generatePassword() {
    console.log("In generate password function");
    var passwordLength = prompt("How long would you like the password to be?", "Enter a number from 8 to 128."); 
    //Validates password length
    if(passwordLength < 8 || passwordLength > 129) {
        alert("You must choose a valid length for your password")
        console.log("You must choose a valid length for your password");
        passwordLength = false
        return;
    }
    
    //Gets criteria for password
    var upperChars = confirm("Would you like uppercase letters in your password?\nOK=Yes\nCancel=No");
    var lowerChars = confirm("Would you like lowercase letters in your password?\nOK=Yes\nCancel=No");
    var nums = confirm("Would you like numbers in your password?\nOK=Yes\nCancel=No");
    var specialCharacters = confirm("Would you like special characters in your password?\nOK=Yes\nCancel=No");


    // Write password to the #password input
    console.log(passwordLength);
    console.log(typeof passwordLength);
    console.log(upperChars, lowerChars, nums, specialCharacters);
    console.log(typeof upperChars, typeof lowerChars,typeof nums, typeof specialCharacters);

    // Validation

    if (!upperChars && !lowerChars && !nums && !specialCharacters) {
        alert("You must choose at least one character type")
        console.log("You must choose at least one character type");
        return;
    } 
    //if user chooses uppercase letters (add to array)
    if(upperChars) {
        var randomNum = Math.floor(Math.random() * characters.uppercaseLetters.length);
        console.log(randomNum);
        var randomChar = characters.uppercaseLetters[randomNum];
        console.log(randomChar);
        passwordCharacterList = passwordCharacterList + randomChar;
        console.log(passwordCharacterList)
    }
    
    // if user chooses lowercase letters (add to array)
    if(lowerChars) {
        var randomNum = Math.floor(Math.random() * characters.lowercaseLetters.length);
        console.log(randomNum);
        var randomChar = characters.lowercaseLetters[randomNum];
        console.log(randomChar);
        passwordCharacterList = passwordCharacterList + randomChar;
        console.log(passwordCharacterList)
    }
    // if user chooses numbers (add to array)
    if(nums) {
        var randomNum = Math.floor(Math.random() * characters.numbers.length);
        console.log(randomNum);
        var randomChar = characters.numbers[randomNum];
        console.log(randomChar);
        passwordCharacterList = passwordCharacterList + randomChar;
        console.log(passwordCharacterList)
    }
    // if user chooses special characters (add to array)
    if(specialCharacters) {
        var randomNum = Math.floor(Math.random() * characters.specialCharacters.length);
        console.log(randomNum);
        var randomChar = characters.specialCharacters[randomNum];
        console.log(randomChar);
        passwordCharacterList = passwordCharacterList + randomChar;
        console.log(passwordCharacterList);
        return passwordCharacterList;
    }
    //sets the character list for the generate password function
    console.log(passwordCharacterList)

      // here we return the password
   for (passwordCharacterList.length; passwordCharacterList.length < passwordLength.length;); {
        console.log(passwordCharacterList)
    } 
   
}
    // for (passwordCharacterList i = 0; i < passwordLength.length; i++) {
    //     // Create button
    //     var letterBtn = $('<button>');
    //     // Assign style to the button
    //     letterBtn.addClass('letter-button btn btn-info');
    //     // Assign the letter to the data-letter attribute
    //     letterBtn.attr('data-letter', letters[i]);
    //     // Display the letter
    //     letterBtn.text(letters[i]);
    //     // Attach the letter element
    //     buttonListEl.append(letterBtn);
    
    
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Scrapped code storage

// var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
// var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var numbers = "0123456789"
// var specialChars = "!@#$%^&*()"