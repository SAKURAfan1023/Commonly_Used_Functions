//先安装mysql模块   npm install mysql2
const mysql = require('mysql')
const db = mysql.createPool({           //建立连接关系
  host: '127.0.0.1',   //数据库的IP地址
  user: 'root', //登录数据库的账户
  password: '',  //账号的密码
  database: '' //要操纵的数据库名称
})

//检测mySQL能否正常使用，select 1无实质性作用，只用来检测
db.query('select 1', (err, result) => {
  if (err) return console.log(err.message);
  console.log(result);
})

//执行数据库操作,select查询语句返回数组
db.query('SQL语句', (err, result) => {
  if (err) return console.log(err.message);
  console.log(result);
})

//可以使用占位符来后续填充数据,可以通过set快速设置,如果字段对应的情况下
const user = { username: 'asdb', password: '332801433' }
const insertStr = 'insert into users (username,password) value(?,?)'

db.query(insertStr, [user.username, user.password], (err, result) => {
  if (err) return console.log(err.message);
  if (result.affectedRows === 1) console.log('添加成功');
})

//修改,修改也有快捷方式，直接set后加对象，不用字段一一对应
const user2 = { id: 1, username: 'hulifan', password: '5563999hlf' }
const updateStr = 'update users set username=? where id=?'

db.query(updateStr, [user2.username, user2.id], (err, result) => {
  if (err) console.log(err.message);
  console.log('修改成功');

})