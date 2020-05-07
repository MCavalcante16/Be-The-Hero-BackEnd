const mongoose = require("mongoose");

const CasoSchema = new mongoose.Schema({
    id: { type: Number, unique: true, min: 1 },
    title: String,
    description: String,
    value: Number,
    ong: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ong'
    }
})

module.exports = mongoose.model("Caso", CasoSchema);