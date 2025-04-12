if (process.env.NODE_ENV === 'production') {
  console.log() = function () { };
}

console.log('开发模式下可用，生产模式下不可用');
