import React from "react";
import {useNavigate} from 'react-router-dom'
import SearchInput from "../../../components/SearchInput";
import './index.less'

const SearchHeader = props => {
    const navigate = useNavigate();

    function goBack () {
        navigate(-1);
    }

    return (
        <div className="search-header clear-fix">
            <span onClick={goBack} className="back-icon float-left">
                <i className="icon-chevron-left"></i>
            </span>
            <div className="input-container">
                <i className="icon-search">
                    <SearchInput />
                </i>
            </div>
        </div>
    )
}

export default SearchHeader