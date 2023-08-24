const mySum = (...args) => {
    let sum = 0;
    args.forEach((number) => sum += number);
    return sum;
}

console.log(mySum(1, 2));
console.log(mySum(1, 2, 3));
console.log(mySum(1, 2, 3, 4));
console.log(mySum(1, 2, 3, 4, 5));
console.log(mySum(1, 2, 3, 4, 5, 6));
