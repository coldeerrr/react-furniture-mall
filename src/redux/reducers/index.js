import { combineReducers } from 'redux'
import city from './city'
import search from './search';

export default combineReducers({
    // city: city的简写
    city, search
});