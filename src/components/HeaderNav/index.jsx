import React from "react";
import './index.less'
import { Link, Routes, Route } from 'react-router-dom'
import SearchInput from '../SearchInput'

const HeaderNav = (props) => {
    return (
        <div className="home-header clear-fix">
            <div className="home-header-left float-left">
                <Link to='/city'>
                    <span>{props.cityName}</span>
                    <i className="icon-angle-down"></i>
                </Link>
            </div>
            <div className="home-header-right float-right">
                <Link to='/order'><i className="iconfont icon-car"></i></Link>
            </div>
            <div className="home-header-middle">
                <div className="search-container">
                    <i className="icon-search"></i>
                    <SearchInput />
                </div>
            </div>
        </div>
    )
}

export default HeaderNav