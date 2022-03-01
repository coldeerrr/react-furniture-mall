import React from "react";
import './index.less'

const CityList = (props) => {
    function handleCityChange(city) {
        // 父子组件传参, 利用函数回传
        props.onEvent(city);
    }

    const citys = ['北京', '上海', '广州', '深圳', '杭州', '福州', '沈阳', '天津', '南京', '长沙', '西安', '成都', '香港', '澳门', '台北'];

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