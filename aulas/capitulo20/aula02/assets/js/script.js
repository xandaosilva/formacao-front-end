function checkNumber(number){
    const result = Number(number);
    if(Number.isNaN(result)){
        return false;
    }
    return true;
}

console.log(checkNumber("a"));
console.log(checkNumber(38));

const x = 30;

if(x !== 30){
    throw new Error(`O valor informado tem que ser igual a 25`);
}

try {
    const value = checkNumber("abc");
    if(!value){
        throw new Error("Valor inválido.");
    }
} catch (error) {
    console.log(`${error}`);
} finally {
    console.log("Código executado com sucesso.");
}

