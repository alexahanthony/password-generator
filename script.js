
//DON'T TOUCH THIS CODE! This code is adding click handlers and DOM manipulation to the page.  Edit the generatePassword function and all should work properly.
// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");


////define global variables for password (lower, upper, ^%$, numbers)
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialChar = ['!', '@', '#', '$', '%', '&', '*'];
var sourceArray = [];

//this function will fire when you click the generate password button on the page.  I've set it to alert "You've clicked a button" and return a password of password for now. Update it to make your password
function generatePassword() {

    //welcome the user
    var confirmPassword = confirm("Would you like a randomly generated password?");
    //present user with options 
    if (confirmPassword) {
        var confirmUpperCase = confirm("Should password contain uppercase letters?");
        if (confirmUpperCase) {
            sourceArray = sourceArray.concat(upperCase);
            console.log(sourceArray);
            console.log(confirmUpperCase);
        }
        var confirmLowerCase = confirm("Should password contain lowercase letters?");
        if (confirmLowerCase) {
            sourceArray = sourceArray.concat(lowerCase);
            console.log(sourceArray);
            console.log(confirmLowerCase);
        }
        var confirmNumbers = confirm("Should password contain numbers?");
        if (confirmNumbers) {
            sourceArray = sourceArray.concat(numbers);
            console.log(sourceArray);
            console.log(confirmNumbers);
        }
        var confirmSpecialChar = confirm("Should password contain special characters?");
        if (confirmSpecialChar) {
            sourceArray = sourceArray.concat(specialChar);
            console.log(sourceArray);
            console.log(confirmSpecialChar);
        }
         //if user doesnt select at lease one option, inform user they muse select one option
        if (sourceArray.length < 1) {
            alert("You must select at lease one option")
            return "invalid"
        }

        //select password length... if user doesnt select an option within 8 - 128 characters, inform user they muse type 8 - 128 and bring them back through the selection process again
        var numSelect = prompt("How many characters do you want your password to be? (must be between 8 - 128)");
        var valid = false;
        if (numSelect <= 8) {
            alert("Value must be greater than 8. Please try again.");
            return "invalid"

        }
        else if (numSelect >= 128) {
            alert("Value must be less than 128 characters. Please try again.");
            return "invalid"
        }
        else {
            var passwordArray = []
            //randomly select characters until it is as long as user asked it to be 
            for (i = 0; i < numSelect; i++) {
                passwordArray.push(sourceArray[Math.floor(Math.random() * sourceArray.length)]);
                console.log(passwordArray);
            }
            // Remove commas from final password result using join method
            return passwordArray.join("");
        }
    }
    else {
        alert("OK, no password for you!");
        return "No Password Generated"
    }
    return "invalid"
}

// Write password to the #password input
function writePassword() {
    var password;
    do { 
        password = generatePassword();
    }
    while (password == "invalid")
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
}

function copyToClipboard() {
    var copyText = document.querySelector("#password");
    copyText.select();
    //copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyToClipboard);
