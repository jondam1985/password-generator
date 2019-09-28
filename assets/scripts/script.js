function passwordGenerator() {

    let passwordLength;

    while (passwordLength === null || (typeof passwordLength != "number") || passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        passwordLength = parseInt(window.prompt("Please select the number of characters for your password. It must be between 8 and 128"));
        console.log(passwordLength);
        if (passwordLength === null || (typeof passwordLength != "number") || passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) { 
            window.alert("Value not valid, please enter a number between 8 and 128. Click OK to try again");
        }
    }

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

    let max = baseStringPassword.length - 1;
    let randomNumber = Math.random();
    let index = Math.floor(randomNumber * max);
    let password = baseStringPassword.charAt(index);

    for (let i = 1; i < passwordLength; i++) {
        randomNumber = Math.random();
        index = Math.floor(randomNumber * max);
        console.log(index);
        password+= baseStringPassword.charAt(index);
        //console.log(baseStringPassword[index]);
    } 

    document.getElementById("password-area").innerHTML=password;

    let copyButton = document.getElementById("copy");
    copyButton.disabled = false;

    return console.log(password);
}

function copy() {
    let copyPassword = document.getElementById("password-area");
    copyPassword.select();
    copyPassword.setSelectionRange(0, 9999);
    document.execCommand("copy");
    window.alert("Password copied to clipboard");
}