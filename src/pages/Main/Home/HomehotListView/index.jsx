import React from "react";
import './index.less'

const HomehotView = (props) => {
    const { data, title, city } = props
    return (
        <div className="hotproduct">
            <h3>{title}</h3>
            <div className="hot-container">
                <ul className="clear-fix">
                    {
                        data.map((ele, index) => {
                            const { id, title, img, link } = ele;
                            return (
                                <li key={id}>
                                    <a href={link}>
                                        <img src={img} alt="" />
                                        <span>{city}{title}</span>
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default HomehotView