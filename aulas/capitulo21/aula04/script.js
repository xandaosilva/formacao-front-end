Promise.resolve(4 * "abc").then((n) => {
    if(Number.isNaN(n)){
        throw new Error("Valores inválidos.");
    }
}).catch((error) => console.log(`${error}`));

