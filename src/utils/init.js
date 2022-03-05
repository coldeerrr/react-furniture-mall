import { setLogin } from '../redux/actions/login'
import store from '../redux/store'

// 初始化登录信息
if(localStorage.getItem("furniture-mall")) {
    store.dispatch(setLogin(JSON.parse(localStorage.getItem("furniture-mall"))))
}