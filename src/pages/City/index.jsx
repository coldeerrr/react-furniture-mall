import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import CityHeader from "../../components/PubHeader";
import CurrentCity from "./CurrentCity";
import CityList from "./CityList";

import { initCity, changeCity } from '../../redux/actions/city'

const anonyCom = City => {
    return (props) => {
        let navigate = useNavigate();
        return <City {...props} navigate={navigate} />
    }
}

const City = props => {

    const [city, setCity] = useState('北京');

    function onCityEvent(city) {
        // city为CityList传回的参数
        setCity(city);
        props.navigate(-1);
    }

    return (
        <div>
            <CityHeader title='城市选择' />
            <CurrentCity city={city} />
            <CityList onEvent={onCityEvent} />
        </div>
    )
}

export default anonyCom(City)