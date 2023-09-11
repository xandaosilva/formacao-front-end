const mongoose = require("mongoose");

async function main(){
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect("mongodb+srv://rogerioalexandre22:G4y6qYWbRNoCHg7C@cluster0.ezvr0xo.mongodb.net/?retryWrites=true&w=majority");
        console.log("Conectado ao banco");
    } catch (error) {
        console.log(error);
    }
}

module.exports = main;
