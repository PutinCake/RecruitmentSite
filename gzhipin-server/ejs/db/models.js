
// 引入mongoose
const mongoose = require('mongoose')
// 连接指定数据库(URL 只有数据库是变化的)
mongoose.connect('mongodb://localhost:27017/bossz')
// 获取连接对象
const conn = mongoose.connection
// 绑定连接完成的监听(用来提示连接成功)
conn.on('connected', function () {
console.log('数据库连接成功!')
});

//字义Schema(描述文档结构)
const userSchema = mongoose.Schema({
    username: {type: String, required: true}, // 用户名
    password: {type: String, required: true}, // 密码
    type: {type: String, required: true}, // 用户类型: dashen/laoban
    header: {type: String}, // 头像名称
    post: {type: String}, // 职位
    info: {type: String}, // 个人或职位简介
    company: {type: String}, // 公司名称
    salary: {type: String} // 工资
});

// 2.2. 定义Model(与集合对应, 可以操作集合)
const UserModel = mongoose.model('user', userSchema);
// 2.3. 向外暴露Model
exports.UserModel = UserModel