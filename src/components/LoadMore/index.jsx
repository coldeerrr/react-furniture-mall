// 实现上拉加载
import React, { useEffect, useState, useRef } from "react";
import './index.less'

// 逻辑步骤, 实现流程
// 1.监听滚动事件, 2.滚动高度+视口高度>=容器列表高度时加载
// getBoundingClientRect 动态获取元素距离顶部的距离
const LoadMore = props => {
    const more = useRef();

    const [loadTop, setLoadTop] = useState(10000);

    useEffect(() => {
        // 获取视口高度
        const winHeight = document.documentElement.clientHeight;
        // 防抖定时器
        let timer = null;
        // 监听滚动事件
        window.addEventListener("scroll", () => {
            // getBoundingClientRect
            if (more.current) {
                setLoadTop(more.current.getBoundingClientRect().top);
                if (timer) {
                    clearTimeout(timer);
                } else {
                    timer = setTimeout(() => {
                        // 执行次数过多, 在这发网络请求就会执行太多次, 服务器无法承受, 需要防抖, 一定时间内以最后一次为准
                        if (winHeight > loadTop) {
                            props.onLoadMore();
                        }
                    }, 300);
                }

            }
        })
        // 值会变化, 需要重新刷新
    }, [loadTop])

    return (
        <div ref={more} className="load">
            加载更多
        </div>
    )
}

export default LoadMore