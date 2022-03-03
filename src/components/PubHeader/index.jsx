import React from "react";
import { useNavigate } from "react-router-dom";
import './index.less'

const PubHeader = (props) => {
    const navigate = useNavigate();

    function goBack () {
        navigate(-1);
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

export default PubHeader