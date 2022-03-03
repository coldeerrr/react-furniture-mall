// 做网络请求业务逻辑部分, View为视图组件
import React, { useState, useEffect } from "react";
import SearchListView from "../SearchListView";
import api from '../../../api';
import LoadMore from "../../../components/LoadMore";

const SearchList = props => {
    const [keywords, setKeywords] = useState([]);

    useEffect(() => {
        api.getSearch({
            keywords: props.keywords
        }).then(res => {
            if (res.data.status === 200) {
                setKeywords(res.data.result.data)
            }
        }).catch(error => {
            console.log(error);
        })
    }, [])

    return (
        <div>
            {
                keywords.length > 0 ? <SearchListView keywords={keywords}/> : <div>等待数据加载...</div>
            }
            <LoadMore />
            <div>load</div>
        </div>
    )
}

export default SearchList