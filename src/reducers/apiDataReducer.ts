import { AnyAction } from 'redux';
import { ListItem } from '../components/List';
import actionTypes from '../constants/actionTypes';

type apiDataState = {
    spaceXLaunches: ListItem[];
};

const initialState: apiDataState = {
    spaceXLaunches: []
};

function apiDataReducer(state: apiDataState = initialState, action: AnyAction): apiDataState {
    switch(action.type) {
        case actionTypes.APP.GET_API_DATA: {
            return {
                spaceXLaunches: action.payload
            };
        }
        case actionTypes.APP.UPDATE_API_DATA: {
            return {
                spaceXLaunches: action.payload
            };
        }
        default:
            return state;
    }
}

export default apiDataReducer;
