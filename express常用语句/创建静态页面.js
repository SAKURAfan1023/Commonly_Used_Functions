import express from 'express'

const app = express()

//如果不在根目录建议用绝对路径来表示
app.use(express.static('想要暴露的文件名'))

//app.use()作用为注册全局中间件