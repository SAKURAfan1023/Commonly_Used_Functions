
// 为is_mobi 赋值，通过navigator.userAgent来检测设备是否为移动端，检测类型如下，是则为其赋值

let is_mobi = navigator.userAgent.toLowerCase().match(/(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null;
console.log(is_mobi);

//if判断跳转，是移动端则 is_mobi=True 跳转

if (is_mobi) {
  window.location.href = "#";
} else {
  window.location.href = "#"
}
