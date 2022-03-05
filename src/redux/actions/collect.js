import { COLLECT, UNCOLLECT } from '../constants'

export const setCollect = data => ({
    type: COLLECT, data
});

export const removeCollect = data => ({
    type: UNCOLLECT, data
});