import { SET_LOGIN, OUT_LOGIN } from '../constants'

export const setLogin = data => ({
    type: SET_LOGIN, data
});

export const outLogin = () => ({
    type: OUT_LOGIN
})