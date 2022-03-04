import { UPDATE_SEARCH } from '../constants'

const initState = { keywords: "" };

export default function search(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case UPDATE_SEARCH:
            return data;
        default:
            return preState;
    }
}