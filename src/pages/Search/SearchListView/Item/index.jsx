import React, { useState } from "react";
import './index.less'
import DefalutImg from "../../../../asserts/images/defalut.png"
import { loadImageAsync } from '../../../../utils/loadImg'
import { Link } from 'react-router-dom'

const Item = props => {
    const { houseType, img, price, rentType, title, id } = props.data;

    // const [loading, setLoading] = useState(false);
    const [currentImg, setCurrentImg] = useState(DefalutImg);

    // loadImageAsync(img).then(res => {
    //     // 执行异步后
    //     setCurrentImg(res.image.currentSrc);
    //     setLoading(res.loading);
    // })

    loadImageAsync(img).then(res => {
        setCurrentImg(res)
    }).catch(error => {
        console.log(error);
    })

    return (
        <div className="list-item">
            <Link to={`/details/${id}`}>
                {/* 先识别默认图, 异步监听图片是否加载完成 */}
                <img src={currentImg} alt="" />
                <div className="mask">
                    <div className="left">
                        <p>{title}</p>
                        <p>{houseType}</p>
                    </div>
                    <div className="right">
                        <div className="btn">{rentType}</div>
                        {/* 数据中的price为html结构, 需要解析 */}
                        <div dangerouslySetInnerHTML={{ __html: price + "元/月" }}></div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item