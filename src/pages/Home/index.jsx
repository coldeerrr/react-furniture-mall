import React from "react";
import HeaderNav from "../../components/HeaderNav";
import Swiper from "../../components/Swiper";
import HomehotList from "./HomehotList";

// 图片引用的方式, 谁调用谁传
import Banner1 from '../../asserts/images/banner1.png'
import Banner2 from '../../asserts/images/banner2.png'
import Banner3 from '../../asserts/images/banner3.png'

const Home = () => {
    return (
        <div>
            <HeaderNav />
            <Swiper banners={[Banner1, Banner2, Banner3]} />
            <HomehotList />
        </div>
    )
}

export default Home