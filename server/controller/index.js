const express = require('express');
const router = express.Router();
const token = require("../config/upload");

router.use('/user', require('./user'));
router.use('/news', require('./news'));
router.use('/catagory', require('./catagory'));
router.use('/swiper', require('./swiper'));
router.use('/forum', require('./forum'));
router.use('/comment', require('./comment'));

router.get("/get", (req, res) => {
    res.json({
        data: token(),
        code: 200,
        msg: 'success'
    })
})

module.exports = router;