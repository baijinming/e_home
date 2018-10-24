const express = require('express');
const router = express.Router();
const auth = require('./auth');
const forum = require('../database/model/forum')

router.post('/add', auth, async (req, res, next) => {
    try {
        let {content} = req.body;
        let user = req.session.user._id;
        let data = await forum.create({content, user});
        res.json({
            data,
            code: 200,
            msg: 'success'
        })
    }catch (e) {
        next(e)
    }
})

router.get('/', async (req, res, next) => {
    try {
        let { page = 1, size = 10} = req.body;
        let data = await forum.find().skip((page-1)*size).limit(size).sort({_id: -1})
            .populate({path: 'user', select: '-pwd'})
            .populate({path: 'comment'})
        res.json({
            data,
            code: 200,
            msg: 'success'
        })
    }catch (e) {
        next(e)
    }
})

module.exports = router