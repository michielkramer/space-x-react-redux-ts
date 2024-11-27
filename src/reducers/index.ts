import { combineReducers } from 'redux';
import apiDataReducer from './apiDataReducer';

const rootReducer = combineReducers({
    apiData: apiDataReducer
});

export default rootReducer;