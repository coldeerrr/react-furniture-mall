import { INIT_CITY, CHANGE_CITY } from '../constants'

export const initCity = data => ({
    type: INIT_CITY, data
});

export const ChangeCity = data => ({
    type: CHANGE_CITY, data
})