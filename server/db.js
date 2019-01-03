//db.js数据库连接配置
module.exports = {
    mysql:{
        host:'localhost',//或者127.0.0.1，mysql连接ip地址
        user:'ODBC@localhost',//自己的用户名mysql用户名默认是root
        password:'',//mysql用户名密码
        database:'test',//自己的数据库名
        post:'3306'//mysql连接端口
    
    }
}