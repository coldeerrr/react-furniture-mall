import React from "react";
import './index.less'
import { useNavigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import {
    setCollect,
    removeCollect
} from '../../../redux/actions/collect'

const BuyAndCollect = props => {
    const { login, collect, setCollect, removeCollect } = props;
    const navigate = useNavigate();
    const { id } = useParams();

    function handleCollect() {
        console.log(props);
        const { token } = login.user;
        if (token) {
            // 判断是否收藏
            if (isCollect()) {
                removeCollect(id);
            } else {
                setCollect(id);
            }
        } else {
            navigate('/login')
        }
    }

    // 判断用户是否收藏 true为收藏, false为为收藏
    function isCollect() {
        console.log(111);
        return collect.some(item => item === id)
    }

    return (
        <div className="buy-collect-container clear-fix">
            <div className="item-container float-left">
               {
                   isCollect() ? 
                   <button className="selected o" onClick={handleCollect}>已收藏</button>
                   :
                   <button className="selected" onClick={handleCollect}>收藏</button>
               }
            </div>
            <div className="item-container float-right">
                <button className="selected">购买</button>
            </div>
        </div>
    )
}

export default connect(
    state => ({
        login: state.login,
        collect: state.collect,
    }),
    {
        setCollect,
        removeCollect
    }
)(BuyAndCollect)