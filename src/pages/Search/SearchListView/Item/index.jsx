import React from "react";
import './index.less'

const Item = props => {
    const {houseType, img, price, rentType, title} = props.data;
    return (
        <div className="list-item">
           <img src={img} alt="" />
           <div className="mask">
               <div className="left">
                   <p>{title}</p>
                   <p>{houseType}</p>
               </div>
               <div className="right">
                   <div className="btn">{rentType}</div>
                   {/* 数据中的price为html结构, 需要解析 */}
                   <div dangerouslySetInnerHTML={{ __html: price + "元/月"}}></div>
               </div>
           </div>
        </div>
    )
}

export default Item