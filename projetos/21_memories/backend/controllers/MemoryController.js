const Memory = require("../models/Memory");

const createMemory = async(req, res) => {
    res.json("Operação realizada com sucesso.");
};

module.exports = { createMemory };
