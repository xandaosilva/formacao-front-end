"use strict";
const listNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const listText = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit"];
const listAux = ["a", "b", "c", 1, 2, 3, "d", "e"];
const objCoordinate = { x: 315, y: 43 };
const value = 35;
const objCoord = { x: 3, y: 4, z: 5 };
const bigNumber = 100000n;
;
function sum(x, y) {
    return x + y;
}
function passCoordinates(coord) {
    console.log(`Coordenada X: ${coord.x} - Coordenada Y: ${coord.y}`);
}
function showNumbers(a, b, c) {
    console.log(`A = ${a}`);
    console.log(`B = ${b}`);
    if (c) {
        console.log(`C = ${c}`);
    }
}
function showCoords(obj) {
    console.log(`X: ${obj.x} - Y: ${obj.y} - Z: ${obj.z}`);
}
function showID(id) {
    console.log(id);
}
setTimeout(() => {
    const sallary = 1000;
    console.log(sallary);
}, 3000);
console.log(listNumber);
console.log(listText);
console.log(listAux);
console.log(sum(2, 3));
console.log(sum(25, 37));
passCoordinates(objCoordinate);
showNumbers(1, 2, 3);
showNumbers(4, 5);
console.log(value);
showCoords(objCoord);
showID(35);
console.log(bigNumber);
