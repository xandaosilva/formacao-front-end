const numberSquared = (x) => Math.pow(x, 2);

const multiplicationTable = () => {
    for(let i = 0; i <= 10; i++){
        console.log(numberSquared(i));
    }    
}

multiplicationTable();