const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {

  //请求头一般为固定
  res.setHeader('content-type', 'text/plain;charset=utf-8')
  res.end('你好，我是服务器')
})

server.listen(3001, () => {
  console.log('服务器启动成功');
})