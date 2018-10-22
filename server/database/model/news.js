const mongoose = require("mongoose");

const news = new mongoose.Schema({

},{versionKey: false});

module.exports = mongoose.model("", news)