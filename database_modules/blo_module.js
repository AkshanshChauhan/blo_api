const mongoose = require("mongoose");

const bloSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    input1: String,
    input2: String,
    input3: Number,
    input4: String,
    input5: String,
    input6: Number,
    input7: String,
    input8: Number,
    input9: Number,
    input10: Number,
    input11: Number
});

module.exports = mongoose.model('Blo', bloSchema);;
