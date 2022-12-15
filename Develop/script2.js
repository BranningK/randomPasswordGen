// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperChars = confirm("Would you like uppercase letters in your password?\nOK=Yes\nCancel=No");
var lowerChars = confirm("Would you like lowercase letters in your password?\nOK=Yes\nCancel=No");
var nums = confirm("Would you like numbers in your password?\nOK=Yes\nCancel=No");
var specialCharacters = confirm("Would you like special characters in your password?\nOK=Yes\nCancel=No");
// var passwordLength = prompt("How long would you like the password to be?", "Enter a number from 8 to 128.");

var characters = {
    uppercaseLetters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercaseLetters: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    specialCharacters: '!@#$%^&*()'
}
console.log(characters)

// Write password to the #password input

//should set the character list for the generate password funtion
if (upperChars && lowerChars && nums && specialCharacters) {
    console.log([characters.uppercaseLetters + characters.lowercaseLetters + characters.numbers + characters.specialCharacters])
} else if (upperChars && lowerChars && nums && !specialCharacters) {
    console.log([characters.uppercaseLetters + characters.lowercaseLetters + characters.numbers])
} else if (upperChars && lowerChars && !nums && !specialCharacters){
    console.log([characters.uppercaseLetters + characters.lowercaseLetters])
} else if (upperChars && !lowerChars && !nums && !specialCharacters){
    console.log([characters.uppercaseLetters])
}

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