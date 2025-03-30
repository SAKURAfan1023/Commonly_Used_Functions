// throttle(执行函数, 执行时长)
//节流函数就是只执行第一次请求，在第一次完成之前不会再执行新请求

function throttle(fn, wait) {
let timer = 0
return function () {
if (timer === 0) {
fn()
timer = setTimeout(e => timer = 0, wait)
}
}
}