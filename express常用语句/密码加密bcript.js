// npm i bcryptjs@2.4.3
import bcrypt from 'bcryptjs'

password = bcrypt.hashSync(UserActivation.password, 10)
// 使用包进行加密，括号内为需要加密的目标以及生成后的字符串长度