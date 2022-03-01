import React from "react";
import './index.less'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

const HeaderNav = (props) => {
    return (
        <div className="home-header clear-fix">
            <div className="home-header-left float-left">
                <Link to='/city'>
                    <span>{props.city.cityName}</span>
                    <i className="icon-angle-down"></i>
                </Link>
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

export default connect(
    state => ({ city: state.city }),
    {}
)(HeaderNav)