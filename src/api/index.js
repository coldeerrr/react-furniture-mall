import axios from "../utils/request";

// 保存路径地址
const base = {
    baseUrl: "http://localhost:5566",
    homehot1: "/api/home/hot1",
    homehot2: "/api/home/hot2"
}

// 保存请求方法
const api = {
    getHomehot1() {
        return axios.get(base.baseUrl + base.homehot1)
    },
    getHomehot2() {
        return axios.get(base.baseUrl + base.homehot2)
    }
}

export default api