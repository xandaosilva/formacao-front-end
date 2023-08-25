const prom = Promise.resolve(18 + 12);

console.log("Início");

prom.then((value) => {
    console.log("Valor inicial: " + value);
    return value;
}).then((value) => value - 1).then((value) => console.log(`Valor atualizado: ${value}`));

console.log("Final");

