import React, { useState } from "react";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './index.less'
import Pagination from "./Pagination";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Swiper = (props) => {

    const { banners } = props

    // 初始化轮播图(高亮, index为显示第几个)
    const [index, setIndex] = useState(0)

    function handleChangeIndex(index) {
        // 设置轮播
        setIndex(index)
    }

    return (
        <div className="swiper">
            <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex}>
                {
                    banners.map((banner, index) => {
                        return (
                            <div key={index} className="swiper-view">
                                <img src={banner} alt="" />
                            </div>
                        )
                    })
                }
            </AutoPlaySwipeableViews>
            <Pagination currentIndex={index} length={banners.length} />
        </div>
    )
}

export default Swiper;