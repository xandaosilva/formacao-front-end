let numberX = 0;
let numberY = 10;
let day = 6;
let dayOfTheWeek = "";

while(numberX < 10){
    console.log(numberX);
    numberX++;
}

do{
    console.log(numberX);
    numberX--;
}while(numberX >= 0);

for(let i = 0; i <= 10; i++){
    console.log(`${numberY} * ${i} = ${numberY * i}`);
}

switch (day) {
    case 1:
        dayOfTheWeek = "Domingo";
        break;
    case 2:
        dayOfTheWeek = "Segunda";
        break;
    case 3:
        dayOfTheWeek = "Terça";
        break;
    case 4:
        dayOfTheWeek = "Quarta";
        break;
    case 5:
        dayOfTheWeek = "Quinta";
        break;
    case 6:
        dayOfTheWeek = "Sexta";
        break;
    case 7:
        dayOfTheWeek = "Sábado";
        break;
    default:
        dayOfTheWeek = "Dia inválido";
        break;
}

console.log(dayOfTheWeek);
