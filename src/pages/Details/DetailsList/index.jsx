import React, { useState, useEffect } from "react";
import DetailsListView from '../DetailsListView'
import api from '../../../api'

const DetailsList = props => {
    const [details, setDetails] = useState({});

    useEffect(() => {
        api.getDetails({
            id: props.id
        }).then(res => {
            if (res.status === 200) {
                setDetails(res.data.result)
            }
        })
    }, [])

    return (
        <div>
            {
                details.imgs ? <DetailsListView details={details} /> : <div>等待数据加载...</div>
            }
        </div>
    )
}

export default DetailsList