// 双大括号文本插值
{ { } }

<h1>{{ message }}</h1>

//动态式的改变文本内容
createApp({
  data() {
    return {
      message: 'Hello World!'
    }
  }
})

//<h1>{{ message.split('').reverse().join('') }}</h1> 可以使用javascript支持的语法