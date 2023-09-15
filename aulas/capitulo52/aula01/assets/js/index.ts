const listNumber: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const listText: string[] = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit"];
const listAux: Array<any> = ["a", "b", "c", 1, 2, 3, "d", "e"];
const objCoordinate = {x: 315, y: 43};
const value: string | number = 35;
const objCoord: Point = {x: 3, y: 4, z: 5};
const bigNumber: bigint = 100000n;

interface Point { x: number, y: number, z: number };
type ID = string | number;

function sum(x: number, y: number): number{
    return x + y;
}

function passCoordinates(coord: {x: number, y: number}){
    console.log(`Coordenada X: ${coord.x} - Coordenada Y: ${coord.y}`);
}

function showNumbers(a: number, b: number, c?: number){
    console.log(`A = ${a}`);
    console.log(`B = ${b}`);

    if(c){
        console.log(`C = ${c}`);
    }
}

function showCoords(obj: Point){
    console.log(`X: ${obj.x} - Y: ${obj.y} - Z: ${obj.z}`);
}

function showID(id: ID){
    console.log(id);
}

setTimeout(() => {
    const sallary: number = 1000;
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
