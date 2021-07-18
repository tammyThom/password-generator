// // Assignment code here

// conditions to check against for password.  
var upperCase = "abcdefghijklmnopqrstuvwxyz";
var lowerCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialChar = "!, \"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";


// create password
// obtain the conditions from user 


function generatePassword() {

  while (!upperCaseSelect && !lowerCaseSelect && !numberSelect && !specialchars) {
    window.alert("Plase select the criteria from the prompts to generate your password.");
    var upperCaseSelect = confirm("Do you want any upper case letters in your password?");
    var lowerCaseSelect = confirm("Do you want any lower case letters in your password?");
    var numberSelect = confirm("Do you want any numbers in your password");
    var charSelect = confirm("Do you want any special characters in your password");
  }


  // obtain password length at least 8 characters and no more than 128 characters
  var passwordLength = parseInt(prompt("What should be the length of your password", "8-128"));
  console.log(passwordLength);

  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = prompt("pleae enter a valid number.  Any number between 8-128");

  }

  // if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
  //   prompt("pleae enter a valid number 8-128");
  // } else {
  //   var passwordLength = passwordLength;

  // };

  //creating the password

  var newPword = [];
  var newPwordStng = "";

  if (upperCaseSelect) newPwordStng = newPwordStng.concat(upperCase);
  if (lowerCaseSelect) newPwordStng = newPwordStng.concat(lowerCase);
  if (numberSelect) newPwordStng = newPwordStng.concat(numbers);
  if (charSelect) newPwordStng = newPwordStng.concat(specialChar);

  while (newPword.length < passwordLength) {
    var specialchars = newPwordStng[Math.floor(Math.random() * newPwordStng.length)];
    newPword.push(specialchars);
  }
  var joinPass = newPword.join("");
  return joinPass;
}



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


