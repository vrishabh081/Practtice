const mongoose = require("mongoose");

// Schema-
const productSchema = mongoose.Schema({
    name : {
        type: String,
        required: [true, "A tour must have a name"],
        unique: true,
        trim: true
    },
    duration : {
        type: Number,
        required: [true, "A tour must have a duration"]
    },
    maxGroupSize : {
        type: Number,
        required: [true, "A tour must have a group size"]
    },
    difficulty : {
        type: String,
        required: [true, "A tour must have a difficulty"]
    },
    ratingsAverage : {
        type: Number,
        default: 4.5
    },
    ratingsQuantity : {
        type: Number,
        deafult: 0
    },
    price : {
        type: Number,
        required: [true, "A tour must have a price"]
    },
    priceDiscount : {
        type: Number
    },
    summery : {
        type: String,
        trim: true
    },
    imageCover : {
        type: String,
        required: [true, "A tour must have a cover image"]
    },
    images : {
        type: [String],
    },
    createdAt : {
        type: Date,
        default: Date.now()
    },
    startDates : {
        type: [Date]
    },
})

// Model-
const ProductModel = mongoose.model("demoproduct", productSchema);

module.exports = ProductModel;