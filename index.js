const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
"P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h",
"i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0",
"1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&",
"*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let passwordLength = 15;
let passOne = document.getElementById("passwordOne");
let passTwo = document.getElementById("passwordTwo");

function getRandomPassword(characters, passwordLength) {
    let randomPassword = "";
    for (let i= 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        randomPassword += characters[randomIndex];
    }
    return randomPassword;
}

function generatePassword() {
    let randomPassword1 = getRandomPassword(characters, passwordLength);
    let randomPassword2 = getRandomPassword(characters, passwordLength);
    passOne.textContent = randomPassword1;
    passTwo.textContent = randomPassword2;
}