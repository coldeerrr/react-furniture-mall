import React from "react";
import { NavLink, Routes, Route, Navigate } from 'react-router-dom'
import './index.less'
import Home from '../../pages/Main/Home'
import LifeService from '../../pages/Main/LifeService'
import Shop from '../../pages/Main/Shop'
import User from '../../pages/Main/User'

const BottomNav = () => {
    return (
        <div className="nav-footer">
            <ul className="clear-fix">
                <li>
                    <NavLink to='/home'>
                        <i className="iconfont icon-home"></i>
                        首页
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/life'>
                        <i className="iconfont icon-trophy"></i>
                        生活服务
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/shop'>
                        <i className="iconfont icon-shop"></i>
                        商城
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/user'>
                        <i className="iconfont icon-team"></i>
                        我的
                    </NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/life" element={<LifeService />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/user" element={<User />} />
            </Routes>
        </div>
    )
}

export default BottomNav