// Import-
const mongoose = require("mongoose");


// Schema-
const messageSchema = mongoose.Schema({
    conversationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "conversation",
        required: true
    },
    message: {
        type: String,
        required: true
    },
    messageType: {
        type: String,
        required: true,
        enum: ["text", "image", "video", "file"]
    },
}, {timestamps: true})


// Model-
const MessageModel = mongoose.model("message", messageSchema);


// Export-
module.exports = MessageModel;