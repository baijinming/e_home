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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    catagory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'catagory'
    }
},{versionKey: false});

module.exports = mongoose.model("news", news)