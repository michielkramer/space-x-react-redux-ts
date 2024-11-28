import { AnyAction } from 'redux';
import actionTypes from '../constants/actionTypes';

type appState = {
    favourites: string[];
    isLoading: boolean;
};

const initialState: appState = {
    favourites: [],
    isLoading: false
};

function appReducer(state: appState = initialState, action: AnyAction): appState {
    switch(action.type) {
        case actionTypes.APP.SET_FAVOURITES: {
            return {
                ...state,
                favourites: action.payload
            };
        }
        default:
            return state;
    }
}

export default appReducer;
