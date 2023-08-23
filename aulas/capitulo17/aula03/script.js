const multiplicationClosure = (n) => {
    return (m) => {
        return m * n;
    };
};

const a = multiplicationClosure(5);
const b = multiplicationClosure(10);

console.log(a(100));
console.log(b(100));
