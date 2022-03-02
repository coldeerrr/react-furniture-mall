import React, { useState, useEffect } from "react";
import api from "../../../api";
import './index.less'

const CityList = (props) => {
    const [hotCitys, setHotCitys] = useState([]);

    function handleCityChange(city) {
        // 父子组件传参, 利用函数回传
        props.onEvent(city);
    }

    useEffect(() => {
        api.getCityLists().then(res => {
            if (res.status === 200) {
                setHotCitys(res.data.result.hotcity);
            }
        })
    }, [])

    // 动态获取热门城市
    const citys = [];
    hotCitys.forEach(city => {
        citys.push(city.name)
    });

    // const citys = ['北京', '上海', '广州', '深圳', '杭州', '福州', '沈阳', '天津', '南京', '长沙', '西安', '成都', '香港', '澳门', '台北'];

    return (
        <div className="city-list-container">
            <h3>热门城市</h3>
            <ul className="clear-fix">
                {
                    citys.map((city, index) => {
                        return <li key={city} onClick={() => handleCityChange(city)}><span>{city}</span></li>
                    })
                }
            </ul>
        </div >
    )
}

export default CityList