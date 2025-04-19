// 1.应用级别的中间件
// 绑定在app上的实例中间件即为应用级别中间件

//2.路由级别的中间件
//绑定在router实例上的中间件即为路由级别的中间件

// 3.错误级别的中间件 (需要放置于路由之后)
// 用于检测错误并抛出错误的中间件
app.use((err, req, res, next) => {
  res.sent(err.message)
})

// 4.Express内置的中间件
express.static() //静态资源托管
express.Router() //定义路由
express.json() //解析JSON字符串
express.urlencoded({ extended: false }) //解析url-encoded格式的请求体数据

// 5.第三方中间件
//就是通过npm install的形式下载并用import引入来使用