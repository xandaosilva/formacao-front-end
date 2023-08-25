const listItems = document.getElementsByTagName("li");
const title = document.getElementById("title");
const products = document.getElementsByClassName("product");
const productsQuery = document.querySelectorAll(".product");
const mainContainer = document.querySelector("#main-container");
const paragraph = document.createElement("p");
const header = title.parentElement;
const navLinks = document.querySelector("nav ul");
const itemsLi = document.createElement("li");
const titleH2 = document.createElement("h2");
const text = document.createTextNode("Adicionando mais um título na página.");
const titleH3 = document.createElement("h3");
const firstLink = document.querySelector("a");
let linkContent;
const footer = document.querySelector("footer");
const footerWidth = footer.offsetWidth;
const footerHeight = footer.offsetHeight;
const footerClientWidth = footer.clientWidth;
const footerClientHeight = footer.clientHeight;
const product1 = products[0];

header.insertBefore(paragraph, title);
navLinks.appendChild(itemsLi);
titleH2.textContent = "Meu novo título";
header.replaceChild(titleH2, title);
titleH3.appendChild(text);
mainContainer.appendChild(titleH3);
firstLink.setAttribute("href", "https://www.google.com");
firstLink.setAttribute("target", "_blank");
linkContent = firstLink.getAttribute("href");
mainContainer.style.color = "darkcyan";
mainContainer.style.backgroundColor = "#ccc";

for(const li of listItems){
    li.style.backgroundColor = "#bbb";
}

console.log(document.body);
console.log(document.body.childNodes);
console.log(listItems);
console.log(title);
console.log(products);
console.log(productsQuery);
console.log(mainContainer);
console.log(paragraph);
console.log(text);
console.log(titleH3);
console.log(firstLink);
console.log(linkContent);
console.log(footerWidth);
console.log(footerHeight);
console.log(footerClientWidth);
console.log(footerClientHeight);
console.log(product1.getBoundingClientRect());
