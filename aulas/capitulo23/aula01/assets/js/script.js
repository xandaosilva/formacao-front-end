const firstBtn = document.querySelector("#my-button");
const secondBtn = document.querySelector("#btn");
const thirdBtn = document.querySelector("#other-btn");
const myTitle = document.querySelector("#my-title");
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");
const link = document.querySelector("a");
const mouseEvents = document.querySelector("#mouse");
const myInput = document.querySelector("#my-input");

function printMessage(){
    console.log("Teste");
}

firstBtn.addEventListener("click", function(){
    console.log("CLicou no botão.");
});

secondBtn.addEventListener("click", printMessage);

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido");
    secondBtn.removeEventListener("click", printMessage);
});

myTitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.target);
});

containerBtn.addEventListener("click", () => console.log("Evento 1"));

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Evento 2");
});

link.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Você tentou acessar o site da Google");
});

document.addEventListener("keyup", (e) => console.log(`Soltou a tecla: ${e.key}`));
document.addEventListener("keydown", (e) => console.log(`Apertou a tecla: ${e.key}`));
mouseEvents.addEventListener("mousedown", () => console.log("Pressionou o botão do mouse"));
mouseEvents.addEventListener("mouseup", () => console.log("Soltou o botão do mouse"));
mouseEvents.addEventListener("dblclick", () => console.log("Duplo click no botão do mouse"));
document.addEventListener("mousemove", (e) => console.log(`Eixo X: ${e.x} - Eixo Y: ${e.y}`));

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 200){
        console.log("Passamos de 200px");
    }
});

myInput.addEventListener("focus", () => console.log("Está no input"));
myInput.addEventListener("blur", () => console.log("Saiu do input"));
window.addEventListener("load", () => console.log("A página carregou."));

const debounce = (f, delay) => {
    let timeout;

    return (...arguments) => {
        if(timeout){
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            f.apply(arguments);
        }, delay);
    };
};

window.addEventListener("mousemove", debounce(() => {
        console.log("Executando a cada 400ms"); 
    }, 400)
);
