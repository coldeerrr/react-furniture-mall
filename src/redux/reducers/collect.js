import { COLLECT, UNCOLLECT } from '../constants'
import findIndex from 'lodash/findIndex'

const initState = [];

export default function collect(preState = initState, action) {
    const {type, data} = action;
    switch (type) {
        case COLLECT:
            // 合并数组
            return [...preState, data];
        case UNCOLLECT:
            const currentIndex = findIndex(preState, item => item === data);
            // 去除当前项合并数组
            return [
                ...preState.slice(0, currentIndex),
                ...preState.slice(currentIndex + 1)
            ];
        default:
            return preState;
    }
}