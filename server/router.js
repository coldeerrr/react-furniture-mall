const express = require("express");
const router = express.Router();
const homehot = require("./data/home/homehot");
const search = require("./data/search");
const details = require("./data/details");
const url = require("url");
// 用mock模拟数据
const Mock = require("mockjs");

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
    const { mock, Random } = Mock;
    let data = mock({
        "hasMore|1": [true, false],
        'data|3-6': [{
            id: Random.integer(0),
            title: Random.csentence(5, 8),
            houseType: "17/19层| 4室1厅 - 273.97 ㎡",
            price: "<h3>130000</h3>",
            "rentType|1": ["整租", "合租"],
            img: Random.image('800x600', Random.color(), "#FFF", "png", Random.cword(3, 5)),
        }]
    });
    res.send({
        status: 200,
        // result: search,
        result: data
    })
})
// 详情页数据
router.get("/details", (req, res) => {
    const id = url.parse(req.url, true).query.id;
    res.send({
        status: 200,
        result: details
    })
})
// 登录
router.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        res.send({
            status: 200,
            token: "wmsjcllmnbgwl",
            name: username
        })
    } else {
        res.send({
            status: 400,
            msg: '用户名密码错误'
        })
    }
})

// mock模拟数据
router.get("/mock", (req, res) => {
    const { mock, Random } = Mock;
    let data = mock({
        "hasMore|1": [true, false],
        // 'name|rule': value
        'data|5': [{
            id: Random.integer(0),
            title: Random.csentence(5, 8),
            houseType: "17/19层| 4室1厅 - 273.97 ㎡",
            price: "<h3>130000</h3>",
            "rentType|1": ["整租", "合租"],
            img: Random.image('800x600', Random.color(), "#FFF", "png", Random.cword(3, 5)),
        }]
    });
    res.send(data)
})

module.exports = router;