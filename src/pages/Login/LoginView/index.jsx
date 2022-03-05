import React, { useState } from "react";
import './index.less'
import api from "../../../api";
import validator from '../../../utils/validator'
import classnames from 'classnames'

const LoginView = props => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    function handleSubmit(e) {
        e.preventDefault();

        const { isValid, errors } = validator({
            username,
            password
        });

        if (!isValid) {
            api.postLogin({
                username,
                password
            }).then(res => {
                if (res.data.status === 200) {
                    props.onLoginEvent(res.data);
                    setErrors({});
                } else {
                    console.log("登录失败");
                }
            })
        } else {
            console.log(errors);
            setErrors(errors)
        }
    }

    function handleChange(e) {
        switch (e.target.name) {
            case "username":
                setUsername(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            default:
                break;
        }
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <div className={classnames("input-container phone-container", {'input-container-error': errors.username})}>
                    <i className="icon-tablet"></i>
                    <input
                        type="text"
                        name="username"
                        placeholder="用户名/手机号"
                        value={username}
                        onChange={handleChange}
                    />
                </div>
                <div className={classnames("input-container password-container", {'input-container-error': errors.password})}>
                    <i className="icon-key"></i>
                    <button>发送验证码</button>
                    <input
                        type="password"
                        name="password"
                        placeholder="密码"
                        value={password}
                        onChange={handleChange}
                    />
                </div>
                <button className="btn-login">登录</button>
            </form>
        </div>
    )
}

export default LoginView