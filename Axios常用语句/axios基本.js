axios({
  url: '',
  params: {},//req.params
  query: {},//req.query
  data: {} //req.body
}).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err.message);
})