const untilTen = (n, m) => {
    if(n < 10){
        console.log(`A função terminou.`);
    }
    else{
        const x = n - m;
        console.log(x);
        untilTen(x, m);
    }
}

const factorial = (x) => {
    if(x === 0){
        return 1;
    }
    else{
        return x * factorial(x - 1);
    }
}

untilTen(20, 5);

const a = 4, b = 6, c = 10, d = 5, e = 7;

console.log("\nCálculo de fatoriais\n");
console.log(`O fatorial de ${a} é: ${factorial(a)}`);
console.log(`O fatorial de ${b} é: ${factorial(b)}`);
console.log(`O fatorial de ${c} é: ${factorial(c)}`);
console.log(`O fatorial de ${d} é: ${factorial(d)}`);
console.log(`O fatorial de ${e} é: ${factorial(e)}`);
