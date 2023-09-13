const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

async function main(){
    await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.g5klc4n.mongodb.net/?retryWrites=true&w=majority`);
    console.log("Conectado ao banco.");
}

main().catch((error) => console.log(error));

module.exports = main;
