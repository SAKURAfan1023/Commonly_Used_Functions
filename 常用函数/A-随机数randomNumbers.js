//随机数函数，在形参中放入范围，num1起始，num2结尾，在num1到num2之间选择随机向下取整的整数
function randomNumber(num1, num2) {
return Math.floor(Math.random() * (num2 - num1 + 1) + num1)
}