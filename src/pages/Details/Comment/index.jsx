import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import CommentView from "../CommentView";
import api from '../../../api'
import LoadMore from '../../../components/LoadMore'

const Comment = () => {
    const [comment, setComment] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    const { id } = useParams();

    useEffect(http, [])

    function handleLoadMore() {
        http();
    }

    function http() {
        api.getComment({
            id: id
        }).then(res => {
            if (res.data.status === 200) {
                setComment(comment.concat(res.data.result.data))
                setHasMore(res.data.result.hasMore)
            }
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            {
                comment.length > 0 ? <CommentView comment={comment} /> : <div>等待数据加载...</div>
            }
            {
                hasMore ? <LoadMore onLoadMore={handleLoadMore} /> : <div>没有数据了...</div>
            }
        </div>
    )
}

export default Comment