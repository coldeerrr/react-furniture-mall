import React, { useState, useEffect } from "react";
import DetailsHeader from '../../../components/PubHeader';
import Swiper from '../../../components/Swiper'
import BuyAndCollect from "../BuyAndCollect";
import Tabs from "../../../components/Tabs";
import Comment from "../Comment";
import './index.less'

const DetailsListView = (props) => {
    const { houseType, imgs, price, rentType, title, info } = props.details;

    return (
        <div>
            <DetailsHeader title="详情页" />
            <Swiper banners={imgs} />
            <Tabs>
                <div label="详情">
                    <div className="detail-info">
                        <h3>{title}</h3>
                        <div className="box">
                            <ul>
                                <li>
                                    <span>{price} / 月</span>
                                </li>
                                <li>
                                    <span>{info.type}</span>
                                    <p>房屋类型</p>
                                </li>
                                <li>
                                    <span>{houseType}</span>
                                    <p>房屋面积</p>
                                </li>
                            </ul>
                        </div>
                        <div className="info">
                            <div className="info-list">
                                <p>类型: {info.type}</p>
                                <p>朝向: {info.orientation}</p>
                            </div>
                            <div className="info-list">
                                <p>楼层: {info.level}</p>
                                <p>装修: {info.style}</p>
                            </div>
                            <div className="info-list">
                                <p>年代: {info.years}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div label="评价">
                    <Comment />
                </div>
            </Tabs>
            <BuyAndCollect />
        </div>
    )
}

export default DetailsListView