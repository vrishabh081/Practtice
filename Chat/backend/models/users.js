// Import-
const mongoose = require("mongoose");


// Schema-
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
}, {timestamps: true})


// Model-
const UserModel = mongoose.model("user", userSchema);


// Export-
module.exports = UserModel;