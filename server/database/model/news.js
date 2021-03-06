const mongoose = require("mongoose");

const news = new mongoose.Schema({
    header: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    content: String,
    contentText: String,
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
    },
    catagory: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'catagory'
    }
},{versionKey: false, timestamps: {createAt: "createTime", updateAt: "updateTime"}});

module.exports = mongoose.model("news", news)