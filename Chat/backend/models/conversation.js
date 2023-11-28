// Import-
const mongoose = require("mongoose");


// Schema-
const conversationSchema = mongoose.Schema({
    members: {
        type: Array,
        required: true
    },
}, {timestamps: true})


// Model-
const ConversationModel = mongoose.model("conversation", conversationSchema);


// Export-
module.exports = ConversationModel;