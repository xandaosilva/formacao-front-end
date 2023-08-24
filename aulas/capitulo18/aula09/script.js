const people = '{ "name": "John Doe", "age": 32, "department": "Sales", "salary": 45000 }';
const objA = JSON.parse(people);

console.log(typeof objA, objA);
const strA = JSON.stringify(people);
console.log(people);
