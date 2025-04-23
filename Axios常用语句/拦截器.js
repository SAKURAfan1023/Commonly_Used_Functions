axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}`; // 动态注入 token
  }
  return config;
});