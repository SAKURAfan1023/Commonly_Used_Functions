//npm i jsonwebtoken express-jwt
//先安装依赖

const jwt = require('jsonwebtoken')
const { expressjwt } = require('express-jwt')

const secretKey = 'HuLiFan (>w<)'//定义密钥

//可以用jwt.sign()来在服务器端加密
//内填三个参数，参数一：用户信息对象；参数二：密钥secretKey由自己定义；参数三：配置对象，可以用来限定有效期
//加密尽量不要包含password，会有安全隐患
jwt.sign({ username: '**' }, secretKey, { expiresIn: '30s' })

//用户端发送请求时需要在请求头包含Authorization来访问admin权限，在请求头密钥前需要携带bearer

//解密token还原成json对象，是一个中间件
//expressJWT({ secret: secretKey })就是用来解析的中间件
//.unless({path:[/^\/api\//]})用来限定哪些接口不需要访问的权限
//解析出来后就自动挂载在req.auth上了
app.use(expressjwt({ secret: secretKey, algorithms: ['HS256'] }).unless({ path: [/^\/api\//] }))//这是一个中间件