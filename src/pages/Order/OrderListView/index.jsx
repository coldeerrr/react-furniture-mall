import React from "react";
import Item from "./Item";

const OrderListView = props => {
    const {data, username} = props;
    return (
        <div>
            {
                data.map((ele, index) => {
                    return <Item key={index} data={ele} username={username}/>
                })
            }
        </div>
    )
}

export default OrderListView