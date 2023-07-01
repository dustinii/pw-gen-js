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

const getPasswordOptions = () => {
  let length = parseInt(prompt('How many characters would you like your password to contain?'), 10);

  // DUSTIN, put in try catch block later to handle errors properly
  const checkLength = (limit, message) => {
    if (length === limit) {
      alert(message);
      return false;
    }
    return true;
  };

  if (Number.isNaN(length) || !checkLength(8, 'Password length must be at least 8 characters') || !checkLength(128, 'Password length must less than 129 characters')) {
    return null;
  }

  // Store user preferences in an object
  let passwordOptions = {
    length,
    hasSpecialCharacters: confirm('Click OK if you want to include special characters.'),
    hasNumericCharacters: confirm('Click OK if you want to include numeric characters.'),
    hasLowerCasedCharacters: confirm('Click OK if you want to include lowercase characters.'),
    hasUpperCasedCharacters: confirm('Click OK OK if you want to include uppercase characters.'),
  };

  // Check if user selected at least one character type
  if (Object.values(passwordOptions).slice(1).every(option => option === false)) {
    alert('Must select at least one character type');
    return null;
  }

  return passwordOptions;
};

const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
