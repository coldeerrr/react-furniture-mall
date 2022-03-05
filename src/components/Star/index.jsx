import React from "react";
import './index.less'

const Star = props => {
    let { num } = props
    if (num > 5) num = 5;

    return (
        <div className="star-container">
            {
                [1, 2, 3, 4, 5].map((star, index) => {
                    return (
                        num >= star
                            ?
                            <i key={index} className={'icon-star light'}></i>
                            :
                            <i key={index} className={'icon-star'}></i>
                    )
                })
            }
        </div>
    )
}

export default Star