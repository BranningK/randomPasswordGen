// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = confirm("Would you like special characters in your password?")
var passwordLength = prompt("How long would you like the password to be?")
var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialChars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"

console.log(passwordLength)
console.log(specialCharacters)

function generatePassword(){
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * passwordLength);
    password += chars.substring(randomNumber, randomNumber +1);
   }
}
//maybe need to rewrite the function inside of the if else
if (specialCharacters === true){
  console.log(specialChars);
} else {
  console.log(chars);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
