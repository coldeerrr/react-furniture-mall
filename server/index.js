const express = require("express");
const app = express();
const router = require("./router");

// 后端cors解决跨域
const cors = require("cors");
app.use(cors());

app.use("/api", router);

app.listen(5566, () => {
    console.log('服务器运行在5566端口');
})