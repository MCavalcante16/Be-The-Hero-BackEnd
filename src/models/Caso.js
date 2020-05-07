const mongoose = require("mongoose");

const CasoSchema = new mongoose.Schema({
    title: String,
    description: String,
    value: Number,
    ong: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ong'
    }
})

module.exports = mongoose.model("Caso", CasoSchema);