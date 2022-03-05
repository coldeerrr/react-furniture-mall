import React, {useState, useEffect} from "react";
import OrderListView from "../OrderListView";
import api from '../../../api'

const OrderList = props => {
    const {username} = props;
    const [orderListData, setOrderListData] = useState([]);

    useEffect(() => {
        api.getOrder({
            username: username
        }).then(res => {
            if(res.data.status === 200) {
                setOrderListData(res.data.result)
            }
        })
    }, [])

    return (
        <div>
            {
                orderListData.length > 0 ? <OrderListView data={orderListData} username={username}/> : <div>等待数据加载...</div>
            }
        </div>
    )
}

export default OrderList