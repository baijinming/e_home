const mongoose = require("mongoose");

const catagory = new mongoose.Schema({
    type: String
},{versionKey: false, timestamps: {createAt: "createTime", updateAt: "updateTime"}});

module.exports = mongoose.model("catagory", catagory);