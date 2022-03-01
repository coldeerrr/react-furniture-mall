import React from "react";
import { useNavigate } from "react-router-dom";
import './index.less'

// 封装hoc组件实现前进后退
const anonyCom = PubHeader => {
    return (props) => {
        let navigate = useNavigate();
        return <PubHeader {...props} navigate={navigate}/>
    }
}

const PubHeader = (props) => {
    function goBack () {
        console.log(1);
        props.navigate(-1);
    }

    return (
        <div className="common-header">
            <span className="back-icon" onClick={ goBack }>
                <i className="icon-chevron-left"></i>
            </span>
            <h1>{props.title}</h1>
        </div>
    )
}

export default anonyCom(PubHeader)