import React from 'react'
import ReactDOM from 'react-dom'

import './asserts/css/common.less'
import './asserts/css/font.css'
import './asserts/css/iconfont.css'

import App from './App'
import AppRouter from './router'

ReactDOM.render(
    <>
        <AppRouter />    
    </>,
    document.getElementById('root')
)