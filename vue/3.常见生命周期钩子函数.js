// '函数名'                  '触发时机'                   '典型用途'
mounted()                   //组件挂载到页面时             操作DOM
unmounted()                 //组件销毁后                  释放内存
beforeUnmount()             //组件销毁前                  清理定时器取消事件监听
beforeMount()               //组件编译完成挂载前           很少用
created()                   //数据初始化但DOM未生成        发起异步请求、初始化数据
beforeCreate()              //实例刚创建，数据未初始化      初始化非响应式变量
updated()                   //数据变化后且DOM更新后        执行依赖新变化的DOM操作
beforeUpdate()              //数据变化后且DOM更新前        获得更新前的DOM状态


// 生命周期钩子的核心价值在于：在正确的时间做正确的事