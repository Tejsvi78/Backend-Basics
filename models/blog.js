const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
    {
        writter: {
            type: String,
            required: true,
            maxlength: 20,
            trim: true,
        },
        title: {
            type: String,
            required: true,
            maxlength: 50,
        },
        content: {
            type: String,
            required: true,
        },
        uploadedAt: {
            type: Date,
            default: Date.now(),
            required: true,
        },
        updatedAt: {
            type: Date,
            default: Date.now(),
            required: true,
        }

    }
)

module.exports = mongoose.model("Blog", blogSchema);