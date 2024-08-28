// Import -
const mongoose = require("mongoose");

// Schema -
const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String
    },
    address: {
        type: String
    },
    index: {
        type: String
    }
})

// Indexing -
userSchema.index({name: "text", address: "text"})

// Model -
const UserModel = mongoose.model("user", userSchema);

// Export -
module.exports = UserModel;