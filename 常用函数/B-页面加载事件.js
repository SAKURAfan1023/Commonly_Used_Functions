
//第一种页面加载事件，需要完全加载元素，所需时间更长

window.addEventListener('load', function () {

  //填写相关链接函数，来实现页面元素加载完成后再跳转执行

})

//第二种页面加载事件，不需要全部加载表格图片等东西，所需时间更短

document.addEventListener('DOMContendLoaded', function () {

  //填写相关链接函数，来实现页面元素部分加载完成后再跳转执行

})
