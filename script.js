// // Assignment code here

// conditions to check against for password.  
var upperCase = "abcdefghijklmnopqrstuvwxyz";
var lowerCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialChar = "!, \"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";


// create password
// obtain the conditions for user 

hello = () => {
  return "Hello World!";
}

createPassword = () => {

  alert("Plase select the criteria from the prompts to generate your password");
  var upperCaseSelect = confirm("Do you want any upper case letters in your password?");
  var upperlowerSelect = confirm("Do you want any lower case letters in your password?");
  var numberSelect = confirm("Do you want any numbers in your password");
  var upperCharSelect = confirm("Do you want any special characters in your password");
};

createPassword();


// obtain password length at least 8 characters and no more than 128 characters
var passwordLength = parseInt(prompt("What should be the length of your password", "8-128"));
console.log(passwordLength);

//validate password length

// while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
//   //     passwordLength = parseInt(prompt("Please enter a number between 8 and 128:"));
//   //     console.log("oopsie");
//   //   }

if (passwordLength < 8 || passwordLength > 128 || isNaN) {
  prompt("pleae enter a valid number 8-128");
} else {
  var passwordLength = passwordLength;

};







// var passwordLength = parseInt(prompt("What is the length of your password"));

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


