const mongoose = require("mongoose");

const catagory = new mongoose.Schema({
    type: String
},{versionKey: false});

module.exports = mongoose.model("catagory", catagory);