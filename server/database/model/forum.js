const mongoose = require("mongoose");

const forum = new mongoose.Schema({
    content: {
        type: String,
        require: true
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    },
    comment: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'comment'
        }
    ]
},{versionKey: false, timestamps: {createAt: "createTime", updateAt: "updateTime"}});

module.exports = mongoose.model("forum", forum);