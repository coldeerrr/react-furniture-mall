import { combineReducers } from 'redux'
import city from './city'
import search from './search';
import login from './login';
import collect from './collect';

export default combineReducers({
    // city: city的简写
    city, 
    search, 
    login,
    collect,
});