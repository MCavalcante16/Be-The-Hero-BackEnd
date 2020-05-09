const mongoose = require("mongoose");

const OngSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    whatsapp: String,
    city: String,
    uf: String
})

module.exports = mongoose.model("Ong", OngSchema);