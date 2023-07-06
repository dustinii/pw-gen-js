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

  if (Number.isNaN(length) || !checkLength(7, 'Password length must be at least 8 characters') || !checkLength(128, 'Password length must less than 129 characters')) {
    return null;
  }

  // Store user preferences in an object
  let passwordOptions = {
    length,
    hasSpecialCharacters: confirm('Click OK if you want to include special characters. If not, click Cancel.'),
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

const generatePassword = () => {
  const options = getPasswordOptions();
  let result = [];

  let possibleCharacters = [];
  let guaranteedCharacters = [];
  
    if (!options) return null;

  if (options.hasSpecialCharacters) {
    possibleCharacters = [...possibleCharacters, ...specialCharacters];
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.hasNumericCharacters) {
    possibleCharacters = [...possibleCharacters, ...numericCharacters];
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.hasLowerCasedCharacters) {
    possibleCharacters = [...possibleCharacters, ...lowerCasedCharacters];
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  if (options.hasUpperCasedCharacters) {
    possibleCharacters = [...possibleCharacters, ...upperCasedCharacters];
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  for (let i = 0; i < options.length; i++) {
    let possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);
  }

  for (let i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }
  return result.join('');
};

const generateBtn = document.querySelector('#generate');

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
