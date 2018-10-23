const express = require('express');
const router = express.Router();
const news = require('../database/model/news');
const auth = require('./auth')

//添加新闻接口
router.post('/add', auth, (req, res, next) => {
    let {header, title, content, contentText, author, catagory} = req.body;
    if (!author){
        author = req.session.user._id
    }
    news.create({header, title, content, contentText, author, catagory}).then(data => {
        res.json({
            code: 200,
            data,
            msg: 'success'
        })
    }).catch(err => {
        next(err)
    })
});

//获取新闻列表
router.get('/', (req, res, next) => {
    let {page = 1, size = 10} = req.body;
    news.find().skip((page-1)*size).limit(size).sort({_id: -1})
        .populate({path: 'author', select: {pwd: 0,level: 0,isCanLogin: 0}})
        .populate({path: 'catagory'})
        .then(data => {
            res.json({
                data,
                code: 200,
                msg: 'success'
            })
        }).catch(err =>{
            next(err)
    })
})

//获取单条新闻
router.get('/:id', (req, res, next) => {
    let {id} = req.params;
    news.findOne({_id: id})
        .populate({path: 'author', select: {pwd: 0,level: 0,isCanLogin: 0}})
        .populate({path: 'catagory'})
        .then(data => {
            res.json({
                data,
                code: 200,
                msg: 'success'
            })
        }).catch(err =>{
        next(err)
    })
})

//删除单条新闻
router.delete('/:id', (req, res, next) => {
    let {id} = req.params;
    news.remove({_id: id}).then(data => {
        res.json({
            code: 200,
            msg: '删除成功'
        })
    })
})

module.exports = router