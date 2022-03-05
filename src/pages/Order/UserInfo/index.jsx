import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom'
import './index.less'

const UserInfo = props => {
    const { user, city } = props;
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.token) navigate('/login')
    }, [])

    return (
        <div className="userinfo-container">
            <p>
                <i className="icon-user"></i>
                <span>{user.name}</span>
            </p>
            <p>
                <i className="icon-map-marker"></i>
                <span>{city}</span>
            </p>
        </div>
    )
}

export default UserInfo