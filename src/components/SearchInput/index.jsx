import React, { useState } from "react";
import './index.less'
import { useNavigate } from 'react-router-dom'

const SearchInput = () => {
    const [keywords, setKeywords] = useState('');

    const navigate = useNavigate();

    function handleKeyUp(e) {
        if (keywords.length > 0) {
            if (e.keyCode === 13) {
                navigate('/search/' + keywords);
            }
        }
    }

    function handleChange(e) {
        setKeywords(e.target.value);
    }
    return (
        <input type="text"
            className="search-input"
            onKeyUp={handleKeyUp}
            value={keywords}
            onChange={handleChange}
        />
    )
}

export default SearchInput