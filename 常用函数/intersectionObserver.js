// 1. 定义观察目标和配置
const target = document.querySelector('.lazy-image');
const options = {
  root: null, //以哪个目标为基准观测
  rootMargin: '0px', //拓宽所选root
  threshold: 0.1 // 当元素 10% 可见时触发
};

// 2. 定义回调函数
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 元素进入视口时的操作（例如加载图片）
      const img = entry.target;
      img.src = img.dataset.src; // 将 data-src 替换为实际 src
      observer.unobserve(img);  // 停止观察已加载的元素
    }
  });
};

// 3. 创建观察器并开始观察
const observer = new IntersectionObserver(callback, options);
observer.observe(target);

// 4. 停止观察（可选）
// observer.unobserve(target);
// observer.disconnect(); // 停止所有观察