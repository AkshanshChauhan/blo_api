const mongoose = require("mongoose");

const bloSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    input1: String,
    input2: String,
    input3: String,
    input4: String,
    input5: String,
    input6: String,
    input7: String,
    input8: String,
    input9: String,
    input10: String,
    input11: String
});

module.exports = mongoose.model('Blo', bloSchema);;
