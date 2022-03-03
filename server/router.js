const express = require("express");
const router = express.Router();
const homehot = require("./data/home/homehot");
const search = require("./data/search");
const url = require("url");

// 首页热门数据
router.get("/home/hot1", (req, res) => {
    const cityName = url.parse(req.url, true).query.cityName;
    res.send({
        status: 200,
        result: homehot.hot1,
        // 获取的数据传给前端拼字符串, 形成"假的"数据变化
        city: cityName
    })
});
router.get("/home/hot2", (req, res) => {
    const cityName = url.parse(req.url, true).query.cityName;
    res.send({
        status: 200,
        result: homehot.hot2,
        city: cityName
    })
});
// 搜索数据
router.get("/search", (req, res) => {
    const keywords = url.parse(req.url, true).query.keywords;
    res.send({
        status: 200,
        result: search,
    })
})

module.exports = router;