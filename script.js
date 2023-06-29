// Array of Special Characters to itterate and choose from during password generation
const specialCharacters = [
  '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

// Generate number and letter arrays instead of hard coding characters
const numericCharacters = Array.from({ length: 10 }, (_, i) => i.toString());
const lowerCasedCharacters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97));
const upperCasedCharacters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));


// Function to choose random characters from arrays generated during Array.from() methods
const getRandom = (arr) => {
  const randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
};


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
