import React, { useEffect, useRef, useState } from "react";
import './index.less'
import api from "../../../../api";

const Item = props => {
    const { username, data: { commentState, houseType, id, img, price, rentType, title } } = props;
    const [currentComment, setCurrentComment] = useState(0)
    const commentContent = useRef();

    useEffect(() => {
        setCurrentComment(commentState)
    }, [])

    function handleClick() {
        setCurrentComment(1);
    }

    function handleSubmit() {
        api.postOrderComment({
            id: id,
            username: username,
            content: commentContent.current.value
        }).then(res => {
            if (res.data.status === 200) {
                setCurrentComment(2);
            } else {
                setCurrentComment(0);
            }
        })
    }

    function handleCancel() {
        setCurrentComment(0);
    }


    return (
        <div className="order-item-container clear-fix">
            <div className="order-item-img float-left">
                <img src={img} alt="" />
            </div>

            <div className="order-item-comment float-right">
                {
                    currentComment === 0 ? <button className="btn" onClick={handleClick}>评价</button>
                        : currentComment === 1 ? ''
                            : <button className="btn unseleted-btn" disabled>已评价</button>
                }
            </div>
            <div className="order-item-content">
                <span>商户: {title}</span>
                <span>类型: {houseType}</span>
                <span>价格: {price}</span>
            </div>
            {
                currentComment === 1 ?
                    <div className="comment-text-container">
                        <textarea ref={commentContent} className="comment-text" style={{ width: "100%", height: '80px' }}></textarea>
                        <button onClick={handleSubmit} className="btn">提交</button>
                        <button onClick={handleCancel} className="btn unseleted-btn">取消</button>
                    </div>
                    : ''
            }
        </div>
    )
}

export default Item