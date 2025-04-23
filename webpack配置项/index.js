if (process.env.NODE_ENV === 'production') {
  console.log = function () { };
}

console.log('开发模式下可用，生产模式下不可用');




// <% if(htmlWebpackPlugin.options.useCdn){ %>

//   link标签或者script标签想要调用cdn库的情况

//   <% } %>

// font - family: -apple - system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans - serif;