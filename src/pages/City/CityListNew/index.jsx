import React, { useState, useEffect } from "react";
import CitySelect from 'react-city-select';
import data from '../../../data/city'
import api from "../../../api";
import './index.less'

const CityListNew = props => {
    const [cityData, setCityData] = useState({});

    function handleSelectCity(cityData) {
        console.log(cityData);
    }

    useEffect(() => {
        api.getCityLists().then(res => {
            if(res.status === 200) {
                setCityData(res.data.result.cityList)
            }
        })
    })

    return (
        <div className="city-list-new-container">
            <CitySelect 
                data={data}
                onSelectItem={handleSelectCity}
            />
        </div>
    )
}

export default CityListNew