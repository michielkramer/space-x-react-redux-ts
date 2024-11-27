import { combineReducers } from 'redux';
import apiDataReducer from './apiDataReducer';
import appReducer from './appReducer';

const rootReducer = combineReducers({
    appData: appReducer,
    apiData: apiDataReducer
});

export default rootReducer;