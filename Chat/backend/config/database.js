const mongoose = require("mongoose");

const dbConnection = mongoose.connect("mongodb+srv://rishabhvishwakarma398:rishabhvishwakarma398@cluster0.qjcsyml.mongodb.net/chat");

module.exports = dbConnection;