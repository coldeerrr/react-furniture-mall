import React, { useEffect } from "react";
import OrderList from './OrderList'
import OrderHeader from '../../components/PubHeader'
import UserInfo from "./UserInfo";
import { connect } from "react-redux";

const Order= props => {
    const { user, city } = props;

    return (
        <div>
            <OrderHeader title="订单"/>
            <UserInfo user={user} city={city}/>
            <OrderList username={user.name}/>
        </div>
    )
}

export default connect(
    state => ({
        city: state.city.cityName,
        user: state.login.user
    }),
    {}
)(Order)