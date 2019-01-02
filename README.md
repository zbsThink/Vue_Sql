### 编写完成数据库配置文件后
  1. 在/server目录下执行`node index`显示success listen at port:3000.....即启动成功
  **后端服务器代码的每次修改都必须重启服务器才能执行**
  2. 在项目根目录下执行`npm run dev` 启动web服务器
   constraint
### 数据库操作
1. 创建一个数据库
`mysql>CREATE DATABASE test`
2. 删除一个数据库
`mysql>DROP DATABASE test`
3. 展示所有的数据库
`SHOW DATABASE`
4. 对一个数据库进行操作首先要切换到该数据库
`use test`
5. 列出数据库的所有表
`SHOW TABLES`
6. 查看一个表的结构
`DESC students`
7. 查看创建表
`SHOW CREATE TABLE students`
8. 删除表
`DROP TABLE students`
9. 退出mysql（注意EXIT仅仅断开了客户端和服务器的连接，MySQL服务器仍然继续运行）
`EXIT`
