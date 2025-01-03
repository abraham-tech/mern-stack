const mongoose = require('mongoose');

const historySchema = new mongoose.Schema ({
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const ContentHistory = mongoose.mongo("ContentHistory", historySchema);
module.exports = ContentHistory;