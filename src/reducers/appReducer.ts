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
    console.log('action', action);
    switch(action.type) {
        case actionTypes.APP.SET_IS_LOADING: {
            return {
                ...state,
                isLoading: action.payload
            };
        }
        case actionTypes.APP.SET_FAVOURITES: {
            return {
                ...state,
                favourites: action.payload
            };
        }
        default:
            return initialState;
    }
}

export default appReducer;
