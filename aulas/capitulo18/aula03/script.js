const listA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < listA.length; i++){
    console.log(`${listA[i]} * ${2} = ${listA[i] * 2}`);
}

for(let i = 0; i < listA.length; i++){
    console.log(`\nTabela dos elementos da lista multiplicados`);
    for(let j = 0; j < listA.length; j++){
        console.log(`${listA[i]} * ${j} = ${listA[i] * j}`);
    }
}

listA.forEach((number) => console.log(`${number} * ${2} = ${number * 2}`));
