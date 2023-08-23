const number = 37;

if(number % 2 === 0)
    console.log(`${number} é par.`);
else
    console.log(`${number} é ímpar.`);

if(number === 0)
    console.log(`${number} é nulo.`);
else if(number < 0)
    console.log(`${number} é negativo.`);
else
    console.log(`${number} é positivo.`);

const isEvenOrOdd = (number % 2 === 0) ? (`${number} é par.`) : (`${number} é ímpar.`);

console.log(isEvenOrOdd);

