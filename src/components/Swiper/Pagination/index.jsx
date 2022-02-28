import React from "react";
import './style.less'

const Pagination = (props) => {
    
    const { length, currentIndex } = props
    // fill填充长度
    const arr = new Array(length).fill(1)
    
    return (
        <div className="swiper-pagination">
            <ul>
                {
                    arr.map((ele, index) => {
                        return <li className={currentIndex === index ? 'selected' : '' } key={index}></li>
                    })
                }
            </ul>
        </div>
    )
}

export default Pagination