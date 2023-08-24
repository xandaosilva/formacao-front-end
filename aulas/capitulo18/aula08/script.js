const person = {
    firstName: "Maria",
    lastName: "Júlia",
    age: 26,
};
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const { firstName, lastName, age } = person;
const [ firstNumber, secondNumber, thirdNumber ] = list;

console.log(firstName);
console.log(firstNumber, secondNumber, thirdNumber);
