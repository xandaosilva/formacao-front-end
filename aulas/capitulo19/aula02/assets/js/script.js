const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const optional = true;
const list = [];
const obj = {
    value: "teste"
}

console.log(Object.getPrototypeOf(text));
console.log(Object.getPrototypeOf(optional));
console.log(Object.getPrototypeOf(list));
console.log(Object.getPrototypeOf(obj) === Object.prototype);
