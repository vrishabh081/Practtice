const mongoose = require("mongoose");

// Schema-
const productSchema = mongoose.Schema({
    name : {type: String},
    price : {type: String},
    category : {type: String},
})

// Model-
const ProductModel = mongoose.model("demoproduct", productSchema);

module.exports = ProductModel;