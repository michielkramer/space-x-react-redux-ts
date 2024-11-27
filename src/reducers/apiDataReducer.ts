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
                ...state,
                spaceXLaunches: action.payload
            };
        }
        case actionTypes.APP.UPDATE_API_DATA: {
            const index = state.spaceXLaunches.findIndex((i) => i.id === action.payload);
            state.spaceXLaunches[index].isFav = true;
            return {
                ...state,
                spaceXLaunches: [
                    ...state.spaceXLaunches
                ]
            };
        }
        default:
            return initialState;
    }
}

export default apiDataReducer;
