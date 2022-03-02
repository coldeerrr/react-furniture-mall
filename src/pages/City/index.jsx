import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import CityHeader from "../../components/PubHeader";
import CurrentCity from "./CurrentCity";
import CityListHot from "./CityListHot";
import CityListAll from "./CityListAll";

import { connect } from 'react-redux'
import store from '../../redux/store'
import {
    initCity,
    changeCity
} from '../../redux/actions/city'
import city from "../../redux/reducers/city";

const anonyCom = City => {
    return (props) => {
        let navigate = useNavigate();
        return <City {...props} navigate={navigate} />
    }
}

const City = props => {

    function onCityEvent(city) {
        // city为CityList传回的参数
        // setCity(city);
        props.changeCity({ cityName: city })
        props.navigate(-1);
    }

    return (
        <div>
            <CityHeader title='城市选择' />
            <CurrentCity city={props.city.cityName} />
            <CityListHot onEvent={onCityEvent} />
            <CityListAll onEvent={onCityEvent}/>
        </div>
    )
}

export default connect(
    state => ({ city: state.city }),
    {
        initCity,
        changeCity
    }
)(anonyCom(City))