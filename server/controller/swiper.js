const express = require('express');
const router = express.Router();
const auth = require('./auth');
const swiper =require('../database/model/swiper')

//添加轮播图
router.post('/add',auth, async (req, res, next) => {
     try {
         let { title, img, newsId, type } = req.body;
         let data = await swiper.create({ title, img, newsId, type });
         res.json({
             data,
             code: 200,
             msg: 'success'
         })
     }catch (e) {
         next(e)
     }
});

//获取轮播图列表
router.get('/',async (req, res, next) => {
    try {
        let {page = 1, size = 10} = req.body;
        let count = await swiper.count();
        let data = await swiper.find().skip((page-1)*size).limit(size).sort({_id: -1}).populate({path: 'newsId'});
        res.json({
            count,
            data,
            code: 200,
            msg: 'success'
        })
    }catch (e) {
        next(e)
    }
})

//获取某个轮播图
router.get('/:id',async (req, res, next) => {
    try {
        let {id} = req.params;
        let data = await swiper.find({_id: id});
        res.json({
            data: data[0],
            code: 200,
            msg: 'success'
        })
    }catch (e) {
        next(e)
    }
})

//删除单个轮播图
router.delete('/:id',auth, async (req, res, next) => {
    try {
        let {id} = req.params;
        let data = await swiper.remove({_id: id});
        res.json({
            data,
            code: 200,
            msg: 'success'
        })
    }catch (e) {
        next(e)
    }
})

//修改单个轮播图
router.put('/:id',auth, async (req, res, next) => {
    try {
        let { title, img, newsId, type } = req.body;
        let {id} = req.params;
        let data = await swiper.update({_id: id}, { title, img, newsId, type });
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