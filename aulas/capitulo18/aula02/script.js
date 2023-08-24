const person = { name: "Alexandre", age: 30, profession: "Developer" };
const objA = { a: "teste", b: true };
const objB = { c: [] };
const objC = { name: "Teste" };
const objD = objC;

person.document = "abcde12345";
Object.assign(objB, objA);

console.log(person);

delete person.document;

console.log(person);
console.log(objA);
console.log(objB);
console.log(Object.keys(person));
console.log(Object.keys(objA));
console.log(Object.keys(objB));
console.log(objC);
console.log(objD);
