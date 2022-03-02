import React, { useState, useEffect } from "react";
import CitySelect from 'react-city-select';
import data from '../../../data/city'
import api from "../../../api";
import './index.less'

const CityListNew = props => {
    const [cityData, setCityData] = useState(data);

    function handleSelectCity(cityData) {
        props.onEvent(cityData.name)
    }

    useEffect(() => {
        api.getCityLists().then(res => {
            if (res.status === 200) {
                setCityData(res.data.result.citylist)
            }
        })
    }, [])

    return (
        <div className="city-list-new-container">
            <CitySelect
                data={cityData}
                onSelectItem={handleSelectCity}
            />
        </div>
    )
}

export default CityListNew