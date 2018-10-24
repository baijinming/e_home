const mongoose = require("mongoose");

const swiper = new mongoose.Schema({
    title: {
      type: String,
      require: true
    },
    img: {
        type: String,
        require: true
    },
    newsId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'news',
        require: true
    },
    type: {
        type: String,
        default: '1'    // 1为显示，0为不显示
    }
},{versionKey: false, timestamps: {createAt: "createTime", updateAt: "updateTime"}});

module.exports = mongoose.model("swiper", swiper);