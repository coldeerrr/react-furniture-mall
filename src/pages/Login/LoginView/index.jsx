import React from "react";
import './index.less'

const LoginView = () => {
    return (
        <div className="login-container">
            <div className="input-container phone-container">
                <i className="icon-tablet"></i>
                <input
                    type="text"
                    placeholder="用户名/手机号"
                />
            </div>
            <div className="input-container password-container">
                <i className="icon-key"></i>
                <button>发送验证码</button>
                <input
                    type="text"
                    placeholder="输入验证码"
                />
            </div>
            <button className="btn-login">登录</button>
        </div>
    )
}

export default LoginView