function sayHello(name){
    console.log(`Hello ${name}`);
}

function doubleValue(number){
    return number * 2;
}

const numberX = doubleValue(2);

const sum = (x, y) => x + y;
const subtract  = (x, y) => x - y;


sayHello("Alexandre");
sayHello("Teste");
console.log(numberX);
console.log(sum(3, 3));
console.log(subtract(10, 7));
