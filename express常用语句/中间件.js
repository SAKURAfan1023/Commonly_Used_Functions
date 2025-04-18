//1.定义中间件
const mw = function (req, res, next) {
  console.log('这就是中间件函数');
  next() //next即为连接下一个函数的关键，将流转关系转交给下一个中间件或路由
}

//2.将中间件注册为全局生效
app.use(mw)

//attention:req和res是在所有路由内通用的，可以在中间件中定义(req.属性名)来统一调用

app.get('/user', mw, (req, res) => {
  console.log('在没有全局注册mw的情况下，这里的mw是局部生效中间件');

})