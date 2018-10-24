const mongoose = require("mongoose");

const comment = new mongoose.Schema({
    content: {
        type: String,
        require: true
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    },
    forum: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'forum'
    }
},{versionKey: false, timestamps: {createAt: "createTime", updateAt: "updateTime"}});

module.exports = mongoose.model("comment", comment);