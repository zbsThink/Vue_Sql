// sqlMap.js用来实现sql语句的api
//如果数据里面有自增id，需要在入口sql语句中忽略该项
var sqlMap = {
    reader:{
        add: 'insert into reader (name,password) value (?,?)',
        delete:'delete from reader where name = ?',
        search:'select * from reader where name = ?',
        borrowBook:'update reader set lendBook1 = ? where name = ?'
    },
    book:{
        add:'insert into book (name,author,stock) values (?,?,?)',
        search:'select from book where name = ?',
        borrowBook:'update book stock = ?,lendNum = ? where name = ?'

    }
}
module.exports = sqlMap;