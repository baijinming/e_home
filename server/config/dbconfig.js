const  mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/e_home");

const db = mongoose.connection;
db.once("open",()=> {
    console.log("successful connected")
});

module.exports = db;