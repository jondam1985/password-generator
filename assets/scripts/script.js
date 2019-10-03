//This function records the number of characters selected by the user.
//It validates that value is a positive integer between 0 and 128 inclusive.

const numChars = () => {
    let passwordLength = parseInt(window.prompt("Please select the number of characters for your password. It must be between 8 and 128"));
    if (passwordLength === null || (typeof passwordLength != "number") || passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) { 
        window.alert("Value not valid, please enter a number between 8 and 128. Click OK to try again");
    }
    //console.log(passwordLength);
    while (passwordLength === null || (typeof passwordLength != "number") || passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        passwordLength = parseInt(window.prompt("Please select the number of characters for your password. It must be between 8 and 128"));
        //console.log(passwordLength);
        if (passwordLength === null || (typeof passwordLength != "number") || passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) { 
            window.alert("Value not valid, please enter a number between 8 and 128. Click OK to try again");
        }
    }
    //console.log(passwordLength);
    return passwordLength;
}

//This function generates the string of characters that will be used to generate the password given the user's choices

const typeOfChars = () => {
    let lowerCaseChars = "abcdefghijklmnopqrstuv";
    let upperCaseChars = lowerCaseChars.toUpperCase();
    let numbers = "0123456789";
    let specialChars = "!@#$%^&*";
    let typeLower;
    let typeUpper;
    let typeNumbers;
    let typeSpecial;
    let baseStringPassword = " ";
    let i = 0;

    window.alert("Now you will select what type of characters you want in your password. Please select at least one. Click OK to continue");
    while (i === 0) {
        typeLower = window.confirm("Do you want your password to contain lower case characters?");
        if (typeLower) {
            baseStringPassword+=lowerCaseChars;
            i+=1;
            //console.log(baseStringPassword);
        }
        typeUpper = window.confirm("Do you want your password to contain upper case characters?");
        if (typeUpper) {
            baseStringPassword+=upperCaseChars;
            i+=1;
            //console.log(baseStringPassword);
        }
        typeNumbers = window.confirm("Do you want your password to contain numbers?");
        if (typeNumbers) {
            baseStringPassword+=numbers;
            i+=1;
            //console.log(baseStringPassword);
        }
        typeSpecial = window.confirm("Do you want your password to contain special characters?");
        if (typeSpecial) {
            baseStringPassword+=specialChars;
            i+=1;
            //console.log(baseStringPassword);
        }
        if (i === 0) {
            window.alert("You didn't select any of the previous options. Click OK to try again");
        }
        baseStringPassword = baseStringPassword.trimStart();
        //console.log(baseStringPassword);
    }
    return baseStringPassword;
}

//This function generates a random number between 0 and a given number

const randomNumber = (number) => {
    let randomResult = Math.floor(Math.random() * number);
    return randomResult;
}

//This function generates a random password given the values passed by the user. 
//The pasword is presented in the text area.
//The COPY button becomes active after the password has been generated.

const passwordGenerator = (length, characters) => {
    let max = characters.length;
    let random = randomNumber(max);
    let password = characters.charAt(random);
    //console.log(random);
    for (let i = 1; i < length; i++) {
        random = randomNumber(max);
        password+=characters.charAt(random);
        //console.log(random);
    }

    return password;
}

//This function collects the user input and generates a random password.
//It writes the generated password in the text area.
//The copy button becomes active.
const generatePassword = () => {
    let length = numChars();
    //console.log(length);
    let characters = typeOfChars();
    //console.log(characters);
    let generatedPassword = passwordGenerator(length, characters);
    //console.log(length);
    //console.log(characters);
    //console.log(generatedPassword);

    document.getElementById("passwordArea").innerHTML=generatedPassword;

    let copyButton = document.getElementById("copyButton");
    copyButton.disabled = false;

    return generatedPassword;
}

//This funciton copies the contect of the text area (password area) to the clipboard.
const copy = () => {
    let copyPassword = document.getElementById("passwordArea");
    copyPassword.select();
    copyPassword.setSelectionRange(0, 9999);
    document.execCommand("copy");
    window.alert("Password copied to clipboard");
}

document.getElementById("passwordButton").addEventListener("click", generatePassword);
document.getElementById("copyButton").addEventListener("click", copy);
