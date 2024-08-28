const mongoose = require("mongoose");

// Schema -
const blogSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    media: {
        url: {
            type: String,
        },
        type: {
            type: String
        }
    }
})

// Model -
const BlogModel = mongoose.model("blog", blogSchema);

module.exports = BlogModel;