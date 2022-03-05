import React from 'react'
import ReactDOM from 'react-dom'

import './asserts/css/common.less'
import './asserts/css/font.css'
import './asserts/css/iconfont.css'

import { Provider } from 'react-redux'
import store from './redux/store'
// 初始化
import './utils/init'

import App from './App'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)