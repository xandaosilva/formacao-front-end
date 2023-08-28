const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordelement = document.querySelector("#generated-password");

const getLetterLowerCase = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);
const getLetterUpperCase = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65);
const getNumber = () => Math.floor(Math.random() * 10).toString();
const getSymbol = () => {
    const symbols = "(){}[]=<>/,.!@#$%&*+-";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {
    let password = "";
    const passwordLength = 10;
    const generators = [getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol];

    for(let i = 0; i < passwordLength; i += 4){
        generators.forEach(() => {
            const randomValue = generators[Math.floor(Math.random() * generators.length)]();
            password += randomValue;
        });
    }

    password = password.slice(0, passwordLength); 
    generatedPasswordelement.style.display = "block";
    generatedPasswordelement.querySelector("h4").innerText = password;
}

generatePasswordButton.addEventListener("click", () => {
    generatePassword(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol);
});
