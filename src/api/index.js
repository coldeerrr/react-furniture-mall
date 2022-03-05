import axios from "../utils/request";

// 保存路径地址
const base = {
    baseUrl: "http://localhost:5566",
    // 为解决跨域问题把https://bang.360.cn路径替换为/api
    cityUrl: "/api/aj/getcitycode",
    homehot1: "/api/home/hot1",
    homehot2: "/api/home/hot2",
    search: "/api/search",
    details: "/api/details",
    login: "/api/login",
}

// 保存请求方法
const api = {
    // 随着城市的变化需要的数据也不一样, 发送请求时传参
    getHomehot1(params) {
        return axios.get(base.baseUrl + base.homehot1, {
            params
        })
    },
    getHomehot2(params) {
        return axios.get(base.baseUrl + base.homehot2, {
            params
        })
    },
    // 获取城市列表
    getCityLists() {
        return axios.get(base.cityUrl)
    },
    // 搜索
    getSearch(params) {
        return axios.get(base.baseUrl + base.search, {
            params
        })
    },
    // 详情页
    getDetails(params) {
        return axios.get(base.baseUrl + base.details, {
            params
        })
    },
    // 登录
    postLogin(params) {
        return axios.post(base.baseUrl + base.login, params)
    }
}

export default api