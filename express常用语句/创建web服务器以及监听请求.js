//引入express
import express from 'express'

//创建web服务
const app = express()

//监听服务器创建，启动服务器后调用回调函数
app.listen(80, () => {
  console.log('server run at http://127.0.0.1:80');

})

//服务器接收GET请求，response响应，request请求
app.get('/user', (req, res) => {
  res.send({ name: 'SAKURA', password: '5563999' }) //for example发送的是JSON字符串
})

//服务器接收POST请求，response响应，request请求
app.post('/user', (req, res) => {
  res.send('请求成功') //for example
})

//通过req.query可以查询到客户端传送过来的query查询指令,一般情况下，req.query是空对象
//http://127.0.0.1/?name=SAKURA&age=18            问号之后的内容即为查询指令
app.get('/', (req, res) => {
  console.log(req.query);
  res.send(req.query)
})

//动态参数 ：之后的内容 http://127.0.0.1/users/:id/:username?name=SAKURA      例如这个id值即为动态参数params
app.get('/user/:id/:username', (req, res) => {
  console.log(req.params);
  res.send(req.params)
})



//-----------------------------------------example
import express from 'express'
import cors from 'cors'
const apps = express()

apps.use(express.json())
apps.use(express.urlencoded())
apps.use(cors())

apps.get('/user', (req, res) => {
  const query = req.query || ' '
  res.send({
    status: 0,
    message: 'GET 请求成功',
    query
  })
})

apps.post('/book', (req, res) => {
  const body = req.body || ' '
  res.send({
    status: 0,
    message: 'POST 请求成功',
    body
  })
})

apps.use((err, req, res, next) => {
  res.send('err!' + err.message)
})

apps.listen(80, () => {
  console.log('server on http://127.0.0.1:80');
})