const listA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const listB = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "c"];
const listC = listB.slice(0, 3);

listA.push(11);
console.log(listA);
listA.pop();
console.log(listA);

listA.shift();
console.log(listA);
listA.unshift(1);
console.log(listA);

console.log(listB.indexOf("d"));
console.log(listB.indexOf("c"));
console.log(listB.lastIndexOf("c"));
console.log(listC);
console.log(listB.includes("z"));
console.log(listB.includes("a"));
console.log(listA.reverse());
