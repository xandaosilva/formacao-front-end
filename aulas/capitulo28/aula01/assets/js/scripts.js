const personName = "Lorem Ipsum";
const listNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const listA = [1, 2, 3, 4, 5];
const listB = [6, 7, 8, 9, 10];
const listC = [...listA, ...listB];
const listD = [...listC, 11, 12, 13, 14, 15];

console.log(personName);

for(let i = 0; i <= 10; i++){
    console.table(i);
}

const arrowSum = (x, y) => x + y;

const sumA = arrowSum(3, 3), sumB = arrowSum(15, 17), sumC = arrowSum(32, 8);
console.log(sumA, sumB, sumC);

const evenNumber = listNumbers.filter((number) => number % 2 === 0);
console.log(`Os números pares da lista ${listNumbers} são: ${evenNumber}`);

listNumbers.map((number) => console.log(number));

console.log(listA);
console.log(listB);
console.log(listC);
console.log(listD);

