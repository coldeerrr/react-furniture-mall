import React from "react";
import './index.less'
import Item from "./Item";

const CommentView = props => {
    return (
        <ul className="comment-list">
            {
                props.comment.map((item, index) => {
                    return <Item key={index} data={item} />
                })
            }
        </ul>
    )
}

export default CommentView