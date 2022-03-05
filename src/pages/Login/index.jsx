import React from "react";
import LoginView from "./LoginView";
import { connect } from 'react-redux';
import {
    setLogin,
    outLogin
} from '../../redux/actions/login'
import { useNavigate } from 'react-router-dom'

const Login = props => {
    const navigate = useNavigate();

    function handleLogin(data) {
        const { token, name } = data;
        // 写入redux
        props.setLogin({
            user: {
                token: token,
                name: name
            }
        });
        // 存入本地
        localStorage.setItem("furniture-mall", JSON.stringify({
            user: {
                token: token,
                name: name
            }
        }))
        navigate(-1);
    }
    return (
        <div>
            <LoginView onLoginEvent={handleLogin} />
        </div>
    )
}

export default connect(
    state => ({ login: state.login }),
    {
        setLogin,
        outLogin
    }
)(Login)