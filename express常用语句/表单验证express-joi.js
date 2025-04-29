// npm i express-joi-validations
// 详情查看https://www.npmjs.com/package/express-joi-validations
import { Joi, validateBody } from 'express-joi-validations';

const postBody = Joi.object({
  userName: Joi.string().required().min(5).max(16).regex(/^[a-zA-Z0-9-_]+$/),
  passWord: Joi.string().required().min(5).max(16).regex(/^[a-zA-Z0-9-_]+$/)
})

//作为中间件插入路由