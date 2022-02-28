import React from "react";
import './style.less'

const HeaderNav = () => {
    return (
        <div className="home-header clear-fix">
            <div className="home-header-left float-left">
                <span>杭州</span>
                <i className="icon-angle-down"></i>
            </div>
            <div className="home-header-right float-right">
                <i className="iconfont icon-car"></i>
            </div>
            <div className="home-header-middle">
                <div className="search-container">
                    <i className="icon-search"></i>
                    <input type="text" />
                </div>
            </div>
        </div>
    )
}

export default HeaderNav