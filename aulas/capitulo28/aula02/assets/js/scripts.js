class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    productWithDiscount(discount){
        return this.price * ((100 - discount) / 100);
    }
}

class ProductWithAttributes extends Product{
    constructor(name, price, colors){
        super(name, price);
        this.colors = colors;
    }

    showColors(){
        console.log("As cores são:");
        this.colors.forEach((color) => {
            console.log(color);
        });
    }
}

const prodA = new Product("Monitor", 1200);
const prodB = new ProductWithAttributes("Monitor", 1200, ["Azul", "Branco", "Verde"]);

console.log(prodA);
console.log(prodA.productWithDiscount(10));
console.log(prodA.productWithDiscount(15));

console.log(prodB);
prodB.showColors();

