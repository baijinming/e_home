const express = require('express');
const router = express.Router();
const auth = require('./auth');
const comment = require('../database/model/comment');
const forumModel = require('../database/model/forum')

router.post('/add', auth, async (req, res, next) => {
    try {
        let {content, forum} = req.body;
        let user = req.session.user._id;
        let data = await comment.create({content, user, forum})
        await forumModel.update({_id: forum}, {$push: {comment: data._id}})
        res.json({
            data,
            code: 200,
            msg: 'success'
        })
    }catch (e) {
        next(e)
    }
})

// //获取所有回复
// router.get('/', async (req, res, next) => {
//     try {
//         let {page = 1, size = 10} = req.body;
//         let data = await comment.find().skip((page-1)*size).limit(size).sort({_id: -1})
//             .populate({path: 'user', select: '-pwd'})
//         res.json({
//             data,
//             code: 200,
//             msg: 'success'
//         })
//     }catch (e) {
//         next(e)
//     }
// })

//获取某个讨论的回复
router.get('/:id', async (req, res, next) => {
    try {
        let {page = 1, size = 10} = req.body;
        let {id} =req.params;
        let data = await comment.find({forum: id}).skip((page-1)*size).limit(size).sort({_id: -1})
            .populate({path: 'user', select: '-pwd'})
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