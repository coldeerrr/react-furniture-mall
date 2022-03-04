// 做网络请求业务逻辑部分, View为视图组件
import React, { useState, useEffect } from "react";
import SearchListView from "../SearchListView";
import api from '../../../api';
import LoadMore from "../../../components/LoadMore";

const SearchList = props => {
    const [keywords, setKeywords] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        http();

        // 卸载组件时执行的函数, 防止内存泄漏
        return () => {
            setKeywords([]);
            setHasMore(false);
        }
    }, [props.keywords])  // 每次搜索框关键词变化都会触发


    function handleLoadMore() {
        http();
    }

    // 提取发送网络请求的逻辑
    function http() {
        api.getSearch({
            keywords: props.keywords
        }).then(res => {
            if (res.data.status === 200) {
                // 合并多次加载数据的结果
                setKeywords(keywords.concat(res.data.result.data));
                setHasMore(res.data.result.hasMore);
            }
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            {
                keywords.length > 0 ? <SearchListView keywords={keywords} /> : <div>等待数据加载...</div>
            }
            {
                hasMore ? <LoadMore onLoadMore={handleLoadMore} /> : <div>没有数据了...</div>
            }
        </div>
    )
}

export default SearchList