const mongoose = require("mongoose");

const chapterSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },

        content: {
            type: String,
            default: ""
        },

        userId: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Chapter", chapterSchema);