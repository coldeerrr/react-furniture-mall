import axios from "../utils/request";

// 保存路径地址
const base = {
    baseUrl: "http://localhost:5566",
    cityUrl: "https://bang.360.cn/aj/getcitycode",
    homehot1: "/api/home/hot1",
    homehot2: "/api/home/hot2",
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
    }
}

export default api