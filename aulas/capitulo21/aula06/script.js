async function sumWithdelay(x, y){
    return x + y;
}

sumWithdelay(3, 7).then((value) => console.log(`O valor da soma é ${value}`)).catch((error) => console.log(`${error}`));
sumWithdelay(8, 25).then((value) => console.log(`O valor da soma é ${value}`)).catch((error) => console.log(`${error}`));
sumWithdelay(13, 17).then((value) => console.log(`O valor da soma é ${value}`)).catch((error) => console.log(`${error}`));
