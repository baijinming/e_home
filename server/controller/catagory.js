const express = require('express');
const router = express.Router();
const catagory = require('../database/model/catagory')

router.get('/', (req, res, next) => {
    catagory.find().then(data => {
        res.json({
            data,
            code: 200,
            msg: 'success'
        })
    }).catch(err => {
        next(err)
    })
})

module.exports = router;