const express = require('express');
const router = express.Router();
const user = require('../database/model/user');
const jwt = require('jsonwebtoken');
const tokenConfig = require('../config/tokenConfig');


//添加用户接口
router.post('/add', (req, res, next) => {
    let token = req.headers.token || req.body.token;
    jwt.verify(token, tokenConfig.secret, (err, decoded) => {
        if(err) {
            res.status(401).send("登录状态失效，请重新登录");
            return
        }
       if(decoded.level.type == 0){
           let {
               avatar,
               userName,
               idCardNumber,
               homeAddress,
               workAddress,
               nation,
               weChat,
               qqNumber,
               sex,
               education,
               jobTitle,
               emolument,
               enterPartyTime,
               paymentTime,
               partyStatus,
               pwd,
               phone,
               level
           } = req.body;
           user.findOne({idCardNumber}).then(data  => {
               if(data === null) {
                   user.create({
                       avatar,
                       userName,
                       idCardNumber,
                       homeAddress,
                       workAddress,
                       nation,
                       weChat,
                       qqNumber,
                       sex,
                       education,
                       jobTitle,
                       emolument,
                       enterPartyTime,
                       paymentTime,
                       partyStatus,
                       pwd,
                       phone,
                       level
                   }).then(data => {
                       res.json({
                           data: "success",
                           code: 200,
                           msg: '用户添加成功'
                       })
                   }).catch(err => {
                       let error = new Error(err);
                       next(error)
                   })
               }
               else {
                   res.json({
                       data: '用户名已存在',
                       code: 400,
                       msg: '用户名已存在'
                   })
               }
           }).catch(error => {
               next(new Error(error))
           })
       }else {
            res.json({
                code: 400,
                msg: '你不是管理员，无法添加用户'
            })
       }
    })
})

//登录接口
router.post('/login', (req, res, next) => {
    let {idCardNumber,pwd} = req.body;
    user.findOne({idCardNumber}).then(data => {
        if(data == null) {
            res.json({
                code: 400,
                msg: '用户不存在',
                data
            })
        }
        if(data.pwd == pwd) {
            let userInfo = {
                id: data._id,
                name: data.userName,
                avatar: data.avatar,
                idCardNumber: data.idCardNumber,
                level: data.level
            }
            let token = jwt.sign(userInfo, tokenConfig.secret, {expiresIn: tokenConfig.exp()});
            res.json({
                code: 200,
                msg: '登录成功',
                token
            })
        }
    }).catch(err => {
        let error = new Error(err);
        next(error)
    })
});

//获取个人信息
router.get('/userInfo', (req, res, next) => {
    let token = req.headers.token || req.body.token;
    jwt.verify(token, tokenConfig.secret, (err, decoded) =>{
        if(err) {
            res.status(401).send("登录状态失效，请重新登录");
            return
        }
        user.findOne({_id: decoded.id},{pwd: 0,level: 0,isCanLogin: 0}).then(data => {
            res.json({
                data,
                code: 200,
                msg: 'success'
            })
        }).catch(err => {
            next(new Error(err))
        })
    })
})

module.exports = router;