import { SET_LOGIN, OUT_LOGIN } from '../constants'

const initState = {
    user: {
        token: '',
        name: ''
    }
}

export default function login(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case SET_LOGIN:
            return data;
        case OUT_LOGIN:
            return initState;
        default:
            return preState;
    }
}