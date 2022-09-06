// Assignment Code
let generateBtn = document.querySelector("#generate");

let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let UpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numCase = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialCase = ["!", "@", "#", "$", "%", "^", "&", "*", "(",];
let comboArray = [];

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
  comboArray = [];
}
//this function is what generates how long the password will be, if the value isn't between 8-128 the function will be ran again.
function getPasswordLength() {
  let amountCharacters = window.prompt("how many charcters would you like to include 8-128");
  if (amountCharacters > 128 || amountCharacters < 8) {
    window.alert("password must be between 8-128 characters");
    return getPasswordLength()
  }
  return Number.parseInt(amountCharacters);

}
//These functions make the pop up windows then run that code if its needed, disregards it if its not.
function getLowerCase() {
  let lowerChoice = window.confirm("Do you want lowercase letters included")
  if (lowerChoice) {
    return lowerChoice
  }
  return null;
}

function getUpperCase() {
  let upperChoice = window.confirm("do you want uppercase letters included");
  if (upperChoice) {
    return upperChoice
  }
  return null;
}

function getNumCase() {
  let numChoice = window.confirm("do you want numbers included");
  if (numChoice) {
    return numChoice
  }
  return null;
}

function getSpecialCase() {
  let specialChoice = window.confirm("do you want special characters included");
  if (specialChoice) {
    return specialChoice
  }
  return null;
}

//this functions puts everything together.
function generatePassword() {

  let password = "";
  let passwordLength = getPasswordLength()
  let hasLowerCase = getLowerCase()
  let hasuppercase = getUpperCase()
  let hasNumCase = getNumCase()
  let hasSpecialCase = getSpecialCase()

  
  if (hasLowerCase) {
       comboArray = comboArray.concat(lowerCase)
    
    }if(hasuppercase){
      comboArray = comboArray.concat(UpperCase)
    
    }if(hasSpecialCase){
      comboArray = comboArray.concat(specialCase)
    
    }if(hasNumCase){
      comboArray = comboArray.concat(numCase)
    }
    
    for (let i = 0; i < passwordLength; i++) {
      //these lines take a value 0-_ from the array and give it a value based on the array
      let randomNumber = Math.floor(Math.random() * comboArray.length)
      let randomLetter = comboArray[randomNumber]
      password += randomLetter;
      
      
  

}
return password;
}


generateBtn.addEventListener("click", writePassword);
