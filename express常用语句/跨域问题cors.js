// npm i cors
// 先下载第三方中间件cors

import cors from 'cors'
//引用

app.use(cors())
//全局注册中间件



// --------------------------------



//第一种响应头:Access-Control-Allow-Origin
res.setHeader('Access-Control-Allow-Origin', 'http://itcast.cn') //例子,只允许跨域http://itcast.cn的访问
res.setHeader('Access-Control-Allow-Origin', '*') // * 表示任何域

//第二种响应头:Access-Control-Allow-Methods
res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE') //cors默认只有get和post方法,想要额外添加只能这样设置响应头
res.setHeader('Access-Control-Allow-Methods', '*')

//第三种响应头:Access-Control-Allow-Headers
res.setHeader('Access-Control-Allow-Headers', 'content-type')//允许额外的请求头



//------------------------------------

//简单请求与预检请求
//简单请求是常规的method:GET,POST,HEAD,请求头为常规的九种
//预检请求是非常规需要设置的method和其他自定义请求头
//简单请求只会发送一次请求,预检请求有两次,第一次是option请求,第二次才是正式请求