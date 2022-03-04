import React, { useState, useEffect } from "react";
import './index.less'
import { useNavigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateSearch } from '../../redux/actions/search'

const SearchInput = props => {
    const [keywords, setKeywords] = useState('');

    const { keywords: reduxKeywords } = props.search;

    const params = useParams();

    const navigate = useNavigate();

    function handleKeyUp(e) {
        if (keywords.length > 0) {
            if (e.keyCode === 13) {
                navigate('/search/' + keywords);
                props.updateSearch({ keywords: keywords })
            }
        }
    }

    function handleChange(e) {
        setKeywords(e.target.value);
    }

    useEffect(() => {
        // 后退时redux也更新
        if (params.keywords) { 
            props.updateSearch({ keywords: params.keywords }) 
            // 后退到首页时为空
        } else {
            props.updateSearch({ keywords: '' }) 
        }
        // 输入框携带参数跳转
        setKeywords(reduxKeywords);
    }, [reduxKeywords, params.keywords])

    return (
        <input type="text"
            className="search-input"
            onKeyUp={handleKeyUp}
            value={keywords}
            onChange={handleChange}
        />
    )
}

export default connect(
    state => ({ search: state.search }),
    {
        updateSearch
    }
)(SearchInput)