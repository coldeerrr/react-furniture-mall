const express = require("express");
const app = express();
const router = require("./router");

// post/put请求中间件, 需写在路由配置(12)之前
app.use(express.urlencoded({ extended: true }))

// 后端cors解决跨域
const cors = require("cors");
app.use(cors());

app.use("/api", router);

app.listen(5566, () => {
    console.log('服务器运行在5566端口');
})