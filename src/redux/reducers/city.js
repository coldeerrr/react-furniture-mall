import { INIT_CITY, CHANGE_CITY } from '../constants'

const initState = { cityName: '北京' };

export default function city(preState = initState, action) {
    const { type, data } = action;
    
    switch (type) {
        case INIT_CITY:
            return data;
        case CHANGE_CITY:
            return data;
        default:
            return preState;
    }
}