function checkNumber(n){
    return new Promise((resolve, reject) => {
        if(n > 10){
            resolve(`${n} é maior do que 10.`);
        }
        else{
            reject(new Error("Número muito baixo."));
        }
    });
}

const a = checkNumber(2);
const b = checkNumber(10);
const c = checkNumber(35);

a.then((value) => console.log(`O resultado é ${value}`)).catch((error) => console.log(`${error}`));
b.then((value) => console.log(`O resultado é ${value}`)).catch((error) => console.log(`${error}`));
c.then((value) => console.log(`O resultado é ${value}`)).catch((error) => console.log(`${error}`));

/* Promise.all([a, b, c]).then((values) => console.log(values)).catch((error) => console.log(`${error}`)); */
