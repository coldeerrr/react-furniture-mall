// 智能组件, 处理后台数据
import React, { useState, useEffect } from "react";
import api from '../../../../api'

// HomehotView 是木偶组件, 渲染视图
import HomehotView from "../HomehotView";

const HomehotList = props => {
    const [hot1List, setHot1List] = useState([]);
    const [hot2List, setHot2List] = useState([]);
    const [city, setCity] = useState(props.cityName);

    // useEffect中发送网络请求, 只获取一次, 第二个参数传空数组
    // 获取hot1, 发送请求时携带参数
    useEffect(() => {
        api.getHomehot1({
            cityName: props.cityName
        }).then(res => {
            if (res.data.status === 200) {
                setHot1List(res.data.result);
                setCity(res.data.city);
            }
        });
    }, []);

    // 获取hot2
    useEffect(() => {
        api.getHomehot2({
            cityName: props.cityName
        }).then(res => {
            if (res.data.status === 200) {
                setHot2List(res.data.result);
                setCity(res.data.city);
            }
        });
    }, []);

    return (
        <div>
            {
                // 判断是否有数据, 有数据时渲染视图
                hot1List.length > 0 ? <HomehotView title='热门商品' data={hot1List} city={city} /> : <div>等待数据加载...</div>
            }
            {
                hot2List.length > 0 ? <HomehotView title='新品推荐' data={hot2List} city={city} /> : <div>等待数据加载...</div>

            }
        </div>
    )
}

export default HomehotList