const express = require('express');
const router = express.Router();
const token = require("../config/upload");

router.use('/user', require('./user'));

router.get("/get", (req, res) => {
    res.json({
        data: token(),
        code: 200,
        msg: 'success'
    })
})

module.exports = router;