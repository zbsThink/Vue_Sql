// 与数据库表连接入口
//userApi中的每个函数，连接到sqlMap.js里的一个sql语句进行对数据库的操作
var models = require('../db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../sqlMap')

//连接数据库
var conn = mysql.createConnection(models.mysql)
conn.connect()
var jsonWrite = function(res,ret){
    if(typeof ret === 'undefined'){
        res.json({
            code:'1',
            msg:'操作失败'
        })
    }else{
        res.json(ret)
    }
}

//增加用户接口
router.post('/addReader',(req,res)=>{
    var sql = $sql.reader.add
    var params = req.body
    console.log(params)
    conn.query(sql,[params.name],function(err,result){
        if(err){
            console.log(err)
        }
        if(result){
            jsonWrite(res,result)
        }
    })
})

//删除用户
router.post('/cancelReader',(req,res)=>{
    var sql = $sql.reader.delete
    var params = req.body
    console.log(params)
    conn.query(sql,[params.name],function(err,result){
        if(err){
            console.log(err)
        }
        if(result){
            jsonWrite(res,result)
        }
    })
})

//查询用户
router.post('/searchReader',(req,res)=>{
    var sql = $sql.reader.search
    var params = req.body
    console.log(params)
    conn.query(sql,[params.name],function(err,result){
        if(err){
            console.log(err)
        }
        if(result){
            jsonWrite(res,result)
        }
    })
})

//更新用户
router.post('/readerBorrow',(req,res)=>{
    var sql = $sql.reader.borrowBook
    var params = req.body
    console.log(params)
    conn.query(sql,[params.name],function(err,result){
        if(err){
            console.log(err)
        }
        if(result){
            jsonWrite(res,result)
        }
    })
})
//图书设置如上即可
module.exports = router
