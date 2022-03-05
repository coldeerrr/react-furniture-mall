import React from "react";
import Star from "../../../../components/Star";
import './index.less'

const Item = props => {
    const {username, star, comment} = props.data;
    return (
        <div className="comment-item">
            <h3>
                <i className="icon-user"></i>
                {username}
            </h3>
            <p>{comment}</p>
            <Star num={star}/>
        </div>
    )
}

export default Item