// sqlMap.js用来实现sql语句的api
//如果数据里面有自增id，需要在入口sql语句中忽略该项
var sqlMap = {
    reader:{
        add: 'insert into user (name,password) value (?,?)',
        delete:'delete from user where name = ?',
        search:'select * from user where name = ? and password = ?',
        update:'update user set password = ? where name = ?'

    },
    book:{
        add:'insert into book (name,author,stock) values (?,?,?)',
        search:'select from book where name = ?',
        borrowBook:'update book set stock = ?,lendNum = ? where name = ?'

    }
}
module.exports = sqlMap;