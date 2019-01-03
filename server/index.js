//index.js文件用来定义与监听后端服务器
// web服务器使用3000端口来监听后端服务器，并根据mysql表中的内容来监听后端api路由，跳转到数据库连接表入口
const userApi = require('./api/userApi')
const bookApi = require('./api/bookApi')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:false
}))

//后端api路由
app.use('/api/reader',userApi)//使用http的时候记得加上'/api/reader'
// app.use('/api/book',bookApi)

//监听端口
app.listen(3000)
console.log('success listen at port:3000......')